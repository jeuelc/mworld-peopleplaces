/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-humanbody.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundscientist.pause(); bgsoundscientist.currentTime = 0; 
});

$('.menubtnscientist').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnscientist').css('background-position', '0px -90px');
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

$('.homebtnscientist').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnscientist').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnscientist').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnscientist').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnscientist').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnscientist').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnscientist').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnscientist').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnscientist').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnscientist').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnscientist').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnscientist').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bscientist').position();
  if (botsposition.left == 1024) {
    $('.bscientist').css({'opacity':1});
    $('.plscientist').css({'opacity':1});
    $('.fscientist').css({'opacity':1});
    $('.bscientist').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plscientist').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fscientist').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bscientist').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bscientist').css({'left':'1024px'}); });
    $('.plscientist').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plscientist').css({'left':'1024px'}); });
    $('.fscientist').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fscientist').css({'left':'1024px'}); });
  }
});

$('.rwscientist').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwscientist').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsscientist').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsscientist').css('background-position-y', '-73px');
    }, 300);
});

$('.fwscientist').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwscientist').css('background-position-y', '-73px');
    }, 300);
});