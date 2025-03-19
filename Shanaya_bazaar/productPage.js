// window.alert("productjs");
var EmailAddress;

EmailAddress = sessionStorage.getItem("EmailAddress");
// alert(EmailAddress);

if (EmailAddress == null || EmailAddress == undefined) {
    // we can also get it from local storage
    EmailAddress = localStorage.getItem("EmailAddress");
}

// window.sessionStorage.setItem("previousPage", window.location.href);

// var  previousPage = sessionStorage.getItem("previousPage");
//                   alert(previousPage);

var productIdOfThisPage = document.body.getAttribute("id");
productIdOfThisPage = productIdOfThisPage.trim();
// alert(productIdOfThisPage);

// mainPageHrefOrSrc
var mainPageHrefOrSrc = document.getElementById("mainPageHrefOrSrc").innerHTML;

mainPageHrefOrSrc = mainPageHrefOrSrc.trim();
// window.alert(mainPageHrefOrSrc);


var SearchProductInnerHTML = document.getElementsByClassName("similarproducts")[0].firstElementChild.getElementsByTagName("a")[0].innerHTML;



// document.addEventListener("load",headerFunction);
// document.body.addEventListener("load",headerFunction);//load with documents,body not work but click works only here.//load works only with elements

document.getElementById("mainHeader").addEventListener("load", headerFunction);//it totally works



// importing headerpart of main website
var headerOfProduct;



function headerFunction() {
    // alert("inside header");

    var mainHeader = document.getElementById("mainHeader").contentWindow.document.getElementsByTagName("header")[0];
    var mainWelcome = document.getElementById("mainHeader").contentWindow.document.getElementById("Welcome");

    // now we want to remove all href in anchor tag
    // var allAnchors = mainHeader.getElementsByTagName("a");
    // alert(allAnchors.length);//6

    // for (var i = 0; i < allAnchors.length; i++) {
    //     // alert(allAnchors[i].href);
    //     // allAnchors[i].href = "javascript:void(0)";
    //     // just remove href attribute
    //     // allAnchors[i].removeAttribute("href");
    //     // alert(allAnchors[i].href);
    //     allAnchors[i].addEventListener("click", function () {
    //         // alert(mainPageHrefOrSrc+this.getAttribute("href"));
    //         // alert(this.innerHTML);
    //         // convert to lowercase
    //         // var menuHref = mainPageHrefOrSrc + this.getAttribute("href");
    //         // substring only till ?
    //         // var menuHref = menuHref.substring(0, menuHref.indexOf("?"));
    //         // alert(menuHref);

    //         // allAnchors[i].removeAttribute("href");
    //         // allAnchors[i].href = "../../../../need.html";
    //         // allAnchors[i].href =menuHref;
    //     });
    // }




    var mainHeaderAdopted = document.adoptNode(mainHeader);
    var mainWelcomeAdopted = document.adoptNode(mainWelcome);

    // document.body.getElementById("mainHeader").innerHTML=mainHeaderAdopted;//not works

    headerOfProduct = document.getElementById("mainHeaderNode");

    headerOfProduct.appendChild(mainHeaderAdopted);//works
    headerOfProduct.appendChild(mainWelcomeAdopted);//works


    // document.body.insertBefore(mainHeaderAdopted,document.getElementById("mainHeaderNode"));//works


    //    var headerPageNavigationMenu= headerOfProduct.getElementsByClassName("menuitems")[0].getElementsByClassName("topmenu");

    //     for(var i=0;i<headerPageNavigationMenu.length;i++){

    var colorTheme = document.getElementById("colorTheme");
    colorTheme.innerHTML = "";

    // we need to remove colorTheme from headerOfProduct
    // headerOfProduct.removeChild(colorTheme);//not works

    // to remove it 







    var headerSearch = headerOfProduct.getElementsByClassName("headerinputs")[0];
    headerSearch.addEventListener("click", headerPage);
    // headerSearch.addEventListener("click",function(){

    //         // alert(this.getAttribute("href"));
    //         // alert(this.innerHTML);
    //         // convert to lowercase
    //         // var text = this.innerHTML.toLowerCase();

    //         // navigateProductClick(text);
    //     });//it works as this headerOfProduct appendchild in this function 
    // }

    // headerOfProduct.addEventListener("click", headerPage);//it works as this headerOfProduct appendchild in this function 

    function headerPage() {
        // window.location.href="shanaya_bazaar_main.php";//not works as it is in different loaction
        window.location.href = mainPageHrefOrSrc + "shanaya_bazaar_main.php";//we want that user can get the search from home with all ideas.

    }

}


// headerOfProduct.addEventListener("click",headerPage);//it not works as this headerOfProduct appendchile in anotherfunction , hence put this function inside the headerFunction

// function headerPage() {
//     alert("inside headerPage");
// }

















// function addUrlParameter(name, value) {
//     var searchParams = new URLSearchParams(window.location.search)
//     searchParams.set(name, value)
//     window.location.search = searchParams.toString()

// }


//this will call it repeadly
// var searchParams = new URLSearchParams(window.location.search)
// searchParams.set("productID","S11_2024")
// window.location.search = searchParams.toString()


// alert(window.location.href);//

// tried
// window.location.href="/Hair%20Spa%20Cap%20Steamer%20For%20Women%20Beauty%20Products.html?productCode=S11_2024";// href can't be updated this way

// alert(window.location.href); //http://127.0.0.1:5501/Hair%20Spa%20Cap%20Steamer%20For%20Women%20Beauty%20Products.html

// window.location.search="productID=S11_2024";

//     function addUrlParameter(name, value) {
//   var searchParams = new URLSearchParams(window.location.search)
//   searchParams.set(name, value)
//   window.location.search = searchParams.toString()
//     }



var productID = document.body.getAttribute("id");
// alert(productID);
var productName;
var priceOfThisProduct;
var mainImagOfThisProduct;
var sizeSelected;
var colorSelected;

// var thisProductName = document.getElementsByClassName("thisProductName")[0];//it not works in body. 
// var thisProductName = getElementsByClassName("thisProductName")[0];//not work inside body as we have change into var


// var bodyOfThisPage = document.getElementsByTagName("body");

