//activeElement




function myFunctionactive() {
    // this myFunctionactive() function need to called onload in body , or you can call it here directly
    var element = document.activeElement.tagName;

    //active Element:BODY
    // const element = document.activeElement;//active Element:[object HTMLBodyElement]

    var elementId = document.activeElement.id;



    // document.getElementById("demoactive").innerHTML = "active Element:" + element +" "+ elementId;

    // this document will select only the current page not the other page hence we need to change

    /*
    document.getElementById("display").innerHTML='<object type="text/html" data="shanaya_bazaar_main.php" id="shanaya_bazaar"></object> :'+ element;

    document.getElementById("shanaya_bazaar").innerHTML +=  "<br> active Element:" + element;
*/



    //to select the another html and display the active element in another html




    // active element are the tag name of only those part which are clickable , like button , input , div but editable only etc , 




    // finally we have decided to use this
    console.log("active Element:" + element + " " + elementId);



}

myFunctionactive();



// to get current url
function getCurrentURL () {
    return window.location.href
  }

//   now function is being called
  const url = getCurrentURL()
  
  console.log("getCurrentURL ()     url : "+url);

