/*To center element in position fixed
position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
 */


            var thanksvideoplay;
            var upipay;




            var EmailAddress;
            EmailAddress = sessionStorage.getItem("EmailAddress");
            // alert(EmailAddress);
            
            if(EmailAddress === null || EmailAddress ===undefined){
            // we can also get it from local storage
            EmailAddress = localStorage.getItem("EmailAddress");
            // alert(EmailAddress);
            }






            
// function allPageCommon() {

    

    thanksvideoplay = '<div class="mobilepopover"><div id="surpriseSection" onmouseover="stopOpacity()"><a href="shanaya_bazaar_main.php"><button type="button" class="cuttab" style="position:fixed;top: 21vh" onclick="cutbutton()">&#10006;</button><video src="thanks for shopping.mp4" style="width: 95vw;position:fixed;top: 20vh;left: 2.5vw;" autoplay loop ></video></a></div></div>';


    upipay = '<div class="mobilepopover"><div id="surpriseSection" onmouseover="stopOpacity()"><button type="button" class="cuttab" style="position:fixed;top: 6%;right: 20%;z-index:4" onclick="cutbutton()">&#10006;</button><img src="UPI ID.jpg" style="height:90vh;width:100vw;max-width:428px;position:fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index:3" ></img></div></div>'; //perfect settings and can be used everywhere where we need to position fixed and align center.

    // var upipay='<div class="mobilepopover"><div style="text-align:center" id="surpriseSection" onmouseover="stopOpacity()"><button type="button" class="cuttab"  onclick="cutbutton()">&#10006;</button><img src="UPI ID.jpg" style="height:90vh;width:100vw;max-width:428px;position:fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index:3" ></img></div></div>';

    // var upipay ='<div class="mobilepopover"><div  style="display:block;text-align:center" id="surpriseSection" onmouseover="stopOpacity()"><button type="button" class="cuttab"   onclick="cutbutton()">&#10006;</button><img src="UPI ID.jpg" style="height:90vh;width:100vw;max-width:428px;z-index:3" ></img></div></div>';//not works



// }



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




var traceClicks = document.getElementsByTagName("a")

function myFunctionTraceClicks() {

    // if (condition) {
    // required to add this click event only when anchor is clicked
    // every product has it's id and it is set in the same way hence this tage is creating problem
    // }
    for (let index = 0; index < traceClicks.length; index++) {
        var element = traceClicks[index];

        // now add something to get the index anchor content to specify which anchor is clicked


        // element.addEventListener("click", myFunctiontrace())
        element.addEventListener("click", myConsoleTraceFunction(element))



        // var elementClick=element.href;
        // console.log("elementClick :"+elementClick);

    }

}

myFunctionTraceClicks();
// we will do this with localStorage nad session storage



// we need to add this function call with click otherwise it will be applied to all anchor without any click
// hence here the count is 92 console trace is called

// document.querySelectorAll("a").addEventListener("click", myFunctionTraceClicks())//not a function as no indexing used



// for (let index = 0; index < traceClicks.length; index++) {
//     var element = traceClicks[index];
//     element.addEventListener("click", myFunctionTraceClicks())

// }
//now this will give 1000








// function myFunctiontrace() {
//     myConsoleTraceFunction();
// }

function myConsoleTraceFunction(element) {
    console.trace();
    // count the number of time it is clicked before and , store the no. of click in cookie to show that preference

    // console.log("elementClick :"+element.href);
    //    it will be for all anchor even without click
    // if 


}



