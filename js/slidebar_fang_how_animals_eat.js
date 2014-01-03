/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-modernworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundFangAnimals.pause(); bgsoundFangAnimals.currentTime = 0; 
});

$('.menubtnFangAnimals').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnFangAnimals').css('background-position', '0px -90px');
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

$('.homebtnFangAnimals').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnFangAnimals').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnFangAnimals').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnFangAnimals').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnFangAnimals').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnFangAnimals').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnFangAnimals').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnFangAnimals').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnFangAnimals').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnFangAnimals').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnFangAnimals').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnFangAnimals').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bFangAnimals').position();
  if (botsposition.left == 1024) {
    $('.bFangAnimals').css({'opacity':1});
    $('.plFangAnimals').css({'opacity':1});
    $('.fFangAnimals').css({'opacity':1});
    $('.bFangAnimals').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plFangAnimals').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fFangAnimals').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bFangAnimals').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bFangAnimals').css({'left':'1024px'}); });
    $('.plFangAnimals').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plFangAnimals').css({'left':'1024px'}); });
    $('.fFangAnimals').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fFangAnimals').css({'left':'1024px'}); });
  }
});

$('.rwFangAnimals').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwFangAnimals').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsFangAnimals').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsFangAnimals').css('background-position-y', '-73px');
    }, 300);
});

$('.fwFangAnimals').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwFangAnimals').css('background-position-y', '-73px');
    }, 300);
});