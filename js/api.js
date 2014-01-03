// i-C-a

var resourceLoc = "http://ec2-54-252-221-24.ap-southeast-2.compute.amazonaws.com/ghost/";

function mworldLogin(username, password){
  var result = 0;
  $.ajax({
    type:"POST",
    url:resourceLoc+"login.php",
    async: false,
    data: {usr:username, psw:password}
  }).done(function(kidid) {
    if(kidid > 0) { result = kidid; }  
  });
  
  return result;
}

function mworldSaveCoach(kidid, coachStatus) {
  $.ajax({
    type:"POST",
    url:resourceLoc+"loadcoach.php",
    async: false,
    data: {kidid:kidid, coach:coachStatus}
  }).done();
}

function mworldPageVisit(kidid, pageid) {
  //alert("mao ni kidid: "+kidid+"; mao ni page: "+pageid);
  $.ajax({
    type:"POST",
    url:resourceLoc+"pagevisit.php",
    async: false,
    data: {kidid:kidid, pagename:pageid}
  }).done(function(coachaction) {
    if(coachaction > 0) {
      //alert("na-preserve ang kidid: "+kidid);
      //alert("this is coach action "+coachaction);
      switch (coachaction) {
        case "1":
          //alert("The coach says 'Hi'");
          setTimeout(function() {
              $('.coachcontainer').animate({'left':'750px'}, 1500);
            }, 2000);
          $('.coachcontainer').on('tap', function() {
            $('.coachcontainer').animate({'left':'-225px'}, 1500);
          });
          break;
        case "2":
          // $( "div" ).on( "pageshow", function( event, ui ) {
            // alert( "This page was just hidden: " + ui.prevPage );
          // });
           
          // $( "div" ).on( "pagehide", function( event, ui ) {
            // alert( "This page was just shown: " + ui.nextPage );
          // });
          
            $('#bhgo > .coachcontainer').css({'top':'300px'});
            setTimeout(function() {
                $('.coachcontainer').animate({'left':'200px'}, 800);
                navigator.notification.alert('try this game', function(){}, 'Coach', 'ok');
              }, 2000);
          
          $('.coachcontainer').on('tap', function() {
            $.mobile.changePage("game-bh1.html", {transition: "flip"});
          });
          break;
        case "3":
          alert("You are now a master of this page. You are the best");
          break;
          
      }
    }
  });
}

function mworldPlayAudio(kidid, audioId) {
  $.ajax({
    type:"POST",
    url:resourceLoc+"narrations.php",
    async: false,
    data: {kidid:kidid, audioid:audioId}
  }).done();
}

function mworldViewMedia(kidid, mediaId) {
  $.ajax({
    type:"POST",
    url:resourceLoc+"mediaviews.php",
    async: false,
    data: {kidid:kidid, medianame:mediaId}
  }).done();
}

function mworldMpoints(kidid, subject) {
  if(typeof(subject)==='undefined') subject = '';
  points = 0;
  $.ajax({
    type:"POST",
    url:resourceLoc+"getmpoints.php",
    async:false,
    data: {kidid:kidid, subject:subject}
  }).done(function(mpoints) {
    if(mpoints > 0) { points = mpoints;}
  });
  return points;
}

function mworldMpointsUsed(kidid, subject) {
  if(typeof(subject)==='undefined') subject = '';
  usedpoints = 0;
  $.ajax({
    type:"POST",
    url:resourceLoc+"getusedmpoints.php",
    async:false,
    data: {kidid:kidid, subject:subject}
  }).done(function(usedmpoints) {
    if(mpoints > 0) { usedpoints = usedmpoints;}
  });
  return usedpoints;
}

function mworldSaveQuiz(kidid, correct, quizid) {
  $.ajax({
    type:"POST",
    url:resourceLoc+"savequiz.php",
    async:false,
    data: {kidid:kidid, correct:correct, quizid:quizid}
  }).done();
}