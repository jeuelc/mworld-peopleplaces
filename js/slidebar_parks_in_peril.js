/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-modernworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundParksInPeril.pause(); bgsoundParksInPeril.currentTime = 0; 
});

$('.menubtnparksperil').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnparksperil').css('background-position', '0px -90px');
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

$('.homebtnparksperil').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnparksperil').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnparksperil').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnparksperil').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnparksperil').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnparksperil').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnparksperil').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnparksperil').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnparksperil').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnparksperil').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnparksperil').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnparksperil').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bparksperil').position();
  if (botsposition.left == 1024) {
    $('.bparksperil').css({'opacity':1});
    $('.plparksperil').css({'opacity':1});
    $('.fparksperil').css({'opacity':1});
    $('.bparksperil').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plparksperil').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fparksperil').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bparksperil').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bparksperil').css({'left':'1024px'}); });
    $('.plparksperil').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plparksperil').css({'left':'1024px'}); });
    $('.fparksperil').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fparksperil').css({'left':'1024px'}); });
  }
});

$('.rwparksperil').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwparksperil').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsparksperil').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsparksperil').css('background-position-y', '-73px');
    }, 300);
});

$('.fwparksperil').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwparksperil').css('background-position-y', '-73px');
    }, 300);
});