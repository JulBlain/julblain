var draw2 = {
    vertices :  [],
    t : 1,
    t2 : 0,// variable to hold how many frames have elapsed in the animation
    draw2ed : 0,
    points : "",
    waypoints : [],


    init : function (divCanvas, canvasWidth, canvasHeight, colorPen, lineWidth, lineJoin, lineCap)
    {
        var self = this;
        this.canvas = divCanvas;
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.colorPen = colorPen;
        this.lineWidth = lineWidth;
        this.context = this.canvas.getContext("2d"); //suppression [0]
        this.context.lineJoin = lineJoin;
        this.context.lineCap = lineCap;


        this.calcVertices();
        this.points = this.calcWaypoints();
        this.animate();
        this.draw2ed++;
    },

    calcVertices : function () {
        var homeFirstLineX = Math.round(this.canvas.width / 1.5);
        var homeFirstLineY = Math.round(this.canvas.height / 1.5);

        this.vertices.push({
            x: 0,
            y: 0
        });
        this.vertices.push({
            x: homeFirstLineX,
            y: homeFirstLineY
        });
        this.vertices.push({
            x: 0,
            y: this.canvas.height
        });
        this.vertices.push({
            x: 0,
            y: 0
        });
    },

    calcWaypoints : function () {

        for (var i = 1; i < this.vertices.length; i++) {
            var pt0 = this.vertices[i - 1];
            var pt1 = this.vertices[i];
            var dx = pt1.x - pt0.x;
            var dy = pt1.y - pt0.y;
            for (var j = 0; j < 60; j++) {
                var x = pt0.x + dx * j / 60;
                var y = pt0.y + dy * j / 60;
                this.waypoints.push({
                    x: x,
                    y: y
                });
            }
        }
        return (this.waypoints);
    },

    animate : function () {
        if (draw2.t < draw2.points.length - 1) {
            requestAnimationFrame(draw2.animate);

        }
        else {
            draw2.context.beginPath();
            draw2.context.moveTo(draw2.points[draw2.t - 1].x, draw2.points[draw2.t - 1].y);
            draw2.context.lineTo(0, 0);
            draw2.context.strokeStyle = draw2.colorPen;
            draw2.context.lineWidth = draw2.lineWidth;
            draw2.context.stroke();

            draw2.triangle();
            return;

        }
        // draw2 a line segment from the last waypoint
        // to the current waypoint
        draw2.context.beginPath();
        draw2.context.moveTo(draw2.points[draw2.t - 1].x, draw2.points[draw2.t - 1].y);
        draw2.context.lineTo(draw2.points[draw2.t].x, draw2.points[draw2.t].y);

        draw2.context.strokeStyle = draw2.colorPen;
        draw2.context.lineWidth = draw2.lineWidth;
        draw2.context.stroke();
        // increment "t" to get the next waypoint
        draw2.t++;

    },

    triangle : function () {
        if (draw2.t2 < 1000) {
            requestAnimationFrame(draw2.triangle); //permet de gerer l'animation sans saccade
        }

        draw2.context.beginPath();
        draw2.context.moveTo( draw2.vertices[0].x, draw2.vertices[0].y);
        draw2.context.lineTo( draw2.vertices[1].x, draw2.vertices[1].y);
        draw2.context.lineTo( draw2.vertices[2].x, draw2.vertices[2].y);
        draw2.context.lineTo( draw2.vertices[3].x, draw2.vertices[3].y);

        var opacity = draw2.t2 ;
        draw2.context.fillStyle = "rgba(255, 192, 0, "+ opacity + ")" ;
        draw2.context.fill();
        draw2.t2 = draw2.t2 + 0.001;

    },

};

//librairy inView js, draw2 in canvas.js
$('#homeMe').on('inview', function (event, isInView) {
    if((isInView) && (draw2.draw2ed === 0 )){
        draw2.init(
            document.getElementById("meCanvas"),
            document.getElementById("meCanvas").offsetWidth,
            document.getElementById("meCanvas").offsetHeight,
            "#ffc000", 1, "round", "round");


    }

})