// import {navigateProductClick} from pagesnavigation;//error

// window.sessionStorage.setItem("previousPage", window.location.href);

// var  previousPage = sessionStorage.getItem("previousPage");
//   alert(previousPage);

// setTimeout(function(){
//     const loginInformation = require("./scriptAnimatedLogin");//works
// console.log(loginInformation);
//     alert(loginInformation);
// },1000);


// https://stackoverflow.com/questions/66351149/how-can-i-use-promise-that-coming-from-another-page-in-node-js

var EmailAddress;
EmailAddress = sessionStorage.getItem("EmailAddress");
// alert(EmailAddress);

if (EmailAddress === null || EmailAddress == undefined) {
    // we can also get it from local storage
    EmailAddress = localStorage.getItem("EmailAddress");
    // alert(EmailAddress);
}

// import nameEntered from "./login.js";
// import {nameEntered} from "./login.js";

// document.cookie = `username= ${nameEntered} ; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/`;
// document.cookie = `username= ${nameEntered};`;

// document.getElementById("user").innerHTML=document.cookie;

// document.getElementById("user").innerHTML= nameEntered;




function cutImgbutton(element) {
    element.parentElement.style.display = "none";
}


var clickedReviewImgOpener = document.getElementsByClassName("clickedReviewImg")[0];

function profileOpener() {

    var profilePhoto = document.getElementsByClassName("profileImage")[0];

    // alert(profilePhoto.src);

    profilePhoto.addEventListener("click", function () {
        clickedReviewImgOpener.style.display = "block";

        clickedReviewImgOpener.getElementsByClassName("imgOpener")[0].src = this.src;

    });
}

profileOpener();















// window.confirm("Are you sure you want to live sustainable life with Shanaya Bazzar");

function cutbutton() {
    document.getElementsByClassName("mobilepopover")[0].innerHTML = " ";




    //   document.getElementsByClassName("cuttab")[0].onmouseover="style='backgroundColor:coin'";

    //   as when we have cleared all the html inside then cuttab will be no more present

    //document.getElementsByClassName("cuttab")[0].style.backgroundColor="coin";

}

function stopOpacity() {

    //nothing worked ,try again

    //pophoveropacity.cancel();
    // document.getElementById("popover").style.opacity = "0";//not works to stop animation

    //document.getElementById("popover").style.innerHTML="@keyframes popoverStopopacity{0% {opacity: 0;}10%,90%{opacity: 1;}99% {opacity: 1;}} ; div.popover {animation: popoverStopopacity 30s linear 5s 1 forwards;";

    // document.getElementById("popover").style.transition = "opacity 60s"
    //document.getElementById("popover").style.opacity = "0";

    document.getElementsByClassName("mobilepopover")[0].style.display = "flex";


}

setTimeout(
    function () {
        document.getElementsByClassName("mobilepopover")[0].style.display = "flex";


    }, 5000);

function mouseoutRemove() {


    // document.getElementsByClassName("mobilepopover")[0].style.display = "none";
    //it work's but we don't want this irritating popout.

}






//add customize with colors

// http://eggradients.com/gradient/wild


window.addEventListener("wheel", wheelevent);


function wheelevent(event) {
    if (event.deltaY < 0) {
        // alert("scrolling up");  
        // document.getElementsByTagName("body")[0].style.backgroundColor = "#00008B";
        // document.getElementsByTagName("body")[0].style.backgroundColor = "#46211A";

        // document.getElementsByTagName("body")[0].style.backgroundColor = "#80461B";


        // document.getElementsByTagName("body")[0].style.backgroundImage = "linear-gradient(60deg, #2f2b7d 0%, #090979 35%, #00d4ff 100%)";

        // document.getElementsByTagName("body")[0].style.backgroundImage = "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";


        // document.getElementsByTagName("body")[0].style.backgroundImage = "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgb(49, 169, 190) 50%, rgb(78, 252, 69) 100%)";
        // document.getElementsByTagName("body")[0].style.backgroundImage = "linear-gradient(90deg, rgb(192, 127, 236) 0%, rgb(199, 236, 243) 50%, rgb(29, 219, 58) 100%)";


        // document.getElementsByTagName("body")[0].style.backgroundImage = "linear-gradient(to right, #ed4264, #ff668f, #ffefb5)";


        // document.getElementsByTagName("body")[0].style.backgroundImage = "linear-gradient(to right, #ed4264, #ff668f, #ffefb5)";

        // document.getElementsByTagName("body")[0].style.backgroundImage = "linear-gradient(to right, #ee9ca7, #ffdde1)";

        // document.getElementsByTagName("body")[0].style.backgroundImage = "linear-gradient(to right,rgb(127, 157, 222),rgb(232, 231, 200))";




        // document.getElementsByTagName("body")[0].style.filter = "greyscale(100%)";

        // document.getElementsByTagName("body")[0].style.color = "white";
        // document.getElementsByTagName("body")[0].style.color = "F1D3B2";

        //not works
        // document.querySelector("div.shanayabazaarvideo h5")[0].style.color = "white";

        // document.getElementsByTagName("body")[0].style.backgroundColor = "black";

        // document.getElementsByTagName("body")[0].style.backgroundImage = "linear-gradient(252deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";

        // document.getElementsByTagName("body")[0].style.backgroundImage = "linear-gradient(-90deg, #ffffff 0%, #1b2845 74%)";
        // document.getElementsByTagName("body")[0].style.backgroundImage = "linear-gradient(-90deg,rgb(160, 156, 156) 0%, #1b2845 74%)";

        document.getElementsByTagName("body")[0].style.backgroundImage = "none";






        // document.getElementsByTagName("body")[0].style.color = "#FFE5B4";
        // document.getElementsByTagName("body")[0].style.color = "white";
        // document.getElementsByTagName("body")[0].style.color = "white";


        document.getElementsByClassName("headertitle")[0].style.display = "";

        document.getElementsByClassName("icon")[0].style.display = "";

    } else if (event.deltaY > 0) {
        // alert("scrolling down");

        // document.getElementsByTagName("body")[0].style.backgroundImage = "linear-gradient(90deg, rgb(234, 106, 21) 0%, rgb(165, 218, 229) 40%, rgb(29, 219, 58) 140%)";
        // document.getElementsByTagName("body")[0].style.backgroundImage = "linear-gradient(90deg, rgb(234, 106, 21) 0%, rgb(165, 218, 229) 40%, rgb(29, 219, 58) 140%)";
        // very bad look

        document.getElementsByTagName("body")[0].style.backgroundImage = "none";

        document.getElementsByTagName("body")[0].style.color = "black";



        document.getElementsByClassName("headertitle")[0].style.display = "none";

        document.getElementsByClassName("icon")[0].style.display = "block";

        document.getElementsByClassName("about")[0].style.display = "none";

        document.getElementsByClassName("contact")[0].style.display = "none";



    }




}



// .mobiletop{
//     position: fixed;
//     top: 0px;
//     z-index: 3;

/*
window.addEventListener("screen", offsetHeight);
function offsetHeight(event) {
    if (event.offsetHeight< 700) {
    } else if (event.deltaY > 0) {
        // alert("scrolling down");
        document.getElementsByTagName("body")[0].style.backgroundColor = "black";
    }



}

*/




//online , offline mode



//offline
document.getElementsByTagName("body")[0].onoffline = function () { offline1() };
// here body is getting offline



function offline1() {
    // alert("You are offline");
    document.querySelector("#offline1").innerText = "You are offline";

    document.querySelector("#offline1").style.color = "white"
    document.querySelector("#offline1").style.backgroundColor = "red";
    // text align
    document.querySelector("#offline1").style.textAlign = "center";
    // display=flex
    document.querySelector("#offline1").style.display = "flex";
    // align item 
    document.querySelector("#offline1").style.alignItems = "center";



    document.querySelector("#offline1").style.fontSize = "20px"
    document.querySelector("#offline1").style.fontWeight = "bold"

    document.getElementsByTagName("BODY")[0].ononline = function () { online1() };
}

function online1() {

    document.querySelector("#offline1").innerText = "You are online now"

    document.querySelector("#offline1").style.backgroundColor = "green"


    document.querySelector("body").onscroll = function () {
        // opacityAnimation() ;//reserves space
        document.querySelector("#offline1").style.display = "none";

    };

}


//opacity animation which is useful
function opacityAnimation() {

    document.querySelector("#offline1").style.transition = "opacity 1s"
    document.querySelector("#offline1").style.opacity = "0"


    // Work on it
    // now here should be some code to remove the id from that mahadisclaimer or to to reload this section of page
    // for now I am leaving it here , we will deal later on this

}









// document.getElementsByTagName("body")[0].onloadstart = function () { loading() };
// document.getElementsByTagName("body")[0].onloadstart = function () { loading() };
// document.getElementsByTagName("body")[0].onopen = function () { loading() };
// document.getElementsByTagName("body")[0].onafterload = function () { loading() };


function loading() {

    // try loading such way that it sends background of the body and insert an image
    document.querySelector("body").style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.24ways.org%2F2009%2F15%2Fassets%2Fimg%2Fspinner.png&f=1&nofb=1')";
    // it is predefined loading animated code, you can stop this once page is loaded 

    document.querySelector("body").style.backgroundImage = "url('loadingImage.png')";
    document.querySelector("body").style.backgroundRepeat = "no-repeat";
    document.querySelector("body").style.backgroundPosition = "center";
    document.querySelector("body").style.backgroundAttachment = "fixed";
    document.querySelector("body").style.backgroundSize = "contain";
    document.querySelector("body").style.backgroundSize = "50% 40%";
    document.querySelector("body").style.backgroundColor = "black";


    // document.getElementsByTagName("body")[0].onafterload = function () { stoploading() };
    // document.getElementsByTagName("body")[0].onafterload = function () { stoploading() };
    // document.getElementsByTagName("body")[0].onstorage = function () { stoploading() };
    // document.getElementsByTagName("body")[0].onbeforeload = function () { stoploading() };
    // document.getElementsByTagName("body")[0].onloadeddata = function () { stoploading() };

}

// stop loading function
function stoploading() {
    document.querySelector("body").style.backgroundImage = "none";
    // document.querySelector("body").style.background = "none";
}







