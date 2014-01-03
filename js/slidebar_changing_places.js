/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-modernworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundChangingPlaces.pause(); bgsoundChangingPlaces.currentTime = 0; 
});

$('.menubtnChangingPlaces').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnChangingPlaces').css('background-position', '0px -90px');
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

$('.homebtnChangingPlaces').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnChangingPlaces').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnChangingPlaces').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnChangingPlaces').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnChangingPlaces').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnChangingPlaces').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnChangingPlaces').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnChangingPlaces').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnChangingPlaces').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnChangingPlaces').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnChangingPlaces').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnChangingPlaces').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bChangingPlaces').position();
  if (botsposition.left == 1024) {
    $('.bChangingPlaces').css({'opacity':1});
    $('.plChangingPlaces').css({'opacity':1});
    $('.fChangingPlaces').css({'opacity':1});
    $('.bChangingPlaces').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plChangingPlaces').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fChangingPlaces').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bChangingPlaces').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bChangingPlaces').css({'left':'1024px'}); });
    $('.plChangingPlaces').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plChangingPlaces').css({'left':'1024px'}); });
    $('.fChangingPlaces').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fChangingPlaces').css({'left':'1024px'}); });
  }
});

$('.rwChangingPlaces').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwChangingPlaces').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsChangingPlaces').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsChangingPlaces').css('background-position-y', '-73px');
    }, 300);
});

$('.fwChangingPlaces').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwChangingPlaces').css('background-position-y', '-73px');
    }, 300);
});