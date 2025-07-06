
var thanksvideoplay;
var upipay;




var EmailAddress;
EmailAddress = sessionStorage.getItem("EmailAddress");
// alert(EmailAddress);

if (EmailAddress === null || EmailAddress === undefined) {
    // we can also get it from local storage
    EmailAddress = localStorage.getItem("EmailAddress");
    // alert(EmailAddress);
}











thanksvideoplay = '<div class="mobilepopover"><div id="surpriseSection" onmouseover="stopOpacity()"><a href="index.php"><button type="button" class="cuttab" style="position:fixed;top: 21vh" onclick="cutbutton()">&#10006;</button><video src="files acc/thanks for shopping.mp4" style="width: 95vw;position:fixed;top: 20vh;left: 2.5vw;" autoplay loop ></video></a></div></div>';


upipay = '<div class="mobilepopover"><div id="surpriseSection" onmouseover="stopOpacity()"><button type="button" class="cuttab" style="position:fixed;top: 6%;right: 20%;z-index:4" onclick="cutbutton()">&#10006;</button><img src="files acc/UPI ID.jpg" style="height:90vh;width:100vw;max-width:428px;position:fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index:3" ></img></div></div>'; //perfect settings and can be used everywhere where we need to position fixed and align center.



function popup() {
    var popup = document.getElementsByClassName("popup");
    for (let index = 0; index < popup.length; index++) {
        var element = popup[index];

    }
}
// need to complete and we will do later on




//innertext
function validate() {
    var msg;
    // if (document.myFormin.userPass.value.length > 5) {
    if (document.getElementsByClassName("password")[0].value.length > 5) {
        // minimum 6 characters required
        msg = "good";
        document.getElementsByClassName('myPassWordStrength')[0].innerText = "Strength : " + msg;
        document.getElementsByClassName('myPassWordStrength')[0].style.color = "green";

    }
    else {
        msg = "poor";
        document.getElementsByClassName('myPassWordStrength')[0].innerText = "Strength : " + msg;
        document.getElementsByClassName('myPassWordStrength')[0].style.color = "red";
    }

    // document.getElementsByClassName('myPassWordStrength')[0].style.display="block";//works
    document.getElementsByClassName('myPassWordStrength')[0].style.display = "";//also works to remove display none
    // document.getElementsByClassName('myPassWordStrength')[0].innerText = "Strength : "+msg;

    document.getElementsByClassName('myPassWordStrength')[0].style.fontWeight = "boldd";
    document.getElementsByClassName('myPassWordStrength')[0].style.margin = "0px";
    document.getElementsByClassName('myPassWordStrength')[0].style.padding = "0px";

    setTimeout(function () {
        document.getElementsByClassName('myPassWordStrength')[0].style.display = "none";
    }, 5000);

}



if(document.getElementsByTagName("a")[0]){
var traceClicks = document.getElementsByTagName("a");
myFunctionTraceClicks();
}

function myFunctionTraceClicks() {

    for (let index = 0; index < traceClicks.length; index++) {
        var element = traceClicks[index];

        element.addEventListener("click", myConsoleTraceFunction(element))


    }

}




function myConsoleTraceFunction(element) {
    console.trace();

}



var settedColor;
function chBackcolor(BackColor) {

    window.removeEventListener("wheel", wheelevent);

    console.log("back color changed");

    settedColor = document.getElementsByTagName("body")[0].style.backgroundColor;



    // alert(settedColor);

    document.getElementsByTagName("body")[0].style.backgroundImage = "";

    if (settedColor !== BackColor) {

      
        document.getElementsByTagName("body")[0].style.background = BackColor;

        // this.style.border="2px solid green";//not works

        if (BackColor == "rgb(76, 38, 11)") {
            document.body.style.color = "white";
        }
        else {
            document.body.style.color = "black";
        }



    }



    else {
        window.addEventListener("wheel", wheelevent);

    }


}





