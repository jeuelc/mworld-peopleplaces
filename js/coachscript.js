$(function() {
  var kidid = 1;
  $('.coachcontainer').html('<div id="avatarbody" style="background-attachment: scroll; background-color: transparent; width: 200px; height: 320px; top: 6px; position: relative; background-position: 0px 50%; background-repeat: no-repeat no-repeat; "><div id="avatarhair" style="background-image: none; width: 198px; height: 122px; top: 29px; left: 12px; position: relative; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; " ></div><div id="avatarhair-joe" style="width: 192px; height: 188px; position: relative; left: 21px; top: -6px; background-image: none; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatarhair-jane" style="width: 192px; height: 122px; position: relative; left: 13px; top: 65px; background-image: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatareyes" style="width: 192px; height: 122px; left: 18px; top: -52px; background-image: none; position: relative; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatareyes-joe" style="width: 192px; height: 122px; position: relative; left: 9px; top: -137px; background-image: none; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatareyes-jane" style="width: 192px; height: 122px; position: relative; left: 10px; top: -49px; background-image: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatareyes-albert" style="width: 192px; height: 122px; position: relative; left: 3px; top: 66px; background-image: none; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatareyes-may" style="width: 192px; height: 122px; position: relative; left: 8px; top: 74px; background-image: none; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatareyes-mary" style="width: 192px; height: 122px; position: relative; left: 8px; top: 74px; background-image: none; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatarfh" style="background-image: none; top: -146px; left: 13px; width: 198px; height: 122px; position: relative; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; " ></div><div id="avatargadget-jane" style="width: 192px; height: 122px; position: relative; left: 33px; top: -113px; background-image: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatarcoat" style="width: 198px; height: 122px; left: 22px; top: -231px; background-image: none; position: relative; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avatarclothes-mary" style="width: 198px; height: 122px; position: relative; background-image: none; left: 17px; top: 37px; display: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div><div id="avataracc-jane" style="width: 192px; height: 122px; position: relative; left: 11px; top: -222px; background-image: none; background-position: 50% 50%; background-repeat: no-repeat no-repeat; "></div></div>');
  $('.coachcontainer').css('z-index','10');
  var ginikanan = $('.coachcontainer').parent().attr('id');
  //setTimeout(loadCoachAccessories(kidid), 2000);
  if($('.coachcontainer').length) {
    setTimeout(loadCoachAccessories(kidid), 2000);
  }
});

function mworldLoadCoach(kidid) {
  var result = "";
  $.ajax({
    type:"POST",
    url:resourceLoc+"avataropen.php",
    async: false,
    data: {kidid:kidid}
  }).done(function(coachstate) {
    if(coachstate != '') { result = coachstate; }  
  });
  return result;
}

