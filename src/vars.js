var APPSTATE = 10;
var FrameInterval = 50;
var StartTime = new Date().getTime();
var oldTime = new Date().getTime();
function time(){
    var now = new Date().getTime();
    return now - StartTime;
}

var Stacks = new Array(new Array());

var mX = 0, mY = 0;

var nTotalSpinCount = 0;




