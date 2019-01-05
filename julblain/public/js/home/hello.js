


new CircleType(document.getElementById('btnHappyTxt'));
let truc = document.querySelector('#btnHappyTxt > div');

var btnHappy = document.createElement('button');
btnHappy.id = "btnHappyCircle" ;
truc.appendChild(btnHappy);



$('#homeTitle .letters').each(function(){

    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));


});


anime.timeline({loop: false})
    .add({
        targets: '.helloWord',
        scale: [14,1],
        opacity: [0,1],
        easing: "easeOutCirc",
        duration: 700,
        delay: function(el, i) {
            return 700 * i;
        }
    });



    anime.timeline({loop: false})
        .add({
        targets: '#homeTitle .letter',
        scale: [0, 1],
        duration: 1000,
        elasticity: 600,
        delay: function(el, i) {
            return 110 * (i+1)
        }
    });

