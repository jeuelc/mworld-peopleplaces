/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-modernworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundskelton.pause(); bgsoundskelton.currentTime = 0; 
});

$('.menubtnskelton').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnskelton').css('background-position', '0px -90px');
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

$('.homebtnskelton').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnskelton').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnskelton').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnskelton').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnskelton').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnskelton').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnskelton').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnskelton').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnskelton').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnskelton').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnskelton').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnskelton').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bskelton').position();
  if (botsposition.left == 1024) {
    $('.bskelton').css({'opacity':1});
    $('.plskelton').css({'opacity':1});
    $('.fskelton').css({'opacity':1});
    $('.bskelton').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plskelton').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fskelton').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bskelton').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bskelton').css({'left':'1024px'}); });
    $('.plskelton').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plskelton').css({'left':'1024px'}); });
    $('.fskelton').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fskelton').css({'left':'1024px'}); });
  }
});

$('.rwskelton').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwskelton').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsskelton').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsskelton').css('background-position-y', '-73px');
    }, 300);
});

$('.fwskelton').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwskelton').css('background-position-y', '-73px');
    }, 300);
});