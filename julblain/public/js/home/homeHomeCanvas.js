var draw = {
    vertices :  [],
    t : 1,
    t2 : 0,// variable to hold how many frames have elapsed in the animation
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

    },




    calcVertices : function () {
        var homeFirstLineX = Math.round(this.canvas.width / 3);
        var homeFirstLineY = Math.round(this.canvas.height / 4);




        this.vertices.push({
            x: this.canvas.width,
            y: 0
        });
        this.vertices.push({
            x: homeFirstLineX,
            y: homeFirstLineY
        });
        this.vertices.push({
            x: this.canvas.width,
            y: this.canvas.height
        });
        this.vertices.push({
            x: this.canvas.width,
            y: 0
        });



        /* this.context.beginPath();
         this.context.moveTo( this.canvas.width, 0);
         this.context.lineTo(homeFirstLineX, homeFirstLineY);
         this.context.lineTo(this.canvas.width, this.canvas.height);
         this.context.lineTo(this.canvas.width, 0);

         this.context.strokeStyle = draw.colorPen;
         this.context.lineWidth = draw.lineWidth;
         //triangle
         this.context.fillStyle = draw.colorPen;
         this.context.fill();
         this.context.stroke();
     */
        /* if (this.started == false) {
             this.context.beginPath();
             this.context.moveTo(this.cursorX, this.cursorY);
             this.started = true;
         }

         else {
             this.context.lineTo(this.cursorX, this.cursorY);
             this.context.strokeStyle = draw.colorPen;
             this.context.lineWidth = draw.lineWidth;
             this.context.stroke();
         }; */
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
        if (draw.t < draw.points.length - 1) {
            requestAnimationFrame(draw.animate);

        }
        else {
            draw.context.beginPath();
            draw.context.moveTo(draw.points[draw.t - 1].x, draw.points[draw.t - 1].y);
            draw.context.lineTo(draw.canvas.width, 0);
            draw.context.strokeStyle = draw.colorPen;
            draw.context.lineWidth = draw.lineWidth;
            draw.context.stroke();

            draw.triangle();
            return;

        }
        // draw a line segment from the last waypoint
        // to the current waypoint
        draw.context.beginPath();
        draw.context.moveTo(draw.points[draw.t - 1].x, draw.points[draw.t - 1].y);
        draw.context.lineTo(draw.points[draw.t].x, draw.points[draw.t].y);

        draw.context.strokeStyle = draw.colorPen;
        draw.context.lineWidth = draw.lineWidth;
        draw.context.stroke();
        // increment "t" to get the next waypoint
        draw.t++;

    },

    triangle : function () {
        if (draw.t2 < 1000) {
            requestAnimationFrame(draw.triangle); //permet de gerer l'animation sans saccade
        }

        draw.context.beginPath();
        draw.context.moveTo( draw.vertices[0].x, draw.vertices[0].y);
        draw.context.lineTo( draw.vertices[1].x, draw.vertices[1].y);
        draw.context.lineTo( draw.vertices[2].x, draw.vertices[2].y);
        draw.context.lineTo( draw.vertices[3].x, draw.vertices[3].y);

        var opacity = draw.t2 ;
        draw.context.fillStyle = "rgba(123, 220, 214, "+ opacity + ")" ;
        draw.context.fill();
        draw.t2 = draw.t2 + 0.001;

    },

};

window.addEventListener('load', function () {
    draw.init(
        document.getElementById("homeCanvas"),
        document.getElementById("homeCanvas").offsetWidth,
        document.getElementById("homeCanvas").offsetHeight,
        "#7bdcd6", 1, "round", "round");
});

