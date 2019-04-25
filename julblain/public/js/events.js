$(document).ready(function(){
    //nav
    $('.toggle').click(function(){

        $('.toggle').toggleClass('active');
        $('#header').toggleClass('active');
        $('.borderScreen').toggleClass('borderScreen-active');
        $('.footer').toggleClass('footer-active');
        $("#navPublic").toggle('slow');

    });
});




/*
$('.btn-primary').hover(function(){

    $('.btn-primary').addClass('hover');
});
*/