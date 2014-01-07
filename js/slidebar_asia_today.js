/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-modernworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundAsiaToday.pause(); bgsoundAsiaToday.currentTime = 0; 
});

$('.menubtnAsia').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnAsia').css('background-position', '0px -90px');
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

$('.homebtnAsia').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnAsia').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnAsia').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnAsia').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnAsia').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnAsia').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnAsia').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnAsia').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnAsia').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnAsia').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnAsia').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnAsia').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bAsia').position();
  if (botsposition.left == 1024) {
    $('.bAsia').css({'opacity':1});
    $('.plAsia').css({'opacity':1});
    $('.fAsia').css({'opacity':1});
    $('.bAsia').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plAsia').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fAsia').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bAsia').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bAsia').css({'left':'1024px'}); });
    $('.plAsia').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plAsia').css({'left':'1024px'}); });
    $('.fAsia').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fAsia').css({'left':'1024px'}); });
  }
});

$('.rwAsia').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwAsia').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsAsia').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsAsia').css('background-position-y', '-73px');
    }, 300);
});

$('.fwAsia').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwAsia').css('background-position-y', '-73px');
    }, 300);
});