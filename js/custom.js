$(function(){

    $('.flexslider').flexslider({  //apply slider
        animation: "slide",
        animationLoop: false,
        itemWidth: 200,
        itemMargin: 5,
        pausePlay: true
    });
      

    //create element on the hold event of slider
    $('.slides img').hammer().on("hold", function(event) {
        if (confirm('Do you want to purchase this item?')) {
            //alert('hi');
            var parentDivId = getRandomNumber(999999, 9999999999),
            imgItemId = getRandomNumber(999999, 9999999999);
            var parentDiv = $('<div></div>', {
                id : parentDivId,
                class : 'dragImg'
            }).appendTo($('#spacegallery'));
            $('<img>',{
                class : 'dragImg',
                src : $(this).attr('src'),
                id : imgItemId,
                style : ''
            }).appendTo(parentDiv);

            //attach events to newly created element
            hame('#'+parentDivId, '#'+imgItemId, 0, '', '');
        }
        else {
        }
    });

    if(!Hammer.HAS_TOUCHEVENTS && !Hammer.HAS_POINTEREVENTS) {
        Hammer.plugins.fakeMultitouch();
    }


    //create elements and bind events stored in cookie on the load of page
    if(cookieData = getCookie('spaceItems')) {
        if(elementsObj = $.parseJSON(cookieData)) {

            var containerEle = $("#spacegallery");

            $.map(elementsObj, function(ob){
                if(ob.id != undefined && ob.childEle != undefined) {
                    var eleStyle = ob.style.replace(/=/g, ';');
                    eleStyle = eleStyle.replace(/lorem/g, ',');
                    var newEle = $('<div></div>',{
                        class : 'dragImg',
                        style : eleStyle,
                        id : ob.id
                    }).appendTo(containerEle);


                    var childStyle = ob.childEle.style.replace(/=/g, ';');
                    childStyle = childStyle.replace(/lorem/g, ',');
                    var newEle = $('<img>',{
                        class : 'dragImg',
                        style : childStyle,
                        id : ob.childEle.id,
                        src : ob.childEle.src
                    }).appendTo(newEle);

                    hame('#'+ob.id, '#'+ob.childEle.id, 1, getElementStyleVal(childStyle, 'rotateZ', 'deg'), getElementStyleVal(childStyle, 'scaleX', ''));
                }
            });            
        }
    }
});

