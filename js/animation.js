/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/* Coach Jane */

function CoachJane(idName, top, left) {
    this.idName = idName;
    this.idNameHead = this.idName + "head";
    $(this.idNameHead).attr("src","css/images/coach/jane/janehead.png");
    $(this.idName).hide();
    $(this.idNameHead).hide();
    $(this.idName).css('top', top);
    $(this.idName).css('left', left);
    $(this.idName).css('height', 270);
    $(this.idName).css('width', 220);
    $(this.idNameHead).css('height', 200);
    $(this.idNameHead).css('width', 200);
    this.headHeightOffet = 165;
    this.headWidthOffet = (parseFloat($(this.idName).css('width'))/2) 
    - parseFloat($(this.idNameHead).css('width'))/2;
    this.updateHead(30, 0);
    this.entranceFCount = 11;
    this.exitFCount = 14;
    this.imgPathEntrance = "css/images/coach/jane/a";
    this.imgPathExit = "css/images/coach/jane/z";
}

CoachJane.prototype = {
    getIdName: function() {
        return this.idName;
    },
    entrance: function(callback) {
        var dust1 = null;
        var dust2 = null;
        var dust3 = null;
        var instance = this;
        setSelectedFrame(instance.idName, 1, instance.imgPathEntrance);
        $(this.idName).show()
        $(this.idNameHead).show()
        var headTimer=setInterval(function() {
            instance.updateHead(40, 20);
        },2);        
        $(this.idName).animate({
            top: "200px",
            left: "100px"
        }, 220).animate({
            top: "200px",
            left: "200px"
        }, 220).animate({
            top: "250px",
            left: "280px"
        }, 220).animate({
            top: "300px",
            left: "300px"
        }, 220, "swing", function() {
            clearInterval(headTimer);
            instance.updateHead(30, 0);
            var t = parseFloat($(instance.idName).css('top')) 
            + parseFloat($(instance.idName).css('height')) - 60;
            var l = parseFloat($(instance.idName).css('left')) 
            + (parseFloat($(instance.idName).css('width'))/2);
            dust1 = new Dust("#dust1", t, l, 60, 200, 1000);
            dust2 = new Dust("#dust2", t + 20, l - 10, 40, 100, 1000);
            dust3 = new Dust("#dust3", t + 40, l - 20, 20, 50, 1000);
            dust1.start();
            dust2.start();
            dust3.start();
            callback();
            var coachFrame = 1;
            var frameTimer = setInterval(function() {
                setSelectedFrame(instance.idName, coachFrame, instance.imgPathEntrance);
                if (coachFrame <= 4) {
                    instance.updateHead(30, 20);
                } else if (coachFrame <= 5) {
                    instance.updateHead(40, 30);
                } else {
                    instance.updateHead(0, 3);
                }
                coachFrame = coachFrame + 1;
                if (coachFrame > instance.entranceFCount) {
                    clearInterval(frameTimer);
                }
            }, 100);
        });
    },
    exit: function() {
        var instance = this;
        var coachFrame = 1;
        var frameTimer = setInterval(function() {
            setSelectedFrame(instance.idName, coachFrame, instance.imgPathExit);
            if (coachFrame == 8) { 
                instance.updateHead(5, 0);
            } else if (coachFrame == 9) {
                instance.updateHead(40, 0);
            } else if (coachFrame == 10) {
                instance.updateHead(50, -6);
            } else if (coachFrame == 11) { 
                instance.updateHead(25, -3);
            } else if(coachFrame == 12 || coachFrame == 13) {
                instance.updateHead(15, -20);
            } else if(coachFrame == 14) {
                instance.updateHead(15, -70);
            } else {
                instance.updateHead(0, 3);
            }
            coachFrame = coachFrame + 1;
            if (coachFrame > instance.exitFCount) {
                clearInterval(frameTimer);
                var headTimer=setInterval(function() {
                    instance.updateHead(30, -70);
                },2);
                $(instance.idName).animate({
                    top: "250px",
                    left: "280px"
                }, 200).animate({
                    top: "200px",
                    left: "200px"
                }, 200).animate({
                    top: "200px",
                    left: "100px"
                }, 200).animate({
                    top: "250px",
                    left: "0px"
                }, 200).animate({
                    top: "400px",
                    left: "-300px"
                }, 200, "swing",
                function() {
                    clearInterval(headTimer);
                    $(instance.idNameHead).hide();
                    $(instance.idName).hide();
                });
            }
        }, 100);
    },
    updateHead: function(addTop, addLeft) {        
        $(this.idNameHead).css('top', parseFloat($(this.idName).css('top')) - this.headHeightOffet + addTop);
        $(this.idNameHead).css('left', parseFloat($(this.idName).css('left')) + this.headWidthOffet + addLeft);
    }    
};

/* Dust */

function Dust(idName, top, left, height, width, maxLeft) {
    this.idName = idName;
    $(this.idName).hide();
    $(this.idName).css('top', top);
    $(this.idName).css('left', left);
    $(this.idName).css('height', height);
    $(this.idName).css('width', width);
    this.maxLeft = maxLeft;
    this.pathPrefix = "css/images/misc/dust";
}

Dust.prototype = {
    getIdName: function() {
        return this.idName;
    },
    start: function() {
        $(this.idName).attr("src", this.pathPrefix + 1 + ".png");
        $(this.idName).show();
        var instance = this;

        var frame = 1;
        var frameTimer = setInterval(function() {
            $(instance.idName).attr("src", instance.pathPrefix + frame + ".png");
            frame = frame + 1;
            if (frame > 5) {
                clearInterval(frameTimer);
            }
        }, 2500);

        var sizeH = 0;
        var sizeW = 0;
        var sizeT = 0;
        var sizeTimer = setInterval(function() {
            $(instance.idName).css('top', parseFloat($(instance.idName).css("top")) - sizeT);
            $(instance.idName).css('height', parseFloat($(instance.idName).css("height")) + sizeH);
            $(instance.idName).css('width', parseFloat($(instance.idName).css("width")) + sizeW);
            sizeH = sizeH + 0.009;
            sizeW = sizeW + 0.05;
            sizeT = sizeT + 0.01;
            if (sizeH > 50 || sizeW > 50) {
                clearInterval(sizeTimer);
            }
        }, 200);

        var movementTimer = setInterval(function() {
            $(instance.idName).css('left', parseFloat($(instance.idName).css("left")) + 1.5);
            if (parseFloat($(instance.idName).css("left")) > instance.maxLeft) {
                $(instance.idName).hide();
                clearInterval(movementTimer);
                clearInterval(frameTimer);
                clearInterval(sizeTimer);
            }
        }, 200);
    }
};

/* Coach Bubble Talk  */

function CoachBubbleTalk(idName, top, left, height, width, direction, string) {
    this.idName = idName;
    $(this.idName).hide();
    $(this.idName).css('top', top);
    $(this.idName).css('left', left);
    $(this.idName).css('height', height);
    $(this.idName).css('width', width);
    $(this.idName).text(string);
    if (direction == 1) {
        $(this.idName).addClass("coachtalkbubbleleft");
    } else {
        $(this.idName).addClass("coachtalkbubbleright");
    }
}

CoachBubbleTalk.prototype = {
    getIdName: function() {
        return this.idName;
    },
    show: function() {
        $(this.idName).show();
    },
    hide: function() {
        $(this.idName).hide();
    }
};


function setSelectedFrame(idName, nthFrame, path) {
    $(idName).attr("src",path+nthFrame+".png");
}
