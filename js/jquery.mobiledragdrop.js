(function($) {
    var currentDrag = "";
    var ruleChecked = false;
    var dragCounter = 0;
    var mouseX = 0;
    var mouseY = 0;
    var liftX = 0;
    var liftY = 0;
	
    $(document).bind('mousemove touchmove', function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
        
        var w = parseInt($("#draggedElement").width());
        var h = parseInt($("#draggedElement").height());
        
        $("#draggedElement").css({
            top: (mouseY-(h/2))+"px", 
            left: (mouseX-(w/2))+"px"
        });
    }); 

    function isValidDrop(id) {
        var returnValue = false;
        var currentDragParent = "#" + $(currentDrag).parent().attr("id");
        if (currentDragParent == id) {
            if (ruleChecked) {
                returnValue = true;
            } else {
                returnValue = false;
            }
        } else {
            returnValue = true;
        }
        ruleChecked = true;
		
        return returnValue;
    }

    function ProcessDragEvent(id, dragCallback) {
        currentDrag = id;
        ruleChecked = false;
        $("#draggedElement").remove();        
        var g = $(currentDrag).clone();
        g.attr("id", "draggedElement");
        g.css("position", "absolute");
        g.css("top", "-1000px");
        g.css("left", "-1000px");        
        g.css("background-image", $(currentDrag).css("background-image"));
        g.css("background-size", $(currentDrag).css("background-size"));
        g.css("background-repeat", "no-repeat");  
        g.css("height", $(currentDrag).css("height"));
        g.css("width", $(currentDrag).css("width"));
        g.css("z-index", "999999");
        g.appendTo("body").fadeTo(0, 0.8);
        dragCallback();
    }
	
    function ProcessDropEvent(id, dropCallback, x, y) {
        if (isValidDrop(id)) {
            dropCallback(id, currentDrag, x, y);
        }        
    }
	
    $.fn.mobiledraganddrop = function (settings) {
        var config = {
            classmodifier: "mobiledraganddrop",
            targets: ".drop",
            dragCallback: function() {},
            dropCallback: function(dropSelector, currentDrag, x, y) {}
        };
		
        dragCounter++;
        var selectorForDropZones = "";
        var selectorForDraggables = "";

        if (settings) {
            $.extend(config, settings);
        }

        selectorForDropZones = "." + config.classmodifier + dragCounter + "drop";
        $(config.targets).addClass(config.classmodifier + dragCounter + "drop");
			
        selectorForDraggables = "." + config.classmodifier + dragCounter + "drag";
        $(this).addClass(config.classmodifier + dragCounter + "drag");
			
        $(selectorForDraggables).unbind("mousedown");
        $(selectorForDraggables).unbind("touchstart");
        $(selectorForDraggables).live("mousedown touchstart", function() {
            var id = "#" + $(this).attr("id");
            ProcessDragEvent(id, config.dragCallback);
            return false;
        });

        $("#draggedElement").live("mouseup touchend", function () {        
            var x = $(this).offset().left;
            var y = $(this).offset().top;            
            $("#draggedElement").remove();
            $(config.targets).each(function() {
                var pos = $(this).offset();
                var l = parseInt(pos.left);
                var t = parseInt(pos.top);
                var w = (parseInt(pos.left) + parseInt($(this).width()));
                var h = (parseInt(pos.top) + parseInt($(this).height()));            
                if (x >= l && x <= w && y >= t && y <= h) {
                    ProcessDropEvent("#"+$(this).attr("id"), config.dropCallback, x, y);
                }         
            });
        });

    };
})(jQuery);