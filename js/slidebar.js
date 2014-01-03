/* i-C-a */
$('.menubtn').on('tap', function() {
  var housingpos = $('.menuhousing').position();
  if(housingpos.left == -234) {
    $('.menuhousing').animate({'left':'-334px','opacity':0}, 500, "easeInBack", function() { $('.menuhousing').css({'left':'-660px'}); });
    $('.homebtnholder').animate({'left':'268px','opacity':0}, 500, "easeInBack", function() { $('.homebtnholder').css({'left':'-93px'}); });
    $('.cpbtnholder').animate({'left':'184px','opacity':0}, 500, "easeInBack", function() { $('.cpbtnholder').css({'left':'-93px'}); });
    $('.buildbtnholder').animate({'left':'88px','opacity':0}, 500, "easeInBack", function() { $('.buildbtnholder').css({'left':'-93px'}); });
    $('.mpbtnholder').animate({'left':'4px','opacity':0}, 500, "easeInBack", function() { $('.mpbtnholder').css({'left':'-93px'}); });
    
  } else {
    $('.menuhousing').css({'opacity':1});
    $('.homebtnholder').css({'opacity':1});
    $('.cpbtnholder').css({'opacity':1});
    $('.buildbtnholder').css({'opacity':1});
    $('.mpbtnholder').css({'opacity':1});
    $('.menuhousing').animate({'left':'-234px'}, 1000, "easeInOutBack");
    $('.homebtnholder').animate({'left':'328px'}, 1500, "easeInOutBack");
    $('.cpbtnholder').animate({'left':'244px'}, 1600, "easeInOutBack");
    $('.buildbtnholder').animate({'left':'148px'}, 1700, "easeInOutBack");
    $('.mpbtnholder').animate({'left':'64px'}, 1800, "easeInOutBack");
  }
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-ac-greece.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); agsoundbg.pause(); agsoundbg.currentTime = 0; 
});