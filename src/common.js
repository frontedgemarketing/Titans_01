/////////////////////////////////////////////////////////////
// Common Operations
function FormatInteger(num, length) {
		    return (num / Math.pow(10, length)).toFixed(length).substr(2);
}
function float2int(n){
	return n | 0;
}
/////////////////////////////////////////////////////////////
// 2D Transform Functions for mapping back to Kore
function tX(n){
	return n * canvas.width / 1440;
}
function tY(n){
	return n * canvas.height / 900;
}

function RandInt(range, min){
    return Math.floor((Math.random()*range) + min);
}

var Vector2D = {
    x: 0,
    y: 0
}

//////////////////////////////////////////////////////////////
// Request Animation Frame
window.requestAnimFrame = function(){
    return (
        window.requestAnimationFrame       || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(/* function */ callback){
            window.setTimeout(callback, 1000 / 20);
        }
    );
}();
///////////////////////////////////////////////////////////////

















