
// Optimized product page JavaScript
'use strict';

// Cache DOM elements and variables
var EmailAddress = sessionStorage.getItem("EmailAddress") || localStorage.getItem("EmailAddress");
var productIdOfThisPage = document.body.getAttribute("id").trim();
var mainPageHrefOrSrc = document.getElementById("mainPageHrefOrSrc").innerHTML.trim();
var SearchProductInnerHTML = document.querySelector(".similarproducts a").innerHTML;
var bodyOfThisPage = document.getElementsByClassName("productPage");
var lowerpopedUpPage = document.querySelector(".lowerpopedUpPage");
var clickedReviewImgOpener = document.querySelector(".clickedReviewImg");

// Product variables
var productName, priceOfThisProduct, mainImagOfThisProduct, sizeSelected, colorSelected, finalPrice;
// importing headerpart of main website
var headerOfProduct;

// alert("product");



// window.alert("productjs");
var EmailAddress;

EmailAddress = sessionStorage.getItem("EmailAddress");
// alert(EmailAddress);

if (EmailAddress == null || EmailAddress == undefined) {
    // we can also get it from local storage
    EmailAddress = localStorage.getItem("EmailAddress");
}



var productIdOfThisPage = document.body.getAttribute("id");
productIdOfThisPage = productIdOfThisPage.trim();

// alert(productIdOfThisPage);

// mainPageHrefOrSrc
var mainPageHrefOrSrc = document.getElementById("mainPageHrefOrSrc").innerHTML;

mainPageHrefOrSrc = mainPageHrefOrSrc.trim();
// window.alert(mainPageHrefOrSrc);


var SearchProductInnerHTML = document.getElementsByClassName("similarproducts")[0].firstElementChild.getElementsByTagName("a")[0].innerHTML;


headerFunction();

function getSecondLastSlashIndex(str) {
    const lastIndex = str.lastIndexOf('/');
    if (lastIndex === -1) {
        return -1; // No slashes found
    }
    return str.lastIndexOf('/', lastIndex - 1);
}



// document.body.setAttribute("onscroll","removeDropDown()");//as it will work only if at the top of page
document.body.setAttribute("ondblclick", "removeDropDown()");//as it will work only if at the top of page


function headerFunction() {


    headerOfProduct = document.getElementsByTagName("header")[0];

    var headertitle = headerOfProduct.getElementsByClassName("headertitle")[0];

    headertitle = headertitle.getElementsByTagName("img")[0];
    var titlelogo = headertitle.src;
 
    titlelogo = titlelogo.substring(getSecondLastSlashIndex(titlelogo) + 1, titlelogo.length);


    titlelogo = titlelogo.replace(/%20/g, " ");
   
    headertitle.src = mainPageHrefOrSrc + titlelogo;
   


    var headerinputs = headerOfProduct.getElementsByClassName("headerinputs")[0].getElementsByTagName("img")[0];
    var logo = headerinputs.src;
    // alert(logo);//http://localhost:3000/product/accessories/general%20products/Four%20Sided%20Folding%20Mirror/logo_enhanced.png
    //we need only the last /
    var logo = logo.substring(getSecondLastSlashIndex(logo) + 1, logo.length);

    // alert(logo);///logo_enhanced.png

    headerinputs.src = mainPageHrefOrSrc + logo;



    var headerSearch = headerOfProduct.getElementsByClassName("headerinputs")[0];

    document.getElementById("mySelect").addEventListener("change", searchoutputInPage);



    headerSearch.addEventListener("click", headerPage);

    function headerPage() {

        if (document.searchProduct) {


            document.searchProduct.searchProductEnteredbyTyping.addEventListener("keypress", function (event) {
                if (event.key === "Enter") {

                    event.preventDefault();



                    removeDropDown();

                   
                    searchoutputInPage();


                }
            });

            document.getElementsByClassName("search")[0].addEventListener("click", function (event) {
                event.preventDefault();

                removeDropDown();

                searchoutputInPage();

            });
        }

    }

}


function searchoutputInPage() {

    document.getElementById("similarproductsoptions").style.display = "flex";

    if (document.getElementById("similarproductsoptions").style.display === "none") {

        document.getElementById("similarproductsoptions").style.display = "flex";


        document.getElementsByClassName("similarproducts")[0].removeChild(document.getElementsByClassName("similarproducts")[0].lastElementChild);


        //  alert("no");



    }

    if (document.getElementById("mySelect").value !== "allCategory") {
        var productEntered = document.getElementById("mySelect").value;
    }
    else {

        var productEntered = document.searchProduct.searchProductEnteredbyTyping.value;
    }


    productEntered = productEntered.replace(/\s+/g, ' '); //this line is used to remove all extra spaces between words

    // alert(productEntered);

    if (productEntered == "") {




        document.getElementById("resultOutput").style.display = "flex";

        document.getElementById("resultOutput").innerHTML = "Please type the product you want to search for";
        // alert("empty");//ok


        setTimeout(function () {
            document.getElementById("resultOutput").style.display = "none";

        }, 5000);
        // return;
    }
    else {


        searchGivenProduct(productEntered, "similarproductsoptions", mainPageHrefOrSrc, SearchProductInnerHTML);
        document.getElementById("similarproductsoptions").scrollIntoView({ behavior: "smooth", block: "center" });




    }


    setTimeout(() => {
        if (document.getElementById("similarproductsoptions").getElementsByTagName("div")[2] !== null) {
            document.getElementsByClassName("similarproducts")[0].previousElementSibling.innerHTML = "Your search result for '" + productEntered + "' is ready";
            document.getElementsByClassName("similarproducts")[0].previousElementSibling.style.fontSize = "20px";

        }
    }, 2000);



}