var settedColor;
function chBackcolor(BackColor) {

    window.removeEventListener("wheel", wheelevent);//scroll x and y is removed on selection the color option

    // this.style.filter="greyscale(100%)";
    // this.style.border='2px solid green';//not works

    // document.getElementById["switcher"].style.backgroundColor="green";//not works

    console.log("back color changed");

    settedColor = document.getElementsByTagName("body")[0].style.backgroundColor;

   

    // alert(settedColor);

    document.getElementsByTagName("body")[0].style.backgroundImage = "";

    if (settedColor !== BackColor) {

        //here this colors can be equated only if it is in rgb henece we checked rgb value using alert and updated the value in html , now this works.

        // document.body.style.backgroundColor = BackColor;

        document.getElementsByTagName("body")[0].style.backgroundColor = BackColor;

        // this.style.border="2px solid green";//not works

        if (BackColor == "rgb(76, 38, 11)") {
            document.body.style.color = "white";
        }
        else {
            document.body.style.color = "black";
        }

        /*
        #switcher li:hover{
  transform: scale(1.1);
  opacity: 0.5;
}
        */

        //To check which element an onclick function is applied to in JavaScript, you can access the this keyword within the function itself, which will refer to the HTML element that triggered the click event. 

        // this.style.transform=scale(6.1);//not works
        // this.style.opacity="0.5";





    }



    else {
        window.addEventListener("wheel", wheelevent);

    }


    // document.getElementsByTagName("body")[0].style.backgroundColor = BackColor;

    // document.getElementsByTagName("body")[0].style.backgroundColor =url(BackColor) ;//not works

    // document.getElementsByTagName("body")[0].style.backgroundColor = "var(--BackColor)" ;//not works


    // document.getElementsByTagName("body")[0].style.backgroundColor =url(BackColor) ;

    //background color is the back side but background image takes over the background color.

    // document.getElementsByTagName("body")[0].style.backgroundImage = "linear-gradient(-90deg,rgb(160, 156, 156) 0% , BackColor 74%)";//not works

    // document.getElementsByTagName("body")[0].style.backgroundImage = '"linear-gradient(-90deg,rgb(160, 156, 156) 0% , "+ BackColor +"74%)"';//not works

    // document.getElementsByTagName("body")[0].style.backgroundImage = BackColor;//wrong



    // document.body.style.backgroundImage = "url('https://i.imgur.com/8Q4
    // document.body.style.backgroundSize = "100% 100%";
    // document.body.style.backgroundRepeat = "no-repeat";
    // document.body.style.backgroundAttachment = "fixed";
    // document.body.style.backgroundPosition = "center";



    // if(settedColor==BackColor){
    //     window.addEventListener("wheel", wheelevent);

    // }


}


/*
document.getElementsByClassName(leftscroll)[0].onclick= document.getElementsByClassName.moveTo(30,0);

*/



function leftscrollBut(element) {
    // document.getElementsByClassName(leftscroll)[0].onclick = function(){
    //     document.body.scrollLeft += 30;
    //     }//stupid selection

    // var width=document.getElementById("women").clientWidth;

    // alert(element);//[object HTMLButtonElement]
    // alert(element.id);//
    // alert(element.classList);//leftscroll
    // alert(element.parentElement);//[object HTMLDivElement]
    // alert(element.parentElement.id);//women
    // alert(element.parentElement.clientWidth);//632


    // var width = element.parentElement.clientWidth;//not works
    var width = element.parentElement.clientWidth;//not works

    // alert(width);

    // document.getElementById("women").scrollLeft +=50 ; //works
    // document.getElementById("women").scrollLeft -= (width-10) ; //works
    element.scrollLeft -= (width - 10); //not works
    element.parentElement.scrollLeft -= (width - 10); //works

}


function righttscrollBut(element) {
    // document.getElementsByClassName(leftscroll)[0].onclick = function(){
    //     document.body.scrollLeft += 30;
    //     }//stupid selection

    var width = element.parentElement.clientWidth;
    // alert(width);

    // document.getElementById("women").scrollLeft +=50 ; //works
    element.parentElement.scrollLeft += (width - 10); //works

}









// let breakLine = document.createElement("br");
// document.body.insertBefore(breakLine, document.body.childNodes[9]);


let divHistory = document.createElement("div");
divHistory.setAttribute("class", "historyButton");


document.body.insertBefore(divHistory, document.body.childNodes[10]);


