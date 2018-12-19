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

