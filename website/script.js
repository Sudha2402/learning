// window.confirm("Are you sure you want to live sustainable life with Shanaya Bazzar");

function cutbutton(){
  document.getElementsByClassName("mobilepopover")[0].innerHTML=" ";
  document.getElementsByClassName("cuttab")[0].onmouseover="style='backgroundColor:coin'";

  //document.getElementsByClassName("cuttab")[0].style.backgroundColor="coin";

}

function stopOpacity(){

//nothing worked ,try again

   //pophoveropacity.cancel();
   // document.getElementById("popover").style.opacity = "0";//not works to stop animation

   //document.getElementById("popover").style.innerHTML="@keyframes popoverStopopacity{0% {opacity: 0;}10%,90%{opacity: 1;}99% {opacity: 1;}} ; div.popover {animation: popoverStopopacity 30s linear 5s 1 forwards;";

  // document.getElementById("popover").style.transition = "opacity 60s"
   //document.getElementById("popover").style.opacity = "0";


}

document.getElementsByTagName("body")[0].onoffline = function () { offline1() };
function offline1() {
    // alert("You are offline")
    document.querySelector("#offline1").innerText = "You are offline";
    document.querySelector("#offline1").style.color = "white"
    document.querySelector("#offline1").style.textAlign = "center"

    document.querySelector("#offline1").style.backgroundColor = "red"
    document.querySelector("#offline1").style.fontSize = "20px"
    document.querySelector("#offline1").style.fontWeight = "bold"
    document.getElementsByTagName("BODY")[0].ononline = function () { online1() };}

function online1() {
    document.querySelector("#offline1").innerText = "You are online now"
    document.querySelector("#offline1").style.color = "white"
    document.querySelector("#offline1").style.backgroundColor = "green"
    document.querySelector("#offline1").style.fontSize = "20px"
    document.querySelector("#offline1").style.fontWeight = "bold"
    document.querySelector("body").onscroll = function () { opacityAnimation() };
}
function opacityAnimation() {
  
    document.querySelector("#offline1").style.transition = "opacity 1s"
    document.querySelector("#offline1").style.opacity = "0"
   
}



//add customize with colors

window.addEventListener("wheel", wheelevent);
function wheelevent(event) {
    if (event.deltaY < 0) {
        // alert("scrolling up");  
        document.getElementsByTagName("body")[0].style.backgroundColor = "#00008B";
        document.getElementsByTagName("body")//[0].style.filter = "greyscale(100%)";
        document.getElementsByTagName("body")[0].style.color = "white";


    } else if (event.deltaY > 0) {
        // alert("scrolling down");
        document.getElementsByTagName("body")[0].style.backgroundColor = "black";
    }
    document.getElementsByTagName("body")[0].style.color = "white";

}
