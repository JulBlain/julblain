var drawContact = {
    vertices :  [],
    t : 1,
    t2 : 0,// variable to hold how many frames have elapsed in the animation
    drawContacted : 0,
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
        this.drawContacted++;
    },

    calcVertices : function () {
        var homeFirstLineX = Math.round(this.canvas.width);
        var homeFirstLineY = Math.round(0);

        this.vertices.push({
            x: 0,
            y: 0
        });
        this.vertices.push({
            x: homeFirstLineX,
            y: homeFirstLineY
        });
        this.vertices.push({
            x: this.canvas.width /2 ,
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
        if (drawContact.t < drawContact.points.length - 1) {
            requestAnimationFrame(drawContact.animate);

        }
        else {
            drawContact.context.beginPath();
            drawContact.context.moveTo(drawContact.points[drawContact.t - 1].x, drawContact.points[drawContact.t - 1].y);
            drawContact.context.lineTo(0, 0);
            drawContact.context.strokeStyle = drawContact.colorPen;
            drawContact.context.lineWidth = drawContact.lineWidth;
            drawContact.context.stroke();

            drawContact.triangle();
            return;

        }
        // drawContact a line segment from the last waypoint
        // to the current waypoint
        drawContact.context.beginPath();
        drawContact.context.moveTo(drawContact.points[drawContact.t - 1].x, drawContact.points[drawContact.t - 1].y);
        drawContact.context.lineTo(drawContact.points[drawContact.t].x, drawContact.points[drawContact.t].y);

        drawContact.context.strokeStyle = drawContact.colorPen;
        drawContact.context.lineWidth = drawContact.lineWidth;
        drawContact.context.stroke();
        // increment "t" to get the next waypoint
        drawContact.t++;

    },

    triangle : function () {
        if (drawContact.t2 < 1000) {
            requestAnimationFrame(drawContact.triangle); //permet de gerer l'animation sans saccade
        }

        drawContact.context.beginPath();
        drawContact.context.moveTo( drawContact.vertices[0].x, drawContact.vertices[0].y);
        drawContact.context.lineTo( drawContact.vertices[1].x, drawContact.vertices[1].y);
        drawContact.context.lineTo( drawContact.vertices[2].x, drawContact.vertices[2].y);
        drawContact.context.lineTo( drawContact.vertices[3].x, drawContact.vertices[3].y);

        var opacity = drawContact.t2 ;
        drawContact.context.fillStyle = "rgba(254, 24, 213, "+ opacity + ")" ;
        drawContact.context.fill();
        drawContact.t2 = drawContact.t2 + 0.001;

    },

};

//librairy inView js, drawContact in homeHomeCanvas.js
$('#homeContact').on('inview', function (event, isInView) {
    console.log('hhhh');
    if((isInView) && (drawContact.drawContacted === 0 )){
        drawContact.init(
            document.getElementById("homeContactCanvas"),
            document.getElementById("homeContactCanvas").offsetWidth,
            document.getElementById("homeContactCanvas").offsetHeight,
            "#fe18d5", 1, "round", "round");
    }
})