var productID = document.body.getAttribute("id");
// alert(productID);
var productName;
var priceOfThisProduct;
var mainImagOfThisProduct;
var sizeSelected;
var colorSelected;

var bodyOfThisPage = document.getElementsByClassName("productPage");
var finalPrice;



document.getElementById("similarproductsoptions").style.display = "none";

window.onload = () => {

    console.log("page is fully loaded");
    // alert("page is fully loaded");



    // document.getElementsByTagName("iframe")[0].setAttribute('loading', 'lazy');

    EmailRelatedLogin(mainPageHrefOrSrc, EmailAddress);//function is connected

    productName = bodyOfThisPage[0].getElementsByClassName("thisProductName")[0].textContent;//works

    // mainImagOfThisProduct = bodyOfThisPage[0].getElementsByClassName("bigproductimag")[0].src;
    mainImagOfThisProduct = bodyOfThisPage[0].getElementsByClassName("sidesmallproducts")[0].getElementsByTagName("img")[0].src;//it is in case we have selected not the main image in bigimag



    var pathsearch = window.location.href;
    // remove upto /product

    pathsearch = pathsearch.replace(/%20/g, " ");
    // remove extra white space in between
    pathsearch = pathsearch.replace(/\s+/g, " ");
    pathsearch = pathsearch.toLowerCase();

    pathsearch = pathsearch.substring(pathsearch.indexOf("/product") + 9);

    pathsearch = pathsearch.substring(0, pathsearch.lastIndexOf('/'));//women/ethnic wear/lahenga/solid semi stitched lehenga choli

    // alert(pathsearch);
    //maybe & symbol is creating problem , let's remove it too
    pathsearch = pathsearch.replace(/&/g, "");
    // alert(pathsearch);//kids/girl wear/stylish partywear multicolor cotton girls frocks  dresses

    var pathsearch1 = pathsearch.substring(pathsearch.lastIndexOf("/") + 1, pathsearch.length);//solid semi stitched lehenga choli
    // alert(pathsearch1);

    // pathsearch2 = pathsearch.substring(pathsearch.indexOf("/"),pathsearch.lastIndexOf('/'));///Beautifull Embroidey Zari Work Lehenga For Women With Blouse Piece And Dupatta.php

    // we want substring from second index of / to last

    var pathsearch4 = pathsearch.substring(pathsearch.indexOf("/") + 1);//ethnic wear/lahenga/solid semi stitched lehenga choli
    // alert()
    // alert("pathsearch4 : " + pathsearch4);//pathsearch4 : girl wear/stylish partywear multicolor cotton girls frocks  dresses

    var pathsearch3 = pathsearch4.substring(pathsearch4.indexOf("/") + 1);

    var pathsearch2 = pathsearch3.substring(pathsearch3.indexOf("/") + 1);//incase if not / is present then
   


    // alert(pathsearch1 + " /" + pathsearch2 + " /" + pathsearch3 + " /" + pathsearch4 + " /" + pathsearch + " trendy");

    searchGivenProduct(pathsearch1 + " /" + pathsearch2 + " /" + pathsearch3 + " /" + pathsearch4 + " /" + pathsearch + " trendy", "similarproductsoptions", mainPageHrefOrSrc, SearchProductInnerHTML);



    setTimeout(function () {
        // alert(document.getElementById("similarproductsoptions").getElementsByTagName("div")[2]);



        if (document.getElementById("similarproductsoptions").getElementsByTagName("div")[2] === null) {

            document.getElementById("similarproductsoptions").style.display = "none";

            document.getElementsByClassName("similarproducts")[0].innerHTML += "<h4>Sorry, no similar products</h4>";


        }

        else {
            document.getElementById("similarproductsoptions").style.display = "flex";





        }

    }, 10000);
 



};







var clickedReviewImgOpener = document.getElementsByClassName("clickedReviewImg")[0];




function imgopener() {

    var reviewboximg = document.getElementsByClassName("reviewBoxes")[0].getElementsByTagName("img");


    for (var i = 0; i < reviewboximg.length; i++) {

        reviewboximg[i].addEventListener("click", function () {
            //we want to see the full size in window      



            clickedReviewImgOpener.style.display = "block";

            clickedReviewImgOpener.getElementsByClassName("imgOpener")[0].src = this.src;

            // clickedReviewImgOpener.getElementsByClassName("imgOpener")[0].src = this.firstElementChild.src;


        });
    }
}



if (document.getElementsByClassName("sizeOpen")) {


    var sizeOpen = document.getElementsByClassName("sizeOpen")[0];
    // alert(sizeOpen);

    if (sizeOpen != undefined) {

        sizeOpen.addEventListener("click", function () {
            document.getElementsByClassName("sizeSelect")[0].style.display = "block";

        });
    }

}


if (document.getElementsByClassName("sizeSelect")) {
    var sizeSelectButton = document.getElementsByClassName("sizeSelectButton");
    for (var i = 0; i < sizeSelectButton.length; i++) {

        // sizeSelectButton[i].style.backgroundColor="white";
        sizeSelectButton[i].addEventListener("click", function () {
            for (var i = 0; i < sizeSelectButton.length; i++) {
                sizeSelectButton[i].style.backgroundColor = "white";
            }

            this.style.backgroundColor = "lightgreen";
            if (document.getElementsByClassName("sizeValue")[0]) {

                sizeSelected = this.getElementsByClassName("sizeValue")[0].innerText;

                // priceWithSize
                var priceWithSize = this.getElementsByClassName("priceWithSize")[0].innerText;
                // alert(priceWithSize);
                var currentpricePerSize = document.getElementsByClassName("finalPriceDecided")[0];

                currentpricePerSize.innerHTML = priceWithSize;

            }
            else {
                sizeSelected = this.innerText;
            }


            // alert(sizeSelected);

        }



        );
    }

}




