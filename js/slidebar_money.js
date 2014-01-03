/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-modernworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundmoney.pause(); bgsoundmoney.currentTime = 0; 
});

$('.menubtnMoney').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnMoney').css('background-position', '0px -90px');
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

$('.homebtnMoney').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnMoney').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnMoney').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnMoney').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnMoney').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnMoney').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnMoney').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnMoney').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnMoney').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnMoney').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnMoney').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnMoney').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bMoney').position();
  if (botsposition.left == 1024) {
    $('.bMoney').css({'opacity':1});
    $('.plMoney').css({'opacity':1});
    $('.fMoney').css({'opacity':1});
    $('.bMoney').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plMoney').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fMoney').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bMoney').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bMoney').css({'left':'1024px'}); });
    $('.plMoney').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plMoney').css({'left':'1024px'}); });
    $('.fMoney').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fMoney').css({'left':'1024px'}); });
  }
});

$('.rwMoney').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwMoney').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsMoney').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsMoney').css('background-position-y', '-73px');
    }, 300);
});

$('.fwMoney').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwMoney').css('background-position-y', '-73px');
    }, 300);
});