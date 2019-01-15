let svgHomeMeBtnLanguages = document.getElementById('pathLanguages');
let svgCms = document.getElementById('pathLibrairy');
let svgTool = document.getElementById('pathTool');

let maskLanguages = document.getElementById('homeMaskBoxLanguages');
let maskCms = document.getElementById('homeBoxLibrairy');
let maskTool = document.getElementById('homeBoxTool');

let iSvgBtnL = 0;
let iSvgBtnC = 0;
let iSvgBtnT = 0;

let opacity =1;



function svgHomeMe() {
    if(iSvgBtnL === 0) {
        $(maskLanguages).css("transform", "scale(1)");
        //fadeOut(svgCms, svgTool);
        svgCms.style.display = 'none ';
        iSvgBtnL++;

    }
    else {
        $(maskLanguages).css("transform", "scale(0)");
        iSvgBtnL--;
    }
}


$(svgHomeMeBtnLanguages).click(function() {

    svgHomeMe();
});

function fadeOut(div1, div2) {
    intervalFadeOut = setInterval(hide, 100);

    function hide() {

        if(opacity > 0) {
            opacity = opacity - 0.1;
            div1.style.opacity = opacity;
            div2.style.opacity = opacity;
            console.log(opacity);
        }
        else {
            clearInterval(intervalFadeOut);
        }

    }
}



