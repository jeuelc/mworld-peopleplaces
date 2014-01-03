/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-modernworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundPeopleInSpace.pause(); bgsoundPeopleInSpace.currentTime = 0; 
});

$('.menubtnPeopleInSpace').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnPeopleInSpace').css('background-position', '0px -90px');
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

$('.homebtnPeopleInSpace').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnPeopleInSpace').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnPeopleInSpace').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnPeopleInSpace').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnPeopleInSpace').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnPeopleInSpace').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnPeopleInSpace').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnPeopleInSpace').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnPeopleInSpace').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnPeopleInSpace').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnPeopleInSpace').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnPeopleInSpace').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bPeopleInSpace').position();
  if (botsposition.left == 1024) {
    $('.bPeopleInSpace').css({'opacity':1});
    $('.plPeopleInSpace').css({'opacity':1});
    $('.fPeopleInSpace').css({'opacity':1});
    $('.bPeopleInSpace').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plPeopleInSpace').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fPeopleInSpace').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bPeopleInSpace').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bPeopleInSpace').css({'left':'1024px'}); });
    $('.plPeopleInSpace').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plPeopleInSpace').css({'left':'1024px'}); });
    $('.fPeopleInSpace').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fPeopleInSpace').css({'left':'1024px'}); });
  }
});

$('.rwPeopleInSpace').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwPeopleInSpace').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsPeopleInSpace').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsPeopleInSpace').css('background-position-y', '-73px');
    }, 300);
});

$('.fwPeopleInSpace').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwPeopleInSpace').css('background-position-y', '-73px');
    }, 300);
});