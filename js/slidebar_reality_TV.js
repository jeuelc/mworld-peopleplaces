/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-modernworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundrealityTV.pause(); bgsoundrealityTV.currentTime = 0; 
});

$('.menubtnrealityTV').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnrealityTV').css('background-position', '0px -90px');
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

$('.homebtnrealityTV').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnrealityTV').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnrealityTV').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnrealityTV').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnrealityTV').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnrealityTV').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnrealityTV').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnrealityTV').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnrealityTV').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnrealityTV').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnrealityTV').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnrealityTV').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.brealityTV').position();
  if (botsposition.left == 1024) {
    $('.brealityTV').css({'opacity':1});
    $('.plrealityTV').css({'opacity':1});
    $('.frealityTV').css({'opacity':1});
    $('.brealityTV').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plrealityTV').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.frealityTV').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.brealityTV').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.brealityTV').css({'left':'1024px'}); });
    $('.plrealityTV').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plrealityTV').css({'left':'1024px'}); });
    $('.frealityTV').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.frealityTV').css({'left':'1024px'}); });
  }
});

$('.rwrealityTV').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwrealityTV').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsrealityTV').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsrealityTV').css('background-position-y', '-73px');
    }, 300);
});

$('.fwrealityTV').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwrealityTV').css('background-position-y', '-73px');
    }, 300);
});