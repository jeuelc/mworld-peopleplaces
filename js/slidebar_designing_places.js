/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-modernworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundDesigningPlaces.pause(); bgsoundDesigningPlaces.currentTime = 0; 
});

$('.menubtnDesigningPlaces').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnDesigningPlaces').css('background-position', '0px -90px');
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

$('.homebtnDesigningPlaces').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnDesigningPlaces').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnDesigningPlaces').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnDesigningPlaces').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnDesigningPlaces').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnDesigningPlaces').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnDesigningPlaces').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnDesigningPlaces').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnDesigningPlaces').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnDesigningPlaces').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnDesigningPlaces').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnDesigningPlaces').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bDesigningPlaces').position();
  if (botsposition.left == 1024) {
    $('.bDesigningPlaces').css({'opacity':1});
    $('.plDesigningPlaces').css({'opacity':1});
    $('.fDesigningPlaces').css({'opacity':1});
    $('.bDesigningPlaces').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plDesigningPlaces').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fDesigningPlaces').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bDesigningPlaces').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bDesigningPlaces').css({'left':'1024px'}); });
    $('.plDesigningPlaces').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plDesigningPlaces').css({'left':'1024px'}); });
    $('.fDesigningPlaces').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fDesigningPlaces').css({'left':'1024px'}); });
  }
});

$('.rwDesigningPlaces').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwDesigningPlaces').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsDesigningPlaces').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsDesigningPlaces').css('background-position-y', '-73px');
    }, 300);
});

$('.fwDesigningPlaces').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwDesigningPlaces').css('background-position-y', '-73px');
    }, 300);
});