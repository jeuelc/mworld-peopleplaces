/* i-C-a */
$(function(){
  var zoom1 = new ZoomView('#pol1','#pol1 :first');
  var zoom2 = new ZoomView('#pol2','#pol2 :first');
  var zoom3 = new ZoomView('#pol3','#pol3 :first');
  var zoom4 = new ZoomView('#pol4','#pol4 :first');
  var zoom5 = new ZoomView('#pol5','#pol5 :first');
  var zoom6 = new ZoomView('#pol6','#pol6 :first');
  var zoom7 = new ZoomView('#pol7','#pol7 :first');
  var zoom8 = new ZoomView('#pol8','#pol8 :first');
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
        if(jid == "pol8") {
          $('div#pol7 > img').css("-webkit-transform", "rotate(0deg)");
        } else if(jid == "pol7") {
          $('div#pol6 > img').css("-webkit-transform", "rotate(0deg)");
        } else if(jid == "pol6") {
          $('div#pol5 > img').css("-webkit-transform", "rotate(0deg)");
        } else if(jid == "pol5") {
          $('div#pol4 > img').css("-webkit-transform", "rotate(0deg)");
        } else if(jid == "pol4") {
          $('div#pol3 > img').css("-webkit-transform", "rotate(0deg)");
        } else if(jid == "pol3") {
          $('div#pol2 > img').css("-webkit-transform", "rotate(0deg)");
        } else if(jid == "pol2") {
          $('div#pol1 > img').css("-webkit-transform", "rotate(0deg)");
        } else if(jid == "pol1") {
          $('div#pol8 > img').css("-webkit-transform", "rotate(0deg)");
        }
      }

      this.OnDragEnd = function(event) {
		  	this.drag = [];
        	var touches = event.originalEvent.touches || [event.originalEvent];
		 	for(var t=0; t<touches.length; t++) {
          			var el = touches[t].target.parentNode;
		  
		  			if(el.className.search('polaroid') > -1){
				 			el = touches[t].target.parentNode.parentNode;
		  			}
					//$(el).children().toggleClass('upSky');
			
        }
        
        var jid = $(target).attr("id");
        var position = $(target).position();
        if(position.left < 90 || position.left > 190 || position.top < 200 || position.top > 300) { //balhin na
          if(jid == "pol8") {
            $('div#pol8 > img').css("-webkit-transform", "rotate(-5deg)");
            $('#pol7').css("z-index", 8);
            $('#pol6').css("z-index", 7);
            $('#pol5').css("z-index", 6);
            $('#pol4').css("z-index", 5);
            $('#pol3').css("z-index", 4);
            $('#pol2').css("z-index", 3);
            $('#pol1').css("z-index", 2);
          } else if(jid == "pol7") {
            $('div#pol7 > img').css("-webkit-transform", "rotate(5deg)");
            $('#pol6').css("z-index", 8);
            $('#pol5').css("z-index", 7);
            $('#pol4').css("z-index", 6);
            $('#pol3').css("z-index", 5);
            $('#pol2').css("z-index", 4);
            $('#pol1').css("z-index", 3);
            $('#pol8').css("z-index", 2);
          } else if(jid == "pol6") {
            $('div#pol6 > img').css("-webkit-transform", "rotate(-10deg)");
            $('#pol5').css("z-index", 8);
            $('#pol4').css("z-index", 7);
            $('#pol3').css("z-index", 6);
            $('#pol2').css("z-index", 5);
            $('#pol1').css("z-index", 4);
            $('#pol8').css("z-index", 3);
            $('#pol7').css("z-index", 2);
          } else if(jid == "pol5") {
            $('div#pol5 > img').css("-webkit-transform", "rotate(10deg)");
            $('#pol4').css("z-index", 8);
            $('#pol3').css("z-index", 7);
            $('#pol2').css("z-index", 6);
            $('#pol1').css("z-index", 5);
            $('#pol8').css("z-index", 4);
            $('#pol7').css("z-index", 3);
            $('#pol6').css("z-index", 2);
          } else if(jid == "pol4") {
            $('div#pol4 > img').css("-webkit-transform", "rotate(3deg)");
            $('#pol3').css("z-index", 8);
            $('#pol2').css("z-index", 7);
            $('#pol1').css("z-index", 6);
            $('#pol8').css("z-index", 5);
            $('#pol7').css("z-index", 4);
            $('#pol6').css("z-index", 3);
            $('#pol5').css("z-index", 2);
          } else if(jid == "pol3") {
            $('div#pol3 > img').css("-webkit-transform", "rotate(-3deg)");
            $('#pol2').css("z-index", 8);
            $('#pol1').css("z-index", 7);
            $('#pol8').css("z-index", 6);
            $('#pol7').css("z-index", 5);
            $('#pol6').css("z-index", 4);
            $('#pol5').css("z-index", 3);
            $('#pol4').css("z-index", 2);
          } else if(jid == "pol2") {
            $('div#pol2 > img').css("-webkit-transform", "rotate(-8deg)");
            $('#pol1').css("z-index", 8);
            $('#pol8').css("z-index", 7);
            $('#pol7').css("z-index", 6);
            $('#pol6').css("z-index", 5);
            $('#pol5').css("z-index", 4);
            $('#pol4').css("z-index", 3);
            $('#pol3').css("z-index", 2);
          } else if(jid == "pol1") {
            $('div#pol1 > img').css("-webkit-transform", "rotate(8deg)");
            $('#pol8').css("z-index", 8);
            $('#pol7').css("z-index", 7);
            $('#pol6').css("z-index", 6);
            $('#pol5').css("z-index", 5);
            $('#pol4').css("z-index", 4);
            $('#pol3').css("z-index", 3);
            $('#pol2').css("z-index", 2);
          }
          $(target).css({'z-index':'0'});
          $(target).animate({'top':'250px', 'left':'140px'}, 500);
        } else { //i-uli sa
          $(target).animate({'top':'250px', 'left':'140px'}, 500);
        }
        
        if(jid == "pol8") {
          $('div#pol7 > img').css("-webkit-transform", "rotate(0deg)");
        } else if(jid == "pol7") {
          $('div#pol6 > img').css("-webkit-transform", "rotate(0deg)");
        } else if(jid == "pol6") {
          $('div#pol5 > img').css("-webkit-transform", "rotate(0deg)");
        } else if(jid == "pol5") {
          $('div#pol4 > img').css("-webkit-transform", "rotate(0deg)");
        } else if(jid == "pol4") {
          $('div#pol3 > img').css("-webkit-transform", "rotate(0deg)");
        } else if(jid == "pol3") {
          $('div#pol2 > img').css("-webkit-transform", "rotate(0deg)");
        } else if(jid == "pol2") {
          $('div#pol1 > img').css("-webkit-transform", "rotate(0deg)");
        } else if(jid == "pol1") {
          $('div#pol8 > img').css("-webkit-transform", "rotate(0deg)");
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