//progress bar control
function progressbar() {
    // document.querySelector("body").style.backgroundImage = "url('profile.png')";
    // document.querySelector("body").style.backgroundSize = "100% 100%";
    // document.querySelector("body").style.backgroundRepeat = "no-repeat";

    document.getElementsByClassName("progressbar")[0].style.width = "100%";
    document.getElementsByClassName("progressbar")[0].style.height = "3px";
    // document.getElementsByClassName("progressbar")[0].style.backgroundColor="blue";

    //try th get the load time so that we will apply 100% progress animation at that interval time
    // this seem to be a little bit difficult hence instead of animation, We wnat complete control with events such that on progress width is 0px and onfinish , width is 100%


    var loadtime;
    var progressbar = document.getElementsByClassName("progressbar")[0];
    var progressbarwidth = progressbar.offsetWidth;
    var progressbarheight = progressbar.offsetHeight;
    var progressbarcolor = progressbar.style.backgroundColor;
    var progressbarstyle = progressbar.style;

    document.getElementsByClassName("progressbar")[0].style.animation = 'progressslide $loadtime linear 0s 1 normal;';
    document.getElementsByClassName("progressbar")[0].style.marginBottom = "3px;";

    // to define progressslide keyframe
    document.styleSheets[0].insertRule("@keyframes progressslide { 0% {width:0px; background-color: blue;} 100% {width: 100%;}}", 0);




}






var loginInformation = new URLSearchParams(window.location.search);//now we have changed plan to EmailAdress

// http://localhost:3000/shanaya_bazaar_main.php?loginInformation={%22CustomerNumber%22:1856176940,%22Prefix%22:null,%22FirstName%22:%22Sudha%20Kumari%22,%22LastName%22:null,%22BirthDate%22:null,%22MaritalStatus%22:null,%22EmailAddress%22:%22sudhakumarichauhan24@gmail.com%22,%22Password%22:%22#sudha@2402%22,%22AnnualIncome%22:null,%22Gender%22:null}

// var loginInformation = JSON.parse(loginInformation);
// not possible to get value using this way.



// http://localhost:3000/shanaya_bazaar_main.php?CustomerNumber=1856176940&FirstName=Sudha%20Kumari&EmailAddress=sudhakumarichauhan24@gmail.com&Password=#sudha@2402


// http://localhost:3000/shanaya_bazaar_main.php?CustomerNumber=1856176940&FirstName=Sudha%20Kumari&EmailAddress=sudhakumarichauhan24@gmail.com&Password=#sudha@2402&CustomersProfilePhoto=undefined

// after inserting this column also

// http://localhost:3000/shanaya_bazaar_main.php?CustomerNumber=1856176940&FirstName=Sudha%20Kumari&EmailAddress=sudhakumarichauhan24@gmail.com&Password=#sudha@2402&CustomersProfilePhoto=temporaryProfilePhoto/1856176940.jpg

// http://localhost:3000/shanaya_bazaar_main.php?CustomerNumber=1856176940&FirstName=Sudha%20Kumari&EmailAddress=sudhakumarichauhan24@gmail.com&Password=#sudha@2402&CustomersProfilePhoto=%22temporaryProfilePhoto/1856176940.jpg%22

// http://localhost:3000/shanaya_bazaar_main.php?CustomerNumber=1856176940&FirstName=Sudha%20Kumari&EmailAddress=sudhakumarichauhan24@gmail.com&Password=#sudha@2402&CustomersProfilePhoto=temporaryProfilePhoto\\1856176940.jpg




var CustomerNumber;
// alert(CustomerNumber);//undefined
// alert(typeof(CustomerNumber));//undefined
var FirstName;
var EmailAddress;
var Password;
var passedPhoto;

// http://localhost:3000/shanaya_bazaar_main.php?CustomerNumber=1856176940&FirstName=Sudha%20Kumari&EmailAddress=sudhakumarichauhan24@gmail.com&Password=#sudha@2402&CustomersProfilePhoto=temporaryProfilePhoto$1856176940.jpg

// http://localhost:3000/shanaya_bazaar_main.php?CustomerNumber=1856176940&CustomersProfilePhoto=%22temporaryProfilePhoto$1856176940.jpg%22&FirstName=Sudha%20Kumari&EmailAddress=sudhakumarichauhan24@gmail.com&Password=#sudha@2402

// After analysing all the href we come to conclusion that here # in password is creating problem as it take hash as the page hash value where it has to go.


//We should not pass all the data from login, instead we just need customernumber but as we have made already php with email then we can use that also

// http://localhost:3000/shanaya_bazaar_main.php?&EmailAddress=sudhakumarichauhan24@gmail.com


var EmailAddress;
EmailAddress = sessionStorage.getItem("EmailAddress");
// alert(EmailAddress);

if (EmailAddress === null || EmailAddress === undefined) {
    // we can also get it from local storage
    EmailAddress = localStorage.getItem("EmailAddress");
    // alert(EmailAddress);
}

var arrOfReceivedDetails;

// if (loginInformation != "") {//we have changed plan to sessionStorage Email

EmailRelatedLogin("/", EmailAddress);//we have done this so that this function is also shareable to iframe

