/* i-C-a */
$(function(){
  var zoom1 = new ZoomView('#rocket1','#rocket1 :first');
  var zoom2 = new ZoomView('#rocket2','#rocket2 :first');
  var zoom3 = new ZoomView('#rocket3','#rocket3 :first');
  var zoom4 = new ZoomView('#rocket4','#rocket4 :first');
  var zoom5 = new ZoomView('#rocket5','#rocket5 :first');
  var zoom6 = new ZoomView('#rocket6','#rocket6 :first');
  var zoom7 = new ZoomView('#nozle1','#nozle1 :first');
  var zoom8 = new ZoomView('#nozle2','#nozle2 :first');
  var zoom9 = new ZoomView('#nozle3','#nozle3 :first');
  var zoom10 = new ZoomView('#nozle4','#nozle4 :first');
  var zoom11 = new ZoomView('#nozle5','#nozle5 :first');
  var zoom12 = new ZoomView('#nozle6','#nozle6 :first');
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
        var itemtype = $(target).attr("class");
        var divid = $("div#"+jid);
        var position = divid.position();
        
        if(itemtype == "bhgame2Q") { //booster to reappear
          nposition1 = $('#nozle1').position();
          nposition2 = $('#nozle2').position();
          nposition3 = $('#nozle3').position();
          nposition4 = $('#nozle4').position();
          nposition5 = $('#nozle5').position();
          nposition6 = $('#nozle6').position();
          
          var distance1 = nposition1.left - position.left;
          var distance2 = nposition2.left - position.left;
          var distance3 = nposition3.left - position.left;
          var distance4 = nposition4.left - position.left;
          var distance5 = nposition5.left - position.left;
          var distance6 = nposition6.left - position.left;
          
          var alignment1 = nposition1.top - position.top;
          var alignment2 = nposition2.top - position.top;
          var alignment3 = nposition3.top - position.top;
          var alignment4 = nposition4.top - position.top;
          var alignment5 = nposition5.top - position.top;
          var alignment6 = nposition6.top - position.top;
          
          if (distance1 > 109 && distance1 < 189 && alignment1 > -40 && alignment1 < 40) {
            $('#nozle1').css('background', 'url(css/images/5-8/Space/Black_Holes/game/nozlebooster.png) no-repeat scroll 0 8px');
          } else if (distance2 > 109 && distance2 < 189 && alignment2 > -40 && alignment2 < 40) {
            $('#nozle2').css('background', 'url(css/images/5-8/Space/Black_Holes/game/nozlebooster.png) no-repeat scroll 0 8px');
          } else if (distance3 > 109 && distance3 < 189 && alignment3 > -40 && alignment3 < 40) {
            $('#nozle3').css('background', 'url(css/images/5-8/Space/Black_Holes/game/nozlebooster.png) no-repeat scroll 0 8px');
          } else if (distance4 > 109 && distance4 < 189 && alignment4 > -40 && alignment4 < 40) {
            $('#nozle4').css('background', 'url(css/images/5-8/Space/Black_Holes/game/nozlebooster.png) no-repeat scroll 0 8px');
          } else if (distance5 > 109 && distance5 < 189 && alignment5 > -40 && alignment5 < 40) {
            $('#nozle5').css('background', 'url(css/images/5-8/Space/Black_Holes/game/nozlebooster.png) no-repeat scroll 0 8px');
          } else if (distance6 > 109 && distance6 < 189 && alignment6 > -40 && alignment6 < 40) {
            $('#nozle6').css('background', 'url(css/images/5-8/Space/Black_Holes/game/nozlebooster.png) no-repeat scroll 0 8px');
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
        var itemtype = $(target).attr("class");
        var divid = $("div#"+jid);
        var position = divid.position();
        
        if(itemtype == "bhgame2A") { //snap to any rocket
          rposition1 = $('#rocket1').position();
          rposition2 = $('#rocket2').position();
          rposition3 = $('#rocket3').position();
          rposition4 = $('#rocket4').position();
          rposition5 = $('#rocket5').position();
          rposition6 = $('#rocket6').position();
          
          var distance1 = position.left - rposition1.left;
          var distance2 = position.left - rposition2.left;
          var distance3 = position.left - rposition3.left;
          var distance4 = position.left - rposition4.left;
          var distance5 = position.left - rposition5.left;
          var distance6 = position.left - rposition6.left;
          
          var alignment1 = position.top - rposition1.top;
          var alignment2 = position.top - rposition2.top;
          var alignment3 = position.top - rposition3.top;
          var alignment4 = position.top - rposition4.top;
          var alignment5 = position.top - rposition5.top;
          var alignment6 = position.top - rposition6.top;
          
          if (distance1 > 109 && distance1 < 189 && alignment1 > -40 && alignment1 < 40) {
            $(target).css({top:rposition1.top, left:rposition1.left + 149, background:'none'});
          } else if (distance2 > 109 && distance2 < 189 && alignment2 > -40 && alignment2 < 40) {
            $(target).css({top:rposition2.top, left:rposition2.left + 149, background:'none'});
          } else if (distance3 > 109 && distance3 < 189 && alignment3 > -40 && alignment3 < 40) {
            $(target).css({top:rposition3.top, left:rposition3.left + 149, background:'none'});
          } else if (distance4 > 109 && distance4 < 189 && alignment4 > -40 && alignment4 < 40) {
            $(target).css({top:rposition4.top, left:rposition4.left + 149, background:'none'});
          } else if (distance5 > 109 && distance5 < 189 && alignment5 > -40 && alignment5 < 40) {
            $(target).css({top:rposition5.top, left:rposition5.left + 149, background:'none'});
          } else if (distance6 > 109 && distance6 < 189 && alignment6 > -40 && alignment6 < 40) {
            $(target).css({top:rposition6.top, left:rposition6.left + 149, background:'none'});
          } else {
            $(target).css('background', 'url(css/images/5-8/Space/Black_Holes/game/nozlebooster.png) no-repeat scroll 0 8px');
          }
        } else { //snap to any nozle
          nposition1 = $('#nozle1').position();
          nposition2 = $('#nozle2').position();
          nposition3 = $('#nozle3').position();
          nposition4 = $('#nozle4').position();
          nposition5 = $('#nozle5').position();
          nposition6 = $('#nozle6').position();
          
          var distance1 = nposition1.left - position.left;
          var distance2 = nposition2.left - position.left;
          var distance3 = nposition3.left - position.left;
          var distance4 = nposition4.left - position.left;
          var distance5 = nposition5.left - position.left;
          var distance6 = nposition6.left - position.left;
          
          var alignment1 = nposition1.top - position.top;
          var alignment2 = nposition2.top - position.top;
          var alignment3 = nposition3.top - position.top;
          var alignment4 = nposition4.top - position.top;
          var alignment5 = nposition5.top - position.top;
          var alignment6 = nposition6.top - position.top;
          
          if (distance1 > 109 && distance1 < 189 && alignment1 > -40 && alignment1 < 40) {
            $(target).css({top:nposition1.top, left:nposition1.left - 149, 'z-index':0});
            $('#nozle1').css('background', 'none');
          } else if (distance2 > 109 && distance2 < 189 && alignment2 > -40 && alignment2 < 40) {
            $(target).css({top:nposition2.top, left:nposition2.left - 149, 'z-index':0});
            $('#nozle2').css('background', 'none');
          } else if (distance3 > 109 && distance3 < 189 && alignment3 > -40 && alignment3 < 40) {
            $(target).css({top:nposition3.top, left:nposition3.left - 149, 'z-index':0});
            $('#nozle3').css('background', 'none');
          } else if (distance4 > 109 && distance4 < 189 && alignment4 > -40 && alignment4 < 40) {
            $(target).css({top:nposition4.top, left:nposition4.left - 149, 'z-index':0});
            $('#nozle4').css('background', 'none');
          } else if (distance5 > 109 && distance5 < 189 && alignment5 > -40 && alignment5 < 40) {
            $(target).css({top:nposition5.top, left:nposition5.left - 149, 'z-index':0});
            $('#nozle5').css('background', 'none');
          } else if (distance6 > 109 && distance6 < 189 && alignment6 > -40 && alignment6 < 40) {
            $(target).css({top:nposition6.top, left:nposition6.left - 149, 'z-index':0});
            $('#nozle6').css('background', 'none');
          }
        }
        //alert("id: "+jid+"; class: "+itemtype);
      
        
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