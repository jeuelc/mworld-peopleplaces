/* i-C-a */
$(function(){
  var zoom1 = new ZoomView('#jpiece1','#jpiece1 :first');
  var zoom2 = new ZoomView('#jpiece2','#jpiece2 :first');
  var zoom3 = new ZoomView('#jpiece3','#jpiece3 :first');
  var zoom4 = new ZoomView('#jpiece4','#jpiece4 :first');
  var zoom5 = new ZoomView('#jpiece5','#jpiece5 :first');
  var zoom6 = new ZoomView('#jpiece6','#jpiece6 :first');
  var zoom7 = new ZoomView('#jpiece7','#jpiece7 :first');
  var zoom8 = new ZoomView('#jpiece8','#jpiece8 :first');
  var zoom9 = new ZoomView('#jpiece9','#jpiece9 :first');
  var zoom10 = new ZoomView('#jpiece10','#jpiece10 :first');
  var zoom11 = new ZoomView('#jpiece11','#jpiece11 :first');
  var zoom12 = new ZoomView('#jpiece12','#jpiece12 :first');
  var zoom13 = new ZoomView('#jpiece13','#jpiece13 :first');
  var zoom14 = new ZoomView('#jpiece14','#jpiece14 :first');
  var zoom15 = new ZoomView('#jpiece15','#jpiece15 :first');
  var zoom16 = new ZoomView('#jpiece16','#jpiece16 :first');
  var zoom17 = new ZoomView('#jpiece17','#jpiece17 :first');
  var zoom18 = new ZoomView('#jpiece18','#jpiece18 :first');
  var zoom19 = new ZoomView('#jpiece19','#jpiece19 :first');
  var zoom20 = new ZoomView('#jpiece20','#jpiece20 :first');
  var zoom21 = new ZoomView('#jpiece21','#jpiece21 :first');
  var zoom22 = new ZoomView('#jpiece22','#jpiece22 :first');
  var zoom23 = new ZoomView('#jpiece23','#jpiece23 :first');
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
      
        if(jid == "jpiece4" && position.left > 251 && position.left < 351 && position.top > 257 && position.top < 357) {
          $(target).css({'left':301, 'top':307});
        }
        if(jid == "jpiece5" && position.left > 300 && position.left < 400 && position.top > 252 && position.top < 352) {
          $(target).css({'left':350, 'top':302});
        }
        if(jid == "jpiece6" && position.left > 257 && position.left < 357 && position.top > 289 && position.top < 389) {
          $(target).css({'left':307, 'top':339});
        }
        if(jid == "jpiece7" && position.left > 312 && position.left < 412 && position.top > 283 && position.top < 383) {
          $(target).css({'left':362, 'top':333});
        }
        if(jid == "jpiece8" && position.left > 330 && position.left < 430 && position.top > 344 && position.top < 444) {
          $(target).css({'left':380, 'top':394});
        }
        if(jid == "jpiece9" && position.left > 396 && position.left < 496 && position.top > 349 && position.top < 449) {
          $(target).css({'left':446, 'top':399});
        }
        if(jid == "jpiece10" && position.left > 386 && position.left < 486 && position.top > 388 && position.top < 488) {
          $(target).css({'left':436, 'top':438});
        }
        if(jid == "jpiece11" && position.left > 399 && position.left < 499 && position.top > 386 && position.top < 486) {
          $(target).css({'left':449, 'top':436});
        }
        if(jid == "jpiece12" && position.left > 372 && position.left < 472 && position.top > 437 && position.top < 537) {
          $(target).css({'left':442, 'top':487});
        }
        if(jid == "jpiece13" && position.left > 419 && position.left < 519 && position.top > 419 && position.top < 519) {
          $(target).css({'left':469, 'top':469});
        }
        if(jid == "jpiece14" && position.left > 328 && position.left < 428 && position.top > 233 && position.top < 333) {
          $(target).css({'left':378, 'top':283});
        }
        if(jid == "jpiece15" && position.left > 415 && position.left < 515 && position.top > 231 && position.top < 331) {
          $(target).css({'left':465, 'top':281});
        }
        if(jid == "jpiece16" && position.left > 543 && position.left < 643 && position.top > 196 && position.top < 296) {
          $(target).css({'left':593, 'top':246});
        }
        if(jid == "jpiece17" && position.left > 647 && position.left < 747 && position.top > 192 && position.top < 292) {
          $(target).css({'left':697, 'top':242});
        }
        if(jid == "jpiece18" && position.left > 656 && position.left < 756 && position.top > 229 && position.top < 329) {
          $(target).css({'left':706, 'top':279});
        }
        if(jid == "jpiece19" && position.left > 528 && position.left < 628 && position.top > 253 && position.top < 353) {
          $(target).css({'left':578, 'top':303});
        }
        if(jid == "jpiece20" && position.left > 418 && position.left < 518 && position.top > 266 && position.top < 366) {
          $(target).css({'left':468, 'top':316});
        }
        if(jid == "jpiece21" && position.left > 364 && position.left < 464 && position.top > 258 && position.top < 358) {
          $(target).css({'left':414, 'top':308});
        }
        if(jid == "jpiece22" && position.left > 582 && position.left < 682 && position.top > 364 && position.top < 446) {
          $(target).css({'left':632, 'top':396});
        }
        if(jid == "jpiece23" && position.left > 686 && position.left < 786 && position.top > 337 && position.top < 447) {
          $(target).css({'left':736, 'top':387});
        }
        
        if(jid == "jpiece1" && position.left > 190&& position.left < 290 && position.top > 200 && position.top < 295) {
          $(target).animate({'left':250, 'top':240}, 500);
        }
        if(jid == "jpiece2" && position.left > 450 && position.left < 730 && position.top > 120 && position.top < 260) {
          $(target).animate({'left':670, 'top':240}, 500);
        }
        if(jid == "jpiece3" && position.left > 370 && position.left < 460 && position.top > 320 && position.top < 400) {
          $(target).animate({'left':420, 'top':380}, 500);
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