/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-modernworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundsuperfasttrains.pause(); bgsoundsuperfasttrains.currentTime = 0; 
});

$('.menubtntrains').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtntrains').css('background-position', '0px -90px');
    }, 300);
  var housingpos = $('.menuhousing').position();
  if(housingpos.left == -234) {
    $('.menuhousing').animate({'left':'-334px','opacity':0}, 500, "easeInBack", function() { $('.menuhousing').css({'left':'-660px'}); });
    $('.homebtnholder').animate({'left':'3px','opacity':0}, 500, "easeInBack", function() { $('.homebtnholder').css({'left':'-93px'}); });
    $('.mpbtnholder').animate({'left':'80px','opacity':0}, 500, "easeInBack", function() { $('.mpbtnholder').css({'left':'-93px'}); });
    $('.cpbtnholder').animate({'left':'153px','opacity':0}, 500, "easeInBack", function() { $('.cpbtnholder').css({'left':'-93px'}); });
    $('.infobtnholder').animate({'left':'222px','opacity':0}, 500, "easeInBack", function() { $('.infobtnholder').css({'left':'-93px'}); });
    $('.credsbtnholder').animate({'left':'288px','opacity':0}, 500, "easeInBack", function() { $('.credsbtnholder').css({'left':'-93px'}); });
  } else {
    $('.menuhousing').css({'opacity':1});
    $('.credsbtnholder').css({'opacity':1});
    $('.infobtnholder').css({'opacity':1});
    $('.cpbtnholder').css({'opacity':1});
    $('.mpbtnholder').css({'opacity':1});
    $('.homebtnholder').css({'opacity':1});
    $('.menuhousing').animate({'left':'-234px'}, 1000, "easeInOutBack");
    $('.credsbtnholder').animate({'left':'368px'}, 1000, "easeInOutBack");
    $('.infobtnholder').animate({'left':'302px'}, 1100, "easeInOutBack");
    $('.cpbtnholder').animate({'left':'233px'}, 1200, "easeInOutBack");
    $('.mpbtnholder').animate({'left':'160px'}, 1300, "easeInOutBack");
    $('.homebtnholder').animate({'left':'83px'}, 1400, "easeInOutBack");
  }
});

$('.homebtntrains').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtntrains').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtntrains').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtntrains').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtntrains').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtntrains').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtntrains').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtntrains').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtntrains').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtntrains').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtntrains').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtntrains').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.btrains').position();
  if (botsposition.left == 1024) {
    $('.btrains').css({'opacity':1});
    $('.pltrains').css({'opacity':1});
    $('.ftrains').css({'opacity':1});
    $('.btrains').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.pltrains').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.ftrains').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.btrains').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.btrains').css({'left':'1024px'}); });
    $('.pltrains').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.pltrains').css({'left':'1024px'}); });
    $('.ftrains').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.ftrains').css({'left':'1024px'}); });
  }
});

$('.rwtrains').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwtrains').css('background-position-y', '-73px');
    }, 300);
});

$('.plpstrains').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpstrains').css('background-position-y', '-73px');
    }, 300);
});

$('.fwtrains').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwtrains').css('background-position-y', '-73px');
    }, 300);
});