var history = window.history;
var historyLength = history.length;
console.log("the history length is :" + historyLength);

let backbtn = document.createElement("button");
backbtn.setAttribute("id", "backbtn");


backbtn.setAttribute("onclick", "goBack()");//goBack() is a function which is defined below
backbtn.innerHTML = "Back";
// backbtn.style.float = "left";
backbtn.style.position = "fixed";
backbtn.style.bottom = "2vh";
backbtn.style.left = "2vw";
backbtn.style.zIndex = "6";
backbtn.style.display = "none";


// backbtn.style.margin = "2vh 7vw";
backbtn.style.fontSize = "4vh";



// document.body.appendChild(backbtn);
//document.body.insertBefore(backbtn,document.body.children[0])
// document.body.insertBefore(backbtn, document.getElementsByClassName("historyButton")[0].appendChild(backbtn));
document.getElementsByClassName("historyButton")[0].appendChild(backbtn)
// let br= document.createElement(br);
// document.body.insertBefore(br,document.body.childNodes[4]);
//document.body.appendChild(backbtn);
function goBack() {
    window.history.back();//goes back to previous page
}




//forward button
let forwardbtn = document.createElement("button");
forwardbtn.setAttribute("id", "forwardbtn");

forwardbtn.setAttribute("onclick", "goForward()");//goForward() is a function which is defined below
forwardbtn.innerHTML = "Forward";
// forwardbtn.style.float = "right";
forwardbtn.style.position = "fixed";
forwardbtn.style.zIndex = "6";
forwardbtn.style.bottom = "2vh";
forwardbtn.style.right = "2vw";
// forwardbtn.style.margin = "2vh 7vw";
forwardbtn.style.fontSize = "4vh";
forwardbtn.style.display = "none";

//forwardbtn.style.clear="both"//it will be pushed downward
//document.body.insertBefore(forwardbtn,document.body.children[0])
// document.body.insertBefore(forwardbtn, document.getElementsByClassName("historyButton")[0].appendChild(forwardbtn));
document.getElementsByClassName("historyButton")[0].appendChild(forwardbtn);

document.write("<br>");
function goForward() {
    window.history.forward();//goes forward to next page
}


/*

//go method of history object
let gobtn = document.createElement("button")
gobtn.setAttribute("id", "gobtn");
gobtn.setAttribute("onclick", "go()");//go() is a function which is defined below
gobtn.innerHTML = "Go";
gobtn.style.marginLeft = "15px"
gobtn.style.margin = "2vh 7vw"
document.body.insertBefore(gobtn, document.body.childNodes[10]);
function go() {
    let n = prompt("Enter the number of pages to go back");
    window.history.go(n);
    //history.go(2);//for next 2nd page  
    // history.go(-2);//for previous 2nd page  
}


*/






//tracking location
navigator.geolocation.getCurrentPosition(position => {
    console.log(position)
}, error => {
    console.log(error)
},
    {
        timeout: 5000, // 5 seconds timeout
        maximumAge: 10000, // accept only position, that are not older than 10 seconds
        enableHighAccuracy: true // high accuracy
    })

// Watch the geo location of a user

var idWatchPosition = navigator.geolocation.watchPosition(position => {
    console.log(position)
});



// stop watching after 1 minute

setTimeout(() => {
    navigator.geolocation.clearWatch(idWatchPosition)
}, 60 * 1000)






// var stickContent = document.getElementById("stickContent");

// var stickContentEnd = document.getElementById("stickContentEnd");

// var sticky = stickContent.offsetTop;

// // var stickyEnd = stickContentEnd.offsetTop + Number(v);
// // var stickyEnd = stickContentEnd.offsetHeight;
// var stickyEnd = stickContent.offsetHeight;


// function mySticky() {
//     if (window.scrollY >= sticky && window.scrollY <= stickyEnd) {
//         stickContent.classList.add("sticky")
//     } else {
//         stickContent.classList.remove("sticky");
//     }
// }//now it works properly
// window.addEventListener("scroll", mySticky);