if (document.getElementsByClassName("lowerpopedUpPage")[0]) {
    var lowerpopedUpPage = document.getElementsByClassName("lowerpopedUpPage")[0];
}

if (document.getElementsByClassName("buyNow")[0]) {
    var buyNowClicked = document.getElementsByClassName("buyNow");
}

// alert(buyNowClicked.length);//2

var parentHrefOfProductOfBuy = buyNowClicked[0].parentElement.href;//we want cart also //uncomment if stuck
// alert(parentHrefOfProductOfBuy);

for (var i = 0; i < buyNowClicked.length; i++) {



    // AddToCartClicked[i].parentElement.removeAttribute("href");
    buyNowClicked[i].parentElement.removeAttribute("href");

    buyNowClicked[i].addEventListener("click", function () {
        // alert("buy now clicked");

        // alert(document.getElementsByClassName("sizeSelectButton")[0]);

        if (productName != undefined && mainImagOfThisProduct != undefined && priceOfThisProduct != undefined) {




            if ((sizeSelected === undefined || sizeSelected === null) && document.getElementsByClassName("sizeSelectButton")[0] !== undefined) {

                document.getElementsByClassName("sizeSelectedOutput")[0].innerHTML = "Please select a size";

                this.parentElement.href = "#";

                lowerpopedUpPage.style.display = "flex";
                lowerpopedUpPage.innerHTML = "Please select a size";

                setTimeout(function () {
                    document.getElementsByClassName("sizeSelectedOutput")[0].innerHTML = "";
                }, 3000);





                setTimeout(function () {
                    lowerpopedUpPage.style.display = "none";
                }, 3000);



            }

            else {

                buyNowClicked[i].parentElement.removeAttribute("href");


                if (EmailAddress === undefined || EmailAddress === null) {



                    document.getElementsByClassName("sizeSelectedOutput")[0].innerHTML = "Please login to buy";

                    lowerpopedUpPage.style.display = "flex";
                    lowerpopedUpPage.innerHTML = "Please login to buy";

                    setTimeout(function () {
                        lowerpopedUpPage.style.display = "none";
                    }, 3000);

                    this.parentElement.href = "#";



                }
                else {
                    // alert(sizeSelected);//undefined
                    // if(sizeSelected !== undefined || sizeSelected !== null){ //keeping null will take here.

                    if (sizeSelected !== undefined) {

                        if (document.getElementsByClassName("finalPriceDecided")[0] !== undefined) {

                            finalPrice = document.getElementsByClassName("finalPriceDecided")[0].innerHTML;
                            finalPrice = Number(finalPrice.replace("₹", ""));


                            this.parentElement.href = parentHrefOfProductOfBuy + "?" + "productID=" + productID + "&productName=" + productName + "&priceOfThisProduct=" + finalPrice + "&mainImagOfThisProduct=" + mainImagOfThisProduct + "&sizeSelected=" + sizeSelected;


                        }
                        else {


                            // alert("buy now");
                            this.parentElement.href = parentHrefOfProductOfBuy + "?" + "productID=" + productID + "&productName=" + productName + "&priceOfThisProduct=" + priceOfThisProduct + "&mainImagOfThisProduct=" + mainImagOfThisProduct + "&sizeSelected=" + sizeSelected;//
                            // alert(this.parentElement.href);

                        }


                    }
                    else {



                        if (document.getElementsByClassName("finalPriceDecided")[0] !== undefined) {

                            finalPrice = document.getElementsByClassName("finalPriceDecided")[0].innerHTML;
                            // remove rs symbol from it and only numbers are taken
                            finalPrice = Number(finalPrice.replace("₹", ""));

                            this.parentElement.href = parentHrefOfProductOfBuy + "?" + "productID=" + productID + "&productName=" + productName + "&priceOfThisProduct=" + finalPrice + "&mainImagOfThisProduct=" + mainImagOfThisProduct + "&sizeSelected=" + sizeSelected;


                        }

                        else {


                            this.parentElement.href = parentHrefOfProductOfBuy + "?" + "productID=" + productID + "&productName=" + productName + "&priceOfThisProduct=" + priceOfThisProduct + "&mainImagOfThisProduct=" + mainImagOfThisProduct;


                        }

                    }
                }

            }
        }
        else {
            lowerpopedUpPage.style.display = "flex";
            lowerpopedUpPage.innerHTML = "Server is slow. Please wait to load the page completely.";

            setTimeout(function () {
                lowerpopedUpPage.style.display = "none";
            }, 3000);

        }


    });
}

// }, 3000);


if (document.getElementsByClassName("productshortdetail")[0]) {
    var productshortdetailImgPolicy = document.getElementsByClassName("productshortdetail")[0];
    var allproductpolicy = document.createElement('img'); // Container for progress bar and file name
    allproductpolicy.className = 'allproductpolicy';
    // allproductpolicy.src = mainPageHrefOrSrc + "files acc/allproductpolicy.webp";
    allproductpolicy.src = mainPageHrefOrSrc + "files acc/allproductpolicy.jpg";
    // productshortdetailImgPolicy.insertAdjacentElement(allproductpolicy);
    productshortdetailImgPolicy.insertBefore(allproductpolicy, productshortdetailImgPolicy.getElementsByTagName("h4")[1]);
}