function EmailRelatedLogin(pagehref, EmailAddress) {

    // alert(EmailAddress);//undefined when passed from main page//null when passed from page

    if (EmailAddress !== undefined || EmailAddress !== null) {//we have changed plan to sessionStorage Email
        // alert("inside loginInformation");

        // CustomerNumber = loginInformation.get('CustomerNumber');//ok
        // alert(CustomerNumber);
        // FirstName = loginInformation.get('FirstName');
        // alert(FirstName);

        // EmailAddress = loginInformation.get('EmailAddress');//OK
        // alert(EmailAddress);

        // passedPhoto = loginInformation.get('CustomersProfilePhoto');//OK

        // alert(passedPhoto); //because of directory symbol /, it's not crating problem now

        // var PasswordReceived = loginInformation.get('Password');//ok
        // alert(PasswordReceived);

        // Password = PasswordReceived.replace('$', '#');//ok
        // alert(Password);


        // alert(JSON.parse(loginInformation.get('CustomersProfilePhoto')));//it also not works
        // passedPhoto=loginInformation.get('CustomersProfilePhoto');

        // alert(passedPhoto);
        // all the passedPhoto problem was because of password in between


        // alert(CustomerNumber);
        // alert(FirstName);
        // alert(EmailAddress);
        // alert(Password);


        // var cart = document.getElementsByClassName("productsList")[0].firstElementChild;
        // // alert(cart);

        // var clone = cart.cloneNode(true);

        // clone.firstElementChild.firstElementChild.firstElementChild.src = mainImagOfThisProduct;
        // // alert(mainImagOfThisProduct);

        // clone.firstElementChild.firstElementChild.lastElementChild.innerHTML = productName;
        // // alert(productName);

        // clone.firstElementChild.lastElementChild.firstElementChild.nextElementSibling.firstElementChild.innerHTML=productPrice;

        // clone.firstElementChild.lastElementChild.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.src=mainImagOfThisProduct;

        // // clone.firstElementChild.lastElementChild.lastElementChild.previousElementSibling.innerHTML=productPrice;


        // document.getElementsByClassName("productsList")[0].appendChild(clone);


        // calculateTotal();//to update after inserting the product.




        //Now we will use connection with php to get detail of this customer number.

        var email = JSON.stringify(EmailAddress);//neccessary otherwise it will not be able to fetch the data.
        var RegisteredCustomerDetail = new XMLHttpRequest();

        RegisteredCustomerDetail.onload = function () {
            if (this.status == 200) {

                arrOfReceivedDetails = JSON.parse(this.responseText);
                // alert(this.responseText);//not able to pass all data.

                CustomerNumber = arrOfReceivedDetails.CustomerNumber;


                FirstName = arrOfReceivedDetails.FirstName;
                document.getElementById("user").innerHTML = FirstName;

                Password = arrOfReceivedDetails.Password;

                passedPhoto = pagehref + arrOfReceivedDetails.CustomersProfilePhoto;



                // alert(CustomerNumber);
                // alert(FirstName);
                // alert(Password);
                // alert(passedPhoto);



                // we want to set passedPhoto at the place of profile photo also

                //   document.getElementsByClassName("loginCollapsed")[1].getElementsByTagName("img")[0].src = passedPhoto;


                // remove class loginCollapsed from this classlist

                // document.getElementsByClassName("loginProfileImage")[0].style.display="";
                // add class loginCollapsed in classlist
                // document.getElementsByClassName("loginProfileImage")[0].classList.add("loginCollapsed");
                // document.getElementsByClassName("loginProfileImage")[0].src = passedPhoto;
                // document.getElementsByClassName("loginProfileImage")[0].style.border="solid black 1px";
                // document.getElementsByClassName("loginProfileImage")[0].style.borderRadius="50%";

                // document.getElementsByClassName("fa-user")[0].style.display="none";




                // alert(document.getElementsByClassName("loginProfileImage")[0].src);



            }

        }

        RegisteredCustomerDetail.open("GET", pagehref + "getThisCustomerDetail.php?EmailAddress=" + email);

        RegisteredCustomerDetail.send();


    }
    else {

        // alert("You are not login");
        console.log("You are not login");

    }












    var loginHoveredDetails = document.getElementsByClassName("loginCollapsed");


    // alert(loginHoveredDetails.length);

    for (var i = 0; i < loginHoveredDetails.length; i++) {

        var elementToExpand;

        loginHoveredDetails[i].addEventListener("mouseover", function () {


            // elementToExpand = this.parentElement.parentElement.parentElement.getElementsByClassName("loginHoveredDetails")[0];//works only for login with icon //
            elementToExpand = document.body.getElementsByClassName("loginHoveredDetails")[0];//it is for all login icons

            // alert(this.offsetLeft);
            // var leftset = this.offsetLeft + this.offsetWidth - 8 + "px";
            var leftset = this.getBoundingClientRect().left + this.getBoundingClientRect().width - 8 + "px";
            // alert(leftset);
            // var topset = this.offsetTop + this.offsetHeight - 8 + "px";
            var topset = this.getBoundingClientRect().top + this.getBoundingClientRect().height - 8 + "px";
            // alert(topset);

            // var parentHref = pagehref+this.parentElement.href;///http://localhost:3000/product/women/ethnic%20wear/lahenga/Solid%20Semi%20Stitched%20Lehenga%20Choli/animatedLogin.html was not found on this server.

            var parentHref = this.parentElement.href;
            // var parentHref =  elementToExpand.parentElement.href;

            // var topPos = element.getBoundingClientRect().top + window.scrollY;
            // var leftPos = element.getBoundingClientRect().left + window.scrollX;


            elementToExpand.style.display = "block";
            elementToExpand.style.position = "fixed";


            // alert(window.innerWidth);
            // alert(this.offsetLeft);
            // alert(elementToExpand.offsetWidth);//changing//most of the time 38
            // alert(elementToExpand.offsetLeft);//changing
            // alert(elementToExpand.getBoundingClientRect().left);//changing

            // alert(this.getBoundingClientRect().left);//absolutly giving the position of 
            // alert(this.offsetLeft);//fixed
            // alert(elementToExpand.offsetWidth < (window.innerWidth-this.offsetLeft));

            // alert(elementToExpand.getBoundingClientRect().width);//changes when size of tab changes


            // if (this.offsetLeft > 100 && elementToExpand.offsetWidth < (window.innerWidth - this.offsetLeft )) {
            // alert(this.getBoundingClientRect().left);
            // alert(window.innerWidth);
            // // alert(this.getBoundingClientRect().right);

            if (elementToExpand.getBoundingClientRect().width < (window.innerWidth - this.getBoundingClientRect().left)) {

                // if (this.offsetLeft > 100) {


                elementToExpand.style.left = leftset;
                // elementToExpand.style.left = "10px"+ this.offsetLeft;
                // elementToExpand.style.top=this.offsetTop+this.offsetHeight;
                elementToExpand.style.top = topset;




            }

            // else if (this.offsetLeft < 100 && elementToExpand.offsetWidth > (window.innerWidth-this.offsetLeft)){
            //     elementToExpand.style.right = "10px";
            //     elementToExpand.style.top = topset;
            //     elementToExpand.style.left = "auto";
            // }
            else {


                elementToExpand.style.right = "10px";
                elementToExpand.style.top = topset;
                elementToExpand.style.left = "unset"; //most important //as it saved us from initial problem.
            }

            var clickedExpanded;

            if (CustomerNumber === undefined || EmailAddress === null) {

                // alert("undefined");

                elementToExpand.innerHTML = "Login";
                elementToExpand.style.padding = "0px";
                this.parentElement.href = parentHref;

            }
            else {

                // alert(this.parentElement.href);//http://localhost:3000/animatedLogin.html
                // this.parentElement.href = window.location;//works but it reload the page

                // in this case we just want to change anchor tag a to div so that no href happens
                // this.parentElement.href = "";

                // we need to change tagname
                this.parentElement.tagName = "div";

                // we want to remove href attribute also
                this.parentElement.removeAttribute("href");




                elementToExpand.getElementsByClassName("CustomerNumber")[0].value = CustomerNumber;

                // alert( elementToExpand.getElementsByClassName("CustomerNumber")[0].value);//worked



                // elementToExpand.style.left="initial";
                elementToExpand.getElementsByClassName("userName")[0].innerHTML = FirstName;


                elementToExpand.getElementsByClassName("emailOfThisUser")[0].innerHTML = EmailAddress;

                var profileImage = document.getElementsByClassName("profileImage")[0];
                profileImage.src = passedPhoto;
                profileImage.classList.remove("profileBackground");



                elementToExpand.addEventListener("mouseover", function () {
                    //we need to display this
                    elementToExpand.style.display = "block";

                    elementToExpand.addEventListener("mouseout", function () {
                        elementToExpand.style.display = "none";

                    });
                });



                this.addEventListener("click", function () {
                    elementToExpand.style.display = "block";

                    this.addEventListener("click", function () {
                        elementToExpand.style.display = "none";
                        clickedExpanded = 0;
                    });

                    clickedExpanded = 1;

                    this.addEventListener("mouseout", function () {
                        elementToExpand.style.display = "block";

                    });

                });


                // if(elementToExpand.style.display == "block"){
                //     this.addEventListener("click", function () {
                //         elementToExpand.style.display = "none";
                //     });
                // }



            }


            if (clickedExpanded != 1) {
                this.addEventListener("mouseout", function () {
                    elementToExpand.style.display = "none";
                });
            }



        });




    }



    var cartVisit = document.getElementsByClassName("visitCart");
    for (var i = 0; i < cartVisit.length; i++) {
        cartVisit[i].addEventListener("click", function () {
            var parentHref = this.parentElement.href;

            if (CustomerNumber === undefined || EmailAddress === null) {
                this.parentElement.removeAttribute("href");

                if (document.getElementById("searchedOutput") !== null) {
                    // alert("please login to see your cart");
                    document.getElementById("searchedOutput").style.display = "flex";
                    document.getElementById("searchedOutput").innerHTML = "please login to see your cart";
                    document.getElementById("searchedOutput").style.color = "red";
                    document.getElementById("searchedOutput").style.fontWeight = "bold";
                    // make fontsize bigger
                    // document.getElementById("searchedOutput").style.fontSize = "30px";//much bigger
                    document.getElementById("searchedOutput").style.fontSize = "20px";

                    setTimeout(function () {
                        document.getElementById("searchedOutput").style.display = "none";
                    }, 5000);

                }
                if (document.getElementsByClassName("lowerpopedUpPage") !== null) {
                    var lowerpopedUpPage = document.getElementsByClassName("lowerpopedUpPage")[0];
                    lowerpopedUpPage.style.display = "flex";
                    // lowerpopedUpPage.style.height="20px";
                    lowerpopedUpPage.style.width = "60vw";
                    lowerpopedUpPage.style.color = "red";
                    lowerpopedUpPage.style.fontWeight = "bold";
                    // lowerpopedUpPage.style.fontSize = "20px";
                    lowerpopedUpPage.innerHTML = "please login to see your cart";
                    setTimeout(function () {
                        lowerpopedUpPage.style.display = "none";
                    }, 5000);

                }





            }
            else {

                this.parentElement.href = parentHref;


            }
        })

    }






    var needOrder = document.getElementsByClassName("needs");
    for (var i = 0; i < needOrder.length; i++) {
        needOrder[i].addEventListener("click", function () {
            var parentHref = this.href;

            if (CustomerNumber === undefined || EmailAddress === null) {
                this.removeAttribute("href");

                if (document.getElementById("searchedOutput") !== null) {
                    // alert("please login to see your cart");
                    document.getElementById("searchedOutput").style.display = "flex";
                    document.getElementById("searchedOutput").innerHTML = "please login to see your ordered products";
                    document.getElementById("searchedOutput").style.color = "red";
                    document.getElementById("searchedOutput").style.fontWeight = "bold";
                    // make fontsize bigger
                    // document.getElementById("searchedOutput").style.fontSize = "30px";//much bigger
                    document.getElementById("searchedOutput").style.fontSize = "20px";

                    setTimeout(function () {
                        document.getElementById("searchedOutput").style.display = "none";
                    }, 5000);

                }
                if (document.getElementsByClassName("lowerpopedUpPage") !== null) {
                    var lowerpopedUpPage = document.getElementsByClassName("lowerpopedUpPage")[0];
                    lowerpopedUpPage.style.display = "flex";
                    // lowerpopedUpPage.style.height="20px";
                    lowerpopedUpPage.style.width = "60vw";
                    lowerpopedUpPage.style.color = "red";
                    lowerpopedUpPage.style.fontWeight = "bold";
                    // lowerpopedUpPage.style.fontSize = "20px";
                    lowerpopedUpPage.innerHTML = "please login to see your ordered products";
                    setTimeout(function () {
                        lowerpopedUpPage.style.display = "none";
                    }, 5000);

                }





            }
            else {

                this.href = parentHref;


            }
        })

    }















    var profileSetUpload;
    function getFileData(myFile) {
        var file = myFile.files[0];
        passedPhoto = file.name;

        // alert(passedPhoto);

        profileSetUpload = myFile.nextElementSibling;

        profileSetUpload.style.display = "block";
        // profileSetUpload.addEventListener("click",submitProfilePhoto());
    }

    // var profileImage = document.getElementsByClassName("profileImage")[0];
    // if (passedPhoto != null) {
    //     alert(passedPhoto);
    //     // alert(responseOfDataBase[i].mainProductImage);

    //     profileImage.src = passedPhoto;

    //     // profileImage.style.backgroundImage = "url(" + passedPhoto + ")";
    //     //we need to remove profileBackground from classlist
    //     profileImage.classList.remove("profileBackground");

    // }


}











// Rate your experience


var rateCount = document.getElementsByName("rate").length;
// alert(rateCount);

var checkedValue;
function displayReview() {

    for (var i = 0; i < rateCount; i++) {


        //this will work for default checked applied only not after click

        var ival = i;
        // alert(typeof(ival)) //number


        if (document.getElementsByName("rate")[i].checked) {

            checkedValue = document.getElementsByName("rate")[i].value;

            // alert(checkedValue);

            var ratetoout = document.getElementsByName("rate")[i].parentElement.parentElement.previousElementSibling;
            // alert(ratetoout.className);

            ratetoout.innerHTML = "You rated this product " + document.getElementsByName("rate")[
                i].value + " out of 5";

            // ratetoout.innerHTML+= document.getElementsByName("rate")[i].value;


            document.getElementsByName("rate")[i].parentElement.style.fontWeight = "bold";

            /*works here
 
            if (checkedValue == 1) {
                ratetoout.innerHTML += "<br>Poor";
            }
            else if (checkedValue == 2) {
                ratetoout.innerHTML += "Fair";
            }
            else if (checkedValue == 3) {
                ratetoout.innerHTML += "Average";
            }
            else if (checkedValue == 4) {
                ratetoout.innerHTML += "Good";
            }
            else if(checkedValue == 5) {
                ratetoout.innerHTML += "Excellent";
            }
 
*/



            for (var i = 0; i < rateCount; i++) {
                if (i == ival) {
                    document.getElementsByName("rate")[i].parentElement.style.color = "#ffdb0c";
                }
                else {
                    document.getElementsByName("rate")[i].parentElement.style.color = "#000";
                }

            }; //if we don't use ; after this for loop the lower will not execute as it consider it the last one



            if (checkedValue == 1) {
                ratetoout.innerHTML += `<div style="color:rgb(255, 0, 0)" class="reviewText"><br>Poor</div><br><img src="/—Pngtree—customer bad review_8774998.png" alt="poor" class="settedImage">`;
            }
            else if (checkedValue == 2) {
                ratetoout.innerHTML += `<div style="color:rgb(239, 123, 8)" class="reviewText"><br>Fair</div><br><img src="/2star.png" alt="fair" class="settedImage">`;
            }
            else if (checkedValue == 3) {
                ratetoout.innerHTML += `<div style="color:rgb(251, 255, 0)" class="reviewText"><br>Average</div><br><img src="/3star.png" alt="Average" class="settedImage">`;
            }
            else if (checkedValue == 4) {
                ratetoout.innerHTML += `<div style="color:rgb(88, 255, 88)" class="reviewText"><br>Good</div><br><img src="/4starfinal.png" alt="Good" class="settedImage">`;
            }
            else if (checkedValue == 5) {
                ratetoout.innerHTML += `<div style="color:rgb(18, 203, 70)" class="reviewText"><br>Excellent</div><br><img src="/5star.png.gif" alt="Excellent" class="settedImage">`;
            }

        }


        // document.getElementsByName("rate")[i].addEventListener('change', function () { //change not works

        //here this function is called by onclick and hence once onclick is done then no more click, change will be traced.. to this , we should have direct for loop without onclick

        /*
        document.getElementsByName("rate")[i].addEventListener('click', function () {
 
            alert("inside ratecount click");
            // var rate = this.value;
            // document.getElementsByName("rate")[i].parentElement.style.color="#ffdb0c";
            // document.getElementsByName("rate")[i].parentNode.style.color="red";
            //    this.parentNode.style.backgroundColor="red";
            //    this.parentNode.style.webkitTextStroke="1px black";
            // document.getElementsByName("rate")[i].parentElement.style.color="red";
 
            document.getElementsByName("rate")[i].parentElement.style.color = "#ffdb0c";
            document.getElementsByName("rate")[i].parentElement.style.fontWeight = "bold";
            ratetoout.innerHTML
                = document.getElementsByName("rate")[i].value;
 
        });
 
 */

    }

}