function loadCoachAccessories(kidid) {
//alert("mao ni return "+avatarcontent);
    mayhg = mayew = mayfh = maygadget = mayclothing = maybag = 0;
    maryhg = maryew = maryfh = marygadget = maryclothing = marybag = 0;
    janehg = janeew = janefh = janegadget = janeclothing = janebag = 0;
    joehg = joeew = joefh = joegadget = joeclothing = joebag = 0;
    alberthg = albertew = albertfh = albertgadget = albertclothing = albertbag = 0;
    ricohg = ricoew = ricofh = ricogadget = ricoclothing = ricobag = 0;
    var avatarcontent = mworldLoadCoach(kidid);
    var avatarstate = avatarcontent.split(";");
    
    coachnum = avatarstate[0]; 
    switch(coachnum) {
      case "1":
        ricohg = avatarstate[1]; 
        ricoew = avatarstate[2]; 
        ricofh = avatarstate[3]; 
        ricogadget = avatarstate[4]; 
        ricoclothing = avatarstate[5]; 
        ricobag = avatarstate[6]; 
        $('#avatarbody').css('background-image', 'url("css/images/avatar/ricosprites.png")');
        $('#avatarhair').css('display', 'block');
        $('#avatareyes').css('display', 'block');
        $('#avatarfh').css('display', 'block');
        $('#avatarcoat').css('display', 'block');
        $('#avatarhair-jane').css('display', 'none');
        $('#avatarhair-joe').css('display', 'none');
        $('#avatareyes-jane').css('display', 'none');
        $('#avatareyes-joe').css('display', 'none');
        $('#avatareyes-albert').css('display', 'none');
        $('#avatareyes-may').css('display', 'none');
        $('#avatareyes-mary').css('display', 'none');
        $('#avatargadget-jane').css('display', 'none');
        $('#avatarclothes-mary').css('display', 'none');
        $('#avataracc-jane').css('display', 'none');
        $('#noseopts').fadeIn(100);
        $('#mouthopts').fadeIn(100);
        break;
      case "2": 
        janehg = avatarstate[1]; 
        janeew = avatarstate[2]; 
        janefh = avatarstate[3]; 
        janegadget = avatarstate[4]; 
        janeclothing = avatarstate[5]; 
        janebag = avatarstate[6]; 
        $('#avatarbody').css('background-image', 'url("css/images/avatar/joesprites.png")');
        $('#avatarhair').css('display', 'none');
        $('#avatareyes').css('display', 'none');
        $('#avatarfh').css('display', 'none');
        $('#avatarcoat').css('display', 'block');
        $('#avatarhair-jane').css('display', 'none');
        $('#avatarhair-joe').css('display', 'block');
        $('#avatareyes-jane').css('display', 'none');
        $('#avatareyes-joe').css('display', 'block');
        $('#avatareyes-albert').css('display', 'none');
        $('#avatareyes-may').css('display', 'none');
        $('#avatareyes-mary').css('display', 'none');
        $('#avatargadget-jane').css('display', 'none');
        $('#avatarclothes-mary').css('display', 'none');
        $('#avataracc-jane').css('display', 'none');
        $('#gadgetsopts').fadeIn(100);
        $('#accopts').fadeIn(100);
        break;
      case "3": 
        joehg = avatarstate[1]; 
        joeew = avatarstate[2]; 
        joefh = avatarstate[3]; 
        joegadget = avatarstate[4]; 
        joeclothing = avatarstate[5]; 
        joebag = avatarstate[6]; 
        $('#avatarbody').css('background-image', 'url("css/images/avatar/janesprites.png")');
        $('#avatarhair').css('display', 'none');
        $('#avatareyes').css('display', 'none');
        $('#avatarfh').css('display', 'none');
        $('#avatarcoat').css('display', 'none');
        $('#avatarhair-jane').css('display', 'block');
        $('#avatarhair-joe').css('display', 'none');
        $('#avatareyes-jane').css('display', 'block');
        $('#avatareyes-joe').css('display', 'none');
        $('#avatareyes-albert').css('display', 'none');
        $('#avatareyes-may').css('display', 'none');
        $('#avatareyes-mary').css('display', 'none');
        $('#avatargadget-jane').css('display', 'block');
        $('#avatarclothes-mary').css('display', 'none');
        $('#avataracc-jane').css('display', 'block');
        break;
      case "4": 
        alberthg = avatarstate[1]; 
        albertew = avatarstate[2]; 
        albertfh = avatarstate[3]; 
        albertgadget = avatarstate[4]; 
        albertclothing = avatarstate[5]; 
        albertbag = avatarstate[6]; 
        $('#avatarbody').css('background-image', 'url("css/images/avatar/albertsprites.png")');
        $('#avatarhair').css('display', 'none');
        $('#avatareyes').css('display', 'none');
        $('#avatarfh').css('display', 'none');
        $('#avatarcoat').css('display', 'none');
        $('#avatarhair-jane').css('display', 'none');
        $('#avatarhair-joe').css('display', 'none');
        $('#avatareyes-jane').css('display', 'none');
        $('#avatareyes-joe').css('display', 'none');
        $('#avatareyes-albert').css('display', 'block');
        $('#avatareyes-may').css('display', 'none');
        $('#avatareyes-mary').css('display', 'none');
        $('#avatargadget-jane').css('display', 'none');
        $('#avatarclothes-mary').css('display', 'none');
        $('#avataracc-jane').css('display', 'none');
        break;
      case "5": 
        mayhg = avatarstate[1]; 
        mayew = avatarstate[2]; 
        mayfh = avatarstate[3]; 
        maygadget = avatarstate[4]; 
        mayclothing = avatarstate[5]; 
        maybag = avatarstate[6]; 
        $('#avatarbody').css('background-image', 'url("css/images/avatar/maysprites.png")');
        $('#avatarhair').css('display', 'none');
        $('#avatareyes').css('display', 'none');
        $('#avatarfh').css('display', 'none');
        $('#avatarcoat').css('display', 'none');
        $('#avatarhair-jane').css('display', 'none');
        $('#avatarhair-joe').css('display', 'none');
        $('#avatareyes-jane').css('display', 'none');
        $('#avatareyes-joe').css('display', 'none');
        $('#avatareyes-albert').css('display', 'none');
        $('#avatareyes-may').css('display', 'block');
        $('#avatareyes-mary').css('display', 'none');
        $('#avatargadget-jane').css('display', 'none');
        $('#avatarclothes-mary').css('display', 'none');
        $('#avataracc-jane').css('display', 'none');
        break;
      case "6": 
        maryhg = avatarstate[1]; 
        maryew = avatarstate[2]; 
        maryfh = avatarstate[3]; 
        marygadget = avatarstate[4]; 
        maryclothing = avatarstate[5]; 
        maybag = avatarstate[6]; 
        $('#avatarbody').css('background-image', 'url("css/images/avatar/marysprites.png")');
        $('#avatarhair').css('display', 'none');
        $('#avatareyes').css('display', 'none');
        $('#avatarfh').css('display', 'none');
        $('#avatarcoat').css('display', 'none');
        $('#avatarhair-jane').css('display', 'none');
        $('#avatarhair-joe').css('display', 'none');
        $('#avatareyes-jane').css('display', 'none');
        $('#avatareyes-joe').css('display', 'none');
        $('#avatareyes-albert').css('display', 'none');
        $('#avatareyes-may').css('display', 'none');
        $('#avatareyes-mary').css('display', 'block');
        $('#avatargadget-jane').css('display', 'none');
        $('#avatarclothes-mary').css('display', 'block');
        $('#avataracc-jane').css('display', 'none');
        $('#mouthopts').fadeIn(100);
        break;
    }
    
    switch(ricohg) {
      case "0":
        $('#avatarhair').css('background-image', 'none');
        break;
      case "1":
        $('#avatarhair').css('background-image', 'url("css/images/avatar/hat.png")');
    }
    
    switch(joehg) {
      case "0":
        $('#avatarhair-joe').css('background-image', 'none');
        break;
      case "1":
        $('#avatarhair-joe').css('background-image', 'url("css/images/avatar/hat-joe.png")');
    }
    
    switch(janehg) {
      case "0":
        $('#avatarhair-jane').css('background-image', 'none');
        break;
      case "1":
        $('#avatarhair-jane').css('background-image', 'url("css/images/avatar/headphone-jane.png")');
    }
    
    switch(ricoew) {
      case "0":
        $('#avatareyes').css('background-image', 'none');
        break;
      case "1":
        $('#avatareyes').css('background-image', 'url("css/images/avatar/darksg.png")');
        break;
      case "2":
        $('#avatareyes').css('background-image', 'url("css/images/avatar/yellowsg.png")');
        break;
    }
    
    switch(joeew) {
      case "0":
        $('#avatareyes-joe').css('background-image', 'none');
        break;
      case "1" :
        $('#avatareyes-joe').css('background-image', 'url("css/images/avatar/glasses-joe.png")');
        break;
      case "2" :
        $('#avatareyes-joe').css('background-image', 'url("css/images/avatar/shades-joe.png")');
        break;
    }
    
    switch(janeew) {
      case "0":
        $('#avatareyes-jane').css('background-image', 'none');
        break;
      case "1":
        $('#avatareyes-jane').css('background-image', 'url("css/images/avatar/shades-jane.png")');
        break;
      case "2":
        $('#avatareyes-jane').css('background-image', 'url("css/images/avatar/gglass-jane.png")');
        break;
    }
    
    switch(albertew) {
      case "0":
        $('#avatareyes-albert').css('background-image', 'none');
        break;
      case "1":
        $('#avatareyes-albert').css('background-image', 'url("css/images/avatar/glasses-albert.png")');
        break;
      case "2":
        $('#avatareyes-albert').css('background-image', 'url("css/images/avatar/mg-albert.png")');
        break;
    }
    
    switch(mayew) {
      case "0":
        $('#avatareyes-may').css('background-image', 'none');
        break;
      case "1":
        $('#avatareyes-may').css('background-image', 'url("css/images/avatar/glasses-may.png")');
        break;
      case "2":
        $('#avatareyes-may').css('background-image', 'url("css/images/avatar/shades-may.png")');
        break;
    }
    
    switch(maryew) {
      case "0":
        $('#avatareyes-mary').css('background-image', 'none');
        break;
      case "1":
        $('#avatareyes-mary').css('background-image', 'url("css/images/avatar/glasses-mary.png")');
        break;
      case "2":
        $('#avatareyes-mary').css('background-image', 'url("css/images/avatar/shades-mary.png")');
        break;
    }
    
    switch(ricofh) {
      case "0":
        $('#avatarfh').css('background-image', 'none');
        break;
      case "1":
        $('#avatarfh').css('background-image', 'url("css/images/avatar/goatee.png")');
        $('#avatarfh').css('top', '-131px');
        $('#avatarfh').css('left', '14px');
        break;
      case "2":
        $('#avatarfh').css('background-image', 'url("css/images/avatar/beard.png")');
        $('#avatarfh').css('top', '-146px');
        $('#avatarfh').css('left', '13px');
        break;
    }
    
    switch(janegadget) {
      case "0":
        $('#avatargadget-jane').css('background-image', 'none');
        break;
      case "1":
        $('#avatargadget-jane').css('background-image', 'url("css/images/avatar/tab-jane.png")');
        break;
    }
    
    switch(ricoclothing) {
      case "0":
        $('#avatarcoat').css('background-image', 'none');
        break;
      case "1":
        $('#avatarcoat').css('background-image', 'url(css/images/avatar/jacket.png)');
        break;
    }
    
    switch(maryclothing) {
      case "0":
        $('#avatarclothes-mary').css('background-image', 'none');
        break;
      case "1":
        $('#avatarclothes-mary').css('background-image', 'url(css/images/avatar/apron-mary.png)');
        break;
      case "2":
        $('#avatarclothes-mary').css('background-image', 'url(css/images/avatar/wapron-mary.png)');
        break;
    }
    
    switch(janebag) {
      case "0":
        $('#avataracc-jane').css('background-image', 'none');
        break;
      case "1":
        $('#avataracc-jane').css('background-image', 'url(css/images/avatar/bag-jane.png)');
        break;
    }
  }