var bodyOfThisPage = document.getElementsByClassName("productPage");

// alert(bodyOfThisPage.length);//1//alway one as no two pages are connected .Hence no need to check which class is clicked





// for (var i = 0; i < bodyOfThisPage.length; i++) {
//     bodyOfThisPage[i].addEventListener("load", function () {
//         // this way load not work , it only works with window.
//         //this click will also trace the buy or cart button.

//         productName = this.getElementsByClassName("thisProductName")[0].textContent;//works

//         // productName = this.thisProductName.textContent;//not works as thisProductName has document before it or changed to var

//         alert(productName);//Hair Spa Cap Steamer For Women Beauty Products


//         mainImagOfThisProduct = this.getElementsByClassName("bigproductimag")[0].src;
//         //http://localhost:3000/Hair%20cap%20steamer/HairCapSteamer.jpg
//         alert(mainImagOfThisProduct);

//     });

// }



window.onload = () => {

    console.log("page is fully loaded");
    // alert("page is fully loaded");

    EmailRelatedLogin(mainPageHrefOrSrc, EmailAddress);//function is connected

    productName = bodyOfThisPage[0].getElementsByClassName("thisProductName")[0].textContent;//works
    // productName = bodyOfThisPage[0].thisProductName.textContent;//not works as thisProductName has document before it or changed to var
    // alert(productName);//Hair Spa Cap Steamer For Women Beauty Products

    // productName = this.thisProductName.textContent;//not works as thisProductName has document before it or changed to var

    // alert(productName);//Hair Spa Cap Steamer For Women Beauty Products

    // productName = bodyOfThisPage[0].getElementsByClassName("thisProductName")[0].innerHTML;//works
    // // convert it into string
    // productName = productName.toString();
    // productName = productName.trim();


    // mainImagOfThisProduct = bodyOfThisPage[0].getElementsByClassName("bigproductimag")[0].src;
    mainImagOfThisProduct = bodyOfThisPage[0].getElementsByClassName("sidesmallproducts")[0].getElementsByTagName("img")[0].src;//it is in case we have selected not the main image in bigimag


    //http://localhost:3000/Hair%20cap%20steamer/HairCapSteamer.jpg

    // alert(mainImagOfThisProduct);

    // searchGivenProduct( productName ,"similarproductsoptions",mainPageHrefOrSrc,SearchProductInnerHTML);//capable of calling script function from another js //works but only in this selected

    // var pathsearch=mainPageHrefOrSrc ;
    //     // remove the last substring at end in pathsearch
    //     pathsearch = pathsearch.substring(0, pathsearch.lastIndexOf('/'));
    //     alert(pathsearch);



    //  searchGivenProduct( pathsearch ,"similarproductsoptions",mainPageHrefOrSrc,SearchProductInnerHTML);





    // instead of product name , pathname will give good result
    // searchGivenProduct( mainImagOfThisProduct ,"similarproductsoptions",mainPageHrefOrSrc,SearchProductInnerHTML);//capable of calling script function from another js //works

    // we can simply use href of this page as it contains the directory
    // alert(window.location.href);

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

    pathsearch1 = pathsearch.substring(pathsearch.lastIndexOf('/') + 1, pathsearch.length);//solid semi stitched lehenga choli

    // pathsearch2 = pathsearch.substring(pathsearch.indexOf("/"),pathsearch.lastIndexOf('/'));///Beautifull Embroidey Zari Work Lehenga For Women With Blouse Piece And Dupatta.html

    // we want substring from second index of / to last

    pathsearch4 = pathsearch.substring(pathsearch.indexOf("/") + 1);//ethnic wear/lahenga/solid semi stitched lehenga choli
    // alert()
    // alert("pathsearch4 : " + pathsearch4);//pathsearch4 : girl wear/stylish partywear multicolor cotton girls frocks  dresses

    pathsearch3 = pathsearch4.substring(pathsearch4.indexOf("/") + 1);

    pathsearch2 = pathsearch3.substring(pathsearch3.indexOf("/") + 1);//incase if not / is present then
    // alert(pathsearch2);//stylish partywear multicolor cotton girls frocks  dresses

    // alert(pathsearch1);
    // alert(pathsearch2);
    // alert(pathsearch3);
    // alert(pathsearch4);
    // // alert(pathsearch5);
    // alert(pathsearch);

    // alert(pathsearch1+" /"+pathsearch2+" /"+pathsearch3+" /"+pathsearch4+" /"+pathsearch);


    // alert(pathsearch1 + " /" + pathsearch2 + " /" + pathsearch3 + " /" + pathsearch4 + " /" + pathsearch + " trendy");

    searchGivenProduct(pathsearch1 + " /" + pathsearch2 + " /" + pathsearch3 + " /" + pathsearch4 + " /" + pathsearch + " trendy", "similarproductsoptions", mainPageHrefOrSrc, SearchProductInnerHTML);



};


setTimeout(function () {
    // alert(document.getElementById("similarproductsoptions").getElementsByTagName("div")[2]);

    if (document.getElementById("similarproductsoptions").getElementsByTagName("div")[2] == null) {
      
        document.getElementById("similarproductsoptions").innerHTML = "<h2>Sorry, no similar products</h2>";
    }

}, 3000);





// setTimeout(function () {



// var reviewboximg=document.getElementsByClassName("reviewbox").length;
// alert(reviewboximg);

// var reviewboximg = document.getElementsByClassName("reviewbox");


//after updating reviews

var clickedReviewImgOpener = document.getElementsByClassName("clickedReviewImg")[0];




