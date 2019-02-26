var draw3 = {
    vertices :  [],
    t : 1,
    t2 : 0,// hold how many frames have elapsed in the animation
    draw3ed : 0,
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
        this.draw3ed++;
    },

    calcVertices : function () {
        var homeFirstLineX = Math.round(this.canvas.width / 1.5);
        var homeFirstLineY = Math.round(this.canvas.height / 1.5);

        if(draw3.canvas.width > draw3.canvas.height) {
            console.log('width');
        }
        else {
            draw3.vertices.push({
                x: 0,
                y: draw3.canvas.height/5
            });
            draw3.vertices.push({
                x: homeFirstLineX,
                y: homeFirstLineY
            });
            draw3.vertices.push({
                x: 0,
                y: draw3.canvas.height
            });
            draw3.vertices.push({
                x: 0,
                y: 0
            });
        }


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
        if (draw3.t < draw3.points.length - 1) {
            requestAnimationFrame(draw3.animate);

        }
        else {
            draw3.context.beginPath();
            draw3.context.moveTo(draw3.points[draw3.t - 1].x, draw3.points[draw3.t - 1].y);
            draw3.context.lineTo(0, 0);
            draw3.context.strokeStyle = draw3.colorPen;
            draw3.context.lineWidth = draw3.lineWidth;
            draw3.context.stroke();

            draw3.triangle();
            return;

        }
        // draw3 a line segment from the last waypoint
        // to the current waypoint
        draw3.context.beginPath();
        draw3.context.moveTo(draw3.points[draw3.t - 1].x, draw3.points[draw3.t - 1].y);
        draw3.context.lineTo(draw3.points[draw3.t].x, draw3.points[draw3.t].y);

        draw3.context.strokeStyle = draw3.colorPen;
        draw3.context.lineWidth = draw3.lineWidth;
        draw3.context.stroke();
        // increment "t" to get the next waypoint
        draw3.t++;

    },

    triangle : function () {
        if (draw3.t2 < 1000) {
            requestAnimationFrame(draw3.triangle); //permet de gerer l'animation sans saccade
        }

        draw3.context.beginPath();
        draw3.context.moveTo( draw3.vertices[0].x, draw3.vertices[0].y);
        draw3.context.lineTo( draw3.vertices[1].x, draw3.vertices[1].y);
        draw3.context.lineTo( draw3.vertices[2].x, draw3.vertices[2].y);
        draw3.context.lineTo( draw3.vertices[3].x, draw3.vertices[3].y);

        var opacity = draw3.t2 ;
        draw3.context.fillStyle = "rgba(255, 192, 0, "+ opacity + ")" ;
        draw3.context.fill();
        draw3.t2 = draw3.t2 + 0.001;

    },

};

//librairy inView js
$('#homeProjects').on('inview', function (event, isInView) {
    if((isInView) && (draw3.draw3ed === 0 )){
        draw3.init(
            document.getElementById("homeProjectsCanvas"),
            document.getElementById("homeProjectsCanvas").offsetWidth,
            document.getElementById("homeProjectsCanvas").offsetHeight,
            "#ffc000", 1, "round", "round");
    }
});
