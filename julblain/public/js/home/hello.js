//http://tobiasahlin.com/moving-letters/#
anime.timeline({loop: false})
    .add({
        targets: '.helloWord',
        scale: [14,1],
        opacity: [0,1],
        easing: "easeOutCirc",
        duration: 800,
        delay: function(el, i) {
            return 800 * i;
        }
    });

/*anime.timeline({loop: false})
    .add({
        targets: '#homeBtn .circle-white',
        scale: [0, 3],
        opacity: [1, 0],
        easing: "easeInOutExpo",
        rotateZ: 360,
        duration: 1100
    }).add({
    targets: '#homeBtn .circle-container',
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: '-=1000'
}).add({
    targets: '#homeBtn .circle-dark',
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    offset: '-=600'
}).add({
    targets: '#homeBtn .letters-left',
    scale: [0, 1],
    duration: 1200,
    offset: '-=550'
}).add({
    targets: '#homeBtn .bang',
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1200,
    offset: '-=1000'
});

anime({
    targets: '#homeBtn .circle-dark-dashed',
    rotateZ: 360,
    duration: 8000,
    easing: "linear",
    loop: true
});*/