//we don't want to use this now
// document.getElementsByClassName("rateExperience")[0].onfocus = function RateIt() {
// }

/*
var rate=document.getElementsByClassName("rateExperience")[0]
rate.onfocus = function() {
    rate.style.backgroundImage = "url('rate.png')";
    rate.style.backgroundSize = "100% 100%";
    rate.style.backgroundRepeat = "no-repeat";
    rate.style.width="100%";
    rate.style.height="100%";
    rate.style.position="absolute";
    rate.style.top="0px";
    rate.style.left="0px";
    rate.style.zIndex="1000";
    rate.style.backgroundPosition="center";
}
    */

// document.getElementById("star1").onhover.classList.add("reviewstar");
document.getElementsByClassName("star1").onfocus = function () {
    // alert("being focused");
    document.getElementById("star1").classList.add("reviewstar");

}





/*
function rateexperience() {
    var rate = document.getElementById("rate").value;
    var ratevalue = document.getElementById("ratevalue").value;
    var ratecomment = document.getElementById("ratecomment").value;
    var ratebutton = document.getElementById("ratebutton").value;
    var ratebutton2 = document.getElementById("ratebutton2").value;
    var ratebutton3 = document.getElementById("ratebutton3").value;
 
}
 
*/

// alert(checkedValue);//undefined when unselected
function submitExperience() {

    document.getElementById("searchedOutput").style.display = "flex";



    if (checkedValue) {
        // alert(checkedValue);//4

        if (EmailAddress) {

            // var email = JSON.stringify(EmailAddress);

            // var checkedValueP = JSON.stringify(checkedValue);

            var dbparam = { EmailAddress: EmailAddress, checkedValue: checkedValue };

            dbparam = JSON.stringify(dbparam);


            var UpdateCustomerDetail = new XMLHttpRequest();

            UpdateCustomerDetail.onload = function () {
                if (this.status == 200) {

                    // alert(this.responseText);
                    // var UpdateOutput = JSON.parse(this.responseText);

                    document.getElementById("searchedOutput").innerHTML = this.responseText;
                    // return;

                }

            }

            // UpdateCustomerDetail.open("POST", "UpdateCustomersDetail.php?EmailAddress=" + email + "&checkedValue=" + checkedValueP);

            // UpdateCustomerDetail.send();

            UpdateCustomerDetail.open("POST", "UpdateCustomersDetail.php");
            UpdateCustomerDetail.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


            UpdateCustomerDetail.send("dbparam=" + dbparam);

            setTimeout(function () {
                document.getElementById("searchedOutput").style.display = "none";
            }, 4000);

            // document.getElementById("searchedOutput").innerHTML = checkedValue;
        }
        else {
            document.getElementById("searchedOutput").innerHTML = "Please login to give your experience";
        }
    }
    else {
        // alert("Please select a rating");//when undefined 
        document.getElementById("searchedOutput").innerHTML = "Please select a rating";
    }

    setTimeout(function () {
        document.getElementById("searchedOutput").style.display = "none";
    }, 4000);
}




//queryselectall()
function qSelectorAllHeadingCenter() {
    var element = document.querySelectorAll(".text-center");//works


    for (var i = 0; i < element.length; i++) {
        element[i].style.color = "black";
        element[i].style.backgroundColor = "aqua";
        element[i].style.fontSize = "20px";
        element[i].style.fontWeight = "bold";

        element[i].style.border = "2px solid black";
        element[i].style.borderRadius = "10px";
        element[i].style.margin = "0 10px";
        element[i].style.boxShadow = "10px 5px 5px black";



    }
}


qSelectorAllHeadingCenter();






var myLogin;

function hoverLogin() {
    myLogin = window.open("animatedLogin.html", "", "width=300, height=250");
    // myLogin.moveBy(document.getElementsByClassName("HoverLogin")[0].offsetLeft + window.screenX,  document.getElementsByClassName("HoverLogin")[0].offsetHeight + screenTop)
    // myLogin.moveBy(document.getElementsByClassName("HoverLogin")[0].offsetLeft + window.screenX, 300)
    // myLogin.moveTo(0, 0);
}

function hoverLoginClose() {
    if (myLogin) {
        myLogin.close();
    }
}


var textLoginMessage = "";
function checkWin() {

    if (!myLogin) {
        textLoginMessage = "It has never been opened!";
    } else {
        if (myLogin.closed) {
            text = "It is closed.";
        }
        else {
            textLoginMessage = "It is open.";
        }
    }
    // document.getElementById("demoOpenWindowDetail").innerText = text;
}










var myGamePlay;

function hoverPlay() {
    myGamePlay = window.open("HTMLGame.html", "", "width=500, height=350");
}

function hoverPlayClose() {
    if (myGamePlay) {
        myGamePlay.close();
    }
}

function playGameTabOpen() {
    myGamePlayF = window.open("HTMLGame.html", "", "width=500, height=350");

    myGamePlayF.addEventListener("pagehide", function () {
        alert("your game is active");
    })

    if (myGamePlayF) {
        myopener(myGamePlayF);
    }//myopener function is called and it will send the message that game is running behind

    // myGamePlay.focus();


    /*
        var closeopener= myGamePlay.document.createElement("button");
       closeopener.innerHTML = "Close Shanaya_Bazaar";
       myGamePlay.document.appendChild(closeopener);
       closeopener.onclick = function(){
        if(myGamePlay.opener){
        myGamePlay.opener.close();
        }
        //now append the element created
        
       }
         */
    //try this later

}





function myopener(myGamePlayF) {

    myGamePlayF.opener.document.getElementById("gameStatus").innerHTML = "HELLO! What are you doing here , your game is running .<br><button onclick='closeGamePlay(myGamePlayF)'>  Close Game </button>";

    // myGamePlay.opener.close();//it will close opener which is learning javascript as soon as this mywindow opens.

    // myGamePlay.opener.blur(); //we are just keeping it blur
    //Note:myGamePlay.parent.blur() is not acceptable anymore



    // var closeGamePlay=document.getElementById("gameStatus").createElement("button")
}






function closeGamePlay(myGamePlayF) {
    if (myGamePlayF) {
        myGamePlayF.close();
    }
}








function myGreeting() {
    // alert("helolo");
    // document.getElementById("setTimeOutSurprise").innerHTML = "Happy Birthday!";
    // document.getElementsByClassName("popover")[0].innerHTML = "Happy Birthday!";

    // document.getElementById("setTimeOutSurprise").style.display = "block";
    // document.getElementById("setTimeOutSurprise").classList.remove("popover");

    document.getElementById("setTimeOutSurprise").innerHTML = "Happy Shopping with extra offers!";


    // document.getElementById("setTimeOutSurprise").innerHTML = "Happy Birthday!";

    // later on we will set it in popup section and 



}



//surprise
function mySurprise() {

    document.getElementById("setTimeOutSurprise").innerHTML = "Nice to see you are interested";

    // const myTimeout = setTimeout(myGreeting, 5000);
    const myTimeout = setTimeout(myGreeting, 2000);

    // if (false) {
    //     // pass condition as if no button is clicked then call noSurprise
    //     noSurprise(myTimeout);
    // }

}


//clear the timeout
// function noSurprise(myTimeout) {

//     clearTimeout(myTimeout);//once executed then it can't be stoped,hence wait time should be more , to clear before execution
// }
function noSurprise() {

    document.getElementById("setTimeOutSurprise").innerHTML = "You missed a beautiful feeling";
}


// Instead of this, we can use sessionStorage EmailAddress
// uncomment when stuck
// var allanchor = document.getElementsByTagName("a");
// for (var i = 0; i < allanchor.length; i++) {
//     allanchor[i].addEventListener("click", function () {
//         var anchor = this;
//         var link = anchor.getAttribute("href");

//         // http://localhost:3000/shanaya_bazaar_main.php?&EmailAddress=sudhakumarichauhan24@gmail.com

//         link = link + "?EmailAddress=" + EmailAddress;
//         anchor.setAttribute("href", link);

//         // http://localhost:3000/Hair%20Spa%20Cap%20Steamer%20For%20Women%20Beauty%20Products.html?EmailAddress=sudhakumarichauhan24@gmail.com


//         if (link.indexOf("#") != -1) {
//             var id = link.substring(1);
//             var element = document.getElementById(id);
//             if (element) {
//                 element.scrollIntoView({ behavior: "smooth", block: "center" });
//                 //smooth scroll to id
//             }
//         }




//     });
// }









//when select options of category is changed
function myFunctionOnChange() {


    // document.getElementById("demo").innerHTML = "You selected: " + x;
    var xhashvalue = document.getElementById("mySelect").value;
    // xhashvalue.replace(" ","");//not works
    // we have to remove white spaces
    // xhashvalue = xhashvalue.replace(/\s+/g, '');//no need as we have setthe value without space like id="beautyHealth" and value="beautyHealth
    // alert(xhashvalue);

    // location.hash = xhashvalue;//not good looking

    document.getElementById(xhashvalue).scrollIntoView({ behavior: "smooth", block: "end" })
    // document.getElementById(xhashvalue).scrollIntoView({ behavior: "smooth", block: "center" });

    //xhashvalue must be defined inside
    console.log("Selected category is :" + xhashvalue);
}


function myFunctiononhashchange() {
    var xhashvalue = document.getElementById("mySelect").value;

    console.log('you selected ' + xhashvalue);
}


// var bannersectionClick = document.getElementsByClassName('bannersection')[0].getElementsByTagName("span");
var bannersectionClick = document.getElementsByClassName('banner')[0].getElementsByTagName("span");
for (var i = 0; i < bannersectionClick.length; i++) {
    bannersectionClick[i].addEventListener("click", function () {
        var xhashvalue = this.className;
        document.getElementById(xhashvalue).scrollIntoView({ behavior: "smooth", block: "end" });
    });
}





var slide1 = document.getElementById("swapslide1").style.animationPlayState;
var slide2 = document.getElementById("swapslide2").style.animationPlayState;
var slide3 = document.getElementById("swapslide3").style.animationPlayState;
var slide4 = document.getElementById("swapslide4").style.animationPlayState;
var slide5 = document.getElementById("swapslide5").style.animationPlayState;


