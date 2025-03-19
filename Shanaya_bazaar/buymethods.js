// alert("paymentmethod");

// module.exports={
//     ProductId: productID,
//     ProductName:productName,
//     PriceOfThisProduct:priceOfThisProduct,
//     MainImagOfThisProduct:mainImagOfThisProduct
// }

// var productDetails=require("./productPage")
// console.log(productDetails);
// alert(productDetails);

// import {productID,productName,priceOfThisProduct,mainImagOfThisProduct} from './productPage';
// console.log(productID);

// alert(productID);

var EmailAddress;
EmailAddress = sessionStorage.getItem("EmailAddress");
// alert(EmailAddress);

if(EmailAddress === null || EmailAddress ===undefined){
// we can also get it from local storage
EmailAddress = localStorage.getItem("EmailAddress");
// alert(EmailAddress);
}


var generatedRandomOrderNum;
// alert(generatedRandomOrderNum);

function decidedTogeneratedRandomOrderNum() {


    var RegisteredOrderNum = new XMLHttpRequest();

    RegisteredOrderNum.onload = function () {
        if (this.status == 200) {

            var arrOfAllPassed = JSON.parse(this.responseText);
            arrOfAllOrderNum = arrOfAllPassed[0];

            const arrOfAllOrderNumLength = arrOfAllOrderNum.length;
            // alert(arrOfAllOrderNumLength);

            while (arrOfAllOrderNum.length != arrOfAllOrderNumLength + 1) {

                var orderNumInt = Math.floor(Math.random() * 2147483647) + 1;

                if (arrOfAllOrderNum.indexOf(orderNumInt) === -1) {

                    // arrOfAllOrderNum.push(orderNumInt);

                    // alert(orderNumInt);//4572286975475936
                    // alert(typeof(orderNumInt));//number

                    generatedRandomOrderNum = orderNumInt;

                    return orderNumInt;


                }

            }


        }

        else {
            document.getElementById("buyMethodOutput").style.display = "flex";
            document.getElementById("buyMethodOutput").innerHTML = "Unable to get Order Number";

            setTimeout(
                function () {
                    document.getElementById("buyMethodOutput").style.display = "none";
                }, 3000
            );

        }
    }

    RegisteredOrderNum.open("GET", "getAlreadyRegisteredOrderNum.php");
    RegisteredOrderNum.send();

}


decidedTogeneratedRandomOrderNum();



var productNumber;//productCode
var totalCostvalue;
var quantityNumber = 1;
var sizeSelected;
var productPrice;




var param = new URLSearchParams(window.location.search);
// alert(param);

// if(document.getElementById("cartMethod") === undefined || document.getElementById("cartMethod") === null)
// alert(document.getElementById("cartMethod"));//null


if (param != "") {
    // alert("inside param");

    productNumber = param.get('productID');
    var productName = param.get('productName');
    productPrice = param.get('priceOfThisProduct');
    var mainImagOfThisProduct = param.get('mainImagOfThisProduct');

    if (param.get('sizeSelected')) {
        sizeSelected = param.get('sizeSelected');
        // product.getElementsByClassName("productSize")[0].innerHTML += "<br>Size : " + sizeSelected;

    }
    else {
        sizeSelected = "free size";
    }


    // alert(productNumber);
    // alert(productName);
    // alert(productPrice);
    // alert(mainImagOfThisProduct);


    // http://localhost:3000/buymethods.html?productID=WEWK1&productName=Women%20Straight%20Printed%20Kurti&priceOfThisProduct=360&mainImagOfThisProduct=http://localhost:3000/product/women/ethnic%20wear/kurtis/Women%20Straight%20Printed%20Kurti/colors%20option/black/main.png&sizeSelected=XL


    if (document.getElementById("cartMethod") === undefined || document.getElementById("cartMethod") === null) {

        var product = document.getElementsByClassName("productsList")[0].firstElementChild;


        // product.firstElementChild.firstElementChild.firstElementChild.src = mainImagOfThisProduct;


        product.firstElementChild.firstElementChild.getElementsByClassName("buyCart")[0].src = mainImagOfThisProduct;




        // alert(mainImagOfThisProduct);

        product.firstElementChild.firstElementChild.getElementsByClassName("productName")[0].innerHTML = productName;
        // alert(productName);
        if (param.get('sizeSelected')) {
            sizeSelected = param.get('sizeSelected');
            product.getElementsByClassName("productSize")[0].innerHTML += "<br>Size : " + sizeSelected;

        }
        else {
            sizeSelected = "free size";
        }

        product.firstElementChild.lastElementChild.firstElementChild.nextElementSibling.firstElementChild.innerHTML = productPrice;

        product.firstElementChild.lastElementChild.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.src = mainImagOfThisProduct;

        // product.firstElementChild.lastElementChild.lastElementChild.previousElementSibling.innerHTML=productPrice;


        // document.getElementsByClassName("productsList")[0].appendChild(product);


        calculateTotal();//to update after inserting the product.

    }

}
else {
    console.log("Viewing the product");
    // alert("Viewing the product");
}











