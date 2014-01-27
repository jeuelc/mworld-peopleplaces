/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-modernworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundLatinAmerica.pause(); bgsoundLatinAmerica.currentTime = 0; 
});

$('.menubtnLatinAmericas').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnLatinAmericas').css('background-position', '0px -90px');
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

$('.homebtnLatinAmericas').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnLatinAmericas').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnLatinAmericas').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnLatinAmericas').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnLatinAmericas').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnLatinAmericas').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnLatinAmericas').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnLatinAmericas').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnLatinAmericas').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnLatinAmericas').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnLatinAmericas').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnLatinAmericas').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bLatinAmericas').position();
  if (botsposition.left == 1024) {
    $('.bLatinAmericas').css({'opacity':1});
    $('.plLatinAmericas').css({'opacity':1});
    $('.fLatinAmericas').css({'opacity':1});
    $('.bLatinAmericas').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plLatinAmericas').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fLatinAmericas').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bLatinAmericas').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bLatinAmericas').css({'left':'1024px'}); });
    $('.plLatinAmericas').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plLatinAmericas').css({'left':'1024px'}); });
    $('.fLatinAmericas').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fLatinAmericas').css({'left':'1024px'}); });
  }
});

$('.rwLatinAmericas').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwLatinAmericas').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsLatinAmericas').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsLatinAmericas').css('background-position-y', '-73px');
    }, 300);
});

$('.fwLatinAmericas').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwLatinAmericas').css('background-position-y', '-73px');
    }, 300);
});