function pauseslide() {

    // alert("inside pauseslide");
    document.getElementsByClassName("banner")[0].style.animationPlayState = "paused";

    // document.getElementsByClassName("swapslide")[0].style.animationPlayState = "paused";

    document.getElementById("swapslide1").style.animationPlayState = "paused";
    document.getElementById("swapslide2").style.animationPlayState = "paused";
    document.getElementById("swapslide3").style.animationPlayState = "paused";
    document.getElementById("swapslide4").style.animationPlayState = "paused";
    document.getElementById("swapslide5").style.animationPlayState = "paused";

    // if(slide1=="paused" || slide2=="paused" || slide3=="paused" || slide4=="paused" || slide5=="paused" ){}



    // var slide;

    // setInterval(swapslides_button ,5000);
    setTimeout(() => {
        // alert("inside setinterval");
        swapslides_button();
    }, 5000);

    // await sleep(5000);

}


function swapslides_button() {

    // document.getElementById("swapslide2").removeEventListener("click", pauseslide);

    // alert("swapslides_button called");

    // var slide1 = document.getElementById("swapslide1");
    // var slide2 = document.getElementById("swapslide2");
    // var slide3 = document.getElementById("swapslide3");
    // var slide4 = document.getElementById("swapslide4");
    // var slide5 = document.getElementById("swapslide5");

    document.getElementsByClassName("banner")[0].style.animationPlayState = "running";

    document.getElementById("swapslide1").style.animationPlayState = "running";
    document.getElementById("swapslide2").style.animationPlayState = "running";
    document.getElementById("swapslide3").style.animationPlayState = "running";
    document.getElementById("swapslide4").style.animationPlayState = "running";
    document.getElementById("swapslide5").style.animationPlayState = "running";

    // alert();

    // slide = document.getElementsByClassName("banner")[0].offsetLeft;
    // alert(slide);
    // if (slide.offsetLeft > -100) {
    //     slide1.style.backgroundColor = "green";
    // }





    /*
       slide1.style.animation-play-state ="paused";
        pic2.style.webkitAnimationPlayState="paused";
    
        pic1.onclick = function(){
            pic1.style.webkitAnimationPlayState="running";
            pic2.style.webkitAnimationPlayState="running";
        }
    
        pic2.onclick = function(){
            pic1.style.webkitAnimationPlayState="running";
            pic2.style.webkitAnimationPlayState="running";
        }
            */


}

/*
async function main() {
    console.log("Before sleep");
    await sleep(5000); // Sleep for 5 seconds
    console.log("After sleep [After 5 Seconds]");
  }
*/

// async function sleep(ms) {
//     await new Promise((resolve) => setTimeout(resolve, ms));
// }

// main();

/*
//here we checked all the possible way possible for this slide fixer
function openBanner(){
 
    // alert("openBanner");
    // alert(document.getElementsByClassName("banner")[0].offsetWidth);//4306
    // alert(document.getElementsByClassName("banner")[0].offsetLeft);//0
    // alert(document.getElementsByClassName("banner")[0].style.left);//
    // alert(document.getElementsByClassName("banner")[0].style.width);//
    // alert(document.getElementsByClassName("banner")[0].getAttribute("width"));//null
    // alert(document.getElementsByClassName("banner")[0].screenLeft);//undefined
    // alert(document.getElementsByClassName("banner")[0].clientLeft);//0
 
// var widthtotal=window.innerWidth + "px" ;
// var widthtotal=window.innerWidth + "vw" ;
// alert(widthtotal);
 
 
    // document.getElementsByClassName("banner")[0].style.transform = "translateX("+-widthtotal+",0)";
 
    // document.getElementsByClassName("banner")[0].style.animationPlayState = "paused";
   
 
    // document.getElementsByClassName("banner")[0].style.transform = "translateX(900px)";//working but at last
 
//    d= document.getElementsByClassName("banner")[0]= "static";
//    d.style.position = "relative";
// d.style.left = -100+'vw';
 
    // pauseslide();//0
 
 
 
    // pauseslide();//0
    
    // document.getElementsByClassName("banner")[0].style.transform = "translateX("+-700px+")";
 
    // document.getElementsByClassName("banner")[0].removeAttribute("class");
    document.getElementsByClassName("banner")[0].style.animation="none";
 
    // document.getElementsByClassName("banner")[0].innerHTML = `<a href="about.html"><img src="magasalebanner.png" alt="banner" class="bannerphoto mobilebanner">`;
    document.getElementsByClassName("banner")[0].innerHTML = `<a href="about.html"><img src="Fashion Sale Banner Post - Made with PosterMyWall.jpg" alt="banner" class="bannerphoto mobilebanner"></a>`;
   
 
    // var style = window.getComputedStyle(document.getElementsByClassName("banner")[0]).getPropertyValue('transform');//matrix(1, 0, 0, 1, -717.62, 0)
    // var style = window.getComputedStyle(document.getElementsByClassName("banner")[0]).getPropertyValue('width');//4305.72px
    // var style = window.getComputedStyle(document.getElementById("swapslide2")).getPropertyValue('width');//19.9886px
    // var style = window.getComputedStyle(document.getElementsByClassName("banner")[0]).getPropertyValue('transform');//matrix(1, 0, 0, 1, 0, 0)
    // alert(style);
 
    // document.getElementById("swapslide2").scrollIntoView(); //to scroll to the top of the element //move this element to top not side wise.
 
//   var matrix = new WebKitCSSMatrix(style.transform);
//   alert('translateX: ', matrix.m41);
 
 
// To scroll to an element within a div using JavaScript, set the parent div's scrollTop`to the target element's offsetTop.
 
// just to read a scrollbar
// // const element = document.getElementsByClassName("banner")[0];
// const element = document.getElementById("swapslide2");
// let x = element.scrollLeft;
// let y = element.scrollTop;
// // alert("Horizontally: " + x.toFixed() + "Vertically: " + y.toFixed());//Horizontally: 0<br>Vertically: 0
// alert("Horizontally: " + x.toFixed() + "Vertically: " + y.toFixed());//Horizontally: 0<br>Vertically: 0
 
 
 
 
}
*/


//https://medium.com/@dimterion/images-slider-with-javascript-95349e0ab4fc

//Check this for Images Slider With JavaScript




//final function openBanner(){}


// initial function slide before selecting.

var bannerInnerHTML = document.getElementsByClassName("banner")[0].innerHTML;

function initialslideshow() {
    // alert("inside setinterval");

    document.getElementById("swapslide1").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide2").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide3").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide4").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide5").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide6").style.backgroundColor = "#9da2a2";


    document.getElementsByClassName("banner")[0].style.animation = "bannerslide 15s linear 0s infinite forwards";

    document.getElementById("swapslide1").style.animation = "bannerControlslide 15s linear 0s infinite forwards";
    document.getElementById("swapslide2").style.animation = "bannerControlslide 15s linear 2s infinite forwards";
    document.getElementById("swapslide3").style.animation = "bannerControlslide 15s linear 5s infinite forwards";
    document.getElementById("swapslide4").style.animation = "bannerControlslide 15s linear 8s infinite forwards";
    document.getElementById("swapslide5").style.animation = "bannerControlslide 15s linear 10s infinite forwards";
    document.getElementById("swapslide6").style.animation = "bannerControlslide 15s linear 13s infinite forwards";

    //     document.getElementsByClassName("banner")[0].innerHTML = `<a href="about.html"><img src="magasalebanner.png" alt="banner" class="bannerphoto mobilebanner"></a>

    // <a href="about.html"><img src="Fashion Sale Banner Post - Made with PosterMyWall.jpg" alt="banner" class="bannerphoto mobilebanner"></a>
    //         <a href="about.html"><img src="Men's Wear.jpg" alt="banner" class="bannerphoto mobilebanner"></a>
    //         <a href="about.html"><img src="kids wear.jpg" alt="banner" class="bannerphoto mobilebanner"></a>
    //         <a href="about.html"><img src="/Health and Beauty.jpg" alt="banner" class="bannerphoto mobilebanner"></a>
    //         <a href="about.html"><img src="/home and kitchen.jpg" alt="banner" class="bannerphoto mobilebanner"></a>

    // `;

    document.getElementsByClassName("banner")[0].innerHTML = bannerInnerHTML;
    swapslides_button();


}


function openBanner1() {

    document.getElementsByClassName("banner")[0].style.animation = "none";

    document.getElementById("swapslide1").style.animation = "none";
    document.getElementById("swapslide2").style.animation = "none";
    document.getElementById("swapslide3").style.animation = "none";
    document.getElementById("swapslide4").style.animation = "none";
    document.getElementById("swapslide5").style.animation = "none";
    document.getElementById("swapslide6").style.animation = "none";

    document.getElementsByClassName("banner")[0].innerHTML = ` <span 
               ' class="mahaloot"><img src="magasalebanner.png" alt="banner" class="bannerphoto mobilebanner"></span>`;



    document.getElementById("swapslide1").style.backgroundColor = "blue";
    document.getElementById("swapslide2").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide3").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide4").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide5").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide6").style.backgroundColor = "#9da2a2";



    //    document.getElementsByClassName("banner")[0].onclick='document.getElementById("mahaloot").scrollIntoView({ behavior: "smooth", block: "end" })';
    document.getElementsByClassName("banner")[0].getElementsByTagName("span")[0].addEventListener("click", function () {
        // alert("hello");
        document.getElementById("mahaloot").scrollIntoView({ behavior: "smooth", block: "end" });
    });

    setTimeout(initialslideshow, 5000);


}



function openBanner2() {

    document.getElementsByClassName("banner")[0].style.animation = "none";

    document.getElementById("swapslide1").style.animation = "none";
    document.getElementById("swapslide2").style.animation = "none";
    document.getElementById("swapslide3").style.animation = "none";
    document.getElementById("swapslide4").style.animation = "none";
    document.getElementById("swapslide5").style.animation = "none";
    document.getElementById("swapslide6").style.animation = "none";

    document.getElementsByClassName("banner")[0].innerHTML = `<span class="women"><img src="Fashion Sale Banner Post - Made with PosterMyWall.jpg" alt="banner"
                        class="bannerphoto mobilebanner"></span>`;




    document.getElementById("swapslide1").style.backgroundColor = "#9da2a2";

    document.getElementById("swapslide2").style.backgroundColor = "blue";

    document.getElementById("swapslide3").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide4").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide5").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide6").style.backgroundColor = "#9da2a2";


    document.getElementsByClassName("banner")[0].getElementsByTagName("span")[0].addEventListener("click", function () {
        // alert("hello");
        document.getElementById("women").scrollIntoView({ behavior: "smooth", block: "end" });
    });

    setTimeout(initialslideshow, 5000);
}

