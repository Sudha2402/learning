
var EmailAddress;
EmailAddress = sessionStorage.getItem("EmailAddress");
// alert(EmailAddress);

if (EmailAddress === null || EmailAddress === undefined) {
    // we can also get it from local storage
    EmailAddress = localStorage.getItem("EmailAddress");
    // alert(EmailAddress);
}

var email = { email: EmailAddress }
email = JSON.stringify(email);


oderedItems = new XMLHttpRequest();
oderedItems.onload = function () {

    // document.getElementById("orderedlist").innerHTML = this.responseText;

    if (oderedItems.status >= 200 && oderedItems.status < 300) {

        if (this.response.includes("error")) {
            var orderedlist = JSON.parse(this.responseText);
        }
        if (orderedlist) {
            document.getElementById("orderedlist").innerHTML = orderedlist.error;
            document.getElementById("orderedlist").style.fontSize="2rem";
            document.getElementById("orderedlist").style.color="green";
        }
        else {
            document.getElementById("orderedlist").innerHTML = this.responseText;
        }
    }
    // alert("inserted");
    else {
        document.getElementById("orderedlist").innerHTML = "Please login first to see your ordered product";
        
    }

}


// oderedItems.open("GET", "needs_db.php?custNumb=" + cusNum);
oderedItems.open("GET", "needs_db.php?email=" + email);


oderedItems.send();




var returnProducts = document.getElementsByClassName("returnOrder");

function initiateReturn(orderNumber, productCode) {
    // Open return page with order details

    window.location.href = `return_page.php?orderNumber=${encodeURIComponent(orderNumber)}&productCode=${encodeURIComponent(productCode)}`;
}

