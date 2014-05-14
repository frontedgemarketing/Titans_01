function mouseTrack (event) {
    mX = event.clientX;
    mY = event.clientY;
    //console.log(mX+'   '+mY);
    //alert(mX+'   '+mY);
}

function mouseClick(event){
    mX = event.clientX;
    mY = event.clientY;
    
    mX = event.pageX - $(event.target).offset().left;
    mY = event.pageY - $(event.target).offset().top;

    console.log(mX+'   '+mY);
}

function ReelsPassIcon(reelNumber){
    Stacks[reelNumber-1][5] = Stacks[reelNumber-1][4];
    Stacks[reelNumber-1][4] = Stacks[reelNumber-1][3];
    Stacks[reelNumber-1][3] = Stacks[reelNumber-1][2];
    Stacks[reelNumber-1][2] = Stacks[reelNumber-1][1];
    Stacks[reelNumber-1][1] = Stacks[reelNumber-1][0];
    Stacks[reelNumber-1][0] = RandInt(15, 1);

    for(var q = 5; q--;){
        document.getElementById("icon_"+reelNumber+"_"+(q+1)).src = 
            "img/tmp/icon"+Stacks[reelNumber-1][q]+"_win_00000.png";
    }
}
function ReelsDone(reelNumber){
    if(reelNumber == 5){
        APPSTATE = 10;
        TweenMax.to($("#play-button"), 0.5, {opacity:"1.0"});
        TweenMax.to($("#playmax-button"), 0.5, {opacity:"1.0"});
        TweenMax.to($("#playup-button"), 0.5, {opacity:"1.0"});
        TweenMax.to($("#playdown-button"), 0.5, {opacity:"1.0"});
        //$("#play-button").css("opacity", "1");
        // $("#playmax-button").css("opacity", "1");
        // $("#playup-button").css("opacity", "1");
        // $("#playdown-button").css("opacity", "1");
    }
        
}

var timeClickPlay = 0;
var timerClickPlay;
function ClickPlay(event){
    mX = event.pageX - $(event.target).offset().left;
    mY = event.pageY - $(event.target).offset().top;
    console.log(mX + "    " + mY)
    if(mX > 25 && mY > 30 && mX < 123 && mY < 138 && APPSTATE == 10){
        timeClickPlay = time();
        timerClickPlay = setInterval(AnimatePlayButton, FrameInterval);

        $(".reel").css("top", "-110px");
        if(nTotalSpinCount>0){
            for(var t=1; t<=5; t++){
                ReelsPassIcon(t);
            }
        }
        
        var d = 0;
        for(var q=0; q<5; q++){
            var tlm = new TimelineMax({delay:0.25 + 0.1*q});
            tlm.add(TweenLite.to($("#reel-"+(q+1)), 0.5, 
                {top:"-200px", ease:Strong.easeOut, delay:d}));
            tlm.add(TweenMax.to($("#reel-"+(q+1)), 0.25, 
                {top:"-110px", ease:Strong.easeIn, delay:d}));

            tlm.add(TweenMax.to($("#reel-"+(q+1)), 0.1, 
                {top:"-25px", ease:Linear.easeNone, repeat:12+q*3, delay:d,
                onRepeat:ReelsPassIcon, onRepeatParams:[q+1]}));
            
            tlm.add(TweenMax.to($("#reel-"+(q+1)), 0.25, 
                {top:"13px", ease:Strong.easeOut, delay:d}));
            tlm.add(TweenMax.to($("#reel-"+(q+1)), 0.75, 
                {top:"-13px", ease:Bounce.easeOut, delay:d, 
                onComplete:ReelsDone, onCompleteParams:[q+1]}));
        }

        //$("#play-button").css("opacity", "0.5");   

        nTotalSpinCount++;
        APPSTATE = 60000;
    }
}
function AnimatePlayButton(){
    var n = Math.ceil(((time() - timeClickPlay) / 1000) * 30);
    var row = 0;
    var col = 0;
    var w = 156, h = 138;
    if(n < 14){
        row = Math.floor(n / 5);
        col = n % 5;
        var x = -col * w;
        var y = -row * h;
        $("#play-button").css("background-position", x+"px "+y+"px");
    }
    else{
        $("#play-button").css("background-position", "0px 0px");
        TweenMax.to($("#play-button"), 2, {opacity:"0.25"});
        TweenMax.to($("#playmax-button"), 2, {opacity:"0.25"});
        TweenMax.to($("#playup-button"), 2, {opacity:"0.25"});
        TweenMax.to($("#playdown-button"), 2, {opacity:"0.25"});
        window.clearInterval(timerClickPlay);
    }
}



var timeClickMax = 0;
var timerClickMax;
function ClickPlayMax(){
    mX = event.pageX - $(event.target).offset().left;
    mY = event.pageY - $(event.target).offset().top;
    console.log(mX + "    " + mY)
    if(mX > 30 && mY > 38 && mX < 125 && mY < 138){
        timeClickMax = time();
        timerClickMax = setInterval(AnimatePlayMaxButton, FrameInterval);
    }
}
function AnimatePlayMaxButton(){
    var n = Math.ceil(((time() - timeClickMax) / 1000) * 30);
    var row = 0;
    var col = 0;
    var w = 156, h = 138;
    if(n < 14){
        row = Math.floor(n / 5);
        col = n % 5;
        var x = -col * w;
        var y = -row * h;
        $("#playmax-button").css("background-position", x+"px "+y+"px");
    }
    else{
        $("#playmax-button").css("background-position", "0px 0px");
        window.clearInterval(timerClickMax);
    }    
}




var timeClickPlayUp = 0;
var timerClickPlayUp;
function ClickPlayUp(){
    mX = event.pageX - $(event.target).offset().left;
    mY = event.pageY - $(event.target).offset().top;
    console.log(mX + "    " + mY)
    if(mX > 30 && mY > 38 && mX < 125 && mY < 138){
        timeClickPlayUp = time();
        timerClickPlayUp = setInterval(AnimatePlayUpButton, FrameInterval);
    }
}
function AnimatePlayUpButton(){
    var n = Math.ceil(((time() - timeClickPlayUp) / 1000) * 30);
    var row = 0;
    var col = 0;
    var w = 156, h = 138;
    if(n < 14){
        row = Math.floor(n / 5);
        col = n % 5;
        var x = -col * w;
        var y = -row * h;
        $("#playup-button").css("background-position", x+"px "+y+"px");
    }
    else{
        $("#playup-button").css("background-position", "0px 0px");
        window.clearInterval(timerClickPlayUp);
    }    
}






var timeClickPlayDown = 0;
var timerClickPlayDown;
function ClickPlayDown(){
    mX = event.pageX - $(event.target).offset().left;
    mY = event.pageY - $(event.target).offset().top;
    console.log(mX + "    " + mY)
    if(mX > 30 && mY > 38 && mX < 125 && mY < 138){
        timeClickPlayDown = time();
        timerClickPlayDown = setInterval(AnimatePlayDownButton, FrameInterval);
    }
}
function AnimatePlayDownButton(){
    var n = Math.ceil(((time() - timeClickPlayDown) / 1000) * 30);
    var row = 0;
    var col = 0;
    var w = 156, h = 138;
    if(n < 14){
        row = Math.floor(n / 5);
        col = n % 5;
        var x = -col * w;
        var y = -row * h;
        $("#playdown-button").css("background-position", x+"px "+y+"px");
    }
    else{
        $("#playdown-button").css("background-position", "0px 0px");
        window.clearInterval(timerClickPlayDown);
    }    
}