function openBanner3() {

    document.getElementsByClassName("banner")[0].style.animation = "none";

    document.getElementById("swapslide1").style.animation = "none";
    document.getElementById("swapslide2").style.animation = "none";
    document.getElementById("swapslide3").style.animation = "none";
    document.getElementById("swapslide4").style.animation = "none";
    document.getElementById("swapslide5").style.animation = "none";
    document.getElementById("swapslide6").style.animation = "none";

    document.getElementsByClassName("banner")[0].innerHTML = `<span class="men"><img src="Men's Wear.jpg" alt="banner" class="bannerphoto mobilebanner"></span>`;



    document.getElementById("swapslide1").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide2").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide3").style.backgroundColor = "blue";
    document.getElementById("swapslide4").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide5").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide6").style.backgroundColor = "#9da2a2";

    document.getElementsByClassName("banner")[0].getElementsByTagName("span")[0].addEventListener("click", function () {
        // alert("hello");
        document.getElementById("men").scrollIntoView({ behavior: "smooth", block: "end" });
    });


    setTimeout(initialslideshow, 5000);
}

function openBanner4() {

    document.getElementsByClassName("banner")[0].style.animation = "none";

    document.getElementById("swapslide1").style.animation = "none";
    document.getElementById("swapslide2").style.animation = "none";
    document.getElementById("swapslide3").style.animation = "none";
    document.getElementById("swapslide4").style.animation = "none";
    document.getElementById("swapslide5").style.animation = "none";
    document.getElementById("swapslide6").style.animation = "none";

    document.getElementsByClassName("banner")[0].innerHTML = `<span class="kids"><img src="kids wear.jpg" alt="banner" class="bannerphoto mobilebanner"></span>`;



    document.getElementById("swapslide1").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide2").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide3").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide4").style.backgroundColor = "blue";
    document.getElementById("swapslide5").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide6").style.backgroundColor = "#9da2a2";

    document.getElementsByClassName("banner")[0].getElementsByTagName("span")[0].addEventListener("click", function () {
        // alert("hello");
        document.getElementById("kids").scrollIntoView({ behavior: "smooth", block: "end" });
    });

    setTimeout(initialslideshow, 5000);

}

function openBanner5() {

    document.getElementsByClassName("banner")[0].style.animation = "none";

    document.getElementById("swapslide1").style.animation = "none";
    document.getElementById("swapslide2").style.animation = "none";
    document.getElementById("swapslide3").style.animation = "none";
    document.getElementById("swapslide4").style.animation = "none";
    document.getElementById("swapslide5").style.animation = "none";
    document.getElementById("swapslide6").style.animation = "none";

    document.getElementsByClassName("banner")[0].innerHTML = `<span class="beautyHealth"><img src="/Health and Beauty.jpg" alt="banner"
                        class="bannerphoto mobilebanner"></span>`;




    document.getElementById("swapslide1").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide2").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide3").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide4").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide5").style.backgroundColor = "blue";
    document.getElementById("swapslide6").style.backgroundColor = "#9da2a2";

    document.getElementsByClassName("banner")[0].getElementsByTagName("span")[0].addEventListener("click", function () {
        // alert("hello");
        document.getElementById("beautyHealth").scrollIntoView({ behavior: "smooth", block: "end" });
    });

    setTimeout(initialslideshow, 5000);

}


function openBanner6() {

    document.getElementsByClassName("banner")[0].style.animation = "none";

    document.getElementById("swapslide1").style.animation = "none";
    document.getElementById("swapslide2").style.animation = "none";
    document.getElementById("swapslide3").style.animation = "none";
    document.getElementById("swapslide4").style.animation = "none";
    document.getElementById("swapslide5").style.animation = "none";
    document.getElementById("swapslide6").style.animation = "none";

    document.getElementsByClassName("banner")[0].innerHTML = `<span class="homeGarden"><img src="/home and kitchen.jpg" alt="banner" class="bannerphoto mobilebanner"></span>`;



    document.getElementById("swapslide1").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide2").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide3").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide4").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide5").style.backgroundColor = "#9da2a2";
    document.getElementById("swapslide6").style.backgroundColor = "blue";

    document.getElementsByClassName("banner")[0].getElementsByTagName("span")[0].addEventListener("click", function () {
        // alert("hello");
        document.getElementById("homeGarden").scrollIntoView({ behavior: "smooth", block: "end" });
    });


    setTimeout(initialslideshow, 5000);

}



const stickContent = document.getElementById("stickContent");

const stickContentEnd = document.getElementById("stickContentEnd");

const sticky = stickContent.offsetTop;

// const stickyEnd = stickContentEnd.offsetTop + Number(v);
// const stickyEnd = stickContentEnd.offsetHeight;
const stickyEnd = stickContent.offsetHeight;


function mySticky() {
    if (window.scrollY >= sticky && window.scrollY <= stickyEnd) {
        stickContent.classList.add("sticky")
    } else {
        stickContent.classList.remove("sticky");
    }
}//now it works properly
window.addEventListener("scroll", mySticky);










var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); //we used this to prevent reload of page after XMLHttpRequest
    // Your form submission logic here 
});



// setTimeout(function () {
//     document.getElementById("searchedOutput").style.display = "none";
// }, 5000);

// var searchButton=document.getElementsByClassName("search");
// searchButton[0].addEventListener("click",searchEnteredProduct);


var SearchProductInnerHTML = document.getElementsByClassName("completeonecategory")[0].firstElementChild.getElementsByTagName("a")[0].innerHTML;

// var SearchProductInnerHTML2 = document.getElementsByClassName("completeonecategory")[1].firstElementChild.getElementsByTagName("a")[0].innerHTML;

document.searchProduct.searchProductEnteredbyTyping.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementsByClassName("search")[0].click();
    }
});

var topcategory = document.getElementsByClassName("topcategoryProductOptionBox");
// alert(topcategory.length);

for (var i = 0; i < topcategory.length; i++) {
    // topcategory[i].getElementsByTagName("a")[0].removeAttribute("href");
    // topcategory[i].getElementsByTagName("a")[0].removeAttribute("href");
    topcategory[i].addEventListener("click", function () {

        var categoryname = this.getElementsByTagName("p")[0].innerHTML;
        // alert(categoryname);//women
        searchThisProductTopCategory(categoryname);
    }
    )
}


function searchThisProductTopCategory(product) {


    product = product.trim();
    product = product.toLowerCase();
    product = product.replace(/[^a-z0-9\s]/g, ''); //this line is used to remove all special symbols d%w3 changes to  dw3

    product = product.replace(/\s+/g, ' '); //this line is used to remove all extra spaces between words

    document.getElementById("searchedOutput").style.display = "none";

    if (document.getElementsByClassName("searchOutBlock")[0].style.display == "block" || document.getElementsByClassName("searchOutMoreBlock")[0].style.display == "block" || document.getElementsByClassName("searchOutMoreBlock")[0].style.flexWrap == "wrap") {


        document.getElementsByClassName("searchOutBlock")[0].style.display = "none";
        document.getElementsByClassName("searchOutMoreBlock")[0].style.display = "none";

        var anchors = document.getElementsByClassName("searchOutBlock")[0].getElementsByTagName("a");


        // alert(anchors.length);
        for (var i = 0; i < anchors.length; i++) {
            anchors[i].innerHTML = "";


        }

        document.getElementsByClassName("searchOutBlock")[0].getElementsByTagName("a")[0].innerHTML = SearchProductInnerHTML;


        searchThisProduct(product);
        return;


    }
    searchThisProduct(product);
}



function searchEnteredProduct() {

    document.getElementById("searchOut").scrollIntoView({ behavior: "smooth", block: "center" });

    //    document.getElementById("searchOutMore").scrollIntoView({ behavior: "smooth", block: "end" });

    // var refreshBtn = document.getElementById("btnRefresh");
    // function handleClick() {
    //   window.location.reload();
    // }
    // refreshBtn.addEventListener("click", handleClick);

    var productEntered = document.searchProduct.searchProductEnteredbyTyping.value;
    productEntered = productEntered.trim();
    productEntered = productEntered.toLowerCase();
    productEntered = productEntered.replace(/[^a-z0-9\s]/g, ''); //this line is used to remove all special symbols d%w3 changes to  dw3

    productEntered = productEntered.replace(/\s+/g, ' '); //this line is used to remove all extra spaces between words


    if (productEntered == "") {
        document.getElementById("searchedOutput").style.display = "flex";
        document.getElementById("searchedOutput").innerHTML = "Please type the product you want to search for";
        // alert("empty");//ok


        setTimeout(function () {
            document.getElementById("searchedOutput").style.display = "none";
        }, 5000);
        // return;
    }
    else {

        document.getElementById("searchedOutput").style.display = "none";

        if (document.getElementsByClassName("searchOutBlock")[0].style.display == "block" || document.getElementsByClassName("searchOutMoreBlock")[0].style.display == "block" || document.getElementsByClassName("searchOutMoreBlock")[0].style.flexWrap == "wrap") {


            document.getElementsByClassName("searchOutBlock")[0].style.display = "none";
            document.getElementsByClassName("searchOutMoreBlock")[0].style.display = "none";
            // document.getElementsByClassName("searchOutMoreBlock")[0].innerHTML = "";



            // alert('we are already open');
            // we also want to clear all the anchors except the first
            var anchors = document.getElementsByClassName("searchOutBlock")[0].getElementsByTagName("a");
            // var anchors2 = document.getElementsByClassName("searchOutMoreBlock")[0].getElementsByTagName("a");

            // alert(anchors.length);
            for (var i = 0; i < anchors.length; i++) {
                anchors[i].innerHTML = "";


            }
            // for (var i = 0; i < anchors2.length; i++) {
            //     // for (var i = 1; i < anchors2.length; i++) {
            //     anchors2[i].innerHTML = "";

            // }

            // document.getElementsByClassName("completeonecategory")[0].firstElementChild.getElementsByTagName("a")[0].innerHTML=SearchProductInnerHTML;
            document.getElementsByClassName("searchOutBlock")[0].getElementsByTagName("a")[0].innerHTML = SearchProductInnerHTML;

            // document.getElementsByClassName("completeonecategory")[1].firstElementChild.getElementsByTagName("a")[0].innerHTML = SearchProductInnerHTML2;


            searchThisProduct(productEntered);
            return;
        }


        // document.getElementsByClassName("searchOutMoreBlock")[0].style.display = "none";


        // none works even when we want to repaint on searching again


        searchThisProduct(productEntered);
    }

}