var AddToCartClicked = document.getElementsByClassName("addToCart");

var parentHrefOfProductOfCart = AddToCartClicked[0].parentElement.href;

for (var i = 0; i < AddToCartClicked.length; i++) {

    AddToCartClicked[i].parentElement.removeAttribute("href");
   

    AddToCartClicked[i].addEventListener("click", function () {

        if (productName != undefined && mainImagOfThisProduct != undefined && priceOfThisProduct != undefined) {

            if ((sizeSelected === undefined || sizeSelected === null) && document.getElementsByClassName("sizeSelectButton")[0] !== undefined) {

                // alert("Please select a size");
                document.getElementsByClassName("sizeSelectedOutput")[0].innerHTML = "Please select a size";

              
                this.parentElement.href = "#";

                lowerpopedUpPage.style.display = "flex";
                lowerpopedUpPage.innerHTML = "Please select a size";

                setTimeout(function () {
                    lowerpopedUpPage.style.display = "none";
                    document.getElementsByClassName("sizeSelectedOutput")[0].innerHTML = "";
                }, 3000);



            }


            else {

                // AddToCartClicked[i].parentElement.removeAttribute("href");

                if (EmailAddress === undefined || EmailAddress === null) {
                    // alert("Please enter your email");

                    if (document.getElementsByClassName("sizeSelectedOutput")[0]) {
                        document.getElementsByClassName("sizeSelectedOutput")[0].innerHTML = "Please login to buy";
                    }


                    lowerpopedUpPage.style.display = "flex";
                    lowerpopedUpPage.innerHTML = "Please login to buy";

                    setTimeout(function () {
                        lowerpopedUpPage.style.display = "none";
                        document.getElementsByClassName("sizeSelectedOutput")[0].innerHTML = "";
                    }, 3000);

                    this.parentElement.href = "#";

                }

                else {

                    if (sizeSelected !== undefined) {

                        if (document.getElementsByClassName("finalPriceDecided")[0] !== undefined) {

                            finalPrice = document.getElementsByClassName("finalPriceDecided")[0].innerHTML;
                            finalPrice = Number(finalPrice.replace("₹", ""));

                            this.parentElement.href = parentHrefOfProductOfCart + "?" + "productID=" + productID + "&productName=" + productName + "&priceOfThisProduct=" + finalPrice + "&mainImagOfThisProduct=" + mainImagOfThisProduct + "&sizeSelected=" + sizeSelected;

                        }


                        else {
                            this.parentElement.href = parentHrefOfProductOfCart + "?" + "productID=" + productID + "&productName=" + productName + "&priceOfThisProduct=" + priceOfThisProduct + "&mainImagOfThisProduct=" + mainImagOfThisProduct + "&sizeSelected=" + sizeSelected;//http://
                        }
                    }
                    else {

                        if (document.getElementsByClassName("finalPriceDecided")[0] !== undefined) {
                            finalPrice = document.getElementsByClassName("finalPriceDecided")[0].innerHTML;
                            finalPrice = Number(finalPrice.replace("₹", ""));

                            this.parentElement.href = parentHrefOfProductOfCart + "?" + "productID=" + productID + "&productName=" + productName + "&priceOfThisProduct=" + finalPrice + "&mainImagOfThisProduct=" + mainImagOfThisProduct + "&sizeSelected=" + sizeSelected;

                        }
                        else {
                            this.parentElement.href = parentHrefOfProductOfCart + "?" + "productID=" + productID + "&productName=" + productName + "&priceOfThisProduct=" + priceOfThisProduct + "&mainImagOfThisProduct=" + mainImagOfThisProduct;
                        }
                    }
                }
            }

        }
        else {
            lowerpopedUpPage.style.display = "flex";
            lowerpopedUpPage.innerHTML = "Server is slow. Please wait to load the page completely.";

            setTimeout(function () {
                lowerpopedUpPage.style.display = "none";
            }, 3000);

        }
    });
}



var smallimg = document.getElementsByClassName("productcolumn");



imgChange();

function imgChange() {
    for (var i = 0; i < smallimg.length; i++) {

        smallimg[i].addEventListener("click", function () {


            var srcsmallimg = this.src;


            var mainimg = this.parentElement.parentElement.getElementsByClassName("mainproductimg")[0].firstElementChild;//mainproductimg ;bigproductimag





            mainimg.src = srcsmallimg; //this works

            for (var i = 0; i < smallimg.length; i++) {

                smallimg[i].style.backgroundColor = "white";
                smallimg[i].style.border = "none";

            }

            this.style.border = "solid black 4px";

        });
    }
}












for (var i = 0; i < document.getElementsByClassName("row").length; i++) {
    // document.getElementsByClassName("row")[i].style.display="block";
}



if (document.getElementsByClassName("colorOptions")[0]) {
    var colorOptions = document.getElementsByClassName("colorOptions")[0].innerHTML;
    var colorOptionsDiv = document.createElement('div'); // Container for progress bar and file name
    colorOptionsDiv.className = 'colorOptions sidecolors';
    colorOptionsDiv.innerHTML = colorOptions;

    var productshortdetailcolorOptionsContainer = document.getElementsByClassName("productshortdetail")[0];
    var colorOptionsContainer = document.getElementsByClassName("discountcut")[0].parentElement.nextElementSibling;

    productshortdetailcolorOptionsContainer.insertBefore(colorOptionsDiv, colorOptionsContainer);

}


