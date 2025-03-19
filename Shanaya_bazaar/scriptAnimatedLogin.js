var form = document.querySelector('form');
for (var i = 0; i < form.length; i++) {
    form[i].addEventListener('submit', function (event) {
        event.preventDefault();
        // var formData = new FormData(this);
        // var xhr = new XMLHttpRequest();
    });
}

// form.addEventListener('submit', function (event) {
//     event.preventDefault(); //we used this to prevent reload of page after XMLHttpRequest

//     // Your form submission logic here 
// });



// const returnedUniqueNumber= function decidedToRegisteredNewCustomer() {

// function decidedToRegisteredNewCustomer() {

// async function decidedToRegisteredNewCustomer() {


// we want to store this globally so that we can check and verify.

var arrOfAllCustomersNumber;
var arrOfAllEmailAddress;//we will store all the registered emails in this variable.
var generatedRandom;

function decidedToRegisteredNewCustomer() {

    // var myPromise = new Promise(function (resolve) {

    RegisteredCustomer = new XMLHttpRequest();

    RegisteredCustomer.onload = function () {
        if (this.status == 200) {

            // alert(this.responseText);//gives complete array.

            // alert(this.responseText);//gives complete array of array inputs.[[],[]]



            // var arrOfAllCustomersNumber = JSON.parse(this.responseText);//it gives completele array of customerNumber as per we setted in php.

            // if array of two along email is passed then we will change is passed then we 

            var arrOfAllPassed = JSON.parse(this.responseText);//it gives completele array of customerNumber as per we setted in php.

            // alert(JSON.parse(this.responseText));//not works in more json

            // alert(arrOfAllCustomersNumber[0]);//works
            // alert(arrOfAllCustomersNumber[0]);//works

            // var arrOfAllCustomersNumber = arrOfAllPassed[0];
            arrOfAllCustomersNumber = arrOfAllPassed[0]; //we want to store it globally
            // var arrOfAllEmailAddress = arrOfAllPassed[1];
            arrOfAllEmailAddress = arrOfAllPassed[1];
            // alert( arrOfAllEmailAddress);//works

            // alert(arrOfAllPassed[0]);//works //same as below
            // alert(arrOfAllCustomersNumber);//works//same as above

            // alert(arrOfAllCustomersNumber[1]);//works

            // alert(JSON.parse(this.responseText));//not works


            // Printing the passedCustomerNumber elements


            // we don't need this we just need the list.
            // passedCustomerNumber.forEach(function (item) {
            //     // console.log(item);
            //     // alert(item);//it gives one element at a time and keep clicking OK.

            // });

            const arrCustLength = arrOfAllCustomersNumber.length;//124

            // alert(arrCustLength);
            // alert(arrCustLength+1);//125

            // alert(arrOfAllCustomersNumber.indexOf(114));




            while (arrOfAllCustomersNumber.length != arrCustLength + 1) {

                // var candidateInt = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1; //this long value is not safe in mysql integer
                // var candidateInt = Math.floor(Math.random() * 900000000) + 1;
                var candidateInt = Math.floor(Math.random() * 2147483647) + 1;

                if (arrOfAllCustomersNumber.indexOf(candidateInt) === -1) {

                    // arrOfAllCustomersNumber.push(candidateInt);

                    // alert(candidateInt);//4572286975475936
                    // alert(typeof(candidateInt));//number

                    generatedRandom = candidateInt;


                    return candidateInt;
                    // return new Promise((resolve) => {

                    //     setTimeout(() => resolve(candidateInt), 1000); // Simulate delay

                    //   });
                    //   newCustomerNumberDecidedForThisUser= candidateInt;

                }

            }



        }

        else {
            document.getElementById("registerOutput").innerHTML = "Unable to get registered Customers";
        }
    }

    RegisteredCustomer.open("GET", "getAlreadySetCustomerNumber.php");
    RegisteredCustomer.send();

    // });

}


decidedToRegisteredNewCustomer();

// setTimeout(
//     ()=> {
//         alert(generatedRandom);
//     },60

// )

// 60ms is safe number as it's get executed till that time.
// alert(generatedRandom);//undefined


// alert(generatedRandom);//undefined as it don't wait fro it's result to come


// const newCustomerNumberDecidedForThisUser = decidedToRegisteredNewCustomer();

// alert(newCustomerNumberDecidedForThisUser);



// var uniqueId = require('uuid').v4();//uuuid is not working because uuid package is not installed in this directory hence let's try to import it
// const uniqueId = require('uuid').v4(); //this line is causing the problem

// alert("animated login script");
// import {myuuid} from './nodeTry';
// const uniqueId=require('uuid');
// const uniqueId = require('uuid').v4(); //this line is causing the problem
// console.log(uniqueId);

// console.log("package.json".uuid);


// const {v4 : uuidv4} = require('uuid')
// const uniqueId = uuidv4();


// alert("animated login script");
// alert(uniqueId);



// const uniqueId = require('uuid').v4();
// // we will store the unique id in local storage

// console.log('Your UUID is: ' + uniqueId);//Your UUID is: c9073654-9524-42e6-8d03-a1d7a4d3abb2
// console.log('Your UUID length is: ' + uniqueId.length);//Your UUID length is: 36
// console.log('Your UUID type is: ' + typeof (uniqueId));//Your UUID type is: string




setTimeout(function () {
    document.getElementById("registerOutput").style.display = "none";
}, 5000);


// window.localStorage.removeItem("customer_id");//we are removing this just for rechecking//this is not even neccessary because our mysql itself gives response as already registered.


