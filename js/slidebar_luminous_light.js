/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-naturalworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundluminous.pause(); bgsoundluminous.currentTime = 0; 
});

$('.menubtnluminous').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnluminous').css('background-position', '0px -90px');
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

$('.homebtnluminous').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnluminous').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnluminous').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnluminous').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnluminous').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnluminous').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnluminous').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnluminous').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnluminous').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnluminous').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnluminous').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnluminous').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bluminous').position();
  if (botsposition.left == 1024) {
    $('.bluminous').css({'opacity':1});
    $('.plluminous').css({'opacity':1});
    $('.fluminous').css({'opacity':1});
    $('.bluminous').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plluminous').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fluminous').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bluminous').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bluminous').css({'left':'1024px'}); });
    $('.plluminous').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plluminous').css({'left':'1024px'}); });
    $('.fluminous').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fluminous').css({'left':'1024px'}); });
  }
});

$('.rwluminous').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwluminous').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsluminous').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsluminous').css('background-position-y', '-73px');
    }, 300);
});

$('.fwluminous').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwluminous').css('background-position-y', '-73px');
    }, 300);
});