function setUp(){
    setLayout()
    setGfx();
    setEvents();
}

function setEvents(){
    var ol = document.getElementById("game-overlay");
    ol.onmousemove = mouseTrack;
    ol.onmousedown = mouseClick;

    var bPlay = document.getElementById("play-button");
    bPlay.onmousedown = ClickPlay;

    var bPlayMax = document.getElementById("playmax-button");
    bPlayMax.onmousedown = ClickPlayMax;

    var bPlayUp = document.getElementById("playup-button");
    bPlayUp.onmousedown = ClickPlayUp;

    var bPlayDown = document.getElementById("playdown-button");
    bPlayDown.onmousedown = ClickPlayDown;
}

function setLayout(){
    var x = 76;
    var xD = 113;

    $(".reel").css("width", xD + "px");
    for(var q=0; q<5; q++)
        $("#reel-"+(q+1).toString()).css("left", (x + q*xD) + "px");

    // stats-box
    $("#stats-box").css("width", "215px");
    $("#stats-box").css("height", "95px");
    $("#stats-box").css("bottom", "0px");
    $("#stats-box").css("left", "25px");

    // Buttons
    $(".button").css("width", "156px");
    $(".button").css("height", "138px");
    $(".button").css("bottom", "0px");

    // play button
    $("#play-button").css("left", "543px");

    // playmax button
    $("#playmax-button").css("left", "418px");    

    // playup button
    $("#playup-button").css("left", "315px");    

    // playdown button
    $("#playdown-button").css("left", "218px");    

    // create icons
    for(var q=0; q<5; q++){
        Stacks[q] = new Array();
        for(var w=0; w<6; w++){
            var r = RandInt(15, 1);
            Stacks[q][w] = r;
            var str = "";
            str += "<img id = 'icon_"+(q+1)+"_"+(w+1)+"' ";
            str += "src='img/tmp/icon"+r+"_win_00000.png' />";        
            $("#reel-"+(q+1)).append(str);
        }
    }
}

function setGfx(){
    $("#game").css("background-image", "url('img/bg.png')");
    $("#game-overlay").css("background-image", "url('img/overlay.png')");
    $("#play-button").css("background-image", "url('img/buttons/play_push_po2_4b_1s.png')");
    $("#play-button").css("background-image", "url('img/buttons/play_push_po2_4b_1s.png')");
    $("#playmax-button").css("background-image", "url('img/buttons/playMax_push_po2_4b_1s.png')");
    $("#playup-button").css("background-image", "url('img/buttons/playUp_push_po2_4b_1s.png')");
    $("#playdown-button").css("background-image", "url('img/buttons/playDown_push_po2_4b_1s.png')");
    $("#stats-box").css("background-image", "url('img/prizeAmountTotal.png')");
}