// function registerThisUser() {
function registerThisUser(name, email, password) {
    // async function registerThisUser() {


    document.getElementById("registerOutput").style.display = "none";

    // alert("registerThisUser called") ;

    // var uniqueId = require('uuid').v4();
    // we will store the unique id in local storage

    // document.getElementById("registerOutput").style.display = "flex";

    // document.getElementById("registerOutput").innerHTML = 'Your UUID is: ' + uniqueId

    // console.log('Your UUID is: ' + uniqueId);

    // alert('Your UUID is: ' + uniqueId);

    // alert(uniqueId);

    // alert("you are not loginned");


    // var customerNumber = { "customerNumber": localStorage.getItem('customer_id') };//only in case of signup



    // var customerNumber = { "customerNumber": 2 };//only in case of signup

    // const newCustomerNumberDecidedForThisUser = decidedToRegisteredNewCustomer();//it is giving undefined everytime

    //setting this in async

    //         var myPromise = new Promise(function (resolve) {

    //    const newCustomerNumberDecidedForThisUser =await decidedToRegisteredNewCustomer();

    // newCustomerNumberDecidedForThisUser=decidedToRegisteredNewCustomer();

    // const newCustomerNumberDecidedForThisUser= decidedToRegisteredNewCustomer();

    //    resolve(newCustomerNumberDecidedForThisUser);
    // });//it is giving undefined everytime



    // decidedToRegisteredNewCustomer().then(
    // function(result){
    // alert(result);
    // const newCustomerNumberDecidedForThisUser = result;



    // const newCustomerNumberDecidedForThisUser = returnedUniqueNumber;//it is giving whole function as output not the only return value.

    // const newCustomerNumberDecidedForThisUser = await myPromise;//not working

    // alert(await myPromise);

    // alert(newCustomerNumberDecidedForThisUser); //now we need to synchronise this.


    // const newCustomerNumberDecidedForThisUser = decidedToRegisteredNewCustomer();
    // here this internal function call will return undefined and it get stored in newCustomerNumberDecidedForThisUser but we want to wait until we get defined value from this decidedToRegisteredNewCustomer().
    //in that case we have to use settimeout before procedding

    // const newCustomerNumberDecidedForThisUser = setTimeout(decidedToRegisteredNewCustomer,5000);

    const newCustomerNumberDecidedForThisUser = generatedRandom; //now as function tooked almost 60ms , till time we will be involved in typing the inputs


    // alert(newCustomerNumberDecidedForThisUser);







    // var customerNumber = { "customerNumber": newCustomerNumberDecidedForThisUser };//only in case of signup
    // alert(customerNumber.customerNumber);
    // var nameEntered = { "custName": name };//only in case of signup
    // alert(nameEntered.custName);
    // var emailEntered = { "custEmail": email };//only in case of signup
    // alert(emailEntered.custEmail);
    // var passwordEntered = { "custPassword": password};//only in case of signup
    // alert(passwordEntered.custPassword);

    // var cusNum = JSON.stringify(customerNumber);
    // alert(cusNum);
    // var nameS = JSON.stringify(nameEntered);
    // alert(nameS);
    // var emailS = JSON.stringify(emailEntered);
    // alert(emailS);
    // var passwordS = JSON.stringify(passwordEntered);
    // alert(passwordS);


    useCustomer = new XMLHttpRequest();

    // var dbparam = { "customerNumber": newCustomerNumberDecidedForThisUser , "custName": name,"custEmail": email,"custPassword": password};
    var dbparam = { customerNumber: newCustomerNumberDecidedForThisUser, custName: name, custEmail: email, custPassword: password };

    var dbparam = JSON.stringify(dbparam);

    // alert(dbparam);


    // document.getElementById("registerOutput").style.display = "flex";

    // document.getElementById("registerOutput").innerHTML = this.responseText;



    useCustomer.onload = function () {
        // useCustomer.onfocus = function () {

        document.getElementById("registerOutput").style.display = "flex";

        document.getElementById("registerOutput").innerHTML = this.responseText;

        if (this.status == 200) {

            alert(this.responseText);

            if (this.responseText == "You are successfully registered") {

                //     document.getElementById("registerOutput").style.display = "flex";

                // document.getElementById("registerOutput").innerHTML = this.responseText;
                // alert(this.responseText);
                // alert('Account created successfully');

                submitButtonOutput();

                // localStorage.setItem('customer_id', uniqueId);

                // localStorage.setItem('customer_id', customerNumber.customerNumber);
            }
            else {
                // document.getElementById("registerOutput").innerHTML = "You are already registered.<br>Try to login";

                document.getElementById("registerOutput").innerHTML = this.responseText;
            }

        }

        setTimeout(function () {
            document.getElementById("registerOutput").style.display = "none";
        }, 5000);
    }

    // var param = "custNumb=" + cusNum + "&custName=" + name + "&custEmail=" + email + "&custPassword=" + password;

    // const param = "custNumb=" + cusNum + "&custName=" + nameS + "&custEmail=" + emailS + "&custPassword=" + passwordS;
    // alert(param);

    // useCustomer.open("GET", "customerDetails.php?"+param);




    // useCustomer.open("GET", "customerDetails.php?custNumb=" + cusNum + "&custName=" + nameS + "&custEmail=" + emailS + "&custPassword=" + passwordS,true);

    // useCustomer.open("GET", "customerDetails.php");
    // useCustomer.open("GET", "customerDetailsF.php?dbparam="+dbparam);
    useCustomer.open("POST", "customerDetailsF.php");
    useCustomer.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // useCustomer.send(dbparam);
    useCustomer.send("dbparam=" + dbparam);

    // useCustomer.send();
    // useCustomer.send(param);


    // }
    // );


}



// function register(element) {