var colorsGivenOptions = document.getElementsByClassName("colorsGiven");

for (var i = 0; i < colorsGivenOptions.length; i++) {

    colorsGivenOptions[i].addEventListener("click", function () {
        var srccolorsGivenOptions = this.src;
        // var mainimg = this.parentElement.parentElement.getElementsByClassName("mainproductimg")[0].firstElementChild;
        var mainimg = document.getElementsByClassName("mainproductimg")[0].firstElementChild;
        mainimg.src = srccolorsGivenOptions;
        mainImagOfThisProduct = mainimg.src;


        // we also need to change the sidesmallproducts 


        var fileSrc = this.getAttribute("src");
        fileSrc = fileSrc.trim();
        fileSrc = JSON.stringify(fileSrc);

        // productIdOfThisPage needs to be encoded
        var productIdOfThisPagePassed = JSON.stringify(productIdOfThisPage);


        // alert(fileSrc);//"colors option/violet/ynhi3_512.png"

        var getProductCodeWithColor = new XMLHttpRequest();

        getProductCodeWithColor.onload = function () {




            if (getProductCodeWithColor.status >= 200 && getProductCodeWithColor.status < 300) {

                // alert(this.responseText);

                if (this.responseText.includes("]")) {
                    var colorProduct = JSON.parse(this.responseText);


                    colorProduct = colorProduct[1];//


                    var sidesmallproductsContainer = document.getElementsByClassName("sidesmallproducts")[0];
                    var sidesmallproductsClone = document.getElementsByClassName("sidesmallproducts")[0].getElementsByTagName("img")[0];

                    // making clone of sidesmallproductsClone
                    sidesmallproductsClone = sidesmallproductsClone.cloneNode(true);





                    sidesmallproductsContainer.innerHTML = "";

                    if (colorProduct !== 'null') {

                        // sidesmallproductsContainer.innerHTML = "";
                        // "file_src"

                        //for loop to get each row of colorProduct
                        for (var j = 0; j < colorProduct.length; j++) {

                            var colorSrc = colorProduct[j].file_src;
                            //alert(fileSrc);
                            sidesmallproductsClone.src = mainPageHrefOrSrc + colorSrc;

                            sidesmallproductsContainer.innerHTML += sidesmallproductsClone.outerHTML;


                        }

                        if (colorProduct[0].Quantity_Pack_Name !== null) {
                            var quantityPackName = colorProduct[0].Quantity_Pack_Name;
                            var quantityPackPrice = colorProduct[0].Quantity_Pack_Price;

                            // productName=quantityPackName;

                            bodyOfThisPage[0].getElementsByClassName("thisProductName")[0].innerText = quantityPackName;

                            var currentpricePerQuantity = document.getElementsByClassName("finalPriceDecided")[0];

                            // currentpricePerQuantity.innerHTML = quantityPackPrice;
                            currentpricePerQuantity.innerHTML = `<span class="pricesystem">&#8377;</span>` + quantityPackPrice;




                            var discountselect = discountpercent[0];

                            var discountselectedval = Number(discountselect.innerHTML);

                            var currentprice = discountselect.parentElement.previousElementSibling.innerText;
                            currentprice = Number(currentprice.replace("₹", ""));

                            var price = (100 * currentprice) / (100 - discountselectedval);
                            // alert(price);//OK
                            // currentprice.innerText = "₹" + price.toFixed(2);


                            discountselect.parentElement.nextElementSibling.innerHTML = `<span class="discountcut"><span class="pricesystem">&#8377;</span>` + price.toFixed(0) + `</span>`;

                            // <span class="discountcut"><span class="pricesystem">&#8377;</span>499</span> 


                            // we want to replace innerhtml of class priceWithSize with this currentprice
                            var priceWithSize = document.getElementsByClassName("priceWithSize");
                            // start a for loop
                            for (var i = 0; i < priceWithSize.length; i++) {
                                priceWithSize[i].innerHTML = `<span class="pricesystem">&#8377;</span>` + currentprice;
                            }






                        }

                    }
                    else {

                     

                        sidesmallproductsClone.src = colorsGivenOptions[i].getAttribute("src");

                        sidesmallproductsContainer.innerHTML += sidesmallproductsClone.outerHTML;

                    }
                }

            }
            else {
                alert("Error");
            }

            imgChange();


        }




        getProductCodeWithColor.open("POST", mainPageHrefOrSrc + "getThisFileDetail.php");
        getProductCodeWithColor.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
       
        getProductCodeWithColor.send("fileSrc=" + fileSrc + "&productCode=" + productIdOfThisPagePassed);





    });
}





var discountpercent = document.getElementsByClassName("discountpercent");

for (var i = 0; i < discountpercent.length; i++) {
    var discountselect = discountpercent[i];
    var discountselectedval = Number(discountselect.innerHTML);

    var price = discountselect.parentElement.nextElementSibling.innerText;
    // price=price.replace("₹", "");
    price = Number(price.replace("₹", ""));
   
    var currentprice = discountselect.parentElement.previousElementSibling;
    var price = (100 - discountselectedval) * price / 100;
    // alert(price);//OK
    // currentprice.innerText = "₹" + price.toFixed(2);

    priceOfThisProduct = price.toFixed(0);//to store this value globally


    currentprice.innerHTML = `<span class="pricesystem">&#8377;</span>` + price.toFixed(0);
    // alert(currentprice);


}


