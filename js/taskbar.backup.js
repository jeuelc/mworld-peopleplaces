/* i-C-a */

$('#tblink1').swipe( { 
  swipeDown:function(event, direction, distance, duration, fingerCount){
      $('#taskbar1').animate({ top: "0px" }, 1000 );
      $('#tblink1').animate({ top: "100px" }, 1000 );
  }, 
  allowPageScroll:"auto"
}); 

// $('#tblink1').on('click', function() {
  // $('#taskbar1').animate({ top: "0px" }, 800 );
  // $('#tblink1').animate({ top: "100px" }, 800 );
// } );


$('#tblink1').on('tap', function() {
  $('#taskbar1').animate({ top: "-100px" }, 800 );
  $('#tblink1').animate({ top: "0px" }, 800 );
} );

$('#cpbtn').on('tap', function() { $.mobile.changePage("controlpanel.html", {transition: "slide"}); });

$('#tblink2').swipe( { 
  swipeDown:function(event, direction, distance, duration, fingerCount){
      $('#taskbar2').animate({ top: "0px" }, 1000 );
      $('#tblink2').animate({ top: "100px" }, 1000 );
  }, 
  allowPageScroll:"auto"
}); 

$('#tblink2').on('click', function() {
  $('#taskbar2').animate({ top: "-100px" }, 800 );
  $('#tblink2').animate({ top: "0px" }, 800 );
} );

$('#tblink2').on('tap', function() {
  $('#taskbar2').animate({ top: "-100px" }, 800 );
  $('#tblink2').animate({ top: "0px" }, 800 );
} );

/*************/
$('#tblink3').swipe( { 
  swipeDown:function(event, direction, distance, duration, fingerCount){
      $('#taskbar3').animate({ top: "0px" }, 1000 );
      $('#tblink3').animate({ top: "100px" }, 1000 );
  }, 
  allowPageScroll:"auto"
}); 

$('#tblink3').on('click', function() {
  $('#taskbar3').animate({ top: "-100px" }, 800 );
  $('#tblink3').animate({ top: "0px" }, 800 );
} );

$('#tblink3').on('tap', function() {
  $('#taskbar3').animate({ top: "-100px" }, 800 );
  $('#tblink3').animate({ top: "0px" }, 800 );
} );

/****************/
$('#tblink4').swipe( { 
  swipeDown:function(event, direction, distance, duration, fingerCount){
      $('#taskbar4').animate({ top: "0px" }, 1000 );
      $('#tblink4').animate({ top: "100px" }, 1000 );
  }, 
  allowPageScroll:"auto"
}); 

$('#tblink4').on('click', function() {
  $('#taskbar4').animate({ top: "-100px" }, 800 );
  $('#tblink4').animate({ top: "0px" }, 800 );
} );

$('#tblink4').on('tap', function() {
  $('#taskbar4').animate({ top: "-100px" }, 800 );
  $('#tblink4').animate({ top: "0px" }, 800 );
} );
/*****************/
$('#tblink5').swipe( { 
  swipeDown:function(event, direction, distance, duration, fingerCount){
      $('#taskbar5').animate({ top: "0px" }, 1000 );
      $('#tblink5').animate({ top: "100px" }, 1000 );
  }, 
  allowPageScroll:"auto"
}); 

$('#tblink5').on('click', function() {
  $('#taskbar5').animate({ top: "-100px" }, 800 );
  $('#tblink5').animate({ top: "0px" }, 800 );
} );

$('#tblink5').on('tap', function() {
  $('#taskbar5').animate({ top: "-100px" }, 800 );
  $('#tblink5').animate({ top: "0px" }, 800 );
} );