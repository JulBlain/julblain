let svgHomeMeBtnLanguages = document.getElementById('pathLanguages');
let svgCms = document.getElementById('pathLibrairy');
let svgTool = document.getElementById('pathTool');

let maskLanguages = document.getElementById('homeMaskBoxLanguages');
let maskCms = document.getElementById('homeMaskBoxLibrairy');
let maskTool = document.getElementById('homeMaskBoxTool');

let iSvgBtnL = 0;
let iSvgBtnC = 0;
let iSvgBtnT = 0;

$(svgHomeMeBtnLanguages).click(function() {
    if(iSvgBtnL === 0) {
        $(maskLanguages).css("transform", "scale(1)");
        document.getElementById("svgLibrairy").style.animation = "fadeOut 0.5s forwards";

        document.getElementById("svgTool").style.animation ="fadeOut 0.5s forwards";


        setTimeout(function () {
            document.getElementById("svgLibrairy").style.display = "none";
            document.getElementById("svgTool").style.display ="none";
        }, 500);
        iSvgBtnL++;
    }
    else {
        $(maskLanguages).css("transform", "scale(0)");
        document.getElementById("svgLibrairy").style.display = "block";
        document.getElementById("svgTool").style.display ="block";
        document.getElementById("svgLibrairy").style.animation = "fadeIn 0.5s forwards";
        document.getElementById("svgTool").style.animation ="fadeIn 0.5s forwards";
        iSvgBtnL--;

        setTimeout(function () {
            document.getElementById("svgLibrairy").style.animation = "levitate 3s infinite,flicker 3s infinite";
            document.getElementById("svgTool").style.animation ="levitate 3s infinite,flicker 3s infinite";
        }, 500);
    }
});

$(svgCms).click(function () {
    if(iSvgBtnC === 0) {
        $(maskCms).css("transform", "scale(1)");
        document.getElementById("svgTool").style.animation ="fadeOut 0.5s forwards";
        document.getElementById("svgLanguages").style.animation = "fadeOut 0.5s forwards";


        setTimeout(function () {
            document.getElementById("svgLanguages").style.display = "none";
            document.getElementById("svgTool").style.display ="none";
        }, 500);
        iSvgBtnC++;
    }
    else {
        $(maskCms).css("transform", "scale(0)");
        document.getElementById("svgLanguages").style.display = "block";
        document.getElementById("svgTool").style.display ="block";
        document.getElementById("svgLanguages").style.animation = "fadeIn 0.5s forwards";
        document.getElementById("svgTool").style.animation ="fadeIn 0.5s forwards";
        iSvgBtnC--;

        setTimeout(function () {
            document.getElementById("svgLanguages").style.animation = "levitate 3s infinite,flicker 3s infinite";
            document.getElementById("svgTool").style.animation ="levitate 3s infinite,flicker 3s infinite";
        }, 500);
    }
});

$(svgTool).click(function () {
    if(iSvgBtnT === 0) {
        $(maskTool).css("transform", "scale(1)");
        document.getElementById("svgLibrairy").style.animation ="fadeOut 0.5s forwards";
        document.getElementById("svgLanguages").style.animation = "fadeOut 0.5s forwards";


        setTimeout(function () {
            document.getElementById("svgLanguages").style.display = "none";
            document.getElementById("svgLibrairy").style.display ="none";
        }, 500);
        iSvgBtnT++;
    }
    else {
        $(maskTool).css("transform", "scale(0)");
        document.getElementById("svgLanguages").style.display = "block";
        document.getElementById("svgLibrairy").style.display ="block";
        document.getElementById("svgLanguages").style.animation = "fadeIn 0.5s forwards";
        document.getElementById("svgLibrairy").style.animation ="fadeIn 0.5s forwards";
        iSvgBtnT--;

        setTimeout(function () {
            document.getElementById("svgLanguages").style.animation = "levitate 3s infinite,flicker 3s infinite";
            document.getElementById("svgLibrairy").style.animation ="levitate 3s infinite,flicker 3s infinite";
        }, 500);
    }
})



