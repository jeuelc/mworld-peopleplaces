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
        //var jtop = $(target).css("top");
        var jid = $(target).attr("id");
        //alert("jtop "+jtop);
        var divid = $("div#"+jid);
        var position = divid.position();
        var curAngle = getRotationDegrees($("div#"+jid+" > img"));
      
      if(curAngle == 0) {
        if(jid == "jpiece1") {
          var curAngle4 = getRotationDegrees($("div#jpiece4 > img"));
          if(curAngle4 == 0) {
            position4 = $("#jpiece4").position();
            var distance = position4.left - position.left;
            var alignment = position4.top - position.top;
            if(distance < 15 && distance > -15 && alignment > 132 && alignment < 162) { 
              $("#jpiece1").css('top', position4.top - 147);
              $("#jpiece1").css('left', position4.left);
            }
          }
          
          var curAngle2 = getRotationDegrees($("div#jpiece2 > img"));
          if(curAngle2 == 0) {
            position2 = $("#jpiece2").position();
            var distance = position2.left - position.left;
            var alignment = position2.top - position.top;
            if(distance < 211 && distance > 181 && alignment > -15 && alignment < 15) { 
              $("#jpiece1").css('top', position2.top);
              $("#jpiece1").css('left', position2.left - 196);
            }
          }
          
          if(position.left > 385 && position.left < 415 && position.top < 35 && position.top > 5) {
            $("#jpiece1").css('top', 20);
            $("#jpiece1").css('left', 400);
          }
        } /* ********* / jpiece1  ******/
      
        if(jid == "jpiece2") {
          var curAngle5 = getRotationDegrees($("div#jpiece5 > img"));
          if(curAngle5 == 0) {
            position5 = $("#jpiece5").position();
            var distance = position5.left - position.left;
            var alignment = position5.top - position.top;
            if(distance < 15 && distance > -15 && alignment > 132 && alignment < 162) { 
              $("#jpiece2").css('top', position5.top - 147);
              $("#jpiece2").css('left', position5.left);
            }
          }
          
          var curAngle3 = getRotationDegrees($("div#jpiece3 > img"));
          if(curAngle3 == 0) {
            position3 = $("#jpiece3").position();
            var distance = position3.left - position.left;
            var alignment = position3.top - position.top;
            if(distance < 211 && distance > 181 && alignment > -15 && alignment < 15) { 
              $("#jpiece2").css('top', position3.top);
              $("#jpiece2").css('left', position3.left - 197);
            }
          }
          
          var curAngle1 = getRotationDegrees($("div#jpiece1 > img"));
          if(curAngle1 == 0) {
            position1 = $("#jpiece1").position();
            var distance = position.left - position1.left;
            var alignment = position1.top - position.top;
            if(distance < 211 && distance > 181 && alignment > -15 && alignment < 15) { 
              $("#jpiece2").css('top', position1.top);
              $("#jpiece2").css('left', position1.left + 196);
            }
          }
          
          if(position.left > 581 && position.left < 611 && position.top < 35 && position.top > 5) {
            $("#jpiece2").css('top', 20);
            $("#jpiece2").css('left', 596);
          }
        } /* ********* / jpiece2  ******/
        
        if(jid == "jpiece3") {
          var curAngle6 = getRotationDegrees($("div#jpiece6 > img"));
          if(curAngle6 == 0) {
            position6 = $("#jpiece6").position();
            var distance = position6.left - position.left;
            var alignment = position6.top - position.top;
            if(distance < 15 && distance > -15 && alignment > 132 && alignment < 162) { 
              $("#jpiece3").css('top', position6.top - 147);
              $("#jpiece3").css('left', position6.left + 3);
            }
          }
          
          var curAngle2 = getRotationDegrees($("div#jpiece2 > img"));
          if(curAngle2 == 0) {
            position2 = $("#jpiece2").position();
            var distance = position.left - position2.left;
            var alignment = position2.top - position.top;
            if(distance < 212 && distance > 182 && alignment > -15 && alignment < 15) { 
              $("#jpiece3").css('top', position2.top);
              $("#jpiece3").css('left', position2.left + 197);
            }
          }
          
          if(position.left > 778 && position.left < 808 && position.top < 35 && position.top > 5) {
            $("#jpiece3").css('top', 20);
            $("#jpiece3").css('left', 793);
          }
        } /* ********* / jpiece3  ******/
        
        if(jid == "jpiece4") {
          var curAngle7 = getRotationDegrees($("div#jpiece7 > img"));
          if(curAngle7 == 0) {
            position7 = $("#jpiece7").position();
            var distance = position7.left - position.left;
            var alignment = position7.top - position.top;
            if(distance < 15 && distance > -15 && alignment > 176 && alignment < 206) { 
              $("#jpiece4").css('top', position7.top - 191);
              $("#jpiece4").css('left', position7.left);
            }
          }
          
          var curAngle5 = getRotationDegrees($("div#jpiece5 > img"));
          if(curAngle5 == 0) {
            position5 = $("#jpiece5").position();
            var distance = position5.left - position.left;
            var alignment = position5.top - position.top;
            if(distance < 211 && distance > 181 && alignment > -15 && alignment < 15) { 
              $("#jpiece4").css('top', position5.top);
              $("#jpiece4").css('left', position5.left - 196);
            }
          }
          
          var curAngle1 = getRotationDegrees($("div#jpiece1 > img"));
          if(curAngle1 == 0) {
            position1 = $("#jpiece1").position();
            var distance = position1.left - position.left;
            var alignment = position.top - position1.top;
            if(distance < 15 && distance > -15 && alignment > 132 && alignment < 162) { 
              $("#jpiece4").css('top', position1.top + 147);
              $("#jpiece4").css('left', position1.left);
            }
          }
          
          if(position.left > 385 && position.left < 415 && position.top < 182 && position.top > 152) {
            $("#jpiece4").css('top', 167);
            $("#jpiece4").css('left', 400);
          }
        }/* ********* / jpiece4  ******/
        
        if(jid == "jpiece5") {
          var curAngle8 = getRotationDegrees($("div#jpiece8 > img"));
          if(curAngle8 == 0) {
            position8 = $("#jpiece8").position();
            var distance = position8.left - position.left;
            var alignment = position8.top - position.top;
            if(distance < 15 && distance > -15 && alignment > 180 && alignment < 210) { 
              $("#jpiece5").css('top', position8.top - 195);
              $("#jpiece5").css('left', position8.left);
            }
          }
          
          var curAngle6 = getRotationDegrees($("div#jpiece6 > img"));
          if(curAngle6 == 0) {
            position6 = $("#jpiece6").position();
            var distance = position6.left - position.left;
            var alignment = position6.top - position.top;
            if(distance < 209 && distance > 179 && alignment > -15 && alignment < 15) { 
              $("#jpiece5").css('top', position6.top);
              $("#jpiece5").css('left', position6.left - 194);
            }
          }
          
          var curAngle4 = getRotationDegrees($("div#jpiece4 > img"));
          if(curAngle4 == 0) {
            position4 = $("#jpiece4").position();
            var distance = position.left - position4.left;
            var alignment = position4.top - position.top;
            if(distance < 211 && distance > 181 && alignment > -15 && alignment < 15) { 
              $("#jpiece5").css('top', position4.top);
              $("#jpiece5").css('left', position4.left + 196);
            }
          }
          
          var curAngle2 = getRotationDegrees($("div#jpiece2 > img"));
          if(curAngle2 == 0) {
            position2 = $("#jpiece2").position();
            var distance = position2.left - position.left;
            var alignment = position.top - position2.top;
            if(distance < 15 && distance > -15 && alignment > 132 && alignment < 162) { 
              $("#jpiece5").css('top', position2.top + 147);
              $("#jpiece5").css('left', position2.left);
            }
          }
          
          if(position.left > 581 && position.left < 611 && position.top < 182 && position.top > 152) {
            $("#jpiece5").css('top', 167);
            $("#jpiece5").css('left', 596);
          }
        } /*------ /jpiece5-------*/
        
        if(jid == "jpiece6") {
          var curAngle9 = getRotationDegrees($("div#jpiece9 > img"));
          if(curAngle9 == 0) {
            position9 = $("#jpiece9").position();
            var distance = position9.left - position.left;
            var alignment = position9.top - position.top;
            if(distance < 15 && distance > -15 && alignment > 180 && alignment < 210) { 
              $("#jpiece6").css('top', position9.top - 195);
              $("#jpiece6").css('left', position9.left - 1);
            }
          }
          
          var curAngle5 = getRotationDegrees($("div#jpiece5 > img"));
          if(curAngle5 == 0) {
            position5 = $("#jpiece5").position();
            var distance = position.left - position5.left;
            var alignment = position5.top - position.top;
            if(distance < 210 && distance > 190 && alignment > -15 && alignment < 15) { 
              $("#jpiece6").css('top', position5.top);
              $("#jpiece6").css('left', position5.left + 195);
            }
          }
          
          var curAngle3 = getRotationDegrees($("div#jpiece3 > img"));
          if(curAngle3 == 0) {
            position3 = $("#jpiece3").position();
            var distance = position3.left - position.left;
            var alignment = position.top - position3.top;
            if(distance < 15 && distance > -15 && alignment > 132 && alignment < 162) { 
              $("#jpiece6").css('top', position3.top + 147);
              $("#jpiece6").css('left', position3.left - 3);
            }
          }
          
          if(position.left > 776 && position.left < 806 && position.top < 182 && position.top > 152) {
            $("#jpiece6").css('top', 167);
            $("#jpiece6").css('left', 791);
          }
        } /*------/jpiece6------*/
        
        if(jid == "jpiece7") {
          var curAngle8 = getRotationDegrees($("div#jpiece8 > img"));
          if(curAngle8 == 0) {
            position8 = $("#jpiece8").position();
            var distance = position8.left - position.left;
            var alignment = position8.top - position.top;
            if(distance < 211 && distance > 191 && alignment > -15 && alignment < 15) { 
              $("#jpiece7").css('top', position8.top - 4);
              $("#jpiece7").css('left', position8.left - 196);
            }
          }
          
          var curAngle4 = getRotationDegrees($("div#jpiece4 > img"));
          if(curAngle4 == 0) {
            position4 = $("#jpiece4").position();
            var distance = position4.left - position.left;
            var alignment = position.top - position4.top;
            if(distance < 15 && distance > -15 && alignment > 176 && alignment < 206) { 
              $("#jpiece7").css('top', position4.top + 191);
              $("#jpiece7").css('left', position4.left);
            }
          }
          
          if(position.left > 385 && position.left < 415 && position.top < 373 && position.top > 343) {
            $("#jpiece7").css('top', 358);
            $("#jpiece7").css('left', 400);
          }
        }/*---- /jpiece7 -----*/
        
        if(jid == "jpiece8") {
          var curAngle9 = getRotationDegrees($("div#jpiece9 > img"));
          if(curAngle9 == 0) {
            position9 = $("#jpiece9").position();
            var distance = position9.left - position.left;
            var alignment = position9.top - position.top;
            if(distance < 211 && distance > 181 && alignment > -15 && alignment < 15) { 
              $("#jpiece8").css('top', position9.top);
              $("#jpiece8").css('left', position9.left - 196);
            }
          }
          
          var curAngle5 = getRotationDegrees($("div#jpiece5 > img"));
          if(curAngle5 == 0) {
            position5 = $("#jpiece5").position();
            var distance = position5.left - position.left;
            var alignment = position.top - position5.top;
            if(distance < 15 && distance > -15 && alignment > 180 && alignment < 210) { 
              $("#jpiece8").css('top', position5.top + 195);
              $("#jpiece8").css('left', position5.left);
            }
          }
          
          var curAngle7 = getRotationDegrees($("div#jpiece7 > img"));
          if(curAngle7 == 0) {
            position7 = $("#jpiece7").position();
            var distance = position.left - position7.left;
            var alignment = position7.top - position.top;
            if(distance < 211 && distance > 181 && alignment > -15 && alignment < 15) { 
              $("#jpiece8").css('top', position7.top + 4);
              $("#jpiece8").css('left', position7.left + 196);
            }
          }
          
          if(position.left > 581 && position.left < 611 && position.top < 377 && position.top > 347) {
            $("#jpiece8").css('top', 362);
            $("#jpiece8").css('left', 596);
          }
        }/*----- /jpiece8 ------*/
        
        if(jid == "jpiece9") {
          var curAngle6 = getRotationDegrees($("div#jpiece6 > img"));
          if(curAngle6 == 0) {
            position6 = $("#jpiece6").position();
            var distance = position6.left - position.left;
            var alignment = position.top - position6.top;
            if(distance < 15 && distance > -15 && alignment > 180 && alignment < 210) { 
              $("#jpiece9").css('top', position6.top + 195);
              $("#jpiece9").css('left', position6.left + 1);
            }
          }
          
          var curAngle8 = getRotationDegrees($("div#jpiece8 > img"));
          if(curAngle8 == 0) {
            position8 = $("#jpiece8").position();
            var distance = position.left - position8.left;
            var alignment = position8.top - position.top;
            if(distance < 211 && distance > 181 && alignment > -15 && alignment < 15) { 
              $("#jpiece9").css('top', position8.top);
              $("#jpiece9").css('left', position8.left + 196);
            }
          }
          
          if(position.left > 777 && position.left < 807 && position.top < 377 && position.top > 347) {
            $("#jpiece9").css('top', 362);
            $("#jpiece9").css('left', 792);
          }
        } /*---- /jpiece9 ----*/
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

      /*var degrees = getJDegrees($(element));
      
      function getJDegrees(obj) {
        var matrix = obj.css("-webkit-transform") ||
        obj.css("-moz-transform")    ||
        obj.css("-ms-transform")     ||
        obj.css("-o-transform")      ||
        obj.css("transform");
        if(matrix !== 'none') {
            var values = matrix.split('(')[1].split(')')[0].split(',');
            var a = values[0];
            var b = values[1];
            var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
        } else { var angle = 0; }
        return angle;
      }*/
      
      function transform(e) {
          //We're going to scale the X and Y coordinates by the same amount
           /*if(e.rotation > 30) {
             var cssScale = "scaleX("+ scaleFactor +") scaleY("+ scaleFactor +") rotateZ("+ degrees + 90 +"deg)";
           } else if(e.rotation < -30) {
             var cssScale = "scaleX("+ scaleFactor +") scaleY("+ scaleFactor +") rotateZ("+ degrees - 90 +"deg)";
           }*/
          
          element.css({
              webkitTransform: cssScale,
              webkitTransformOrigin: cssOrigin,

              transform: cssScale,
              transformOrigin: cssOrigin,
          });
      }
  }