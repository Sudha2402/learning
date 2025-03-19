// issues



    //onblur//onfocus
    var issue = document.getElementById("issues");
    issue.addEventListener("focus", myFocusFunction, true);//focus event acts
    issue.addEventListener("blur", myBlurFunction, true);//blur event acts

    function myFocusFunction() {
        document.getElementById("issues").style.backgroundColor = "#B2BEB5";
    }
    function myBlurFunction() {
        document.getElementById("issues").style.backgroundColor = "";
    }









    var requestAnimationSlideSmooth = document.getElementById("requestAnimationFrameId");
  
    var leftPosi = 0;

    // var rightpos = 0;

    //this leftpos=0 must be declared outside the function otherwise on repaint as moveDiv() will be called , everytime it will become 0 hence no animation will be seen but if it is outside then it will not affect the internal one and on function call only internal statements run hence as ther is if inside , it will keep the previous set value of leftpos


    // function moveDiv(timestamp) {
    // 
    function moveDiv(){
        // var rightpos = requestAnimationSlideSmooth.style.right;
        if (leftPosi == (100)) {
            leftPosi = 0;
            requestAnimationSlideSmooth.style.left = leftPosi + "vw";
            requestAnimationFrame(moveDiv);//Your callback routine must itself call requestAnimationFrame() if you want to animate another frame at the next repaint.
        

        } else {
            leftPosi += 0.25;
            requestAnimationSlideSmooth.style.left = leftPosi + "vw";
            requestAnimationFrame(moveDiv);
           
        //    var currentRight=requestAnimationSlideSmooth.style.right
        //     if(currentRight == (0)){
        //         leftPosi = 0;
        //         requestAnimationSlideSmooth.style.left = leftPosi + "vw";
        //         requestAnimationFrame(moveDiv);
        // }


        }

    }

    // requestAnimationFrame(moveDiv);
    window.requestAnimationFrame(moveDiv);
    