function register() {

    // we want something like creating automatically unique not null customer number and pass it when someone tried to create a sign up account. this customer number will be send to write mysql queries
    // we can use uuid library to generate unique id

    // console.log(element.parentElement.name);//signUpForm
    // we need to get the value of the input field whose id is email

    //   <a href="mailto:"

    // submitButtonOutput(); //we will print this after inserting into database

    // printvalue();//no need it is adjusted in submitButton.


    var name = document.signUpForm.nameEnteredByTyping.value;//  
    // alert(name);//Sudha Kumari
    var email = document.signUpForm.emailEnteredByTyping.value;//
    // alert(email);
    var password = document.signUpForm.passwordEnteredByTyping.value;//
    var emailverified = document.getElementById("enterOTPSend").childElementCount;



    // alert(emailverified);// //o

    //    alert(typeof(emailverified));//string if innerhtml is checked //number if childElementCount

    // alert(emailverified !== "");//true//even if no element inside present
    // alert(emailverified != "");//true
    // alert(emailverified === "");//false

    document.getElementById("registerOutput").style.display = "flex";

    if (emailverified !== 0) {


        var otp = document.signUpForm.OTPEnteredByTyping.value;//

        // registerThisUser(name, email, password);



        if (otp == generatedRandom) {
            // alert('OTP is correct');


            document.getElementById("registerOutput").innerHTML = "OTP is correct";

            if (arrOfAllEmailAddress.indexOf(email) != -1) {
                document.getElementById("registerOutput").innerHTML = "Email already exists.Please login";
                return;
            }

            else {
                registerThisUser(name, email, password);//we want to pass this parameter into called function.
            }


        }
        else {

            // alert('Invalid OTP');
            document.getElementById("registerOutput").innerHTML = "Invalid OTP";
        }


    }
    else {
        // alert("Please verify email");
        document.getElementById("registerOutput").innerHTML = "Please verify email";
    }




    // alert(otp);

    // Email.send({
    //     Host: "smtp.gmail.com",
    //     Username: "shanayabazaar@gmail.com",
    //     Password: "#shanaya@bazaar",
    //     // To: email,
    //     To: "sudhakumarichauhan24@gmail.com",
    //     From: "shanayabazaar@gmail.com",
    //     Subject: "Your Otp to register at Shanaya Bazaar",
    //     Body: "Your OTP",
    // })
    //     .then(function (message) {
    //         alert("mail sent successfully")
    //     });

    // alert(localStorage.getItem('customer_id'));//null and null is considered to be a value hence true but undefined is considered as false.


    // first we need to check if the person is already logined or not by using localstorage but we can remove this because php will itself generates the error.

    // if (localStorage.getItem('customer_id') || localStorage.getItem('customer_id') !== null) {
    //     // if the person is already logged in then we will not allow to create a new account
    //     alert('You are already logged in');
    //     alert(localStorage.getItem('customer_id'));
    //     return;
    // } else {
    //     // if the person is not logged in then we will create a new account
    //     // we will use uuid library to generate unique id

    //     registerThisUser();
    //     // alert('You are not already logged in');


    // }

    // registerThisUser();//we will use this when we don't want to use localstorage value.

    // registerThisUser(name, email, password);



    // if (otp == generatedRandom) {
    //     alert('OTP is correct');
    //     registerThisUser(name, email, password);//we want to pass this parameter into called function.
    // }
    // else {
    //     alert('Invalid OTP');
    // }


    setTimeout(function () {
        document.getElementById("registerOutput").style.display = "none";
    }, 10000);


}




function sendEmail(element) {

    element.removeAttribute("value");
    element.setAttribute("value", "Resend the OTP");

    // below needs username from smtp
    // Email.send({
    //     Host: "smtp.gmail.com",
    //     Username: "shanayabazaar@gmail.com",
    //     Password: "#shanaya@bazaar",
    //     To: 'sudhakumarichauhan24@gmail.com',
    //     From: "shanayabazaar@gmail.com",
    //     Subject: "your OTP for Shanaya Bazaar",
    //     Body: "OTP : 23223",
    // })
    //     .then(function (message) {
    //         alert("OTP sent successfully")



    //     });

    // alert(generatedRandom);

    generatedRandomToSend = JSON.stringify(generatedRandom); //if not stringify then it will not work.

    // alert(generatedRandomToSend);

    setTimeout(function () {
        // var link = "mailto:sudhakumarichauhan24@gmail.com"
        var link = "mailto:" + document.signUpForm.emailEnteredByTyping.value
            + "?cc=shanayabazaar@gmail.com"
            + "&subject=" + encodeURIComponent("OTP for registering at Shanaya Bazaar")
            + "&body=" + encodeURIComponent("To login at shanaya bazaar. Your otp  is : " + generatedRandomToSend);
        // window.location.href = link;
        window.open(link, "_self");
    }, 60);





    // async (e) => {
    //     e.preventDefault();
    //     const email = signUpForm.elements.email.value;
    //     const response = await fetch(`/api/sendOTP?email=${email}`);
    //     const result = await response.json();
    //     // console.log(result);
    //     alert(result.message);
    //     if (result.success) {
    //         // window.location.href = 'verifyOTP.html';
    //         alert("OTP sent successfully");

    //         const response = await fetch(`/api/verifyOTP?email=${email}&otp=${otp}`);
    //         const result = await response.json();
    //         // console.log(result);
    //         alert(result.message);
    //         if (result.success) {
    //             // window.location.href = 'success.html';

    //         }

    //     }

    // };


    // var enterOTP = document.createElement("div");
    document.getElementById("enterOTPSend").innerHTML = `<input id="otpOut" type="text" inputmode="numeric" placeholder="Enter OTP send to Email"  name="OTPEnteredByTyping" required></input>`;

}



// var passedPhoto;
// var profileSetUpload;

// function getFileData(myFile){
//     var file = myFile.files[0];  
//     passedPhoto = file.name;

//     // alert(passedPhoto);

//     profileSetUpload=myFile.nextElementSibling;

//     profileSetUpload.style.display = "block";  
//     profileSetUpload.addEventListener("click",submitProfilePhoto());
// }

// function submitProfilePhoto() {

//     var srcSet=profileSetUpload.parentElement.previousElementSibling.getElementsByTagName("img")[0];

//     // alert(srcSet);
//     // srcSet.src=passedPhoto;
//    //we need to create folder and pass this photo using php.

// //    passedPhoto = JSON.stringify(passedPhoto);
// // //    alert(passedPhoto);

// //    UploadProfilephoto = new XMLHttpRequest();
// // //    profileSetUpload = new XMLHttpRequest();

// //    UploadProfilephoto.onload = function () {
// //     // profileSetUpload.onload = function () {
// //         if (this.status == 200) {

// //             // alert("Profile Photo uploaded successfully");

// //             // alert(this.response);

// //            var srcRec =JSON.parse(this.responseText);
// //            alert(srcRec);

// //             srcSet.style.backgroundImage="none";
// //             srcSet.src=srcRec;
// //         }
// //         };

// //         UploadProfilephoto.open("POST", "uploadProfileImage.php");
// //         // profileSetUpload.open("POST", "uploadProfileImage.php");
// //         UploadProfilephoto.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// //         // profileSetUpload.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


// //     // UploadProfilephoto.send("upload=" + passedPhoto);
// //     // UploadProfilephoto.send("upload");
// //     UploadProfilephoto.send();
// //     // profileSetUpload.send();

// }


// for (var i=0;i<profileSetUpload.length;i++){
//     if(passedPhoto != null){
//         profileSetUpload[i].style.display = "block";
//         profileSet[i].addEventListener("click",submitProfilePhoto);
//     }