// function cutbutton() {
//     document.getElementsByClassName("mobilepopover")[0].innerHTML = " ";
// }


// function cancel(){
//     window.history.back(); //no need as we can directly use goBack method.
// }


// window.onload = () =>{
//     allPageCommon();

// }

var placeOrder = document.getElementsByClassName("place-order");

var payoutmethods = document.getElementsByClassName("payoutmethods"); //since in cart , we are not updating all these lengths hence it will not be affected

for (var i = 0; i < placeOrder.length; i++) {
    // document.getElementsByClassName("payoutmethods").style.display="none";
    var payshow = payoutmethods[i];
    placeOrder[i].addEventListener("click", function () {
        // we need to check if there is atleast an ordered product

        // alert(this.className);
        // placeOrder.style.display="inline";
        // document.getElementsByClassName("payoutmethods")[i].style.display="block";//here i will not be passed hence not works
        payshow.style.display = "block";
        this.style.display = "none";

    })

}






function trackLocation() {
    document.getElementById("demogeolocation").style.display = "flex";
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);//calls showPosition() function .
    } else {
        // document.getElementById("demogeolocation").innerHTML = "Geolocation is not supported by this browser.";
        document.getElementById("demogeolocation").innerHTML = "Geolocation is not supported by this browser."

    }

}


function showPosition(position) {
    // document.getElementById("demogeolocation").innerHTML =
    //     "Latitude: " + position.coords.latitude + "<br>" +
    //     "Longitude: " + position.coords.longitude;


    document.getElementById("demogeolocation").innerHTML = `
        Latitude:   ${position.coords.latitude}<br>
        Longitude:  ${position.coords.longitude}`
    document.getElementById("geolocationLatitude").innerHTML = position.coords.latitude;
    document.getElementById("geolocationLongitude").innerHTML = position.coords.longitude;

}



var checkoutclick = document.getElementsByClassName("check-out");

// creating an event Eventlistner on radio checked button onchange

