/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-humanbody.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundsleeps.pause(); bgsoundsleeps.currentTime = 0; 
});

$('.menubtnsleeps').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnsleeps').css('background-position', '0px -90px');
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

$('.homebtnsleeps').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnsleeps').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnsleeps').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnsleeps').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnsleeps').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnsleeps').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnsleeps').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnsleeps').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnsleeps').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnsleeps').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnsleeps').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnsleeps').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bsleeps').position();
  if (botsposition.left == 1024) {
    $('.bsleeps').css({'opacity':1});
    $('.plsleeps').css({'opacity':1});
    $('.fsleeps').css({'opacity':1});
    $('.bsleeps').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plsleeps').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fsleeps').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bsleeps').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bsleeps').css({'left':'1024px'}); });
    $('.plsleeps').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plsleeps').css({'left':'1024px'}); });
    $('.fsleeps').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fsleeps').css({'left':'1024px'}); });
  }
});

$('.rwsleeps').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwsleeps').css('background-position-y', '-73px');
    }, 300);
});

$('.plpssleeps').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpssleeps').css('background-position-y', '-73px');
    }, 300);
});

$('.fwsleeps').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwsleeps').css('background-position-y', '-73px');
    }, 300);
});