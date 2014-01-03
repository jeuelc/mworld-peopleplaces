/* i-C-a */

$('.cplink').swipe( { 
  swipeDown:function(event, direction, distance, duration, fingerCount){
    if(distance >= 30) {
      $.mobile.changePage("controlpanel.html",  {
          transition: "slidedown"
       });
    }
  }, 
  allowPageScroll:"auto"
}); 

$('#cpclose').swipe( { 
  swipeUp:function(event, direction, distance, duration, fingerCount){
    if(distance >= 30) {
      history.back();
    }
  }, 
  allowPageScroll:"auto"
}); 

// $('.cplink').on('tap', function() {
  // $.mobile.changePage("controlpanel.html",  {
          // transition: "slidedown"
        // });
// }); 

// $('#cpclose').on('tap', function() {
  // history.back();
// }); 