for (var i = 0; i < checkoutclick.length; i++) {

    checkoutclick[i].addEventListener("click", function () {

        // this.style.display="flex";

        document.getElementById("thisOrderedDetails").style.display = "none";

        document.getElementById("payNow").style.display = "none";

        if (document.getElementById("upiScanner")) {

            document.getElementById("upiScanner").style.display = "none";





        }

        // we need to undo the changes that are done here



        if (document.getElementById("card").checked) {

            // this.style.display="none";//not made it capable of changing the choice


            // alert("card");
            // window.open("payment.html","payment","_blank");
            // window.open("payment.html","payment","_self");

            document.getElementById("thisOrderedDetails").style.display = "block";

            document.getElementById("trackLocation").click();

            // window.location.href = "payment.html"; //it is helpful in opening the payment app in same tab

            // we will put razorpay here

        }

        else if (document.getElementById("cash").checked) {

            // alert("cash");
            // this.style.display="none";

            document.getElementById("trackLocation").click();

            document.getElementById("thisOrderedDetails").style.display = "block";



        }

        else if (document.getElementById("upi").checked) {

            document.getElementById("trackLocation").click();

            // this.style.display="none";

            var div = document.createElement("div");
            // adding class upiScanner
            // div.className="upiScanner";
            // adding id upiScanner
            div.id = "upiScanner";


            // document.getElementById("thisOrderedDetails").getElementsByClassName("form-group")[0].appendChild(document.createElement("div"));

            document.getElementById("thisOrderedDetails").getElementsByClassName("form-group")[0].appendChild(div);

            document.getElementById("thisOrderedDetails").style.display = "block";


            var div = document.getElementById("thisOrderedDetails").getElementsByClassName("form-group")[0].lastChild;
            // div.innerHTML = upipay;

            // div.innerHTML = `<img src="UPI ID.jpg" style="height:90vh;width:100vw;max-width:428px;position:fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index:3" ></img>`;

            div.innerHTML = `<img src="UPI ID.jpg" style="height:90vh;width:100vw;max-width:428px;" ></img>`;//OK but how to detect if amount is received , hence we are commenting it.//uncomment later

            // we will put razorpay here.


        }
        else {
            // alert("please select one method");
            // document.body.appendChild(document.createElement("div"));
            // var div = document.body.lastChild;

            document.getElementById("buyMethodOutput").style.display = "flex";
            document.getElementById("buyMethodOutput").innerHTML = "Please select one payment method";

            setTimeout(
                function () {
                    document.getElementById("buyMethodOutput").style.display = "none";
                }, 3000
            );

        }
    });
}



var firstname;
var lastname;
var email;
var phone;
var address;
var latitude;
var longitude;
var city;
var state;
var zip;
var country;
var orderDate;

//we need to track the value of allinput fields in the form
function getValues() {
    //get the values of all input fields in the form


    firstname = document.orderDetails.firstname.value;
    // alert(firstname);
    lastname = document.orderDetails.lastname.value;
    // alert(lastname);
    email = document.orderDetails.email.value;
    // alert(email);
    phone = document.orderDetails.phone.value;
    // alert(phone);
    address = document.orderDetails.address.value;
    // alert(address);
    latitude = document.getElementById("geolocationLatitude").innerHTML;
    longitude = document.getElementById("geolocationLongitude").innerHTML;

    city = document.orderDetails.city.value;
    // alert(city);
    state = document.orderDetails.state.value;
    // alert(state);
    zip = document.orderDetails.zip.value;
    // alert(zip);

    country = document.orderDetails.country.value;
    // alert(country);

    orderDate = new Date().toISOString().slice(0, 10);
    // format like yyyy-mm-dd



    // alert(orderDate);
    // we want in format of dd/mm/year

    // var orderDate = orderDate.split('-').reverse().join('/');//it will create error when inserting value into mysql
    // alert(orderDate);
    orderDate = orderDate.split('-').join('/');
    // INSERT INTO orders(orderNumber,orderDate,customerNumber) VALUES(24,'2025/03/09',1856176940);//works


}




var updateActive = 0;

var updateAccountDetails = document.getElementById('UpdateAccount');
updateAccountDetails.addEventListener('click', function () {
    getValues();
    if (firstname == "" || firstname === undefined || lastname == ""
        || lastname === undefined || email == "" || email === undefined ||
        phone == "" || phone === undefined || address == "" ||
        address === undefined || city == "" || city === undefined ||
        state == "" || state === undefined || zip == "" ||
        zip === undefined || country == "" || country === undefined) {

        alert("Please fill all the fields");
    }
    else {

        if (updateActive == 0) {

            updateActive = 1;
            alert("On checkout your account details will be permanently updated. If you don't want to update the details and keep this details only for this order then kindly Click \'Not update details\'");
            updateAccountDetails.value = "Not update details";

            // updateAccountDetails.style.display = "none";
        }
        else {
            // updateAccountDetails.style.display = "block";
            updateActive = 0;
            alert("Your filled details are only for this order and it will not be updated in your account.You can checkout. ")
            updateAccountDetails.value = 'Update Account Details';
        }


    }


});


