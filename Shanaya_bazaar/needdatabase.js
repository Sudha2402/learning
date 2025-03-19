// To see the PHP result in HTML fies, use  PHP server:serve project instead of live server


// document.write("<br><p id = 'myObjDataPHP' style='width:100vw'> myObjDataPHP</p>");


// var limit = { "limit": 5 };

// var dbParam = JSON.stringify(limit);
// xmlhttp = new XMLHttpRequest();
// xmlhttp.onload = function () {
//     document.getElementById("myObjDataPHP").innerHTML = this.responseText;
// }

// xmlhttp.open("GET", "json_demo_db.php?x=" + dbParam);//only this gets executed because x is parameter passed , need to learn about parameters

// xmlhttp.send();



// var customerNumber =  { "customerNumber":  114 };
// var cusNum = JSON.stringify(customerNumber);

var EmailAddress;
EmailAddress = sessionStorage.getItem("EmailAddress");
// alert(EmailAddress);

if(EmailAddress === null || EmailAddress ===undefined){
// we can also get it from local storage
EmailAddress = localStorage.getItem("EmailAddress");
// alert(EmailAddress);
}

var email = { email: EmailAddress }
email = JSON.stringify(email);


oderedItems = new XMLHttpRequest();
oderedItems.onload = function () {
   
    document.getElementById("orderedlist").innerHTML = this.responseText;

    // alert("inserted");

}


// oderedItems.open("GET", "needs_db.php?custNumb=" + cusNum);
oderedItems.open("GET", "needs_db.php?email=" + email);


oderedItems.send();