// }

// function submitProfilePhoto() {

//     // alert("upload");
// //   passedPhoto = element.parentElement.getElementsByName("uploadfile")[0].name;//not works
// // alert(passedPhoto);

// //to get the name of uploaded file in uploadfile name input
// // var file = element.files[0];
// // var file = element.parentElement.getElementsByName("uploadfile")[0].files[0].name;
// // alert(file);

// //nothing of above worked

// }


// stop reload of page after the form is submitted
// window.onbeforeunload = function() {
//     return "Are you sure you want to leave?";
// };


var arrOfReceivedDetails;
function signInThisUser() {

    var email = document.signInForm.enteredSignedInEmail.value;

    var password = document.signInForm.enteredSignedInPassword.value;
    // alert(password=="");
    var forgotOtp = "";
    // alert(forgotOtp=="");//true

    // alert(document.signInForm.OTPEnteredByTyping);//undefined//[object HTMLInputElement] when forget clicked

    // if (document.signInForm.OTPEnteredByTyping !== null || document.signInForm.OTPEnteredByTyping !== undefined) {//null will stuck here creating error
    if (document.signInForm.OTPEnteredByTyping !== undefined) {
        forgotOtp = document.signInForm.OTPEnteredByTyping.value;
        // alert(forgotOtp);

    }

    // else{
    //     alert(forgotOtp);
    // }


    // if (password == "" && forgotOtp == "") {
    //     // alert("Please enter your password or click on forget password");
    // }

    if (arrOfAllEmailAddress.indexOf(email) === -1) {
        // else if (arrOfAllEmailAddress.indexOf(email) === -1) {

        // alert("Please Sign Up");
        document.getElementById("registerOutput").style.display = "flex";
        document.getElementById("registerOutput").innerHTML = "Sorry, You are not registered.<br>Please Sign Up.";

    }
    // else if (arrOfAllEmailAddress.indexOf(email) !== -1 && password === "") {
    else if (arrOfAllEmailAddress.indexOf(email) !== -1 && password == "" && forgotOtp == "") {
        // alert("Please enter password");

        // alert(forgotOtp);
        document.getElementById("registerOutput").style.display = "flex";
        document.getElementById("registerOutput").innerHTML = "Please enter password or click on forget password";
    }
    else {


        // after this , it get's reloaded hence we need to prevet this

        // alert("let's check it");

        var email = JSON.stringify(email);


        var RegisteredCustomerDetail = new XMLHttpRequest();

        RegisteredCustomerDetail.onload = function () {
            // var result = JSON.parse(this.responseText);
            // alert(this.responseText);//gives whole dictionary


            if (this.status == 200) {

                // alert(this.responseText);

                // we will uncomment
                arrOfReceivedDetails = JSON.parse(this.responseText);//it gives completele array of customerNumber as per we setted in php.


                // let personDetailsP = new Promise((resolve, reject) => {
                //     // resolve(arrOfReceivedDetails = JSON.parse(arrOfReceivedDetails));//not works but atleast it's giving output
                //     // resolve(arrOfReceivedDetails);//not works
                //     resolve(30);//not works
                //     // resolve(JSON.parse(arrOfReceivedDetails));//not worked at all
                //     reject("Something went wrong");
                // });

                // personDetailsP.then((value) => {
                //     // module.exports = {
                //     //     personDetails: arrOfReceivedDetails
                //     // }

                //     console.log("value of returned promise", value);//value is not able to be tracked
                //     // alert("value of returned promise", value[0].customerNumber);//value is not abl
                // })

                // we will not be able to get any result from this as nodejs shows output 



                Receivedpassword = arrOfReceivedDetails.Password;
                // alert(Receivedpassword);

                // document.getElementById("registerOutput").style.display = "none";

                // alert(Receivedpassword);

                document.getElementById("registerOutput").style.display = "none";


                // if (Receivedpassword == password) {
                if (Receivedpassword == password || forgotOtp == generatedRandom) {

                    // alert("Welcome");

                    // alert("welcome");


                    if (document.getElementById("rememberMeCheck").checked) {
                        // localStorage.setItem("rememberMe", "true");
                        // set emailaddress in local storage
                        // we need to JSON.parse email


                        var emailLocal = document.signInForm.enteredSignedInEmail.value;
                        localStorage.setItem("EmailAddress", emailLocal);


                    }
                    else {
                        //remove EmailAddress from localstorage
                        // we need to check if it is present
                        // if it is present then remove it
                        // if it is not present then do nothing
                        var EmailAddress = localStorage.getItem("EmailAddress");
                        if (EmailAddress != null) {

                            localStorage.removeItem("EmailAddress");
                        }

                        window.sessionStorage.setItem("EmailAddress", arrOfReceivedDetails.EmailAddress);

                    }


                    //                    var EmailAddress = localStorage.getItem("EmailAddress");
                    // alert(EmailAddress);



                    document.getElementById("registerOutput").style.display = "flex";

                    document.getElementById("registerOutput").innerHTML = "welcome";

                    // window.onbeforeunload = function() {
                    //     return "Are you sure you want to leave?";
                    // };




                    // window.location.href = "shanaya_bazaar_main.php";


                    // setTimeout(()=>{

                    // settimeout not working with this long interval

                    // document.getElementById("registerOutput").style.display = "none";

                    // alert(arrOfReceivedDetails.CustomersProfilePhoto);//temporaryProfilePhoto/1856176940.jpg




                    // alert("Welcome,  you are successfully login");




                    // window.location.href = "shanaya_bazaar_main.php";

                    // window.location.href = "shanaya_bazaar_main.php" + "?" + "loginInformation=" + arrOfReceivedDetails;

                    // http://localhost:3000/shanaya_bazaar_main.php?loginInformation=[object%20Object]

                    // window.location.href = "shanaya_bazaar_main.php" + "?" + "loginInformation=" + this.responseText;

                    // http://localhost:3000/shanaya_bazaar_main.php?loginInformation={%22CustomerNumber%22:1856176940,%22Prefix%22:null,%22FirstName%22:%22Sudha%20Kumari%22,%22LastName%22:null,%22BirthDate%22:null,%22MaritalStatus%22:null,%22EmailAddress%22:%22sudhakumarichauhan24@gmail.com%22,%22Password%22:%22#sudha@2402%22,%22AnnualIncome%22:null,%22Gender%22:null}

                    //   var CustomersProfilePhoto=JSON.stringify(arrOfReceivedDetails.CustomersProfilePhoto);

                    //   var CustomersProfilePhoto=arrOfReceivedDetails.CustomersProfilePhoto;
                    //now we need to replace / with \/
                    //   CustomersProfilePhoto=CustomersProfilePhoto.replace(/\//g, '\\\\');

                    // we will uncomment it

                    // http://localhost:3000/shanaya_bazaar_main.php?CustomerNumber=1856176940&FirstName=Sudha%20Kumari&EmailAddress=sudhakumarichauhan24@gmail.com&Password=#sudha@2402&CustomersProfilePhoto=temporaryProfilePhoto\\1856176940.jpg

                    // let's try to replace / with some special symbol then we will replace where we will receive

                    // CustomersProfilePhoto=CustomersProfilePhoto.replace(/\//g, '$');


                    // document.getElementById("registerOutput").style.display = "none";

                    // window.location.href = "shanaya_bazaar_main.php" + "?" + "CustomerNumber=" + arrOfReceivedDetails.CustomerNumber + "&FirstName=" + arrOfReceivedDetails.FirstName + "&EmailAddress=" + arrOfReceivedDetails.EmailAddress + "&Password=" + arrOfReceivedDetails.Password + "&CustomersProfilePhoto=" + arrOfReceivedDetails.CustomersProfilePhoto;//works

                    //     window.location.href = "shanaya_bazaar_main.php" + "?" + "CustomerNumber=" + arrOfReceivedDetails.CustomerNumber + "&CustomersProfilePhoto=" + CustomersProfilePhoto+ "&FirstName=" + arrOfReceivedDetails.FirstName + "&EmailAddress=" + arrOfReceivedDetails.EmailAddress + "&Password=" + arrOfReceivedDetails.Password ;//works
                    // //    After analysing all the href we come to conclusion that here # in password is creating problem as it take hash as the page hash value where it has to go.




                    // window.location.href = "shanaya_bazaar_main.php" + "?" + "CustomerNumber="+arrOfReceivedDetails.CustomerNumber + "&FirstName=" + arrOfReceivedDetails.FirstName + "&EmailAddress=" + arrOfReceivedDetails.EmailAddress+ "&CustomersProfilePhoto=" + JSON.stringify(arrOfReceivedDetails.CustomersProfilePhoto) + "&Password=" + arrOfReceivedDetails.Password  ;//it also not works in passing directory symbol /.


                    // we uncomment it later but this time we want to send only email
                    // arrOfReceivedDetails.Password=arrOfReceivedDetails.Password.replace(/#/g, '$');//works as it prevent href hash usual meaning

                    // var PasswordToPass = arrOfReceivedDetails.Password;//works
                    // PasswordToPass = PasswordToPass.replace(/#/g, '$');//works as it prevent href hash usual meaning


                    // window.location.href = "shanaya_bazaar_main.php" + "?" + "CustomerNumber="+arrOfReceivedDetails.CustomerNumber + "&FirstName=" + arrOfReceivedDetails.FirstName + "&EmailAddress=" + arrOfReceivedDetails.EmailAddress+ "&CustomersProfilePhoto=" + arrOfReceivedDetails.CustomersProfilePhoto + "&Password=" + arrOfReceivedDetails.Password  ;//it also not works in passing directory symbol /.


                    // we uncomment it later but this time we want to send only email
                    // window.location.href = "shanaya_bazaar_main.php" + "?" + "CustomerNumber="+arrOfReceivedDetails.CustomerNumber + "&FirstName=" + arrOfReceivedDetails.FirstName + "&EmailAddress=" + arrOfReceivedDetails.EmailAddress+ "&CustomersProfilePhoto=" + arrOfReceivedDetails.CustomersProfilePhoto + "&Password=" + PasswordToPass  ;//it also not works in passing directory symbol /.

                    // window.location.href = "shanaya_bazaar_main.php" + "?" + "&EmailAddress=" + arrOfReceivedDetails.EmailAddress ;//it also not works in passing directory symbol /.

                    // uncomment it later


                    // http://localhost:3000/product/women/top%20wear/White%20embroidery%20short%20top/White%20embroidery%20short%20top.html

                    // set this EmailAddress in localsession
                    // window.sessionStorage.setItem("EmailAddress", arrOfReceivedDetails.EmailAddress);

                    // document.cookie = "email=" + arrOfReceivedDetails.EmailAddress + "; path=/";

                    // to get sessionStorage item EmailAddress
                    //    EmailAddress = sessionStorage.getItem("EmailAddress");



                    // window.location.href = window.history.back() + "?" + "&EmailAddress=" + arrOfReceivedDetails.EmailAddress ;

                    // window.location.href = window.history.back();//this will not reload the last page when called in form of history hence we will use sessionStorage of last page href


                    //   var  previousPage = sessionStorage.getItem("previousPage");

                    //   alert(previousPage);//setting shanaya_bazaar main page

                    if (document.referrer) {

                        // alert(document.referrer);//http://localhost:3000/shanaya_bazaar_main.php
                        // alert(window.location.href);//http://localhost:3000/animatedLogin.html

                        if (document.referrer != window.location.href) {
                            window.location = document.referrer;
                        }
                        else {
                            window.location.href = "shanaya_bazaar_main.php";
                        }


                    } else {
                        // window.history.back();
                        window.location.href = "shanaya_bazaar_main.php"
                    }

                    //   window.location.href = previousPage;


                    // http://localhost:3000/shanaya_bazaar_main.php?&EmailAddress=sudhakumarichauhan24@gmail.com

                    // http://localhost:3000/shanaya_bazaar_main.php?CustomerNumber=1856176940&FirstName=Sudha%20Kumari&EmailAddress=sudhakumarichauhan24@gmail.com&Password=#sudha@2402


                    // }, 1);





                    // Note.

                    // complete idea of going history page with refresh
                    // function GoBackWithRefresh(event) {
                    //     if ('referrer' in document) {
                    //         window.location = document.referrer;
                    /* OR */
                    //location.replace(document.referrer);
                    // } else {
                    //     window.history.back();
                    // }
                    // }


                    // <a href="#" onclick="GoBackWithRefresh();return false;">BACK</a>`
























                }
                else {
                    // alert("Wrong Password");
                    document.getElementById("registerOutput").style.display = "flex";
                    document.getElementById("invalidSignIn").style.display = "flex";
                    document.getElementById("registerOutput").innerHTML = "Wrong Password";



                    // prevent reload from here
                    // event.preventDefault();
                    // return false;

                }
            }

            else {
                // document.getElementById("registerOutput").style.display = "flex";
                document.getElementById("registerOutput").innerHTML = "Try Again";
                // return false;
            }
        }


        RegisteredCustomerDetail.open("GET", "getThisCustomerDetail.php?EmailAddress=" + email);

        RegisteredCustomerDetail.send();

    }

    setTimeout(function () {
        document.getElementById("registerOutput").style.display = "none";
        document.getElementById("invalidSignIn").style.display = "none";
    }, 5000);

    // return false;
}