function imgopener() {

    var reviewboximg = document.getElementsByClassName("reviewBoxes")[0].getElementsByTagName("img");


    for (var i = 0; i < reviewboximg.length; i++) {

        reviewboximg[i].addEventListener("click", function () {
            //we want to see the full size in window      


            // var clickedReviewImgOpener= this.parentElement.parentElement.firstElementChild.getElementsByClassName("imgOpener")[0];
            // var clickedReviewImgOpener = this.parentElement.parentElement.firstElementChild;
            // var clickedReviewImgOpener = this.parentElement.parentElement.parentElement.parentElement.firstElementChild;

            // alert(clickedReviewImgOpener.className);




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





var lowerpopedUpPage = document.getElementsByClassName("lowerpopedUpPage")[0];

var buyNowClicked = document.getElementsByClassName("buyNow");

// alert(buyNowClicked.length);//2

var parentHrefOfProductOfBuy = buyNowClicked[0].parentElement.href;//we want cart also //uncomment if stuck

// alert(parentHrefOfProduct);

// if(parentHrefOfProduct !== undefined){
//     buyNowClicked[0].parentElement.removeAttribute("href");
// }



for (var i = 0; i < buyNowClicked.length; i++) {


    // remove href from all
    // buyNowClicked[i].parentElement.removeAttribute("href");
    // buyNowClicked[i].parentElement.href = "#";


    buyNowClicked[i].addEventListener("click", function () {
        // alert("buy now clicked");

        // alert(document.getElementsByClassName("sizeSelectButton")[0]);



        if ((sizeSelected === undefined || sizeSelected === null) && document.getElementsByClassName("sizeSelectButton")[0] !== undefined) {

            //check document has sizeSelectButton classname
            // document.hasChild

            // buyNowClicked[i].parentElement.removeAttribute("href");

            // alert("Please select a size");
            document.getElementsByClassName("sizeSelectedOutput")[0].innerHTML = "Please select a size";

            setTimeout(function () {
                document.getElementsByClassName("sizeSelectedOutput")[0].innerHTML = "";
            }, 3000);

            this.parentElement.href = "#";

            // http://localhost:3000/product/women/ethnic%20wear/kurta%20sets/Pakistani%20Suit%20%20Women%20Kurta%20Pair/Embroidery%20Gaithering%20Anarkali%20kurtis.html#?EmailAddress=undefined
            // # will create problem hence we will remove href or store it in parentHrefOfProduct


            // alert(parentHrefOfProduct);


            lowerpopedUpPage.style.display = "flex";
            lowerpopedUpPage.innerHTML = "Please select a size";

            setTimeout(function () {
                lowerpopedUpPage.style.display = "none";
            }, 3000);



        }

        else {

            buyNowClicked[i].parentElement.removeAttribute("href");


            // alert("check email");

            if (EmailAddress === undefined || EmailAddress === null) {

                // alert("Please enter your email");
                // buyNowClicked[i].parentElement.removeAttribute("href");

                // document.getElementsByClassName("sizeSelectedOutput")[0].innerHTML = "Please login to buy";


                // document.getElementsByClassName("lowerpopedUpPage")[0].style.display = "flex";
                // document.getElementsByClassName("lowerpopedUpPage")[0].innerHTML = "Please login to buy";


                document.getElementsByClassName("sizeSelectedOutput")[0].innerHTML = "Please login to buy";

                lowerpopedUpPage.style.display = "flex";
                lowerpopedUpPage.innerHTML = "Please login to buy";

                setTimeout(function () {
                    lowerpopedUpPage.style.display = "none";
                }, 3000);

                this.parentElement.href = "#";

                // add attribute href which was removed earlier



                // buyNowClicked[i].parentElement.


            }
            else {
                // alert(sizeSelected);//undefined
                // if(sizeSelected !== undefined || sizeSelected !== null){ //keeping null will take here.

                if (sizeSelected !== undefined) {


                    // alert("buy now");
                    this.parentElement.href = parentHrefOfProductOfBuy + "?" + "productID=" + productID + "&productName=" + productName + "&priceOfThisProduct=" + priceOfThisProduct + "&mainImagOfThisProduct=" + mainImagOfThisProduct + "&sizeSelected=" + sizeSelected;//
                    // alert(this.parentElement.href);


                }
                else {
                    this.parentElement.href = parentHrefOfProductOfBuy + "?" + "productID=" + productID + "&productName=" + productName + "&priceOfThisProduct=" + priceOfThisProduct + "&mainImagOfThisProduct=" + mainImagOfThisProduct;
                }
            }

        }

        // http://localhost:3000/buymethods.html?productID=WWWM1&productName=Women%27s%20Floral%20V-neck%20Green%20Dresses&priceOfThisProduct=490&mainImagOfThisProduct=http://localhost:3000/product/women/western%20wear/Women%27s%20Floral%20V-neck%20Multicolor%20Dresses/colors%20option/black/nm3lu_512.png&sizeSelected=M

        // alert(buyNowSearch);

        // const param = new URLSearchParams(window.location.search);
        // param.set("productID", productID);


        //http://localhost:3000/buymethods.html?productID=WWWM1&productName=Women%27s%20Floral%20V-neck%20Green%20Dresses&priceOfThisProduct=490&mainImagOfThisProduct=http://localhost:3000/product/women/western%20wear/Women%27s%20Floral%20V-neck%20Multicolor%20Dresses/colors%20option/black/nm3lu_512.png&sizeSelected=undefined

    });
}

// }, 3000);



var AddToCartClicked = document.getElementsByClassName("addToCart");

var parentHrefOfProductOfCart = AddToCartClicked[0].parentElement.href;

for (var i = 0; i < AddToCartClicked.length; i++) {
    AddToCartClicked[i].addEventListener("click", function () {

        if ((sizeSelected === undefined || sizeSelected === null) && document.getElementsByClassName("sizeSelectButton")[0] !== undefined) {

            // alert("Please select a size");
            document.getElementsByClassName("sizeSelectedOutput")[0].innerHTML = "Please select a size";

            // document.getElementsByClassName("lowerpopedUpPage")[0].style.display = "flex";
            // document.getElementsByClassName("lowerpopedUpPage")[0].innerHTML = "Please select a size";

            this.parentElement.href = "#";

            lowerpopedUpPage.style.display = "flex";
            lowerpopedUpPage.innerHTML = "Please select a size";

            setTimeout(function () {
                lowerpopedUpPage.style.display = "none";
                document.getElementsByClassName("sizeSelectedOutput")[0].innerHTML = "";
            }, 3000);



        }


        else {

            AddToCartClicked[i].parentElement.removeAttribute("href");

            if (EmailAddress === undefined || EmailAddress === null) {
                // alert("Please enter your email");
                document.getElementsByClassName("sizeSelectedOutput")[0].innerHTML = "Please login to buy";

                // document.getElementsByClassName("lowerpopedUpPage")[0].style.display = "flex";
                // document.getElementsByClassName("lowerpopedUpPage")[0].innerHTML = "Please login to buy";

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

                    this.parentElement.href = parentHrefOfProductOfCart + "?" + "productID=" + productID + "&productName=" + productName + "&priceOfThisProduct=" + priceOfThisProduct + "&mainImagOfThisProduct=" + mainImagOfThisProduct + "&sizeSelected=" + sizeSelected;//http://localhost:3000/buymethods.html?productID=WBW1&productName=Anara%20Fashion%20Women%27s%20Solid%20Bell%20Bottoms%20Black%20Trousers%20&%20Pants&priceOfThisProduct=180&mainImagOfThisProduct=http://localhost:3000/product/women/bottom%20wear/Anara%20Fashion%20Women%20Solid%20Bell%20Bottoms%20Black%20Trousers%20&%20Pants/colors%20option/black/rj4nc_512.png&sizeSelected=30?EmailAddress=undefined
                }
                else {
                    this.parentElement.href = parentHrefOfProductOfCart + "?" + "productID=" + productID + "&productName=" + productName + "&priceOfThisProduct=" + priceOfThisProduct + "&mainImagOfThisProduct=" + mainImagOfThisProduct;
                }
            }
        }
    });
}





//showing sidesmallproducts in mainproductimg
//we will just update the src


var smallimg = document.getElementsByClassName("productcolumn");



// var smallimg = document.getElementsByClassName("productcolumn").length; //7

// alert(smallimg);

// var mainimg;//undefined
// var mainimg="";//empty
// alert(mainimg);

imgChange();

function imgChange() {
    for (var i = 0; i < smallimg.length; i++) {

        // alert(smallimg[i].src);//http://127.0.0.1:5500/Hair%20cap%20steamer/Hair-Care-Thermal-Head-Spa-Cap4-1653281008.jpg //for the first i=0 then it will show for i=2 etc..


        smallimg[i].addEventListener("click", function () {


            var srcsmallimg = this.src;

            // alert(typeof(srcsmallimg));//string

            // alert(srcsmallimg);

            // var mainimg=document.getElementById("mainproductimg");
            // var mainimg=document.getElementsByClassName("bigproductimag");
            // var mainimg = this.parentElement.class;//undefined

            // var mainimg = this.parentElement.tagName;//DIV
            // var mainimg = this.parentElement.className;//sidesmallproducts
            // var mainimg = this.parentElement.parentElement.className;//container

            // var mainimg = this.parentElement.parentElement.className;//container
            // var mainimg = this.parentElement.parentElement.lastChild;//[object Text]
            // var mainimg = this.parentElement.parentElement.lastChild.className;//undefined
            // var mainimg = this.parentElement.parentElement.lastElementChild;//[object HTMLDivElement]
            // var mainimg = this.parentElement.parentElement.lastElementChild.className;//mainproductimg
            // var mainimg = this.parentElement.parentElement.lastElementChild.firstElementChild;//[object HTMLImageElement]
            // var mainimg = this.parentElement.parentElement.lastElementChild.firstElementChild.className;//mainproductimg ;bigproductimag


            // var mainimg = this.parentElement.parentElement.lastElementChild.firstElementChild;//mainproductimg ;
            // bigproductimag




            var mainimg = this.parentElement.parentElement.getElementsByClassName("mainproductimg")[0].firstElementChild;//mainproductimg ;bigproductimag





            //   mainimg = this.parentElement.parentElement.lastElementChild.firstElementChild.src;//mainproductimg ;bigproductimag //not good as it converts the  mainimg  into string hence it's value will not be update as it is no more object with src attribute


            // var mainimg = this.parentNode.class;//undefined

            // alert(mainimg);

            // mainimg="";    //it empties whatever you have selected    

            // mainimg= srcsmallimg; //not works as 
            mainimg.src = srcsmallimg; //this works

            for (var i = 0; i < smallimg.length; i++) {

                smallimg[i].style.backgroundColor = "white";
                smallimg[i].style.border = "none";

            }

            // this.style.backgroundColor="#dcdcdc";
            // alert(mainimg);
            this.style.border = "solid black 4px";

        });
    }
}












for (var i = 0; i < document.getElementsByClassName("row").length; i++) {
    // document.getElementsByClassName("row")[i].style.display="block";
}


var colorsGivenOptions = document.getElementsByClassName("colorsGiven");

for (var i = 0; i < colorsGivenOptions.length; i++) {

    colorsGivenOptions[i].addEventListener("click", function () {
        var srccolorsGivenOptions = this.src;
        var mainimg = this.parentElement.parentElement.getElementsByClassName("mainproductimg")[0].firstElementChild;
        mainimg.src = srccolorsGivenOptions;
        mainImagOfThisProduct = mainimg.src


        // we also need to change the sidesmallproducts 


        var fileSrc = this.getAttribute("src");
        fileSrc = fileSrc.trim();
        fileSrc = JSON.stringify(fileSrc);

        // productIdOfThisPage needs to be encoded
        var productIdOfThisPagePassed = JSON.stringify(productIdOfThisPage);


        // alert(fileSrc);//"colors option/violet/ynhi3_512.png"

        var getProductCodeWithColor = new XMLHttpRequest();

        getProductCodeWithColor.onload = function () {


            // alert(this.responseText);

            //[{"product_Code":"WEWL1"},[{"file_Id":214,"product_Code":"WEWL1","color":"blue pink","file_src":"product\/women\/ethnic wear\/lahenga\/Solid Semi Stitched Lehenga Choli\/colors option\/blue\/Screenshot 2025-02-10 214459.png"},{"file_Id":215,"product_Code":"WEWL1","color":"blue pink","file_src":"p



            if (getProductCodeWithColor.status >= 200 && getProductCodeWithColor.status < 300) {

                var colorProduct = JSON.parse(this.responseText);


                colorProduct = colorProduct[1];//

                // alert(colorProduct);
                // alert(JSON.stringify(colorProduct));

                //[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]

                // if (colorProduct !== "") {

                // if (colorProduct !== null) {//when we not used IFNULL

                var sidesmallproductsContainer = document.getElementsByClassName("sidesmallproducts")[0];
                var sidesmallproductsClone = document.getElementsByClassName("sidesmallproducts")[0].getElementsByTagName("img")[0];
                // making clone of sidesmallproductsClone
                sidesmallproductsClone = sidesmallproductsClone.cloneNode(true);




                // if (colorProduct !== undefined) {
                // if (colorProduct !== null) {//this null will create error in main php hence , we changed it to 'null' in php

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

                }
                else {

                    // alert("Product not found");

                    // sidesmallproductsClone.src = fileSrc;

                    // sidesmallproductsClone.src = this.getAttribute("src");



                    sidesmallproductsClone.src = colorsGivenOptions[i].getAttribute("src");

                    sidesmallproductsContainer.innerHTML += sidesmallproductsClone.outerHTML;

                }

            }
            else {
                alert("Error");
            }

            imgChange();


        }



        // getProductCode.open("POST", "getThisFileDetail.php?fileSrc=" + fileSrc, true);

        // getProductCode.send();

        getProductCodeWithColor.open("POST", mainPageHrefOrSrc + "getThisFileDetail.php");
        getProductCodeWithColor.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // getProductCodeWithColor.send("fileSrc=" + fileSrc);
        // getProductCodeWithColor.send("productCode=" + productIdOfThisPage);
        //we have to send them combined
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
    // alert(price);
    // price=document.getElementsByClassName("discountcut");



    var currentprice = discountselect.parentElement.previousElementSibling;
    var price = (100 - discountselectedval) * price / 100;
    // alert(price);//OK
    // currentprice.innerText = "₹" + price.toFixed(2);

    priceOfThisProduct = price.toFixed(0);//to store this value globally


    currentprice.innerHTML = `<span class="pricesystem">&#8377;</span>` + price.toFixed(0);
    // alert(currentprice);

    // currentprice=currentprice.replace("₹", "");
    // currentprice=Number(currentprice.replace("₹", ""));
    // currentprice=Number(currentprice.replace("₹", ""));
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

            CustomerimagesUploaded = JSON.parse(this.responseText);

            // {"images":["product\/women\/ethnic wear\/kurta sets\/Pakistani Suit  Women Kurta Pair\/review\/67c1ae3451c2e_4starfinal.png","product\/women\/ethnic wear\/kurta sets\/Pakistani Suit  Women Kurta Pair\/review\/67c1ae3456046_5star.png.gif","product\/women\/ethnic wear\/kurta sets\/Pakistani Suit  Women Kurta Pair\/review\/67c1aec49e34e_4starfinal.png","product\/women\/ethnic wear\/kurta sets\/Pakistani Suit  Women Kurta Pair\/review\/67c1aec4a91d7_5star.png.gif"]}

            // we need to replace all \ to nothing in url

            // CustomerimagesUploaded.images.forEach(function (image) {
            //     image = image.replace("\\", "");
            //     // we also want to select path from review/ onwards in each from the last second / in the string
            //     // last second index
            //     // image = image.substring(image.lastIndexOf('/').lastIndexOf('/') + 1);//not works
            //     //we want last to last or secondlast / in substrings


            // });

            // alert(CustomerimagesUploaded.images);//perfect

            // product/women/ethnic wear/kurta sets/Pakistani Suit  Women Kurta Pair/review/67c1ae3451c2e_4starfinal.png,product/women/ethnic wear/kurta sets/Pakistani Suit  Women Kurta Pair/review/67c1ae3456046_5star.png.gif,product/women/ethnic wear/kurta sets/Pakistani Suit  Women Kurta Pair/review/67c1aec49e34e_4starfinal.png,product/women/ethnic wear/kurta sets/Pakistani Suit  Women Kurta Pair/review/67c1aec4a91d7_5star.png.gif


            // document.getElementById("resultOutput").style.display = "flex";
            // document.getElementById("resultOutput").innerHTML = this.responseText;





            //we need to append all images src one by one in it <img src="review/1.png" alt="reviewbox" class="reviewbox" width="150" height="150" />






            reviewImagesBoxOfReviewer.innerHTML = "";

            reviewImagesBoxOfReviewer.style.display = "flex"

            for (var i = 0; i < CustomerimagesUploaded.images.length; i++) {

                // alert(CustomerimagesUploaded.images[i]);//perfect

                // CustomerimagesUploaded.images[i].indexOf("review");//2

                // var img = document.createElement("img");//not good looking

                // img.src = CustomerimagesUploaded.images[i].substring(CustomerimagesUploaded.images[i].lastIndexOf('/').lastIndexOf('/') + 1);//product/women/ethnic wear/kurta sets/Pakistani Suit  Women Kurta Pair/review/67c1aec4a91d7_5star.png.gif

                // we want image src from /review/67c1aec4a91d7_5star.png.gif that is to fing second last index of / 

                customerreviewfiles = document.getElementsByClassName("customerReviewImage")[0];

                var image = CustomerimagesUploaded.images[i].substring(CustomerimagesUploaded.images[i].indexOf("review"));


                // alert(image);//review/67c1ae3451c2e_4starfinal.png

                // img.src = image;

                // this src is for inserting not to get files.
                // we just need all the files from review directory or we can use from direct database





                // img.src ='review/1.png';
                // img.alt = "reviewbox";
                // img.width = "150";
                // img.height = "150";
                // img.classList.add("reviewbox");


                // customerreviewfiles.appendChild(img);





                // customerreviewfiles.innerHTML += `<img src="review/1.png" alt="reviewbox" class="reviewbox" width="150" height="150" />`;

                // alert(customerreviewfiles.innerHTML);







                reviewBoxesClone.getElementsByTagName("img")[0].src = image;


                reviewImagesBoxOfReviewer.innerHTML += reviewBoxesClone.outerHTML;



                // var img=reviewBoxesClone.getElementsByTagName("img");



            }

            allReviewFilesImageOpener();


        }

    }



    UploadCustomersImages.open("POST", mainPageHrefOrSrc + "getReviewFiles.php");

    UploadCustomersImages.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    UploadCustomersImages.send("productCode=" + productCode);



}




function allReviewFilesImageOpener() {


    var reviewboximg = document.getElementsByClassName("reviewImages")[0].getElementsByTagName("img");

    for (var i = 0; i < reviewboximg.length; i++) {

        reviewboximg[i].addEventListener("click", function () {
            //we want to see the full size in window      


            // var clickedReviewImgOpener= this.parentElement.parentElement.firstElementChild.getElementsByClassName("imgOpener")[0];
            // var clickedReviewImgOpener = this.parentElement.parentElement.firstElementChild;
            // var clickedReviewImgOpener = this.parentElement.parentElement.parentElement.parentElement.firstElementChild;

            // alert(clickedReviewImgOpener.className);

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

    if (link.indexOf("#") != -1) {
        var id = link.substring(1);
        var element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
            //smooth scroll to id
        }
    }

    // alert(location.hash);
    /*
        var data = `<div style="text-align:start;"><div class="rateExperience">
                <h2>Rate this Product</h2>
    
                <div class="rate">
                    <!-- <h2 class="star1"> we have used it js but we made plan to change it-->
    
                    <div class="reviewOut">
                        <img src="/Animation - 1737808526862.gif" alt="Waiting for review">
    
    
                    </div>
    
                    <h2 class="stars">
    
                        <p class="star1">
                            <input type="radio" name="rate" value="1" ondblclick="star1()" onclick="displayReview()">
                            <label for="star1">1
                                <span id="star1"> &bigstar;</span> <br>
                            </label>
                        </p>
                        <p class="star2">
                            <input type="radio" id="star2" name="rate" value="2" onclick="displayReview()">
                            <label for="star2">2 &bigstar; &bigstar;<br></label>
                        </p>
    
                        <p class="star3">
                            <input type="radio" id="star3" name="rate" value="3" onclick="displayReview()">
                            <label for="star3">3 &bigstar; &bigstar; &bigstar;<br></label>
                        </p>
    
                        <p class="star4">
                            <input type="radio" id="star4" name="rate" value="4" onclick="displayReview()">
                            <label for="star4">4 &bigstar; &bigstar; &bigstar; &bigstar;<br></label>
                        </p>
    
                        <p class="star5">
                            <input type="radio" id="star5" name="rate" value="5" onclick="displayReview()" checked>
                            <label for="star5">5 &bigstar; &bigstar; &bigstar; &bigstar; &bigstar;</label>
                        </p>
                    </h2>
                </div>
                
    
    
    
            </div></div><div style="text-align:start;">Name:<input type='text' name='name'><br>Review:<div style="text-align:center;"><br><div><textarea rows='5' cols=''
                style="padding: 2%;font-size: medium;"></textarea><br><p style="color: rgb(243, 12, 47);font-size: larger;font-weight: bolder;">Upload video or photos <span style="font-style:bold;color: darkblue;">(select all files together to upload all) </span></p><input
                type="file" multiple accept="image/*, .jpeg, .pdf, video/*, .jpg,.png" class="choosefile"><br><br><input type='submit' value='Post your review' name='submit' class="btn btn-success" style="margin-bottom: 8vh;position: relative;left: 1vw;" onclick="addpost()"></div>`; //html is defined inside hence it can be called using .innerHTML only  
    
    
                // using all this in innerHTML will not add script, hence better to use with display none then block.
    
        // type='submit' is helpful to get the page to be reload
    
        document.getElementById('addYourReview').innerHTML = data;
    
    
        */


}




// module.exports={
//     ProductId: productID,
//     ProductName:productName,
//     PriceOfThisProduct:priceOfThisProduct,
//     MainImagOfThisProduct:mainImagOfThisProduct
// }

// export {productID,productName,priceOfThisProduct,mainImagOfThisProduct};







// we don't need to write this again as we have used it in script.js and we have also linked this here in product page
// // Rate your experience


// var rateCount = document.getElementsByName("rate").length;
// // alert(rateCount);

// var checkedValueOfReviewOfProdct;

// function displayReview() {

//     for (var i = 0; i < rateCount; i++) {


//         //this will work for default checked applied only not after click

//         var ival = i;
//         // alert(typeof(ival)) //number

//         if (document.getElementsByName("rate")[i].checked) {

//             checkedValueOfReviewOfProdct = document.getElementsByName("rate")[i].value;



//             var ratetoout = document.getElementsByName("rate")[i].parentElement.parentElement.previousElementSibling;
//             // alert(ratetoout.className);

//             ratetoout.innerHTML = "You rated this product " + document.getElementsByName("rate")[
//                 i].value + " out of 5";

//             // ratetoout.innerHTML+= document.getElementsByName("rate")[i].value;


//             document.getElementsByName("rate")[i].parentElement.style.fontWeight = "bold";

//             /*works here

//             if (checkedValueOfReviewOfProdct == 1) {
//                 ratetoout.innerHTML += "<br>Poor";
//             }
//             else if (checkedValueOfReviewOfProdct == 2) {
//                 ratetoout.innerHTML += "Fair";
//             }
//             else if (checkedValueOfReviewOfProdct == 3) {
//                 ratetoout.innerHTML += "Average";
//             }
//             else if (checkedValueOfReviewOfProdct == 4) {
//                 ratetoout.innerHTML += "Good";
//             }
//             else if(checkedValueOfReviewOfProdct == 5) {
//                 ratetoout.innerHTML += "Excellent";
//             }

// */



//             for (var i = 0; i < rateCount; i++) {
//                 if (i == ival) {
//                     document.getElementsByName("rate")[i].parentElement.style.color = "#ffdb0c";
//                 }
//                 else {
//                     document.getElementsByName("rate")[i].parentElement.style.color = "#000";
//                 }

//             }; //if we don't use ; after this for loop the lower will not execute as it consider it the last one



//             if (checkedValueOfReviewOfProdct == 1) {
//                 ratetoout.innerHTML += `<div style="color:rgb(255, 0, 0)" class="reviewText"><br>Poor</div><br><img src="/—Pngtree—customer bad review_8774998.png" alt="poor" class="settedImage">`;
//             }
//             else if (checkedValueOfReviewOfProdct == 2) {
//                 ratetoout.innerHTML += `<div style="color:rgb(239, 123, 8)" class="reviewText"><br>Fair</div><br><img src="/2star.png" alt="fair" class="settedImage">`;
//             }
//             else if (checkedValueOfReviewOfProdct == 3) {
//                 ratetoout.innerHTML += `<div style="color:rgb(251, 255, 0)" class="reviewText"><br>Average</div><br><img src="/3star.png" alt="Average" class="settedImage">`;
//             }
//             else if (checkedValueOfReviewOfProdct == 4) {
//                 ratetoout.innerHTML += `<div style="color:rgb(88, 255, 88)" class="reviewText"><br>Good</div><br><img src="/4starfinal.png" alt="Good" class="settedImage">`;
//             }
//             else if (checkedValueOfReviewOfProdct == 5) {
//                 ratetoout.innerHTML += `<div style="color:rgb(18, 203, 70)" class="reviewText"><br>Excellent</div><br><img src="/5star.png.gif" alt="Excellent" class="settedImage">`;
//             }

//         }


//     }

// }


// // document.getElementById("star1").onhover.classList.add("reviewstar");
// // document.getElementsByClassName("star1")[i].onfocus = function () {
// //     // alert("being focused");
// //     document.getElementById("star1").classList.add("reviewstar");

// // }




http://localhost:3000/product/women/ethnic%20wear/kurta%20sets/Pakistani%20Suit%20%20Women%20Kurta%20Pair/Embroidery%20Gaithering%20Anarkali%20kurtis.html#AddYourReviewSelected

// var customerEmail = new URLSearchParams(window.location.search);
// var EmailAddress = loginInformation.get('EmailAddress');
// we can have used this but what if customer is not login , hene use manual email login



var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); //we used this to prevent reload of page after XMLHttpRequest
    // Your form submission logic here 
});


var productCode;
var reviewEmail = document.getElementsByName("email")[0].value;
var checkedValueOfReviewOfProdct;

function submitReview() {


    for (var i = 0; i < document.getElementsByName("rate").length; i++) {

        if (document.getElementsByName("rate")[i].checked) {

            // this method which we tried using post directly not works, now let's try to use ajax
            // productCode = document.getElementsByName("productCode")[0];
            // productCode.value = productIdOfThisPage;

            checkedValueOfReviewOfProdct = document.getElementsByName("rate")[i].value;

            // alert(checkedValueOfReviewOfProdct);//it works here

        }
    }


    // productIdOfThisPage;
    // checkedValueOfReviewOfProdct

    // alert(document.getElementsByName("productCode")[0].value);



    productCode = productIdOfThisPage;

    var reviewName = document.getElementsByName("name")[0].value;

    // document.getElementsByName("name")[0].value=EmailAddress;

    reviewEmail = document.getElementsByName("email")[0].value;

    var reviewText = document.getElementsByName("comment")[0].value;

    //  to get the uploaded files in the input type file 
    // <input type="file" name="files[]" accept="image/*, .jpeg, .pdf, video/*, .jpg,.png" multiple>
    //   to get all the uploaded files in ajax javascript we will use 




    // alert(productCode);
    // alert(reviewName);
    // alert(reviewEmail);
    // alert(reviewText);




    // var files = document.getElementsByName("files")[0].files;//error

    // var files = document.getElementsByName("files")[0].files[0];
    // var reviewFile = document.getElementsByName("file")[0].files[0];
    // var files = document.getElementsByName("files")[0];//undefined
    // var files = document.getElementsByName("files[]")[0];//[object HTMLInputElement]

    // var files = document.getElementsByName("files[]")[0].files;//objectfilelist//it is an object form,{"0":{},"1":{},"2":{}}
    // // we need to use for loop now to store each

    // var formData = new FormData();

    // formData.append('file', files);

    // it will take file as name and files[i] is the value passed
    // formData.append('file', files[i]);//this is also correct but not used here

    // formData.append('path', path);//path of the page from where this function is called

    // alert(files);
    // alert(files.length);//2
    // alert(files[0].name);//work//let’s work together.png//it works this way
    // alert(files[1].name);//profile photo - Copy.jpg
    // alert(files[0].size);//it works this way

    // var files = document.getElementsByName("files")[0].files[0];//returns nothing means error


    // var reviewText = document.getElementById("reviewText").value;

    // var reviewImage = document.getElementById("reviewImage").value;
    // var reviewTitle = document.getElementById("reviewTitle").value;

    // var reviewEmail = document.getElementById("reviewEmail").value;
    // var reviewPhone = document.getElementById("reviewPhone").value;



    if (checkedValueOfReviewOfProdct) {
        // alert(checkedValueOfReviewOfProdct);//4

        if (reviewEmail) {

            // var email = JSON.stringify(EmailAddress);

            // var checkedValueOfReviewOfProdctP = JSON.stringify(checkedValueOfReviewOfProdct);

            // var dbparam = {productCode:productCode, EmailAddress: reviewEmail, reviewName: reviewName, reviewText: reviewText, checkedValueOfReviewOfProdct: checkedValueOfReviewOfProdct,files:files };

            var dbparam = { productCode: productCode, EmailAddress: reviewEmail, reviewName: reviewName, reviewText: reviewText, checkedValueOfReviewOfProdct: checkedValueOfReviewOfProdct };
            // alert(dbparam);//[object object]

            dbparam = JSON.stringify(dbparam);

            // alert(dbparam);//{"EmailAddress":"sudhakumarichauhan24@gmail.com","reviewName":"Sudha Kumari","reviewText":"ho","checkedValueOfReviewOfProdct":"2"}



            var UploadCustomersReview = new XMLHttpRequest();

            UploadCustomersReview.onload = function () {
                if (this.status == 200) {

                    // alert(this.responseText);


                    // {"status":"false","message":"No products ordered\r\n    "}
                    // {"success" => true, "message" => "Review inserted successfully"}
                    // we need to check the status

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




                    // var UpdateOutput = JSON.parse(this.responseText);
                    // document.getElementById("resultOutput").style.display = "flex";
                    // document.getElementById("resultOutput").innerHTML = this.responseText;
                    // // return;

                    // setTimeout(function () {
                    //     document.getElementById("resultOutput").style.display = "none";
                    // }, 4000);

                }

            }



            UploadCustomersReview.open("POST", mainPageHrefOrSrc + "uploadCustomersReview.php");

            UploadCustomersReview.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            UploadCustomersReview.send("dbparam=" + dbparam);
            // UploadCustomersReview.send(formData);
            // we need to send dbparam and formData together.
            // UploadCustomersReview.send("dbparam=" + dbparam + "&formData=" + formData);




            setTimeout(function () {
                document.getElementById("resultOutput").style.display = "none";
            }, 10000);

            // document.getElementById("resultOutput").innerHTML = checkedValueOfReviewOfProdct;
        }

        else {
            document.getElementById("resultOutput").style.display = "flex";
            document.getElementById("resultOutput").innerHTML = "Please fill all the data carefully";
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


// https://bootstrapfriendly.com/blog/uploading-multiple-files-with-progress-bar-via-ajax-and-php

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

    // path = window.location.href;//it contains %20 at place of whitespace which we don't want hence we have to remove  // http://localhost:3000/product/women/ethnic wear/kurta sets/Pakistani Suit  Women Kurta Pair/Embroidery Gaithering Anarkali kurtis.php

    path = path.replace(/%20/g, " ");
    // we want to remove the vert last /
    path = path.substring(0, path.lastIndexOf('/'));//           /product/women/ethnic wear/kurta sets/Pakistani Suit  Women Kurta Pair
    // we want to remove the very first /
    path = path.substring(1);//product/women/ethnic wear/kurta sets/Pakistani Suit  Women Kurta Pair

    // alert( path);
    //relative path : // product\women\ethnic wear\kurta sets\Pakistani Suit  Women Kurta Pair\review
    // we want to store this relative path in path 
    // var path = window.location.pathname.split('/').slice(1).join('/');
    // absolute path : // http://localhost:8080/product/women/ethnic%20wear/kurta%20sets/Pakistani%20Suit%20Women%20Kurtura%20Pair/review
    // path C:\Sudhadocuments\Shanaya_bazaar\product\women\ethnic wear\kurta sets\Pakistani Suit  Women Kurta Pair\review

    // product\women\ethnic wear\kurta sets\Pakistani Suit  Women Kurta Pair\review\profile_photo-removebg-preview.png

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
    // it will take file as name and files[i] is the value passed
    // formData.append('file', files[i]);//this is also correct but not used here

    formData.append('path', path);//path of the page from where this function is called

    // formData.append('path', window.location.pathname);//this is also correct but not used here

    // we also need to send emailaddress
    // formData.append('EmailAddress', reviewEmail);
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
    //we also want to send the href of mainpage from where file is being uploaded and asked the onclick method

    // xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    // xhr.setRequestHeader('X-File-Name', file.name);

    // // we want to send path also to the upload.php 
    // xhr.setRequestHeader('X-File-Path', file.path);

    xhr.send(formData);
    // we have to sent this variable path also




}


function reviewSet() {

    // alert("reviewSet");
    var reviewLines;
    reviewLines = new XMLHttpRequest();

    var productCode = productIdOfThisPage;
    // alert(productCode);

    productCode = JSON.stringify(productCode);

    //  reviewLines.addEventListener('progress', function (event) {
    //   reviewLines.addEventListener('load', function (event) {

    reviewLines.onload = function () {

        if (this.status == 200) {

            // alert(this.responseText); //if we will pass $review then it will also be received

            var UpdateOutput = JSON.parse(this.responseText);

            // alert(UpdateOutput); 
            // document.getElementById("resultOutput").style.display = "flex";
            // document.getElementById("resultOutput").innerHTML = this.responseText;

            // {"totalNumberOfReview":5,"star1":0,"star2":1,"star3":2,"star4":2,"star5":0,"sumOfReview":"16"}

            //round off upto 2 digit
            // document.getElementsByClassName("ratingPointsOutOfFive")[0].innerHTML=(UpdateOutput.sumOfReview/(UpdateOutput.totalNumberOfReview*5)*5).toFixed(2);


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


            function reviewfit(i) {




                clone.getElementsByClassName("profilePhoto")[0].getElementsByTagName("img")[0].src = mainPageHrefOrSrc + reviews[i].CustomersProfilePhoto;

                clone.getElementsByClassName("customerName")[0].innerHTML = reviews[i].FirstName;

                clone.getElementsByClassName("emailOfReviewer")[0].innerHTML = reviews[i].EmailAddress;

                clone.getElementsByClassName("reviewDescription")[0].innerHTML = reviews[i].comments;

                // clone.getElementsByClassName("ratingShow")[0].innerHTML = reviews[i].ratingOfStars;


                for (var k = 1; k <= reviews[i].ratingOfStars; k++) {
                    clone.getElementsByClassName("fa-star")[k - 1].classList.add("checked");
                }


                var reviewImagesBoxOfReviewer = clone.getElementsByClassName("absoluteAllReviewImage")[0];
                var reviewBoxesClone = reviewImagesBoxOfReviewer.firstElementChild;


                // if(reviewImages.EmailAddress== reviews[i].EmailAddress)



                // for loop for images

                if (reviewImages.length > 0) {
                    reviewImagesBoxOfReviewer.innerHTML = "";
                }

                for (var j = 0; j < reviewImages.length; j++) {
                    if (reviewImages[j].EmailAddress == reviews[i].EmailAddress) {
                        reviewBoxesClone.getElementsByTagName("img")[0].src = mainPageHrefOrSrc + reviewImages[j].img_url;

                        reviewImagesBoxOfReviewer.innerHTML += reviewBoxesClone.outerHTML;

                    }
                }


                clonebox.innerHTML += clone.outerHTML;














            }

            imgopener();



        };


        // reviewLines.open("POST", "../../../../../reviewOfProduct.php?productCode=" + productCode);
        // reviewLines.send();

    }

    // reviewLines.open("POST", mainPageHrefOrSrc+reviewOfProduct.php');//works
    reviewLines.open("POST", mainPageHrefOrSrc + 'reviewOfProduct.php');

    reviewLines.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//neccessary to send some value to php file otherwise it will not take that anything is being send

    reviewLines.send("productCode=" + productCode);




}

// setTimeout(reviewSet,1000);
reviewSet();



// document.getElementsByClassName("customersReviewSticky")[0].style.top="0%";