var CustomerimagesUploaded;
var reviewImagesBoxOfReviewer = document.getElementsByClassName("absoluteAllReviewImage")[0];
reviewImagesBoxOfReviewer.style.display = "none";
var reviewBoxesClone = reviewImagesBoxOfReviewer.firstElementChild;

// in main , it is with onclick


function openAllCustomerReviewFiles() {

    var productCode = productIdOfThisPage;
    // alert(productCode);

    productCode = JSON.stringify(productCode);

    var UploadCustomersImages = new XMLHttpRequest();

    UploadCustomersImages.onload = function () {
        if (this.status == 200) {

            // alert(this.responseText);

            if (this.responseText.includes("]")) {
                CustomerimagesUploaded = JSON.parse(this.responseText);


                reviewImagesBoxOfReviewer.style.display = "flex";

                if (CustomerimagesUploaded.images.length > 1) {
                    reviewImagesBoxOfReviewer.innerHTML = "";

                }
                else {

                    reviewImagesBoxOfReviewer.innerHTML = "Sorry, No review files loadable";
                }



                for (var i = 0; i < CustomerimagesUploaded.images.length; i++) {

                    

                    var image = CustomerimagesUploaded.images[i].substring(CustomerimagesUploaded.images[i].indexOf("review"));


                    // alert(image);


                    reviewBoxesClone.getElementsByTagName("img")[0].src = image;

                    reviewImagesBoxOfReviewer.innerHTML += reviewBoxesClone.outerHTML;

                }

                allReviewFilesImageOpener();
            }

        }

    }


    UploadCustomersImages.open("GET", mainPageHrefOrSrc + "getReviewFiles.php?productCode=" + productCode);
    UploadCustomersImages.send();



}




function allReviewFilesImageOpener() {


    var reviewboximg = document.getElementsByClassName("reviewImages")[0].getElementsByTagName("img");

    for (var i = 0; i < reviewboximg.length; i++) {

        reviewboximg[i].addEventListener("click", function () {
            //we want to see the full size in window      

            var clickedReviewImgOpener = document.getElementsByClassName("clickedReviewImg")[0];


            clickedReviewImgOpener.style.display = "block";

            clickedReviewImgOpener.getElementsByClassName("imgOpener")[0].src = this.src;

            // clickedReviewImgOpener.getElementsByClassName("imgOpener")[0].src = this.firstElementChild.src;


        });
    }

}





//innerHTML
var data;
function showReviewForm(element) {



    data = element.parentElement.getElementsByClassName("addYourReview")[0];

    // element.page

    // alert(data.className);

    data.style.display = "block";

    // location.hash = "#AddYourReviewSelected";//perfect way of calling hash.//also works
    location.hash = "AddYourReviewSelected";//works for calling hash.


}





var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); //we used this to prevent reload of page after XMLHttpRequest
    // Your form submission logic here 
});


var productCode;
var reviewEmail;
var checkedValueOfReviewOfProdct;

function submitReview() {


    for (var i = 0; i < document.getElementsByName("rate").length; i++) {

        if (document.getElementsByName("rate")[i].checked) {


            checkedValueOfReviewOfProdct = document.getElementsByName("rate")[i].value;

            // alert(checkedValueOfReviewOfProdct);//it works here

        }
    }



    productCode = productIdOfThisPage;

    var reviewName = document.getElementsByName("name")[0].value;

    // document.getElementsByName("name")[0].value=EmailAddress;

    reviewEmail = document.getElementsByName("email")[0].value;

    var reviewText = document.getElementsByName("comment")[0].value;


    if (checkedValueOfReviewOfProdct) {
        // alert(checkedValueOfReviewOfProdct);//4

        if (reviewEmail == EmailAddress) {

          

            var dbparam = { productCode: productCode, EmailAddress: reviewEmail, reviewName: reviewName, reviewText: reviewText, checkedValueOfReviewOfProdct: checkedValueOfReviewOfProdct };
            // alert(dbparam);//[object object]

            dbparam = JSON.stringify(dbparam);


            var UploadCustomersReview = new XMLHttpRequest();

            UploadCustomersReview.onload = function () {
                if (this.status == 200) {

                    if (this.responseText.includes("]")) {
                        var response = JSON.parse(this.responseText);

                        if (response.status == "true") {
                            // alert("Review Added Successfully");
                            document.getElementById("resultOutput").style.display = "flex";
                            document.getElementById("resultOutput").innerHTML = response.message;

                            setTimeout(function () {
                                document.getElementById("resultOutput").style.display = "none";
                            }, 4000);
                        } else {

                            // alert(response.message);
                            document.getElementById("resultOutput").style.display = "flex";
                            document.getElementById("resultOutput").innerHTML = response.message;

                            setTimeout(function () {
                                document.getElementById("resultOutput").style.display = "none";
                            }, 4000);

                        }


                    }
                }

            }



            UploadCustomersReview.open("POST", mainPageHrefOrSrc + "uploadCustomersReview.php");

            UploadCustomersReview.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            UploadCustomersReview.send("dbparam=" + dbparam);
           

            setTimeout(function () {
                document.getElementById("resultOutput").style.display = "none";
            }, 10000);

            // document.getElementById("resultOutput").innerHTML = checkedValueOfReviewOfProdct;
        }

        else {
            document.getElementById("resultOutput").style.display = "flex";
            document.getElementById("resultOutput").innerHTML = "Please login to give your review. ";
        }
    }
    else {
        // alert("Please select a rating");//when undefined 
        document.getElementById("resultOutput").style.display = "flex";
        document.getElementById("resultOutput").innerHTML = "Please select a rating";
    }

    setTimeout(function () {

        document.getElementById("resultOutput").style.display = "none";

    }, 4000);



}