// setTimeout(function () {
//     document.getElementById("registerOutput").style.display = "none";
//     alert(arrOfReceivedDetails);//undefined
// }, 1000);

// let's retry this
// var personDetailsP = new Promise((resolve, reject) => {
//     resolve(arrOfReceivedDetails);
//     reject("Something went wrong");
// });


// personDetailsP.then((value) => {
//     // module.exports = {
//     //     personDetails: arrOfReceivedDetails
//     // }

//     alert("value of returned promise", value);
// })





function forgotPassword(element) {


    element.innerHTML = "Resend the OTP";

    generatedRandomToSend = JSON.stringify(generatedRandom); //if not stringify then it will not work.

    // alert(generatedRandomToSend);

    setTimeout(function () {
        // var link = "mailto:sudhakumarichauhan24@gmail.com"
        var link = "mailto:" + document.signInForm.enteredSignedInEmail.value
            + "?cc=shanayabazaar@gmail.com"
            + "&subject=" + encodeURIComponent("OTP for accountRecovery at Shanaya Bazaar")
            + "&body=" + encodeURIComponent("To login at shanaya bazaar. Your otp  is : " + generatedRandomToSend);
        // window.location.href = link;
        window.open(link, "_self");
    }, 60);


    document.getElementById("enterOTPSendForget").innerHTML = `<input type="text" inputmode="numeric" placeholder="Enter OTP send to Email"  name="OTPEnteredByTyping" required></input>`;

}






