function hame(con,box,fRotate, oAngle, oldSFactor){
    // create a hammer instance
    var co = $(con).hammer({
        prevent_default: true,
        drag: true,
        transform: true,
        touch: true,
        drag_min_distance: 0,
        transform_min_rotation: 0,
        transform_min_scale: 0
    });

    var b = $(box);

    // minimal and maximal zoom size
    var MIN_ZOOM = -5;
    var MAX_ZOOM = 5;
    // default scale factor
    var scaleFactor = 1;
    var previousScaleFactor = (oldSFactor != '') ? parseFloat(oldSFactor) : 1;

    // coordinates for the manipulation (scale/rotate)
    // t1X/t1Y/t2X/t2Y - position of the touches
    // tcX/tcy - center of the 2 touches
    // cssOrigin value in px for the css manipulation origin
    var t1X = 0,
        t1Y = 0,
        t2X = 0,
        t2Y = 0,
        tcX = 0,
        tcY = 0,
        cssOrigin = "";

    // current and previous angle
    var angle = 0;
    var angleOld = (oAngle != '') ? parseFloat(oAngle) : 0;

    // variable that tells if the oject is leveled or it has been rotated before
    var firstRotate = (fRotate == 1) ? false : true;

    var orOld = "";

    co.on("transformstart", function(e){
        // get the original positions of the 2 fingers
        t1X = e.gesture.touches[0].pageX;
        t1Y = e.gesture.touches[0].pageY;
        t2X = e.gesture.touches[1].pageX;
        t2Y = e.gesture.touches[1].pageY;

        // the coordinates for the middle point of the 2 fingers
        tcX = (t1X+t2X)/2;
        tcY = (t1Y+t2Y)/2;

        // the initial top and left position of the object
        var left = b.offset().left;
        var top = b.offset().top;

        // setting the origin of the css transform property
        cssOrigin = (-(left) + tcX)/scaleFactor +"px "+ (-(top) + tcY)/scaleFactor +"px";
    });

    co.on("transform", function(e) {
        // setting the new scale factor
        scaleFactor = previousScaleFactor * e.gesture.scale;
        scaleFactor = Math.max(MIN_ZOOM, Math.min(scaleFactor, MAX_ZOOM));
        // setting the angle and scale

        transform(e);
    });
    function transform(e) {
        //getting the new object angle
        angle = e.gesture.rotation;

        // if the object wanst rotated before starts ant 0deg
        if(firstRotate==true){
            orOld= cssOrigin;
            var cssScale = "scaleX("+ scaleFactor +") scaleY("+ scaleFactor +") rotateZ("+ angle +"deg)";
            b.css({
                webkitTransform : cssScale,
                webkitTransformOrigin : cssOrigin,
                transform : cssScale,
                transformOrigin : cssOrigin
            });
        }else{
            // if the object was rotated the new angle is added to the previous angle
            angle = angleOld+angle;
            var cssScaleR = "scaleX("+ scaleFactor +") scaleY("+ scaleFactor +") rotateZ("+ angle +"deg)";
            b.css({
                webkitTransform : cssScaleR,
                webkitTransformOrigin : orOld,
                transform : cssScaleR,
                transformOrigin : orOld
            });
        }
    }

    co.on("transformend", function(e) {
        // scale factor update
        previousScaleFactor = scaleFactor;
        // a rotation was complete
        firstRotate = false;
        // setting the old angle and checking if it goes ove 360deg
        angleOld = angle;
        if(angleOld >=360){
            angleOld = angleOld - 360;
        }else if(angleOld <= -360){
            angleOld = angleOld + 360;
        }

        //save element attributes in cookie
        //saveState(angleOld, previousScaleFactor);
        saveState();
        
    });

    //
    // DRAG
    //
    var c = $(con);
    // initial top and left properties of the dragged object
    var startX = c.offset().left;
    var startY = c.offset().top;
    // current coordinates of the object
    var curX = 0;
    var curY = 0;
    // the offset from the borders  of the object to the touch location
    var offX = 0;
    var offY = 0;

    co.on("dragstart", function(e){
        // getting the initial location
        startX = c.offset().left;
        startY = c.offset().top;
        // the touch offset from the object borders
        offX = e.gesture.center.pageX - startX;
        offY = e.gesture.center.pageY - startY;
    });

    co.on("drag", function(e){
        //new coordinates
        curX = e.gesture.center.pageX - offX;
        curY = e.gesture.center.pageY - offY;
        //updating the css
        c.css({left : curX});
        c.css({top : curY});

        //save element attributes in cookie
        saveState();
    });

    var spaceEle = {};

    //store attributes of all active elements to cookie
    function saveState() {
        var elements = $('#spacegallery').find('div.dragImg');
        $.map(elements, function(ele){
            var tmpEle = $(ele);
            var eleStyle = tmpEle.attr('style').replace(/;/g, '=');
            eleStyle = eleStyle.replace(/,/g, 'lorem');

            var childEle = tmpEle.find('img.dragImg');
            var childStyle = childEle.attr('style').replace(/;/g, '=');
            childStyle = childStyle.replace(/,/g, 'lorem');
            imgObj = {
                id : childEle.attr('id'),
                style : childStyle,
                src : childEle.attr('src')
            };

            var saveObj = {
                id : tmpEle.attr('id'),
                style : eleStyle,
                childEle : imgObj
            };
            spaceEle[tmpEle.attr('id')] =  saveObj;            
        });
        document.cookie =  'spaceItems='+ JSON.stringify(spaceEle);
    }
}

function getRandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//get cookie data according to the cookie name passed
function getCookie(cookieName) {
    var cookieContent = document.cookie,
    cStart = cookieContent.indexOf(cookieName+'=');

    if(cStart == -1){
        return false;
    }
    else {
        var cStart = cookieContent.indexOf('=', cStart)+1,
        cEnd = cookieContent.indexOf(';', cStart);

        if(cEnd == -1) {
            cEnd = cookieContent.length;
        }
        var cValue = cookieContent.substring(cStart, cEnd);
        return cValue;
    }

}


//extract the value in style of img element like scaleX(1.3454646) results 1.3454646
// accept whole style attribut as first arg and second as the value to be extracted like scaleX
// third arg is if we want to clip value from last
function getElementStyleVal(str, key, clipStr) {
    var finalVal = '';
    if(str.indexOf(key) != -1) {
        var start = str.indexOf(key);
        start = str.indexOf('(', start)+1;
        var end = str.indexOf(')', start);

        if(clipStr != '')
            end = end - clipStr.length;

        finalVal = str.substring(start, end);
    }
    return finalVal;
}