var path;
path = window.location.pathname;
path = path.replace(/%20/g, " ");
path = path.substring(0, path.lastIndexOf('/'));
path = path.substring(1);


function uploadFiles() {

    var fileInput = document.getElementById('fileUpload');
    var files = fileInput.files;//list of all the files uploaded

    // tracking path of the page from where this function is called

    path = window.location.pathname;//product/women/ethnic wear/kurta sets/Pakistani Suit  Women Kurta Pair/Embroidery Gaithering Anarkali kurtis.php  gives relative address after  replace(/%20/g, " ")



    path = path.replace(/%20/g, " ");

    for (var i = 0; i < files.length; i++) {

        var allowedExtensions = ['.jpg', '.jpeg', '.png', '.pdf', '.svg', '.zip', '.docx', '.xlsx', 'image/*', ' video/*', '.mp4', '.gif'];
        var fileExtension = files[i].name.substring(files[i].name.lastIndexOf('.')).toLowerCase();

        if (allowedExtensions.includes(fileExtension)) {
            uploadFile(files[i]);//passing one file from the list at a time
        } else {
            alert('Invalid file type: ' + fileExtension);
        }
    }

}


function uploadFile(file) {

    var formData = new FormData();

    formData.append('file', file);
   
    formData.append('path', path);//path of the page from where this function is called

  
    formData.append('EmailAddress', EmailAddress);
    formData.append('productCode', productIdOfThisPage);

    var progressBarContainer = document.createElement('div'); // Container for progress bar and file name
    progressBarContainer.className = 'progress-container';

    var fileName = document.createElement('div'); // Display file name
    fileName.className = 'file-name';
    fileName.textContent = file.name;
    //progressBarContainer.appendChild(fileName);

    var progressBar = document.createElement('div'); // Create a new progress bar element
    progressBar.className = 'progress-bar';
    progressBar.id = 'progressBar_' + file.name;

    progressBarContainer.appendChild(progressBar);

    var progressBarsContainer = document.getElementById('progressBarsContainer');

    var newRow = document.createElement('tr'); // Create a new table row
    var newCell = document.createElement('td'); // Create a new table cell
    var newCell2 = document.createElement('td'); // Create a new table cell

    newCell.appendChild(fileName);
    newCell2.appendChild(progressBarContainer);
    newRow.appendChild(newCell);
    newRow.appendChild(newCell2);
    progressBarsContainer.appendChild(newRow);

    var xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', function (event) {
        if (event.lengthComputable) {
            var percent = Math.round((event.loaded / event.total) * 100);
            progressBar.style.width = percent + '%';
            progressBar.innerHTML = percent + '%';
        }
    });

    xhr.addEventListener('load', function (event) {
        var uploadStatus = document.getElementById('uploadStatus');
        uploadStatus.innerHTML = event.target.responseText;
        // Reset the input field of type "file"
        document.getElementById('fileUpload').value = '';

    });

    xhr.open('POST', mainPageHrefOrSrc + 'upload.php', true);
   

    xhr.send(formData);
    // we have to sent this variable path also




}


if (document.getElementsByClassName("ratingShow")[0]) {
    var reviewStars = document.getElementsByClassName("ratingShow")[0].innerHTML;
    var starAdding = document.getElementsByClassName("productshortdetail")[0].getElementsByTagName("h4")[0];
    starAdding.getElementsByTagName("button")[0].innerHTML = reviewStars;
    // alert(starAdding.firstChild);

    if (starAdding.getElementsByTagName("br")[0]) {
        var br = starAdding.getElementsByTagName("br")[0];
        starAdding.removeChild(br);
        if (document.getElementsByClassName("productshortdetail")[0].getElementsByTagName("br")[0]) {
            var br = document.getElementsByClassName("productshortdetail")[0].getElementsByTagName("br")[0];
            document.getElementsByClassName("productshortdetail")[0].removeChild(br);
        }

    }


}