function leftscrollBut(element) {

    var width = element.parentElement.clientWidth;//not works

    // element.scrollLeft -= (width - 10); //not works
    element.parentElement.scrollLeft -= (width - 10); //works

}


function righttscrollBut(element) {

    var width = element.parentElement.clientWidth;

    element.parentElement.scrollLeft += (width - 10); //works

}














function clickCounterSession() {

    if (sessionStorage.clickcountF) {
        sessionStorage.clickcountF = Number(sessionStorage.clickcountF) + 1;
    } else {
        sessionStorage.clickcountF = 1;
    }
    // document.writeln("<br>sessionStorage.clickcountF : " + sessionStorage.clickcountF)
    document.getElementById("sessionStorageCountF").innerHTML = "sessionStorageCountF :" + sessionStorage.clickcountF;
    console.log("sessionStorage.clickcountF : " + sessionStorage.clickcountF);
    console.log(sessionStorage.clickcountF);
}





function clickCounterLocal() {
    if (typeof (Storage) !== "undefined") {

        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}




// var myIntervalColorToggle = setInterval(setColor, 500);

if (document.getElementById("colorToggle") != null) {
    var myIntervalColorToggle = setInterval(setColor, 5000);
}


if (document.getElementsByClassName("scorePoint")[0] != null) {

    var scorePoint = document.getElementsByClassName("scorePoint");
    var cashPrice = document.getElementsByClassName("cashPrice");

    setInterval(function () {
        for (var i = 0; i < scorePoint.length; i++) {

            scorePoint[i].style.color = scorePoint[i].style.color == "blue" ? "purple" : "blue";

            cashPrice[i].style.color = cashPrice[i].style.color == "red" ? "#020f75" : "red";

        }

    }, 1000);







}



function setColor() {

  

    if (document.getElementById("colorToggle") != null) {

    }

}

function stopColor() {
    clearInterval(myIntervalColorToggle);
}
function resumeColor() {
    setInterval(setColor, 500);
}






function printPage() {
    // window.print();

    var buttonsOnPrint = document.getElementsByTagName("button");
    for (var i = 0; i < buttonsOnPrint.length; i++) {
        buttonsOnPrint[i].style.display = "none";


    }
    window.print();
    //it works only when below
}













//you can't edit the page

window.addEventListener("contextmenu", function () {
    //show nothing on right click , like inspect
    // return false;

    console.error("You can't edit the page according to policy");
    // return false;

});






console.warn("This is a warning! Don't trace");





function star1() {
    document.getElementById("star1").style.color = "blue";
}



//remove empty textnodes and merge extra textnode
document.normalize();



function myOtp() {

    var mobileNumber = document.getElementById("mobileNumber").value;
    // var otp = document.getElementById("copiedOtp").value;//you can set copyied get pasted on click that you learned in execCommand

    document.getElementById("otp").innerHTML = Math.random();//otp is send on mobile with message 
    var otpSend = document.getElementById("otp").innerHTML;
    var otpEnter = document.getElementById("otpEntered").value;
    if (otpEnter == otpSend) {
        // alert("otp is correct");
        document.getElementById("otpStatus").innerHTML = "otp is correct";

    }
    else {
        // alert("otp is incorrect");
        document.getElementById("otpStatus").innerHTML = "otp is incorrect";
    }

}




//setting live timer

if (document.getElementById("time") != null) {
    let timeid = document.getElementById("time"); //timidId should be global for outer function to work inside like mytimidfunction(), as it is called   inside setinverval and event onclick
    setInterval(function () {
        var date = new Date();
        timeid.innerText = (date.getHours()).toString().padStart(2, "0") + ":" + (date.getMinutes()).toString().padStart(2, "0") + ":" + (date.getSeconds()).toString().padStart(2, "0");

        timeid.style.backgroundColor = "yellow"
        timeid.style.color = "red"



        timeid.onclick = mytimidfunction


    }, 1000);
}

function mytimidfunction() {
    timeid.style.backgroundColor = "red"
    timeid.style.color = "yellow"
}