function clickCounterSession() {
    // here clcikcountF is only one key but we need key for all links hence key should also be changed anf for that we need to create something to create a new key with new link and then call the function for that key to update
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
        // here clcikcount is only one key but we need key for all links hence key should also be changed anf for that we need to create something to create a new key with new link and then call the function for that key to update
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




var myIntervalColorToggle = setInterval(setColor, 500);

function setColor() {

    document.getElementById("colorToggle").style.backgroundColor = document.getElementById("colorToggle").style.backgroundColor == "chartreuse" ? "pink" : "chartreuse";

    //as this id is in main window hence executed first and only once present there
    document.getElementById("colorToggle").style.color = "black";
    document.getElementById("colorToggle").style.paddingBottom = "6px";
    // document.getElementById("colorToggle").style.display="inline-flex";

}

function stopColor() {
    clearInterval(myIntervalColorToggle);
}
function resumeColor() {
    setInterval(setColor, 500);
}






function printPage() {
    // window.print();
    // if it would here then before removing buttons , the function will be called

    // on printing all the button should be removed
    // document.getElementById("colorToggle").style.display="none";
    var buttonsOnPrint = document.getElementsByTagName("button");
    for (var i = 0; i < buttonsOnPrint.length; i++) {
        buttonsOnPrint[i].style.display = "none";


    }
    window.print();
    //it works only when below
}









//stupid below done
/*
var requestAnimationSlideSmooth = document.getElementsByClassName("requestAnimationFrameId");

// calling an element with id and that's too in allpageCommonScript will work only for first scan page with id , hence use tagname instead or classname
 
for (let index = 0; index < requestAnimationSlideSmooth.length; index++) {
    var element = requestAnimationSlideSmooth[index];
  
    var leftPosi = 0;

    // function moveDiv(timestamp) {
    // 
    function moveDiv(){
 
 
        if (leftPosi == (100)) {
            leftPosi = 0;
            // requestAnimationSlideSmooth.style.left = leftPosi + "vw";
            element.style.left = leftPosi + "vw";
            requestAnimationFrame(moveDiv);//Your callback routine must itself call requestAnimationFrame() if you want to animate another frame at the next repaint.
 
        } else {
            leftPosi += 0.5;
            element.style.left = leftPosi + "vw";
            requestAnimationFrame(moveDiv);
        }
 
    }

    window.self.requestAnimationFrame(moveDiv);
 
    
}

// var requestAnimationSlideSmooth = document.getElementById("requestAnimationFrameId");
 
// requestAnimationFrame(moveDiv);
// window.self.requestAnimationFrame(moveDiv);

*/







//you can't edit the page

window.addEventListener("contextmenu", function () {
    console.error("You can't edit the page according to policy")
})






console.warn("This is a warning! Don't trace");






//as window not let this beforeunload to stop close, we will ass setTimeout to call this function

// window.setTimeout(rateBeforeExit, 120000);//after 2 min




window.addEventListener("beforeunload", function (e) {
    // console.log("You are about to leave this page");
    // window.alert("You are about to leave this page");//irritating hence we are removing this for now
    // e.preventDefault();//gives alert that changes may not be saved
    return "You are about to leave this page";
});

// document.addEventListener("unload", rateBeforeExit);
// document.addEventListener("beforeunload", rateBeforeExit);
// document.addEventListener("beforeunload", rateBeforeExit);//not work on document
// window.addEventListener("beforeunload", rateBeforeExit() , false);//not works  

// window.addEventListener("beforeunload", rateBeforeExit);//works  

// window.addEventListener("beforeunload", rateBeforeExit(e));//not works  
// window.addEventListener("beforeunload", rateBeforeExit(event));//not works  
// window.onunload=rateBeforeExit;//not works

// window.onbeforeunload=rateBeforeExit;//works







//We will put all this in a function and call it before closing the tab
// rateBeforeExit();

/*
// function rateBeforeExit(e) {
// function rateBeforeExit(event) {
function rateBeforeExit() {
    // event.preventDefault();
    //event parameter not necessary
    // window.alert("hey")
    //Rate your Experience
    /*
    var rate = prompt("Rate your experience with this website: 1-5");
    if (rate >= 1 && rate <= 5) {
        console.log("Thanks for your feedback!");
    } else {
        console.log("Please rate between 1 and 5");
    }
    */



/*
    //we will change later on position to fixed
    var rate = document.createElement("div");
    rate.id = "rate";

    // rate.setAttributeNode((document.createAttribute("class").value="cutRate"));
    //not working for now

    rate.innerHTML = `<div style="padding:50px;background-color:rgb(38, 231, 17);
position:fixed;top:35vh;left:21vw;z-index:12">
<button type="cuttab" class="cuttab" onclick="cutbutRate()">&#10006;</button>
<h1 style="color:rgb(0, 0, 0);">Rate your experience</h1>
<br>
<div id="myRateBox" style="box-sizing:border-box; border:solid black 3px;color:white;padding:5px;" onmouseover="this.innerHTML += '&bigstar;';">&bigstar;</div>
<br><p><button onclick="addStars(event)">Add Stars</button><button onclick="removeStars(event)" style="float:right">Remove Stars</button></p></div>`;

    document.body.appendChild(rate);
    //document.body.removeChild(rate);






    // return null;




}


//these functions must be outside for internal calls

function addStars() {//works
    var ev = document.createEvent("MouseEvent");//here ev is new event object and type is MouseEvent
    ev.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);


    document.getElementById("myRateBox").dispatchEvent(ev);
    // here it means dispatch the mouseover event to this id but the problem is that mouseover events are many then what will be dispatch
    // so we need to dispatch mouseover event many times to get the desired result




    //here we need to set the maximum stars using string method

}


function removeStars() {
    //now here string method will be added to stop after this length

}




function cutbutRate() {
    document.getElementById("rate").innerHTML = " ";

}


*/



function star1() {
    document.getElementById("star1").style.color = "blue";
}



//remove empty textnodes and merge extra textnode
document.normalize();






//login otp
//try this later on


document.addEventListener("click", myOtp);

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

function removeHandler() {
    document.removeEventListener("mousemove", myFunctionToRemove);
}//mousemove event is removed for function myFunctionToRemove()











//open main tab on clicking alt+o 


//    var openMainTab= Document.createElement("a");
//    openMainTab.innerText="shanaya_bazaar_main.php";


//    openMainTab.href="#";
//    openMainTab.href="shanaya_bazaar_main.php";
// openMainTab.setAttribute("id","openMainTab");
// openMainTab.setAttribute("href","shanaya_bazaar_main.php");
// openMainTab.setAttribute("target","_blank");



//    openMainTab.target="_blank";
//    openMainTab.id="openMainTab";

/*
openMainTab.addEventListener("click",function(event){
 if(event.altKey && event.key=="o"){
     window.open("shanaya_bazaar_main.php");
     }
     });
     //open main tab on clicking alt+o
*/
// document.body.appendChild(openMainTab);

//    document.getElementById("openMainTab").accessKey="o";












//setting live timer
let timeid = document.getElementById("time"); //timidId should be global for outer function to work inside like mytimidfunction(), as it is called   inside setinverval and event onclick
setInterval(function () {
    var date = new Date();
    timeid.innerText = (date.getHours()).toString().padStart(2, "0") + ":" + (date.getMinutes()).toString().padStart(2, "0") + ":" + (date.getSeconds()).toString().padStart(2, "0");

    timeid.style.backgroundColor = "yellow"
    timeid.style.color = "red"



    timeid.onclick = mytimidfunction


}, 1000);

function mytimidfunction() {
    timeid.style.backgroundColor = "red"
    timeid.style.color = "yellow"
}