var checkoutFinal = document.getElementById("checkOutFinal");

checkoutFinal.addEventListener("click", function () {

    getValues();


    if (firstname == "" || firstname === undefined || lastname == ""
        || lastname === undefined || email == "" || email === undefined ||
        phone == "" || phone === undefined || address == "" ||
        address === undefined || city == "" || city === undefined ||
        state == "" || state === undefined || zip == "" ||
        zip === undefined || country == "" || country === undefined) {
        // alert("Please fill in all fields");
        document.getElementById("buyMethodOutput").style.display = "flex";
        document.getElementById("buyMethodOutput").innerHTML = "Please fill in all fields";
        setTimeout(
            function () {
                document.getElementById("buyMethodOutput").style.display = "none";
            }, 3000
        );
        return false;
    }
    else {

        if (email == EmailAddress) {
            // alert("Thank you for your order");
            // alert("Your order has been placed");

            // let's write some more




            const newOrderNumberDecided = generatedRandomOrderNum;

            // alert("newOrderNumberDecided:"+newOrderNumberDecided);

            var useOrderNumber = new XMLHttpRequest();

            var dbparam = {

                orderNumber: newOrderNumberDecided,
                productNumber: productNumber,
                quantity: quantityNumber,
                size: sizeSelected,
                productPrice: productPrice,
                totalCost: totalCostvalue,
                orderDate: orderDate,
                firstname: firstname,
                lastname: lastname,
                email: email,
                phone: phone,
                address: address,
                city: city,
                state: state,
                zip: zip,
                country: country,
                latitude: latitude,
                longitude: longitude,
                updateActive: updateActive

            };



            dbparam = JSON.stringify(dbparam);
            //    alert(dbparam);

            useOrderNumber.onload = function () {
                // useOrderNumber.onfocus = function () {

                // document.getElementById("buyMethodOutput").style.display = "flex";
                // document.getElementById("buyMethodOutput").innerHTML = this.responseText;




                if (this.status == 200) {

                    // alert(this.responseText);

                    if (this.responseText == "You successfully ordered this product") {

                        // submitButtonOutput();

                        document.getElementById("buyMethodOutput").style.display = "flex";


                        if (document.getElementById("upi").checked || document.getElementById("card").checked) {

                            checkoutFinal.style.display = "none";
                            updateAccountDetails.style.display = "none";

                            document.getElementById("buyMethodOutput").innerHTML = "Thank you for your order but your order will be delivered only once we receive the payment, if you want you can continue to pay or use cash on delivery";
                            setTimeout(
                                function () {
                                    document.getElementById("buyMethodOutput").style.display = "none";
                                    alert("Thank you for your order but your order will be delivered only once we receive the payment, if you want you can continue to pay or use cash on delivery");
                                }, 2000
                            );



                            document.getElementById("payNow").style.display = "flex";



                        }
                        else {
                            document.getElementById("payNow").style.display = "none";
                            document.getElementById("buyMethodOutput").innerHTML = "You successfully ordered this product";
                            setTimeout(
                                function () {
                                    document.getElementById("buyMethodOutput").style.display = "none";
                                }, 3000
                            );

                            div.innerHTML = '<a href="shanaya_bazaar_main.php"><video src="thanks for shopping.mp4" style="max-width: 95vw;max-height:50vh;position:fixed;left: 50%;top: 50%;transform: translate(-50%, -50%);" autoplay loop ></video></a>';




                        }


                    }
                    else {

                        document.getElementById("buyMethodOutput").innerHTML = this.responseText;
                        return;

                    }

                }

                setTimeout(
                    function () {
                        document.getElementById("buyMethodOutput").style.display = "none";
                    }, 3000
                );
            }

            useOrderNumber.open("POST", "orders.php");

            useOrderNumber.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            useOrderNumber.send("dbparam=" + dbparam);



        }
        else {
            // alert("Invalid Email");
            document.getElementById("buyMethodOutput").style.display = "flex";
            document.getElementById("buyMethodOutput").innerHTML = "Invalid Email";
            setTimeout(
                function () {
                    document.getElementById("buyMethodOutput").style.display = "none";
                }, 3000
            );


            return false;
        }

    }



    // http://localhost:3000/buymethods.html?firstname=Sudha&lastname=Kumari&phone=09305483852&password=%23sudha%402402&email=sudhakumarichauhan24%40gmail.com&address=nilmatha+ravtapur+lucknow&city=lucknow&state=Uttar+Pradesh&zip=226002&country=India //url changes to this on submit button is clicked in any form.

    // document.getElementsByClassName("lowerpopedUp")[0].innerHTML="Thanks for placing the order. Your product will be delivered within a week";

    document.getElementById("buyMethodOutput").style.display = "flex";
    document.getElementById("buyMethodOutput").innerHTML = "Thanks for placing the order. Your product will be delivered within a week";

    document.body.appendChild(document.createElement("div"));

    var div = document.body.lastChild;



    // div.style.display="flex";
    // div.innerHTML = thanksvideoplay; //thanksvideoplay is defined in allPageCommonStyle and it must be global before the function call
    // alert(div.innerHTML);

    // div.innerHTML=`<button type="button" class="cuttab" onclick="cutbutton()">&#10006;</button><video src="thanks for shopping.mp4" style="width: 95vw;position:fixed;top: 20vh;left: 2.5vw;" autoplay loop >` //works

    // window.location.href="thanks.html";

    var jsConfetti = new JSConfetti();

    jsConfetti.addConfetti();

    jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    })


    // Customize confetti colors:
    jsConfetti.addConfetti({
        confettiColors: [
            'blue', 'red', 'yellow',
        ],
    })


    // document.getElementsByTagName("body")[0].innerHTML="Thanks for placing the order. Your product will be delivered within a week";//adding it down will first play confetti then add innerHTML.


    //  <div><button type="button" class="cuttab" onclick="open('shanaya_bazaar_main.php','_parent')">&#10006;</button> </div> </video> 




});






