/* i-C-a */
$(function(){
  var zoom1 = new ZoomView('#polb1','#polb1 :first');
  var zoom2 = new ZoomView('#polb2','#polb2 :first');
  var zoom3 = new ZoomView('#polb3','#polb3 :first');
  var zoom4 = new ZoomView('#polb4','#polb4 :first');
  var zoom5 = new ZoomView('#polb5','#polb5 :first');
});


    /**
    * Inspired by Jesse Guardiani - May 1st, 2012
    */
	
	var zIndexBackup = 10;
	
    function DragView(target) {
      this.target = target[0];
      this.drag = [];
      this.lastDrag = {};

      
      this.WatchDrag = function()
      {
        if(!this.drag.length) {
          return;
        }

        for(var d = 0; d<this.drag.length; d++) {
          var left = $(this.drag[d].el).offset().left;
          var top = $(this.drag[d].el).offset().top;

          var x_offset = -(this.lastDrag.pos.x - this.drag[d].pos.x);
          var y_offset = -(this.lastDrag.pos.y - this.drag[d].pos.y);

          left = left + x_offset;
          top = top + y_offset;

          this.lastDrag = this.drag[d];

          this.drag[d].el.style.left = left +'px';
          this.drag[d].el.style.top = top +'px';
        }
      }

      this.OnDragStart = function(event) {
        var touches = event.originalEvent.touches || [event.originalEvent];
        for(var t=0; t<touches.length; t++) {
          var el = touches[t].target.parentNode;
		  
		  if(el.className.search('polaroid') > -1){
			  	
				 el = touches[t].target.parentNode.parentNode;
		  }
			el.style.zIndex = zIndexBackup + 1;
			zIndexBackup = zIndexBackup +1;
			
          if(el && el == this.target) {
			//$(el).children().toggleClass('upSky');
            this.lastDrag = {
              el: el,
              pos: event.touches[t]
            };
            return; 
          }
		  
        }
      }

      this.OnDrag = function(event) {
        cardSlideSound.play();
        this.drag = [];
        var touches = event.originalEvent.touches || [event.originalEvent];
        for(var t=0; t<touches.length; t++) {
          var el = touches[t].target.parentNode;

      		if(el.className.search('polaroid') > -1){
      				 el = touches[t].target.parentNode.parentNode;
      		  }
		  
          if(el && el == this.target) {
            this.drag.push({
              el: el,
              pos: event.touches[t]
            });
          }
        }
        
        var jid = $(target).attr("id");
        /*if(jid == "polb2") {
          $('div#polb1 > img').css("-webkit-transform", "rotate(0deg)");
        } else if(jid == "polb1") {
          $('div#polb2 > img').css("-webkit-transform", "rotate(0deg)");
        } */
      }

      this.OnDragEnd = function(event) {
		  	this.drag = [];
        var touches = event.originalEvent.touches || [event.originalEvent];
		 	  for(var t=0; t<touches.length; t++) {
          	var el = touches[t].target.parentNode;
		  
		  			if(el.className.search('polaroid') > -1){
				 			el = touches[t].target.parentNode.parentNode;
		  			}			
        }
        
        var jid = $(target).attr("id");
        var position = $(target).position();
        var polb1Selector = $('div#polb1'),
            polb2Selector = $('div#polb2'),
            polb3Selector = $('div#polb3'),
            polb4Selector = $('div#polb4'),
            polb5Selector = $('div#polb5');
        if(position.left < 50 || position.left > 150 || position.top < 220 || position.top > 320) { //balhin na
          if(jid == "polb1") {
            polb3Selector.find('img').css("-webkit-transform", "rotate(5deg)");
            polb3Selector.css({'top':'290px', 'left':'75px'});
            polb4Selector.find('img').css("-webkit-transform", "rotate(-3deg)");
            polb4Selector.css({'top':'270px', 'left':'80px'});
            polb5Selector.find('img').css("-webkit-transform", "rotate(5deg)");
            polb5Selector.css({'top':'290px', 'left':'75px'});
            polb1Selector.find('img').css("-webkit-transform", "rotate(-3deg)");
            polb2Selector.find('img').css("-webkit-transform", "rotate(0deg)");
            polb2Selector.css({'top':'270px', 'left':'100px'});

            polb2Selector.css("z-index", 4);
            polb3Selector.css("z-index", 3);
            polb4Selector.css("z-index", 2);
            polb5Selector.css("z-index", 1);
          } else if(jid == "polb2") {
            polb4Selector.find('img').css("-webkit-transform", "rotate(5deg)");
            polb4Selector.css({'top':'290px', 'left':'75px'});
            polb5Selector.find('img').css("-webkit-transform", "rotate(0deg)");
            polb5Selector.css({'top':'270px', 'left':'100px'});
            polb1Selector.find('img').css("-webkit-transform", "rotate(-3deg)");
            polb1Selector.css({'top':'270px', 'left':'80px'});
            polb2Selector.find('img').css("-webkit-transform", "rotate(-3deg)");
            polb3Selector.find('img').css("-webkit-transform", "rotate(0deg)");
            polb3Selector.css({'top':'270px', 'left':'100px'});
            polb3Selector.css("z-index", 4);
            polb4Selector.css("z-index", 3);
            polb5Selector.css("z-index", 2);
            polb1Selector.css("z-index", 1);
          } else if(jid == "polb3") {
            polb5Selector.find('img').css("-webkit-transform", "rotate(5deg)");
            polb5Selector.css({'top':'290px', 'left':'75px'});
            polb1Selector.find('img').css("-webkit-transform", "rotate(-3deg)");
            polb1Selector.css({'top':'270px', 'left':'80px'});
            polb2Selector.find('img').css("-webkit-transform", "rotate(-3deg)");
            polb2Selector.css({'top':'270px', 'left':'80px'});
            polb3Selector.find('img').css("-webkit-transform", "rotate(-3deg)");
            polb4Selector.find('img').css("-webkit-transform", "rotate(0deg)");
            polb4Selector.css({'top':'270px', 'left':'100px'});
            polb4Selector.css("z-index", 4);
            polb5Selector.css("z-index", 3);
            polb1Selector.css("z-index", 2);
            polb2Selector.css("z-index", 1);
          } else if(jid == "polb4") {
            polb2Selector.find('img').css("-webkit-transform", "rotate(5deg)");
            polb2Selector.css({'top':'290px', 'left':'75px'});
            polb3Selector.find('img').css("-webkit-transform", "rotate(-3deg)");
            polb3Selector.css({'top':'270px', 'left':'80px'});
            polb4Selector.find('img').css("-webkit-transform", "rotate(-3deg)");
            polb1Selector.find('img').css("-webkit-transform", "rotate(5deg)");
            polb1Selector.css({'top':'290px', 'left':'75px'});
            polb5Selector.find('img').css("-webkit-transform", "rotate(0deg)");
            polb5Selector.css({'top':'270px', 'left':'100px'});
            polb5Selector.css("z-index", 4);
            polb1Selector.css("z-index", 3);
            polb2Selector.css("z-index", 2);
            polb4Selector.css("z-index", 1);
          } else if(jid == "polb5") {
            polb2Selector.find('img').css("-webkit-transform", "rotate(5deg)");
            polb2Selector.css({'top':'290px', 'left':'75px'});
            polb3Selector.find('img').css("-webkit-transform", "rotate(-3deg)");
            polb3Selector.css({'top':'270px', 'left':'80px'});
            polb4Selector.find('img').css("-webkit-transform", "rotate(-3deg)");
            polb1Selector.find('img').css("-webkit-transform", "rotate(0deg)");
            polb1Selector.css({'top':'270px', 'left':'100px'});
            polb1Selector.css("z-index", 4);
            polb2Selector.css("z-index", 3);
            polb2Selector.css("z-index", 2);
            polb4Selector.css("z-index", 1);
          }
          $(target).css({'z-index':'0'});
          $(target).animate({'top':'270px', 'left':'80px'}, 500);
        } else { //i-uli sa
          $(target).animate({'top':'270px', 'left':'100px'}, 500);
        }
        
      }
    }


    function ZoomView(container, element) {
      container = $(container).hammer({
          prevent_default: true,
          scale_treshold: 0,
          drag_min_distance: 0
      });

      element = $(element);
      var displayWidth = container.width();
      var displayHeight = container.height();

      //These two constants specify the minimum and maximum zoom
      var MIN_ZOOM = 1;
      var MAX_ZOOM = 1;

      var scaleFactor = 1;
      var previousScaleFactor = 1;

      //These two variables keep track of the X and Y coordinate of the finger when it first
      //touches the screen
      var startX = 0;
      var startY = 0;

      //These two variables keep track of the amount we need to translate the canvas along the X
      //and the Y coordinate
      var translateX = 0;
      var translateY = 0;

      //These two variables keep track of the amount we translated the X and Y coordinates, the last time we
      //panned.
      var previousTranslateX = 0;
      var previousTranslateY = 0;

      //Translate Origin variables

      var tch1 = 0, 
          tch2 = 0, 
          tcX = 0, 
          tcY = 0,
          toX = 0,
          toY = 0,
          cssOrigin = "";

      container.bind("transformstart", function(event){
        //We save the initial midpoint of the first two touches to say where our transform origin is.
        e = event

        tch1 = [e.touches[0].x, e.touches[0].y],
        tch2 = [e.touches[1].x, e.touches[1].y]

        tcX = (tch1[0]+tch2[0])/2,
        tcY = (tch1[1]+tch2[1])/2

        toX = tcX
        toY = tcY

        var left = $(element).offset().left;
        var top = $(element).offset().top;

        cssOrigin = (-(left) + toX)/scaleFactor +"px "+ (-(top) + toY)/scaleFactor +"px";
      })

      container.bind("transform", function(event) {
          scaleFactor = previousScaleFactor * event.scale;
    
          scaleFactor = Math.max(MIN_ZOOM, Math.min(scaleFactor, MAX_ZOOM));
          transform(event);
      });

      container.bind("transformend", function(event) {
          previousScaleFactor = scaleFactor;
      });


        /**
        * on drag
        */
      var dragview = new DragView($(container));
      container.bind("dragstart", $.proxy(dragview.OnDragStart, dragview));
      container.bind("drag", $.proxy(dragview.OnDrag, dragview));
      container.bind("dragend", $.proxy(dragview.OnDragEnd, dragview));

      setInterval($.proxy(dragview.WatchDrag, dragview), 10);

      function transform(e) {
          
          
          element.css({
              webkitTransform: cssScale,
              webkitTransformOrigin: cssOrigin,

              transform: cssScale,
              transformOrigin: cssOrigin,
          });
      }
  }