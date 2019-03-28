var sliderBook = {
    initCounter : 0,
    imgCount : 0,
    imgCounter : 0,
    divImg : document.getElementsByClassName("homeProjectsLink"),
    divNeon :"",
    arrowLeft : document.getElementById("homeProjectsArrowLeft"),
    arrowRight : document.getElementById("homeProjectsArrowRight"),

    init : function () {
        this.imgCount = this.divImg.length;

        if (this.imgCount !== 0) {

            //create div count neon
            for (var i = 0; i< this.imgCount; i++) {
                var newElmt = document.createElement('span');
                newElmt.className = 'countNeon';
                document.getElementById("homeProjectsCount").appendChild(newElmt);
            }

            this.divNeon = document.getElementsByClassName("countNeon");
            this.animColor();


            setTimeout(function () {
                sliderBook.divImg[sliderBook.imgCounter].classList.add("homeProjectsLink-visible");
                sliderBook.divNeon[sliderBook.imgCounter].classList.add("countNeon-visible");
            }, 600);


        }
        else {
            // remove btn TODO
        }
    },

    next : function () {
        if ((this.imgCount !== 0) && (this.imgCounter < (this.imgCount-1)) && (this.imgCounter >= 0)) {
            this.animColor();
            setTimeout(function () {
                sliderBook.divImg[sliderBook.imgCounter].classList.remove("homeProjectsLink-visible");
                sliderBook.divNeon[sliderBook.imgCounter].classList.remove("countNeon-visible");
                sliderBook.imgCounter++;
                sliderBook.divImg[sliderBook.imgCounter].classList.add("homeProjectsLink-visible");
                sliderBook.divNeon[sliderBook.imgCounter].classList.add("countNeon-visible");
            }, 600);

        }

    },
    
    previous : function () {
        if ((this.imgCount !== 0) && (this.imgCounter > 0)) {
            this.animColor();
            setTimeout(function () {
                sliderBook.divImg[sliderBook.imgCounter].classList.remove("homeProjectsLink-visible");
                sliderBook.divNeon[sliderBook.imgCounter].classList.remove("countNeon-visible");
                sliderBook.imgCounter--;
                sliderBook.divImg[sliderBook.imgCounter].classList.add("homeProjectsLink-visible");
                sliderBook.divNeon[sliderBook.imgCounter].classList.add("countNeon-visible");
            }, 600);
        }
    },

    animColor : function () {
        document.getElementById("homeProjectsColor").classList.add("homeProjectsColor-anim");
        setTimeout(function () {
            document.getElementById("homeProjectsColor").classList.remove("homeProjectsColor-anim");
        }, 1200);
    }
}



/*events btn slide*/
$("#homeProjectsArrowRight").click(function () {
    sliderBook.next();
});
$("#homeProjectsArrowLeft").click(function () {
    sliderBook.previous();
});

//librairy inView js
$("#homeProjects").on('inview', function (event, isInView) {
   if(sliderBook.initCounter === 0) {
       sliderBook.initCounter++;
       sliderBook.init();
   }
});