function upadatequantityNumber(element, price, isIncreasing) {

    // alert(element.className);//quantity-plus btn
    // var quantityInput = document.getElementsByClassName(product + '-number')[0];5
    // var quantityInput = document.getElementsByClassName(product + '-number')


    // var quantityInput = element.previousSibling;
    // var quantityInput = element.parentElement.className;



    // alert(quantityNumber);//1

    if (isIncreasing) { //this isIncresing is true in quantityplus
        var quantityInput = element.previousElementSibling;
        quantityNumber = quantityInput.value;//1
        quantityNumber = parseInt(quantityNumber) + 1;
    }

    else { //executeds in quantityminus
        var quantityInput = element.nextElementSibling;
        quantityNumber = quantityInput.value;
        if (quantityNumber > 1) {

            // alert(quantityInput.value);

            quantityNumber = parseInt(quantityNumber) - 1;

        }
    }



    quantityInput.value = quantityNumber; //works

    // update quantity total 

    // var quantityTotal = document.getElementsByClassName(product + '-total');

    var quantityTotal = element.parentElement.nextElementSibling.firstElementChild;//quantity-total

    // alert(quantityTotal.className);//quantity-total

    quantityTotal.innerText = quantityNumber * price;

    // alert(quantityTotal);

    calculateTotal();

}



// function getInputvalue(product) {
//     var productInput = document.getElementsByClassName(product + '-number');
//     for(var i=0;i<productInput.length;i++){

//         var productNumber = parseInt(productInput[i].value);
//         return productNumber;


//     }

// }



