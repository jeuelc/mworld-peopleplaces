/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-space-bh.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundbh.pause(); bgsoundbh.currentTime = 0; 
});

$('.menubtnwos').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnwos').css('background-position', '0px -90px');
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

$('.homebtnwos').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnwos').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnwos').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnwos').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnwos').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnwos').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnwos').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnwos').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnwos').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnwos').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnwos').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnwos').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bwos').position();
  if (botsposition.left == 1024) {
    $('.bwos').css({'opacity':1});
    $('.plwos').css({'opacity':1});
    $('.fwos').css({'opacity':1});
    $('.bwos').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plwos').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fwos').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bwos').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bwos').css({'left':'1024px'}); });
    $('.plwos').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plwos').css({'left':'1024px'}); });
    $('.fwos').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fwos').css({'left':'1024px'}); });
  }
});

$('.rwwos').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwwos').css('background-position-y', '-73px');
    }, 300);
});

$('.plpswos').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpswos').css('background-position-y', '-73px');
    }, 300);
});

$('.fwwos').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwwos').css('background-position-y', '-73px');
    }, 300);
});