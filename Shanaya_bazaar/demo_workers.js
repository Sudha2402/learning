//counting numbers using timer
var count = 0;
setInterval(function(){
  count++;
 // document.getElementById("resultWorker").innerHTML = count;//it will be not defined here
  postMessage(count);// works //it will be send as event to the main script  //count is event.data //setinterval will repaint every 1 sec  //count value is passed and the passed value is called with event.data //data=count   //it will work fully
  }, 1000);
 // postMessage(count);//count will be 0 always
  





 //or
 let i = 0;

function timedCount() {
  i ++;
  postMessage(i);//postMessage() method - which is used to post a message back to the HTML page.
  setTimeout("timedCount()",500);//Normally web workers are not used for such simple scripts, but for more CPU intensive tasks.
}

timedCount();//called the function