function searchThisProduct(product) {

    var product = JSON.stringify(product);

    var getProducts = new XMLHttpRequest();

    getProducts.open("GET", "searchProduct.php?product=" + product, true);


    getProducts.onload = function () {

        // document.getElementById("searchedOutput").style.display = "flex";

        if (getProducts.status >= 200 && getProducts.status < 300) {



            // document.getElementById("searchedOutput").style.display = "flex";

            // alert(this.responseText); //[{},{}]

            // var responseOfDataBase=this.responseText; //this will not work in tracking the empty , we must parse it or if not parsed then use this.responseText==="{}" //if we have converted it into list then use this.responseText=="[]"

            // var responseOfDataBase= JSON.parse(this.responseText);//easy to track objects//Object.keys(responseOfDataBase).length===0//it will not work in case of array

            // if (Object.keys(responseOfDataBase).length===0){

            if (this.responseText == "[]") {

                document.getElementById("searchedOutput").style.display = "flex";
                document.getElementById("searchedOutput").innerHTML = "Sorry, we could not find any product matching";

            }
            else {

                var containerbox = document.getElementsByClassName("completeonecategory")[0].firstElementChild;

                var containerbox2 = document.getElementsByClassName("completeonecategory")[1].firstElementChild;

                // window.scrollTo(0,0);//best to reach to top
                // window.location.hash = "searchOut";
                //this will not take to this hash if window is alredy scrolled below this searchOut, hence we will use

                // var searchSection = document.getElementById("searchOut");
                // searchSection.scrollIntoView({ behavior: "smooth", block: "center" });
                // // it's great



                // window.location.hash = "searchOut";

                document.getElementsByClassName("completeonecategory")[0].previousElementSibling.innerHTML = "Your search result for " + product + " is ready. ";

                document.getElementsByClassName("completeonecategory")[1].previousElementSibling.innerHTML = "Some more result for " + product + " is ready ";

                var clonebox = document.getElementsByClassName("completeonecategory")[0].firstElementChild.getElementsByTagName("a")[0];

                clonebox.removeAttribute("href");

                var clone = clonebox.cloneNode(true);

                // var anchorLength=containerbox.getElementsByTagName("a");

                // for(var i=0;i<anchorLength.length;i++){
                //     containerbox.getElementsByTagName("a")[i].innerHTML = "";
                // }

                // var anchorLength2=containerbox2.getElementsByTagName("a");
                // for(var i=0;i<anchorLength2.length;i++){
                //     // containerbox2.getElementsByTagName("a")[i].innerHTML = "";
                //     // we can simply remove these anchor elements
                //     containerbox2.getElementsByTagName("a")[i].remove();
                // }

                // containerbox2.innerHTML = "";
                containerbox.getElementsByTagName("a")[0].innerHTML = "";//next time when it will be called , it is emptied
                // containerbox2.getElementsByTagName("a")[0].innerHTML = "";

                // document.getElementsByClassName("topcategoryProduct")[0].style.display = "none";

                // document.getElementsByClassName("bannersection")[0].style.display = "none";

                // document.getElementsByClassName("gridcontainer")[0].style.display = "none";

                // document.getElementById("searchedOutput").innerHTML = this.responseText;

                document.getElementById("searchedOutput").style.display = "flex";
                document.getElementById("searchedOutput").innerHTML = "Your search result for " + product + " is ready ";

                var responseOfDataBase = JSON.parse(this.responseText);

                // alert(responseOfDataBase);

                var numOfMatchedProducts = responseOfDataBase.length;


                // below we are doing for inserting the products automatically

                // alert(responseOfDataBase.length);//16 outputs in case of ford


                function productfit(i) {
                    // clone.firstElementChild.lastElementChild.lastElementChild.innerHTML = responseOfDataBase[i].productName;


                    clone.getElementsByClassName("productName")[0].innerHTML = responseOfDataBase[i].productName;

                    var priceSetted = Number(responseOfDataBase[i].buyPrice);


                    // clone.getElementsByClassName("priceOfProduct")[0].innerHTML = responseOfDataBase[i].MSRP;

                    clone.getElementsByClassName("priceOfProduct")[0].innerHTML = priceSetted.toFixed(0);

                    // var productCode = responseOfDataBase[i].productCode;
                    // alert(productCode);
                    // S12_1099

                    clone.getElementsByClassName("productCode")[0].innerHTML = responseOfDataBase[i].productCode;


                    if (responseOfDataBase[i].mainProductImage != null) {

                        // alert(responseOfDataBase[i].mainProductImage);
                        clone.getElementsByClassName("productimg")[0].src = responseOfDataBase[i].mainProductImage;


                    }

                    // clone.onclick=navigateProductClick(productCode);


                    // clone.addEventListener("click", function () {
                    //     alert(productCode);
                    // //     clone.href = windowHreff;
                    // //     navigateProductClick(productCode);



                    // //    var hrefOfThisProduct=navigateProductClick(productCode);
                    // //    alert(hrefOfThisProduct);

                    // //     clone.href = hrefOfThisProduct;

                    //     // clone.onclick=navigateProductClick(productCode);




                    // });

                    // clone.getElementsByClassName("productimg")[0].src=responseOfDataBase[i].mainProductImage;
                }




                if (numOfMatchedProducts > 0) {

                    containerbox2.innerHTML = "";



                    // for (var i = 0; i < numOfMatchedProducts; i++) {//used for all result in one row
                    if (numOfMatchedProducts < 10) {
                        // if this condition is not used then it will call for loop 10 time and got stuck
                        for (var i = 0; i < numOfMatchedProducts; i++) {
                            productfit(i);
                            // containerbox.parentElement.style.display="flex";//not works

                            document.getElementsByClassName("searchOutBlock")[0].style.display = "block";
                            containerbox.innerHTML += clone.outerHTML;

                            document.getElementById("searchOut").scrollIntoView({ behavior: "smooth", block: "center" });//before this it would be in form of display none , having no space reserved

                            // document.getElementById("searchOutMore").scrollIntoView({ behavior: "smooth", block: "end" });
                        }
                    }
                    else {


                        for (var i = 0; i < 10; i++) {

                            productfit(i);
                            // containerbox.parentElement.style.display="flex";//not works

                            document.getElementsByClassName("searchOutBlock")[0].style.display = "block";
                            containerbox.innerHTML += clone.outerHTML;

                            document.getElementById("searchOut").scrollIntoView({ behavior: "smooth", block: "center" });//before this it would be in form of display none , having no space reserved

                            // document.getElementById("searchOutMore").scrollIntoView({ behavior: "smooth", block: "end" });



                        }
                    }


                    for (var i = 10; i < numOfMatchedProducts; i++) {
                        productfit(i);
                        document.getElementsByClassName("searchOutMoreBlock")[0].style.display = "block";


                        containerbox2.innerHTML += clone.outerHTML;
                        // document.getElementsByClassName("searchOutMoreBlock")[0].style.height="fit-content";

                        document.getElementsByClassName("searchOutMoreBlock")[0].style.height = "auto";





                        // containerbox2.style.width="100vw";
                        // containerbox2.style.height="fit-content";
                        // we need to wrap the content in case of overflow

                        // containerbox2.style.flexwrap="wrap";
                        // containerbox2.style.height="fit-content";
                    }



                    // if (numOfMatchedProducts > 20 && containerbox2.style.flexWrap !== "wrap") {
                    if (numOfMatchedProducts > 20) {

                        if (document.getElementsByClassName("searchOutMoreBlock")[0].getElementsByTagName("button")[2]) {
                            document.getElementsByClassName("searchOutMoreBlock")[0].removeChild(document.getElementsByClassName("searchOutMoreBlock")[0].getElementsByTagName("button")[2]);
                        }


                        var node = document.createElement("button");
                        node.innerHTML = "Load More";
                        node.style.display = "flex";
                        node.style.justifySelf = "center";
                        node.onclick = function () {
                            loadMore(this);
                        }
                        document.getElementsByClassName("searchOutMoreBlock")[0].appendChild(node);


                    }
                }


                function loadMore(element) {
                    containerbox2.style.justifyContent = "center";
                    // clone.style.margin="5vh";
                    containerbox2.style.alignItems = "center";
                    // containerbox2.style.alignItems="stretch";

                    containerbox2.style.flexWrap = "wrap";
                    containerbox2.style.overflow = "hidden";
                    containerbox2.style.height = "auto";
                    containerbox2.style.gap = "10px";

                    document.getElementsByClassName("searchOutMoreBlock")[0].removeChild(element);

                    // we have to remove button tag
                    containerbox2.removeChild(containerbox2.getElementsByTagName("button")[0]);
                    containerbox2.removeChild(containerbox2.getElementsByTagName("button")[1]);



                }

                // alert(containerbox.getElementsByClassName("productCode")[0].innerHTML);

                // var productboxInside = containerbox.getElementsByClassName("completeproductbox");

                // alert(productboxInside.length);//it gives only 10 due to containerbox is mentioned

                var productboxInside = document.getElementsByClassName("completeproductbox");

                for (var i = 0; i < productboxInside.length; i++) {
                    productboxInside[i].addEventListener("click", function () {
                        // alert("clicked");
                        var productCode = this.getElementsByClassName("productCode")[0].innerHTML;
                        // alert(productCode);

                        // we want to add attribute onclick to productboxInside[i] and call this navigateProductClick function
                        // this productboxInside[i] is the element that was clicked

                        // this.getElementsByClassName("productCode")[0].setAttribute("onclick", "navigateProductClick("+productCode+")");
                        // this.getElementsByClassName("productCode")[0].setAttribute("onclick", "alert('clicked')");



                        navigateProductClick(productCode);
                    });
                }


            }




        }
        else {
            document.getElementById("searchedOutput").style.display = "flex";
            document.getElementById("searchedOutput").innerHTML = "Server is slow and unable to get matched product";

        }

        setTimeout(function () {
            document.getElementById("searchedOutput").style.display = "none";
        }, 5000);

    }

    getProducts.send();


    // setTimeout(function () {
    //     document.getElementById("searchedOutput").style.display = "none";
    // }, 5000);
}