const container = document.getElementById('container');//whole body content div just below body used only once

const registerBtn = document.getElementById('register');
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
}); //when registerBtn is clicked then class active will be added in container and active class code will be seen 


const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});






//to print the signupdata
function printvalue() {

    // alert("inside printvalue ");

    var name = document.signUpForm.nameEnteredByTyping.value;//  

    // alert(name);//Sudha Kumari


    //   alert("Welcome: " + name + `$<br>`+"You have successfully sign up to Shanaya Bazaar");//irritating start it later on

    alert("Welcome " + name + "\n\nYou have successfully signed up on Shanaya Bazaar");//irritating start it later on

}


function mobileFriendly() {
    // if ()
    // create like if maximum width of screen is 480 px then .sign in widht should be 0px and call this only affer double click to switch

}





// document.getElementsByClassName("formcontainer")[0].addEventListener("click",openSignIn);
// document.getElementsByClassName("formcontainer")[1].addEventListener("click",openSignIn);
// document.getElementsByTagName("form")[0].addEventListener("click",openSignIn);
// document.getElementsByClassName("sign-up")[0].addEventListener("click",openSignUp , true);
// document.getElementsByClassName("sign-up")[0].addEventListener("mouseover",openSignUp , true);
// document.getElementsByClassName("sign-in")[0].addEventListener("mouseover",openSignUp , true);
// document.getElementsByClassName("sign-in")[0].addEventListener("click",openSignUp , true);


//now to put this condition when max-width of screen is 450px
//then the sign up form should be hidden and sign in form should be visible and vice versa
//and this should be done only after double click to switch





















setInterval(innerWidthCheck, 1);
// innerWidthCheck();
// var innerWidthFound=
function innerWidthCheck() {
    if (window.innerWidth <= 450) {
        // if (document.getElementsByClassName("sign-up")[0].offsetWidth <= 0) {
        //     document.getElementsByClassName("sign-up")[0].style.display = "block";
        //     document.getElementsByClassName("sign-in")[0].style.display = "none";
        // }
        // else {
        //     document.getElementsByClassName("sign-up")[0].style.display = "none";
        //     document.getElementsByClassName("sign-in")[0].style.display = "block";
        // }

        // document.getElementsByClassName("sign-in")[0].addEventListener("mouseover",openSignUp , true);
        document.getElementsByClassName("sign-in")[0].addEventListener("click", openSignUp, true);
        // document.getElementsByClassName("sign-in")[0].addEventListener("resize",openSignUp , true);
        // setInterval(innerWidthCheck,1);
        // console.log("innerWidth : "+innerWidth);


        //for sign-up now
        document.getElementsByClassName("sign-up")[0].addEventListener("click", openSignIn, true);


    }
    else {
        // document.getElementsByClassName("sign-in")[0].removeEventListener("mouseout",openSignUp);
        // document.getElementsByClassName("sign-in")[0].removeEventListener("click", openSignUp);
        // document.getElementsByClassName("sign-in")[0].removeEventListener("resize",openSignUp);
        // document.getElementsByClassName("sign-up")[0].removeEventListener("click", openSignIn);

    }
}



// if (window.innerWidth < 450) {
//     // document.getElementsByClassName("sign-in")[0].addEventListener("click",openSignUp , true);
// document.getElementsByClassName("sign-up")[0].addEventListener("mouseover",openSignUp , true);

// }

// var openSignup1=document.createElement("div");
//     openSignup1.className="open-signup";

