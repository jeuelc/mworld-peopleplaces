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

$('.menubtnbh').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnbh').css('background-position', '0px -90px');
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

$('.homebtnbh').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnbh').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnbh').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnbh').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnbh').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnbh').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnbh').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnbh').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnbh').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnbh').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnbh').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnbh').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bbh').position();
  if (botsposition.left == 1024) {
    $('.bbh').css({'opacity':1});
    $('.plbh').css({'opacity':1});
    $('.fbh').css({'opacity':1});
    $('.bbh').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plbh').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fbh').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bbh').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bbh').css({'left':'1024px'}); });
    $('.plbh').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plbh').css({'left':'1024px'}); });
    $('.fbh').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fbh').css({'left':'1024px'}); });
  }
});

$('.rwbh').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwbh').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsbh').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsbh').css('background-position-y', '-73px');
    }, 300);
});

$('.fwbh').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwbh').css('background-position-y', '-73px');
    }, 300);
});