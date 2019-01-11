let svgHomeMeNF = document.getElementById('pathLanguages');
let maskMe = document.getElementById('homeMaskBoxLanguages');
let iSvgBtn = 0;

function svgHomeMe() {
    if(iSvgBtn === 0) {
        $(maskMe).css("transform", "scale(1)");
        iSvgBtn++;
    }
    else {
        $(maskMe).css("transform", "scale(0)");
        iSvgBtn--;
    }
}


$(svgHomeMeNF).click(function() {
    svgHomeMe();

});