function openSignUp() {



    //creating blue highlighted text to toggle signup page
    var openSignup1 = document.createElement("div");
    openSignup1.className = "open-signup";

    openSignup1.innerHTML = "<h3>Sign Up</h3>";
    openSignup1.style.position = "absolute";
    openSignup1.style.top = "50px";
    openSignup1.style.right = "5vw";
    openSignup1.style.color = "blue";
    // openSignup1.style.transform="translate(30)";
    openSignup1.style.background = "#f0f0f0";



    openSignup1.onmouseover = function () {
        openSignup1.style.color = "red";

    }; //it works but below one is not working
    openSignup1.onmouseout = function () {
        openSignup1.style.color = "blue";
        //     openSignup1.style.display="none";
    }

    openSignup1.onclick = function () {
        document.getElementsByClassName("toggle-container")[0].style.display = "block";


    };

    // document.getElementsByClassName("open-signup")[0].addEventListener("mouseover",function(event){
    //     // openSignup.style.display="block";
    //     openSignup.style.color="red";

    // },true);//not working because document don't contain any such classname but if you want 

    document.getElementsByClassName("form-container")[1].appendChild(openSignup1);



    //for beautiful hover effect //but it is not working now we will check later on

    // const styleTag = document.createElement("style");
    // styleTag.innerHTML = ".open-signup:hover {color:red;background-color: #f0f0f0;}";
    // // document.head.insertAdjacentElement('beforeend', styleTag);
    // document.head.appendChild(styleTag);





    // addCssRule = function(/* string */ selector, /* string */ rule) {
    //     if (document.styleSheets) {
    //       if (!document.styleSheets.length) {
    //         var head = document.getElementsByTagName('head')[0];
    //         head.appendChild(bc.createEl('style'));
    //       }

    //       var i = document.styleSheets.length-1;
    //       var ss = document.styleSheets[i];

    //       var l=0;
    //       if (ss.cssRules) {
    //         l = ss.cssRules.length;
    //       } else if (ss.rules) {
    //         // IE
    //         l = ss.rules.length;
    //       }

    //       if (ss.insertRule) {
    //         ss.insertRule(selector + ' {' + rule + '}', l);
    //       } else if (ss.addRule) {
    //         // IE
    //         ss.addRule(selector, rule, l);
    //       }
    //     }
    //   };


















    // document.getElementsByClassName("form-container")[0].style.display = "none";
    // document.getElementsByClassName("form-container")[0].style.display = "block";
    document.getElementsByClassName("form-container")[1].style.width = "100%";//same as sign in class
    // document.getElementsByTagName("form")[1].style.zIndex="3";
    // document.getElementsByClassName("sign-in")[0].style.width="100%";//necessary to expand the form text
    // document.getElementsByClassName("sign-up")[0].style.width="100%";//for signup form also to get expand
    document.getElementsByClassName("sign-in")[0].style.transition = "none";//as it causes slow up expand hence transition removed
    // document.getElementsByClassName("sign-in")[0].style.zindex="10"
    // document.getElementsByTagName("form")[0].style.display="none";
    // document.getElementsByTagName("form")[0].style.width="100%";
    // document.getElementsByClassName("sign-up")[0].style.display="none";
    // document.getElementsByClassName("container")[0].style.width="100%";
    // document.getElementsByClassName("container")[0].style.width="100%";
    // document.getElementsByClassName("formcontainer")[0].style.width = "100vw";
    // document.getElementsByClassName("formcontainer")[0].style.height = "100%";
    // document.getElementsByClassName("formcontainer")[0].style.top = "0";
    // document.getElementsByClassName("formcontainer")[0].style.left = "0";
    // document.getElementsByClassName("formcontainer")[0].style.zIndex = "1000";
    // document.getElementsByClassName("sign-up")[0].style.zIndex = "1000";
    // document.getElementsByClassName("toggle-panel")[0].style.width = "0%";
    // document.getElementsByClassName("toggle")[0].style.display = "none";

    // document.getElementsByClassName("toggle-container")[0].style.display = "none";
    // document.getElementsByClassName("toggle")[0].style.display = "none";
    document.getElementsByClassName("toggle-container")[0].style.display = "none";

    // document.getElementsByClassName("sign-up")[0].style.display = "none";
    // document.getElementsByClassName("form-container")[0].style.display = "none";


    // if toggle container present then that area will be in it's control
    // document.getElementsByClassName("toggle")[0].style.display = "none";
    // document.body.addEventListener("dbclick",toggleSignUp);
    // document.body.addEventListener("mouseout",toggleSignUp);
    // document.getElementsByClassName("container")[0].addEventListener("touchmove", toggleSignUp, false);


    //we want to apply touchmove to open the toggle-container
    // document.body.addEventListener("mouseout", toggleSignUp, false);

    // if()
    // document.getElementsByClassName("sign-in")[0].addEventListener("mouseout", toggleSignUp, false);

    document.getElementsByClassName("sign-in")[0].addEventListener("dblclick", toggleSignUp, false); //works good //don't use mouse out otherwise it will trace from the current position and if out , then it will be triggered


    //problem is that mouse out capture from very first , if it's out from initial box, like in text or if youenter text , it will open mouseout event

    // document.getElementsByTagName("form")[1].addEventListener("mouseout",toggleSignUp, false);
    //b ut this will make active when form is click hence also not nice approch

    // document.body.addEventListener("drag",toggleSignUp);


    // document.body.addEventListener("touchmove",toggleSignUp);



}