function reviewSet() {

    // alert("reviewSet");
    var reviewLines;
    reviewLines = new XMLHttpRequest();

    var productCode = productIdOfThisPage;
    // alert(productCode);

    productCode = JSON.stringify(productCode);
  

    reviewLines.onload = function () {

        if (this.status == 200) {

            // alert(this.responseText); //if we will pass $review then it will also be received
            if (this.responseText.includes("]")) {  //works only if json_encode is passed
                var UpdateOutput = JSON.parse(this.responseText);


                if (UpdateOutput.totalNumberOfReview > 0) {

                    document.getElementsByClassName("ratingPointsOutOfFive")[0].innerHTML = (UpdateOutput.sumOfReview / (UpdateOutput.totalNumberOfReview * 5) * 5).toFixed(1);

                    // if output is NaN then set it 0
                    if (isNaN(document.getElementsByClassName("ratingPointsOutOfFive")[0].innerHTML)) {
                        document.getElementsByClassName("ratingPointsOutOfFive")[0].innerHTML = 0;
                    }


                    document.getElementsByClassName("totalNumberOfReview")[0].innerHTML = UpdateOutput.totalNumberOfReview;




                    var starcolor = document.getElementsByClassName("ratingPointsOutOfFive")[0].innerHTML;

                    //    starcolor=parseInt(starcolor);

                    for (var i = 1; i <= starcolor; i++) {
                        document.getElementsByClassName("fa-star")[i - 1].classList.add("checked");
                        document.getElementsByClassName("fa-star")[i + 5 - 1].classList.add("checked");
                    }



                    document.getElementsByClassName("ratingPointsOutOfFive")[0].style.color = "orange";
                    document.getElementsByClassName("ratingPointsOutOfFive")[0].style.fontSize = "30px";
                    document.getElementsByClassName("ratingPointsOutOfFive")[0].style.fontWeight = "bold";
                    document.getElementsByClassName("ratingPointsOutOfFive")[0].style.textAlign = "center";
                    document.getElementsByClassName("ratingPointsOutOfFive")[0].style.marginTop = "20px";
                    document.getElementsByClassName("ratingPointsOutOfFive")[0].style.marginBottom = "20px";



                    document.getElementsByClassName("totalNumberOfReview")[0].innerHTML = UpdateOutput.totalNumberOfReview;
                    document.getElementsByClassName("countOfFiveStar")[0].innerHTML = UpdateOutput.star5;
                    document.getElementsByClassName("countOfFourStar")[0].innerHTML = UpdateOutput.star4;
                    document.getElementsByClassName("countOfThreeStar")[0].innerHTML = UpdateOutput.star3;
                    document.getElementsByClassName("countOfTwoStar")[0].innerHTML = UpdateOutput.star2;
                    document.getElementsByClassName("countOfOneStar")[0].innerHTML = UpdateOutput.star1;

                    // document.getElementsByClassName("bar-5")[0].style.width=(UpdateOutput.totalNumberOfReview*5)/(UpdateOutput.totalNumberOfReview*5)*100+ '%';//just to test if we setted it right

                    document.getElementsByClassName("bar-5")[0].style.width = (UpdateOutput.star5 * 5) / (UpdateOutput.totalNumberOfReview * 5) * 100 + '%';

                    document.getElementsByClassName("bar-4")[0].style.width = (UpdateOutput.star4 * 4) / (UpdateOutput.totalNumberOfReview * 5) * 100 + '%';
                    document.getElementsByClassName("bar-3")[0].style.width = (UpdateOutput.star3 * 3) / (UpdateOutput.totalNumberOfReview * 5) * 100 + '%';
                    document.getElementsByClassName("bar-2")[0].style.width = (UpdateOutput.star2 * 2) / (UpdateOutput.totalNumberOfReview * 5) * 100 + '%';
                    document.getElementsByClassName("bar-1")[0].style.width = (UpdateOutput.star1 * 1) / (UpdateOutput.totalNumberOfReview * 5) * 100 + '%';

                }

                var reviews = UpdateOutput.reviews;

                // alert(reviews);//[object Object],[object Object],[object Object]

                var reviewImages = UpdateOutput.reviewImages;
                // alert(reviewImages);//[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]

                var clonebox = document.getElementsByClassName("reviewBoxes")[0];
                var clone = document.getElementsByClassName("review")[0].cloneNode(true);



                var numOfReviews = reviews.length;


                if (numOfReviews > 0) {
                    clonebox.innerHTML = "";
                    // alert(clonebox.innerHTML);
                }

                for (var i = 0; i < numOfReviews; i++) {
                    reviewfit(i);
                }


                var reviewImagesBoxOfReviewer;
                function reviewfit(i) {

                    clone.getElementsByClassName("profilePhoto")[0].getElementsByTagName("img")[0].src = mainPageHrefOrSrc + reviews[i].CustomersProfilePhoto;

                    clone.getElementsByClassName("customerName")[0].innerHTML = reviews[i].FirstName;

                    clone.getElementsByClassName("emailOfReviewer")[0].innerHTML = reviews[i].EmailAddress;

                    clone.getElementsByClassName("reviewDescription")[0].innerHTML = reviews[i].comments;

                    // clone.getElementsByClassName("ratingShow")[0].innerHTML = reviews[i].ratingOfStars;


                    for (var k = 1; k <= reviews[i].ratingOfStars; k++) {
                        clone.getElementsByClassName("fa-star")[k - 1].classList.add("checked");
                    }


                    reviewImagesBoxOfReviewer = clone.getElementsByClassName("absoluteAllReviewImage")[0];
                    var reviewBoxesClone = reviewImagesBoxOfReviewer.firstElementChild;


                    // if(reviewImages.EmailAddress== reviews[i].EmailAddress)



                    // for loop for images

                    if (reviewImages.length > 0) {
                        reviewImagesBoxOfReviewer.innerHTML = "";


                        for (var j = 0; j < reviewImages.length; j++) {
                            if (reviewImages[j].EmailAddress == reviews[i].EmailAddress) {
                                reviewBoxesClone.getElementsByTagName("img")[0].src = mainPageHrefOrSrc + reviewImages[j].img_url;

                                reviewImagesBoxOfReviewer.innerHTML += reviewBoxesClone.outerHTML;

                            }

                        }
                        if (reviewImagesBoxOfReviewer.firstElementChild) {
                            // alert(reviewImagesBoxOfReviewer.firstElementChild);
                        }
                        else {
                            reviewImagesBoxOfReviewer.remove();
                            // alert("no child");

                        }
                    }


                    clonebox.innerHTML += clone.outerHTML;



                }


                imgopener();

            }

        }
        else {
          
        }

    }

   


    reviewLines.open("GET", mainPageHrefOrSrc + "reviewOfProduct.php?productCode=" + productCode, true);
    reviewLines.send();

}


reviewSet();