function searchGivenProduct(product, id, pagehref, SearchProductInnerHTML) {
    // alert(product);//receives even from others
    // alert(id);
    // var id=JSON.stringify(id);
    product = JSON.stringify(product);
    var getProducts = new XMLHttpRequest();


    // getProducts.open("GET", "searchProduct.php?product=" + product, true);
    getProducts.open("GET", pagehref + "searchProduct.php?product=" + product, true);

    // getProducts.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//not neccessary for get


    getProducts.onload = function () {

        if (getProducts.status >= 200 && getProducts.status < 300) {

            if (this.responseText == "[]") {

                if (document.getElementById("searchedOutput")) {
                    document.getElementById("searchedOutput").style.display = "flex";
                    document.getElementById("searchedOutput").innerHTML = "Sorry, we could not find any product matching";
                }
                else {
                    alert("Sorry, we don't not find any product matching");
                }

            }
            else {

                var containerbox = document.getElementById(id);

                // alert(containerbox);

                var clonebox = containerbox.getElementsByTagName("a")[0];

                clonebox.innerHTML = SearchProductInnerHTML;

                // alert(SearchProductInnerHTML);//undefined for js from another page call



                // alert(id);

               

                clonebox.removeAttribute("href");



                var clone = clonebox.cloneNode(true);

                // containerbox.innerHTML = "";


                containerbox.getElementsByTagName("a")[0].innerHTML = "";


                var anchorLength = containerbox.getElementsByTagName("a");
                for (var i = 0; i < anchorLength.length; i++) {
                    containerbox.getElementsByTagName("a")[i].innerHTML = "";
                    // instead we would like to remove all anchors
                    // containerbox.getElementsByTagName("a")[i].remove();

                }

                var responseOfDataBase = JSON.parse(this.responseText);
                var numOfMatchedProducts = responseOfDataBase.length;


                // alert(id + numOfMatchedProducts);

       




                function productfit(i) {

                    clone.getElementsByClassName("productName")[0].innerHTML = responseOfDataBase[i].productName;

                    var priceSetted = Number(responseOfDataBase[i].buyPrice);

                    clone.getElementsByClassName("priceOfProduct")[0].innerHTML = priceSetted.toFixed(0);

                    clone.getElementsByClassName("productCode")[0].innerHTML = responseOfDataBase[i].productCode;



                    if (responseOfDataBase[i].mainProductImage != null) {

                        clone.getElementsByClassName("productimg")[0].src = pagehref + responseOfDataBase[i].mainProductImage;
                    }


                    // clone.getElementsByClassName("productimg")[0].src=responseOfDataBase[i].mainProductImage;
                }

                if (numOfMatchedProducts > 0) {

                    if (id !== "mahaloot") {


                        for (var i = 0; i < numOfMatchedProducts; i++) {
                            productfit(i);
                            containerbox.innerHTML += clone.outerHTML;

                        }
                        if (numOfMatchedProducts > 10) {

                            var nodeP = document.createElement("button");
                            nodeP.innerHTML = "Load More";
                            nodeP.style.display = "flex";
                            nodeP.style.justifySelf = "center";
                            nodeP.onclick = function () {
                                loadMore(this);
                            }
                            containerbox.parentElement.parentElement.appendChild(nodeP);

                        }
                    }
                    else {
                        if (numOfMatchedProducts > 10) {
                            for (var i = 0; i < 10; i++) {
                                productfit(i);
                                containerbox.innerHTML += clone.outerHTML;
                            }
                        }
                        else {

                            for (var i = 0; i < numOfMatchedProducts; i++) {
                                productfit(i);
                                containerbox.innerHTML += clone.outerHTML;
                            }
                        }
                    }

                }
                else {
                    // alert("No matched product");
                }


                function loadMore(element) {

                    containerbox.style.justifyContent = "center";
                    // clone.style.margin="5vh";
                    containerbox.style.alignItems = "center";
                    // containerbox.style.alignItems="stretch";

                    containerbox.style.flexWrap = "wrap";
                    containerbox.style.overflow = "hidden";
                    containerbox.style.height = "auto";
                    containerbox.style.gap = "10px";

                    containerbox.parentElement.parentElement.removeChild(element);




                    // we have to remove button tag
                    containerbox.removeChild(containerbox.getElementsByTagName("button")[0]);
                    containerbox.removeChild(containerbox.getElementsByTagName("button")[1]);


                }


                var productboxInside = document.getElementsByClassName("completeproductbox");

                for (var i = 0; i < productboxInside.length; i++) {
                    productboxInside[i].addEventListener("click", function () {
                        // alert("clicked");
                        var productCode = this.getElementsByClassName("productCode")[0].innerHTML;

                        navigateProductClick(productCode);
                    });
                }


            }


        




        }
        else {
            if (document.getElementById("searchedOutput")) {
                document.getElementById("searchedOutput").style.display = "flex";
                document.getElementById("searchedOutput").innerHTML = "Server is slow and unable to get matched product";
            }

        }

        if (document.getElementById("searchedOutput")) {
            setTimeout(function () {
                document.getElementById("searchedOutput").style.display = "none";
            }, 5000);
        }

    }



    getProducts.send();


}


// alert(document.getElementById("home"));//
// alert(window.location.href);//http://localhost:3000/shanaya_bazaar_main.php//we want to check if href includes this page name
// alert(window.location.href.includes("shanaya_bazaar_main.php"));//true
// now we want to check the current page name in the window
// alert(window.location.href.split("/").pop());//shanaya_bazaar_main.php//but what if url has different name, how to detect url





// alert(window.location.href.split("/").pop()); //shanaya_bazaar_main.php
//we want url of the current page which is product page
// alert(window.location.href.split("/").pop().includes("product")); //true



// http://localhost:3000/product/kids/girl%20wear/Stylish%20Beautiful%20Printed%20Cotton%20Frock%20And%20Jacket%20Dresses/Stylish%20Beautiful%20Printed%20Cotton%20Frock%20And%20Jacket%20Dresses.html
// we want to track above url or link if url has product in it or not//check it









// if(document.getElementById("home") != undefined || document.getElementById("home") != null){//due to clone it not works as it is.



// if (window.location.href.includes("shanaya_bazaar_main.php")){


    searchGivenProduct("men", "men", "/", SearchProductInnerHTML);
    searchGivenProduct("women", "women", "/", SearchProductInnerHTML);

    searchGivenProduct("kid", "kids", "/", SearchProductInnerHTML);
    searchGivenProduct("home garden kitchen", "homeGarden", "/", SearchProductInnerHTML);

    searchGivenProduct("trendy", "mahaloot", "/", SearchProductInnerHTML);

    // alert("true");


// }




var gridImageContainer = document.getElementsByClassName("gridSectionContainer");

for (var i = 0; i < gridImageContainer.length; i++) {
    var gridImage = gridImageContainer[i].getElementsByTagName("img");
    for (var j = 0; j < gridImage.length; j++) {
        gridImage[j].addEventListener("click", function () {

            var fileSrc = this.getAttribute("src");//product/women/ethnic wear/lahenga/Solid Semi Stitched Lehenga Choli/colors option/rama/Screenshot 2025-02-10 214918.png

            // alert(fileSrc);
            // we want to send this to getThisFileDetail.php

            // we need to properly set this fileSrc by removing .webp from it if present
            // if (fileSrc.includes(".webp")) {
            //     fileSrc = fileSrc.replace(".webp", "");
            //     }//but it will also not help for image nevigation


            // we need to trim it
            fileSrc = fileSrc.trim();
            fileSrc = JSON.stringify(fileSrc);


            var getProductCode = new XMLHttpRequest();


            getProductCode.onload = function () {

                // alert(this.responseText);//{"productCode":{"product_Code":"WEWL1"}}////{"product_Code":"WEWL1"}

                if (getProductCode.status >= 200 && getProductCode.status < 300) {

                    var ProductCodeOfThisFile = JSON.parse(this.responseText);


                    // alert(ProductCodeOfThisFile.productCode.product_Code);//in {"productCode":{"product_Code":"WEWL1"}}

                    // ProductCodeOfThisFile = ProductCodeOfThisFile.product_Code;//in //{"product_Code":"WEWL1"}

                    ProductCodeOfThisFile = ProductCodeOfThisFile[0].product_Code;//in //{"product_Code":"WEWL1"}



                    // alert(ProductCodeOfThisFile);//WEWL1

                    // if (ProductCodeOfThisFile !== "") {

                    // if (ProductCodeOfThisFile !== null) {//when we not used IFNULL
                    if (ProductCodeOfThisFile !== 'null') {

                        // alert(ProductCodeOfThisFile);

                        navigateProductClick(ProductCodeOfThisFile);

                    }
                    else {
                        alert("Product not found");
                    }

                }
                else {
                    alert("Error");
                }
            }



            // getProductCode.open("POST", "getThisFileDetail.php?fileSrc=" + fileSrc, true);

            // getProductCode.send();

            getProductCode.open("POST", "getThisFileDetail.php");
            getProductCode.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            getProductCode.send("fileSrc=" + fileSrc);

        });
    }
}






















function producthighlightAdjust() {


}

var productbox = document.getElementsByClassName("completeproductbox");
var productheighlight = document.getElementsByClassName("productheighlight");

for (var i = 0; i < productbox.length; i++) {
    productbox[i].addEventListener("click", function () {
        // alert("clicked");
        var productCode = this.getElementsByClassName("productCode")[0].innerHTML;

        if (productCode !== "") {
            // alert(productCode);
            navigateProductClick(productCode);

        }
    });


    // productheighlight[i].getElementsByTagName("h5")[0].style.overflow="visible";
    productheighlight[i].getElementsByTagName("h5")[0].style.textOverflow = "ellipsis";
    productheighlight[i].getElementsByTagName("h5")[0].style.whiteSpace = "nowrap";
    productheighlight[i].getElementsByTagName("h5")[0].style.overflow = "hidden";
    productheighlight[i].getElementsByTagName("h5")[0].style.width = "100%";
    // I want to check those words which are shown properly with hidden overflow
    var text = productheighlight[i].getElementsByTagName("h5")[0].innerHTML;




    // 


    // productheighlight[i].getElementsByTagName("h5")[0].style.whiteSpace="nowrap";//it creates horizontal scrollbar
    // we want to append ... at last in the viewable area
    // productheighlight[i].getElementsByTagName("h5")[0].style.width = "100%";
    // productheighlight[i].getElementsByTagName("h5")[0].style.maxWidth = "100%";
    // we want text space to be less
    productheighlight[i].getElementsByTagName("h5")[0].style.padding = "0";
    productheighlight[i].getElementsByTagName("h5")[0].style.margin = "0";

    // we want to append ... after words at last in the viewable area to show that name of product continue

    var lengthOfMaxProductHeighlight = productheighlight[i].getElementsByTagName("h5")[0].innerHTML;
    lengthOfMaxProductHeighlight.trim();

    // alert(lengthOfMaxProductHeighlight);
    // converting 
    // lengthOfMaxProductHeighlight into string

    lengthOfMaxProductHeighlight = String(lengthOfMaxProductHeighlight);




    // var maxProductHeighlightLength = lengthOfMaxProductHeighlight.length;
    // alert(maxProductHeighlightLength);//46

    // we want substring upto 5 letters
    // var maxProductHeighlightLength = 5;
    // var productHeighlightText = lengthOfMaxProductHeighlight.substring(0, maxProductHeighlightLength)

    // lengthOfMaxProductHeighlight= productheighlight[i].getElementsByTagName("h5")[0].innerHTML=lengthOfMaxProductHeighlight.substring(0,15);//15 capable in one line and 16 starts from next line

    // lengthOfMaxProductHeighlight= productheighlight[i].getElementsByTagName("h5")[0].innerHTML=lengthOfMaxProductHeighlight.substring(0,12);

    // we want to appent string 
    var appendString = "...";
    productheighlight[i].getElementsByTagName("h5")[0].innerHTML = lengthOfMaxProductHeighlight.substring(0, 12) + appendString;

    // productheighlight[i].getElementsByTagName("h5")[0].substring(0,3);
    // lengthOfMaxProductHeighlight.substr(0,3);


    // lengthOfMaxProductHeighlight.slice(0,2);




}