function calculateTotal() {
    // var quantityTotal = getInputvalue('quantity') * 1219;
    // var quantityTotal = getInputvalue('quantity') * 59;

    var totalCost = document.getElementsByClassName("quantity-total");
    totalCostvalue = Number(0);
    for (var i = 0; i < totalCost.length; i++) {
        totalCostvalue += Number(totalCost[i].innerText);
    }

    // var subTotal = quantityTotal + quantityTotal;
    // var tax = subTotal / 10;
    // var totalPrice = subTotal + tax;

    // update on the html 
    document.getElementsByClassName('sub-total')[0].innerText = totalCostvalue;
    document.getElementsByClassName('tax-amount')[0].innerText = 0;
    document.getElementsByClassName('total-price')[0].innerText = totalCostvalue;

}


activeEvery();

function activeEvery() {



    // remove-item

    var removeItem = document.getElementsByClassName("remove-item");
    for (var i = 0; i < removeItem.length; i++) {

        removeItem[i].addEventListener("click", function () {
            alert("this product will be removed from your cart");

            this.parentElement.parentElement.parentElement.parentElement.remove();

            calculateTotal();

            // placeOrder[0].style.display="none";//it would be not good practice because we would not be able to use this code in cart.

            if (document.getElementsByClassName("itemcount").length < 1) {
                placeOrder[0].style.display = "none";
            }



            Undo();
        });

    }


    var undo = document.getElementsByClassName("undo");
    function Undo() {

        for (var i = 0; i < undo.length; i++) {
            undo[i].style.display = "block";
            undo[i].addEventListener("click", function () {

                //we just need to refresh the page
                location.reload();
            }
            );
        }
    }



    var quantityplus = document.getElementsByClassName('quantity-plus');//undefined as class has ; and it will not take it as class , it will take quantity-plus ; btn as class 
    // var priceOfOne = document.getElementsByClassName('quantity-total');//undefined as class has ; and it will not take it as class , it will take quantity-plus ; btn as class 
    var priceOfOne = document.getElementsByClassName('quantity-total');//undefined as class has ; and it will not take it as class , it will take quantity-plus ; btn as class 
    // var quantityplus = document.getElementsByClassName('quantity-plus').length;//1

    // to add multiple class we need whitespace between class not the;

    // var quantityplus = document.getElementsByClassName('quantity-plus ; btn');
    // alert(quantityplus); //[object HTMLCollection]

    for (var i = 0; i < quantityplus.length; i++) {
        priceSet = Number(priceOfOne[i].innerText);
        // alert(priceSet);//600
        quantityplus[i].addEventListener('click', function () {
            // var quantityInput = document.getElementsByClassName('quantity-number')[0];
            // var quantityNumber = quantityInput.value;
            // quantityInput.value = parseInt(quantityNumber) + 1;

            // alert(quantityplus[i]);//undefined
            // alert(this.className);//quantity-plus btn  //it works

            // upadatequantityNumber(this, 'quantity', 600, true);
            upadatequantityNumber(this, priceSet, true);
        });

    }


    var quantityminus = document.getElementsByClassName('quantity-minus');

    for (var i = 0; i < quantityminus.length; i++) {

        quantityminus[i].addEventListener('click', function () {
            // var quantityInput = document.getElementsByClassName('quantity-number')[0];
            //     var quantityNumber = quantityInput.value;
            //    if(quantityInput.value > 1){
            //         quantityInput.value = parseInt(quantityNumber) - 1;
            //    }

            // alert("minus quantity clicked");

            upadatequantityNumber(this, priceSet, false);
            // upadatequantityNumber('quantity', priceSet, 59, false);
        });
    }

}

// var quantityplus = document.getElementsByClassName('quantity-plus');
// for (var i = 0; i < quantityplus.length; i++) {


//     // quantity prcie update using add event linstner
//     quantityplus[i].addEventListener('click', function () {

//         upadatequantityNumber('quantity', 1219, true);



//     });

// }

// var quantityminus = document.getElementsByClassName('quantity-minus');
// for (var i = 0; i < quantityminus.length; i++) {
//     quantityminus[i].addEventListener('click', function () {
//         upadatequantityNumber('quantity', 1219, false);
//     });

// }


// document.getElementsByClassName("payoutmethods");