function openSignIn() {


    //creating to open signin toggle with blue highlight above
    var openSignin1 = document.createElement("div");
    //   openSignin1.innerHTML="<br>"
    openSignin1.className = "open-signin";

    openSignin1.innerHTML = "<h3>Sign In</h3>";
    openSignin1.style.position = "absolute";
    // openSignin1.style.position="relative";

    // openSignin1.style.top = "40px";
    openSignin1.style.top = "30px";
    // openSignin1.style.left="80vw"
    // openSignin1.style.right = "-80vw" //ok according to work and it don't create Sign in in seperate line
    openSignin1.style.left = "70vw";
    openSignin1.style.color = "blue";
    // openSignin1.style.display="flex";
    openSignin1.style.background = "#f0f0f0";



    openSignin1.onmouseover = function () {
        openSignin1.style.color = "red";

    }; //it works but below one is not working
    openSignin1.onmouseout = function () {
        openSignin1.style.color = "blue";
        //    openSignin1.style.display="none";
    }

    openSignin1.onclick = function () {
        document.getElementsByClassName("toggle-container")[0].style.display = "block";

    };

    // document.getElementsByClassName("open-signup")[0].addEventListener("mouseover",function(event){
    //     // openSignup.style.display="block";
    //     openSignup.style.color="red";

    // },true);//not working because document don't contain any such classname but if you want 

    document.getElementsByClassName("sign-up")[0].appendChild(openSignin1);





    // document.getElementsByClassName("sign-up")[0].style.width = "0%";//it will create sign up to start from left position
    // document.getElementsByClassName("sign-up")[0].style.width = "50%";//it will create sign up to start from left position



    // document.getElementsByClassName("sign-in")[0].style.height="100vw";
    // document.getElementsByClassName("sign-in")[0].style.height="0vw";
    // document.getElementsByClassName("sign-in")[0].style.display = "none";//so that it will not be present behind //but we don't need to remove it from behind

    // document.getElementsByClassName("sign-up")[0].style.transition="none";

    // document.getElementsByTagName("form")[0].style.width="100%";

    // document.body.addEventListener("touchmove",toggleSignUp);

    // document.getElementsByClassName("form-container")[1].style.width="100%";
    // document.getElementsByClassName("toggle-container")[0].style.display = "none";//but it will also reserve it space hence we need to remove the space taken by it

    document.getElementsByClassName("toggle-container")[0].style.display = "none";

    // document.getElementsByClassName("sign-up")[0].style.position = "absolute";
    // document.getElementsByClassName("sign-up")[0].style.position = "relative";

    //we have added this so that it will be position left after clicking //note that we had created this using other way also but there we used that default position and we only increased the form size and display of all was set none and translate is also setted 0
    document.getElementsByClassName("sign-up")[0].style.left = "-100%";
    document.getElementsByClassName("sign-up")[0].style.width = "100vw";
    document.getElementsByClassName("sign-up")[0].style.transition = "none";//as it causes slow up expand hence transition removed



    // document.getElementsByClassName("sign-up")[0].style.transition = "none";



    // document.getElementsByClassName("toggle")[0].style.display = "none";//but it will also reserve it space hence we need to remove the space taken by it
    // document.getElementsByClassName("form-container")[1].style.width="0%";
    // it will create login page at back of this sign up page

    // document.getElementsByTagName("form")[0].style.width = "100vw";//necessary to expand the sign up form



    // document.getElementsByTagName("form")[1].style.width="100vw";

    // document.body.addEventListener("touchmove",toggleSignUp);
    // document.body.addEventListener("mouseout",toggleSignUp);

    // document.getElementsByClassName("sign-up")[0].addEventListener("mouseout",toggleSignUp);

    document.getElementsByClassName("sign-up")[0].addEventListener("dblclick", toggleSignUp, false);
}


function toggleSignUp() {
    // document.getElementsByClassName("toggle-container")[0].style.display = "block";
    document.getElementsByClassName("toggle-container")[0].style.display = "block";
    // document.getElementsByClassName("toggle")[0].style.display = "block";

}



//here height is set in wrong way hence no effect

// document.getElementsByClassName("toggle")[0].style.height=document.getElementsByClassName("form-container")[0].style.height;
// document.getElementsByClassName("toggle")[1].style.height=document.getElementsByClassName("form-container")[1].style.height;








// toggling green part is creating problem



function invalidDataCheck() {
    var invalidInputData = document.getElementsByClassName("invalidFormFilled");
    for (let invalidData; invalidInputData.length; invalidData++) {
        invalidData.addEventListener("invalid", function () {
            document.getElementById("invalidSignIn").innerHTML = "Please fill correct data";
        });
    }

}

var elem = document.getElementById("Re-Enter-Password");
elem.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        // alert("enter pressed");
        // validateReEnter(this);
        validateReEnter();
    }

});

// function validateReEnter(element) {

function validateReEnter() {

    // var reEnterPassword = element.value;
    var reEnterPassword = document.getElementById("Re-Enter-Password").value;
    var password = document.getElementById("password").value;
    if (reEnterPassword !== password || password == "") {
        document.getElementById("registerOutput").style.display = "flex";
        document.getElementById("registerOutput").innerHTML = "Check the form. It is invalid";
        return;
    }
    else {

        document.getElementById("registerOutput").style.display = "none";
        // document.getElementById("registerOutput").innerHTML = "";
        // register(this);
        // var elem = document.getElementById("submitEnteredData");

        // register(elem);



        register();

        // return;


        // elem.addEventListener("click", function () {
        //     register(this);//this created the complication of clicking again two times.
        //     return;
        // });


    }

    // var elem = document.getElementById("submitEnteredData");
    // elem.addEventListener("click", function () {
    //     register(this);
    // });
}


function myFunctionreset() {
    // document.getElementsByName("signUpForm").reset();
    document.getElementById("registerOutput").style.display = "flex";
    // document.getElementById("resetOut").innerHTML = "form just reseted ";
    document.getElementById("registerOutput").innerHTML = "form just reseted ";
    setTimeout(function () {
        document.getElementById("registerOutput").style.display = "none";
    }, 10000);

}





//submit button output
function submitButtonOutput() {

    // alert("inside submit button");



    document.getElementById("registerOutput").style.display = "flex";
    var registerOutput = document.getElementById("registerOutput");
    // registerOutput.innerHTML = "Your details has been submitted";

    registerOutput.innerHTML = "Welcome " + name + "\n\nYou have successfully signed up on Shanaya Bazaar";

    registerOutput.style.color = "green";
    // now we need to set display back to none after 10 seconds


    var name = document.signUpForm.nameEnteredByTyping.value;//  


    setTimeout(function () {
        document.getElementById("registerOutput").style.display = "none";
    }, 10000);

    // necessary to put the timeout inside because it will not rerun the js to tract it from outside.






    if (document.referrer) {

        // alert(document.referrer);//http://localhost:3000/shanaya_bazaar_main.php
        // alert(window.location.href);//http://localhost:3000/animatedLogin.html

        if (document.referrer != window.location.href) {
            window.location = document.referrer;
        }
        else {
            window.location.href = "shanaya_bazaar_main.php";
        }


    } else {
        // window.history.back();
        window.location.href = "shanaya_bazaar_main.php"
    }








}



//check mobile no.
function checkMobileNo() {
    var mobileNo = document.getElementsByName("phone")[0].value; //works
    if (mobileNo.length < 10 || mobileNo.length > 12) {
        alert("Please enter valid mobile no.");//works
    }
}
