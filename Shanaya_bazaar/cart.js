// alert("cart");


// i want this page to sroll upto last when opens on onready state using javascript

// window.addEventListener(
//     "load",
//     function () {
//         window.scrollTo(0, document.body.scrollHeight);
//     }
// );


function unloadAlert() {

    // alert("Please save it to update your cart");
    // e.preventDefault();
    // e.returnValue = '';
    // e.returnValue = true;
    window.scrollTo(0, document.body.scrollHeight);

}


// window.addEventListener(

//     // "load beforeunload ",//not works//it can be only by seperate calling //btn.addEventListener("mousemove", increase)//   btn.addEventListener("click", increase)

//     "beforeunload",
//     // "unload",
//     function (e) {
//         alert("Please save it to update your cart");
//         e.preventDefault();
//         // e.returnValue = '';
//         e.returnValue = true;
//         window.scrollTo(0, document.body.scrollHeight);
//     }
// );


// setTimeout(function(){
// window.addEventListener("load",unloadAlert());


// window.addEventListener("beforeunload", unloadAlert());//uncomment later but it gives good effect before leaving

// },2000);






// const nameInput = document.querySelector("#name");
// nameInput.addEventListener("input", (event) => {
//   if (event.target.value !== "") {
//     window.addEventListener("beforeunload", beforeUnloadHandler);
//   } else {
//     window.removeEventListener("beforeunload", beforeUnloadHandler);
//   }
// });








// good way but we don't need this




// http://localhost:3000/cart.html?productID=S11_2024&productName=Hair%20Spa%20Cap%20Steamer%20For%20Women%20Beauty%20Products&priceOfThisProduct=360&mainImagOfThisProduct=http://localhost:3000/Hair%20cap%20steamer/HairCapSteamer.jpg

// http://localhost:3000/cart.html?productID=WEWKS1&productName=%20Georgette%20Salwar%20Suit%20Set%20Floral%20Embroidered&priceOfThisProduct=495&mainImagOfThisProduct=http://localhost:3000/product/women/ethnic%20wear/kurta%20sets/Pakistani%20Suit%20%20Women%20Kurta%20Pair/colors%20option/green/main.png&sizeSelected=XL

var EmailAddress;
EmailAddress = sessionStorage.getItem("EmailAddress");
// alert(EmailAddress);

if(EmailAddress === null || EmailAddress ===undefined){
// we can also get it from local storage
EmailAddress = localStorage.getItem("EmailAddress");
// alert(EmailAddress);
}

// var productNumber;//productCode
// var totalCostvalue;
// var quantityNumber = 1;
// var sizeSelected;
// var productPrice;

// var param = new URLSearchParams(window.location.search);
// // alert(param);



// when we are linking some function from another js file then in start global will execute at first as sson as any document value comes in js that is not defined in the current document then from that onwards , it creates error.//better to keep script not common seperately with condition and then call that script in other.

// actually all problem is created when .length is used in any calculation and it do't get's updated on recaling it.


var cart = document.getElementsByClassName("productsList")[0].firstElementChild;

if (param != "") {
    // alert("inside param");

    // cart = document.getElementsByClassName("productsList")[0].firstElementChild;

    // alert(cart);

    var cloneCart = cart.cloneNode(true);
    // this will not take script functions from another file ,


    cloneCart.firstElementChild.firstElementChild.firstElementChild.src = mainImagOfThisProduct;
    // alert(mainImagOfThisProduct);

    cloneCart.firstElementChild.firstElementChild.lastElementChild.innerHTML = productName;
    // alert(productName);

    cloneCart.getElementsByClassName("productCode")[0].innerHTML = productNumber;

    cloneCart.firstElementChild.lastElementChild.firstElementChild.nextElementSibling.firstElementChild.innerHTML = productPrice;

    cloneCart.firstElementChild.lastElementChild.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.src = mainImagOfThisProduct;

    if (param.get('sizeSelected')) {
        sizeSelected = param.get('sizeSelected');
        // product.getElementsByClassName("productSize")[0].innerHTML += "<br>Size : " + sizeSelected;
        cloneCart.getElementsByClassName("productSize")[0].innerHTML = sizeSelected;

    }
    else {
        sizeSelected = "free size";
    }


    // clone.getElementsByClassName("productSize")[0].innerHTML += "<br>Size : " + sizeSelected;

    // clone.getElementsByClassName("priceOfEach")[0].innerHTML += "<br>per:&#8377;" + productPrice;

    cloneCart.getElementsByClassName("priceOfEach")[0].innerHTML += productPrice;

    // we can put sizes

    cloneCart.getElementsByClassName("remove-item ")[0].classList.add("addToCart");

    // cloneCart.getElementsByClassName("remove-item ")[0].innerHTML = "Add to Cart";

    // cloneCart.getElementsByClassName("remove-item ")[0].classList.remove("remove-item");

    var addToCartSave = cloneCart.getElementsByClassName("addToCart")[0];

    // addToCartSave.addEventListener("click",function(){
    //     alert("inside add to cart");
    // });


    //  cloneCart.getElementsByClassName("addToCart")[0] , remove all eventListener
    // cloneCart.getElementsByClassName("addToCart")[0].removeEventListener("click",function(){alert("inside add to cart")})
    // cloneCart.getElementsByClassName("addToCart")[0].removeEventListener("click",function(){alert("ins
    // ide add to cart")})


    // // add class "addToCart" in classlist
    // removeItemTop.classList.add("addToCart");

    // // remove class remove-item from classlist
    // removeItemTop.classList.remove("remove-item");

    // // var addToCartSave=document.getElementsByClassName("addToCart")[0];

    // // innerHTML is Add
    addToCartSave.innerHTML = "Add to Cart";
    addToCartSave.classList.remove("remove-item");

    // clone.firstElementChild.lastElementChild.lastElementChild.previousElementSibling.innerHTML=productPrice;

    document.getElementsByClassName("productsList")[0].innerHTML = "";
    document.getElementsByClassName("productsList")[0].appendChild(cloneCart);

    // document.getElementsByClassName("remove-item ")[0].style.display="none";//we have just added it 

    // remove-item 
    // var removeItemTop = document.getElementsByClassName("remove-item ")[0];

    // // add class "addToCart" in classlist
    // removeItemTop.classList.add("addToCart");

    // // remove class remove-item from classlist
    // removeItemTop.classList.remove("remove-item");

    // // var addToCartSave=document.getElementsByClassName("addToCart")[0];

    // // innerHTML is Add
    // addToCartSave.innerHTML = "Add to Cart";
    // add event listener

    // document.getElementsByClassName("addToCart")[0].addEventListener("click", function () {
    //     alert("addToCart");//not working here
    // });








    calculateTotal();//to update after inserting the product.
    // activeEvery();

}
else {

    console.log("Viewing the cart");
    // alert("Viewing the cart");

}


// alert(document.getElementsByClassName("addToCart")[0].innerHTML);//works
// document.getElementsByClassName("addToCart")[0].addEventListener("click",function(){
//     alert("addToCart");
//     });



// we will use email address to get list of all product codes
// email->customernumber from orders->productcode from order+details and amount pending>0

var orderedProductsArray = [];

function cartProducts() {
    var email = { email: EmailAddress }

    email = JSON.stringify(email);

    // alert(email);

    var CartProducts = new XMLHttpRequest();

    CartProducts.onload = function () {

        // alert(this.responseText);
        // var responseOfDataBase = JSON.parse(this.responseText);
        // alert(responseOfDataBase);


        // document.writeln(this.responseText);
        // it gives repeated list also but when we append it's taking only the first one


        // [
        // 
        // {"orderNumber":23,"productCode":"WEWS1","quantityOrdered":3,"priceEach":"10.00","orderLineNumber":null,"totalCost":"30.00","amountReceived":"0.00","amountPending":"30.00","productName":"two tone Georgette Saree with blouse","productLine":"women ,festival wear ,party wear,grey,blue black,dark blue,green,pink,blue,purple,violet","productVendor":"","productDescription":"Name : two tone Georgette Saree with blouse,Saree Fabric : Georgette,Blouse : Separate Blouse Piece,Blouse Fabric : Silk,Pattern : Colorblocked,Blouse Pattern : Solid.","quantityInStock":10,"buyPrice":"444.00","MSRP":"740.00","mainProductImage":"product\/women\/ethnic wear\/saree\/Two-Tone Georgette Saree With Blouse\/colors option\/grey\/cgvon_512.png"},

        // null,

        // {"orderNumber":85896051,"productCode":"WEWKS1","quantityOrdered":1,"priceEach":"495.00","orderLineNumber":null,"totalCost":"495.00","amountReceived":"0.00","amountPending":"495.00","productName":"Georgette Salwar Suit Set Floral Embroidered","productLine":"women ,festival wear,party wear,Salwar Suit Set,green,blue,dark blue,purple,violet,black,musturd


        // so on...

        // ]





        if (CartProducts.status >= 200 && CartProducts.status < 300) {

            if (this.responseText == "[]" && param !="") {

                document.getElementById("buyMethodOutput").style.display = "flex";
                document.getElementById("buyMethodOutput").innerHTML = "Nothing in cart items, Click 'Add to Cart 'to put this product into your cart ";
                document.getElementById("buyMethodOutput").style.color = "red";
                document.getElementById("buyMethodOutput").style.fontWeight = "bold";

                // document.getElementsByClassName("productsList")[0].innerHTML="";

            }
            else if(this.responseText == "[]" && param ==""){
                document.getElementById("buyMethodOutput").style.display = "flex";
                document.getElementById("buyMethodOutput").innerHTML = "Sorry, we could not find any cart items";
                document.getElementById("buyMethodOutput").style.color = "red";
                document.getElementById("buyMethodOutput").style.fontWeight = "bold";
                document.getElementsByClassName("productsList")[0].innerHTML="";

            }
            else {

                var clonebox = document.getElementsByClassName("productsList")[0];

                var clone2 = cart.cloneNode(true);

                // we need to create a span element with class orderNumber and insert it after productCode class
                // var orderNumberSpan = document.createElement("span");
                // orderNumberSpan.className = "orderNumber";
                // // orderNumberSpan.textContent = "Order Number: ";
                // clone2.insertBefore(orderNumberSpan, clone2.querySelector(".productCode")[0]);

                // // we need to create a span element with class orderNumber and insert it before productName class
                // var orderNumberSpan = document.createElement("span");
                // orderNumberSpan.className = "orderNumber";

                // clone2.insertBefore(orderNumberSpan, clone2.getElementsByClassName("center-item")[0].querySelector(".productName")[0]);

                // clone2.insertBefore(orderNumberSpan, clone2.getElementsByClassName("productName")[0]);

                // clonebox.innerHTML = "";

                if (param == "") {
                    clonebox.innerHTML = "";

                    // window.addEventListener("load", allCartBuy);
                }

                var responseOfDataBase = JSON.parse(this.responseText);

                var numOfCartProducts = responseOfDataBase.length;

                // we have to remove those list index which is null in responseOfDataBase

                // alert(responseOfDataBase[0].productCode);//works
                // alert(responseOfDataBase[1].productCode);//null hence not works and gives error
                // alert(responseOfDataBase[1]);//null



                //  var numOfCartProducts


                // alert(responseOfDataBase);
                // alert(numOfCartProducts);//22




                for (var i = 0; i < numOfCartProducts; i++) {

                    // alert(responseOfDataBase[2].productCode);

                    // var clonebox =  document.getElementsByClassName("productsList")[0];

                    // var clone2 = cart.cloneNode(true);

                    // clonebox.innerHTML +=  clone2.outerHTML;//this way it gives 22 times

                    // productfit(0);//this will gives 22 times as one clone has everything at index 0 and it will get same value for all that is product at index 0.


                    if (responseOfDataBase[i] !== null) {
                        // now it works //earlier due to nul , it stucked after executing once

                        productfit(i);
                    }
                }


                function productfit(i) {

                    //  var clone2 = cart.cloneNode(true);

                    // clone2.firstElementChild.firstElementChild.firstElementChild.src = responseOfDataBase[i].mainProductImage;


                    if (responseOfDataBase[i].colorMainImage === null) {
                        clone2.getElementsByClassName("buyCart")[0].src = responseOfDataBase[i].mainProductImage;

                        // clone2.getElementsByClassName("buyCart")[0].src = responseOfDataBase[i].colorMainImage;
                        // alert(mainImagOfThisProduct);
                    }
                    else {
                        clone2.getElementsByClassName("buyCart")[0].src = responseOfDataBase[i].colorMainImage;
                    }



                    // clone2.firstElementChild.firstElementChild.getElementsByClassName("productCode")[0].innerHTML = responseOfDataBase[i].productCode;

                    clone2.getElementsByClassName("productCode")[0].innerHTML = responseOfDataBase[i].productCode;

                    clone2.getElementsByClassName("orderNumber")[0].innerHTML = responseOfDataBase[i].orderNumber;

                    orderedProductsArray.push(responseOfDataBase[i].orderNumber);

                    // clone2.firstElementChild.firstElementChild.lastElementChild.innerHTML = responseOfDataBase[i].productName;

                    clone2.getElementsByClassName("productName")[0].innerHTML = responseOfDataBase[i].productName;

                    // clone2.getElementsByClassName("quantity-number")[0].value = responseOfDataBase[i].quantityOrdered;//not works

                    // .setAttribute('value', 'defaultValue');
                    clone2.getElementsByClassName("quantity-number")[0].setAttribute('value', responseOfDataBase[i].quantityOrdered);//works
                    // alert(clone2.getElementsByClassName("quantity-number")[0].value );

                    // alert(productName);

                    // clone2.firstElementChild.lastElementChild.firstElementChild.nextElementSibling.firstElementChild.innerHTML = Number(responseOfDataBase[i].buyPrice).toFixed(0);

                    clone2.getElementsByClassName("quantity-total")[0].innerHTML = Number(responseOfDataBase[i].totalCost).toFixed(0);

                    clone2.getElementsByClassName("productSize")[0].innerHTML = responseOfDataBase[i].productSize;

                    // clone2.firstElementChild.lastElementChild.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.src = responseOfDataBase[i].mainProductImage;

                    clone2.getElementsByClassName("small-item")[0].src = responseOfDataBase[i].mainProductImage;

                    clone2.getElementsByClassName('priceOfEach')[0].innerHTML = Number(responseOfDataBase[i].buyPrice).toFixed(0);

                    // document.getElementsByClassName("productsList")[0].appendChild(clone2);
                    // document.getElementsByClassName("productsList")[0].appendChild(clone2);

                    // clonebox.appendChild(clone2);//it will not consider the others

                    clonebox.innerHTML += clone2.outerHTML;

                    // activeEvery();
                    // calculateTotal();//to

                }


                // var itemcount = document.getElementsByClassName("itemcount");
                // alert(itemcount.length);

                calculateTotal();

                // window.addEventListener("load", allCartBuy);
                // clonebox.addEventListener("load", allCartBuy);

                // deleteOrderCarts();//it gives in the same way as expected

                // alert(orderedProductsArray);


                allCartBuy();//this works in letting to call all the functions actively , otherwise load event is taking at start and shows everything 1.

            }
        }

    }


    CartProducts.open("POST", "cart.php", true);
    CartProducts.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // activeEvery();

    CartProducts.send("email=" + email);
}



cartProducts();//to load the cart items









// var itemcount = document.getElementsByClassName("itemcount");
// alert(itemcount.length);



function updateOrderDetails() {

    var itemcount = document.getElementsByClassName("itemcount");//it may create problem in case the unsaved cart data at index 0 is deleted

    // we will take only those 
    // var itemcount = document.getElementsByClassName("itemcount").getElementsByClassName("orderNumber");

    // we will take only those itemcount where orderNumber . innerHTML is not empty
    //  var itemcount = Array.prototype.filter.call(itemcount, function(item) {
    //     return item.innerHTML !== "";
    //     });

    //     alert(itemcount.length);



    // we will take only those itemcount where orderNumber . innerHTML is not empty or ""


    if (param != "") {

        for (var i = 1; i < itemcount.length; i++) {

            // if(itemcount[i].innerHTML !== "" || itemcount[i].innerHTML !==null){

            var updateCart = new XMLHttpRequest();

            var OrderNumberOfProduct = document.getElementsByClassName("orderNumber")[i].innerHTML;


            var productCode = document.getElementsByClassName("productCode")[i].innerHTML; //we will delete those products or orderNumber which are not present

            //    deleted orerderNumbers are those which are present in responseOrder but not here

            var quantity = document.getElementsByClassName("quantity-number")[i].value;

            // var productSize = document.getElementsByClassName("productSize")[i].innerHTML;

            // var productPrice = document.getElementsByClassName("priceOfEach")[i].innerHTML;

            var totalCost = document.getElementsByClassName("quantity-total")[i].innerHTML;


            var dbparam = {
                email: EmailAddress,
                orderNumber: OrderNumberOfProduct,
                productCode: productCode,
                quantity: quantity,
                // size: sizeSelected,
                // productPrice: productPrice,
                totalCost: totalCost,
                orderDate: orderDate,
                update: 1,
                // modeOfPayment:modeOfPayment,
                // colorMainImage:mainImagOfThisProduct
            };

            // stringify 
            dbparam = JSON.stringify(dbparam);

            updateCart.open("POST", "cart.php", true);
            updateCart.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            updateCart.send("dbparam=" + dbparam);

        }
    }
    else {
        for (var i = 0; i < itemcount.length; i++) {

            // if(itemcount[i].innerHTML !== "" || itemcount[i].innerHTML !==null){

            var updateCart = new XMLHttpRequest();

            var OrderNumberOfProduct = document.getElementsByClassName("orderNumber")[i].innerHTML;


            var productCode = document.getElementsByClassName("productCode")[i].innerHTML; //we will delete those products or orderNumber which are not present

            //    deleted orerderNumbers are those which are present in responseOrder but not here

            var quantity = document.getElementsByClassName("quantity-number")[i].value;

            // var productSize = document.getElementsByClassName("productSize")[i].innerHTML;

            // var productPrice = document.getElementsByClassName("priceOfEach")[i].innerHTML;

            var totalCost = document.getElementsByClassName("quantity-total")[i].innerHTML;


            var dbparam = {
                email: EmailAddress,
                orderNumber: OrderNumberOfProduct,
                productCode: productCode,
                quantity: quantity,
                // size: sizeSelected,
                // productPrice: productPrice,
                totalCost: totalCost,
                orderDate: orderDate,
                update: 1,
                // modeOfPayment:modeOfPayment,
                // colorMainImage:mainImagOfThisProduct
            };

            // stringify 
            dbparam = JSON.stringify(dbparam);

            updateCart.open("POST", "cart.php", true);
            updateCart.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            updateCart.send("dbparam=" + dbparam);

        }
    }

    // }

}






function deleteOrderCarts() {

    var itemcount = document.getElementsByClassName("itemcount");

    // this is creating problem in converting to tuples hence we will use below next method

    // var OrderNumberOfProduct ="(";
    // for (var i = 1; i < itemcount.length; i++) {
    //     // get list of all ordernumbers
    //     OrderNumberOfProduct += document.getElementsByClassName("orderNumber")[i].innerHTML + ",";
    // }

    // // remove last ,
    // OrderNumberOfProduct = OrderNumberOfProduct.slice(0, -1);

    // OrderNumberOfProduct += ")";

    // alert(OrderNumberOfProduct);
    // convert this OrderNumberOfProduct sring to ();



    //     var OrderNumberOfProduct;//we want it to be in emty string not undefined
    //    OrderNumberOfProduct="";//we want it to be in emty string not undefined

    //     // var OrderNumberOfProduct;//it will hold undefined at start and then 

    // for (var i = 1; i < itemcount.length; i++) {
    //     // get list of all ordernumbers

    //     OrderNumberOfProduct += document.getElementsByClassName("orderNumber")[i].innerHTML + ",";
    // }

    // OrderNumberOfProduct = OrderNumberOfProduct.slice(0, -1);

    // // OrderNumberOfProduct=JSON.stringify(OrderNumberOfProduct);
    // // OrderNumberOfProduct=String(OrderNumberOfProduct);

    // // alert(OrderNumberOfProduct);

    // // OrderNumberOfProduct= tuple(OrderNumberOfProduct.split());

    // alert(OrderNumberOfProduct);

    // OrderNumberOfProduct=JSON.stringify(OrderNumberOfProduct);
    // alert(OrderNumberOfProduct);


    // let's try to create an array of OrderNumberOfProduct

    var OrderNumberOfProduct = [];

    if (param != "") {
        for (var i = 1; i < itemcount.length; i++) {
            // get list of all ordernumbers
            OrderNumberOfProduct.push(document.getElementsByClassName("orderNumber")[i].innerHTML);
        }
    }

    else {
        for (var i = 0; i < itemcount.length; i++) {
            // get list of all ordernumbers
            OrderNumberOfProduct.push(document.getElementsByClassName("orderNumber")[i].innerHTML);
        }
    }

    // alert(OrderNumberOfProduct);
    // we need to json.stringify OrderNumberOfProduct


    // OrderNumberOfProduct = JSON.stringify(OrderNumberOfProduct);
    // alert(OrderNumberOfProduct);













    // in case of cart the orderNumber will contain productCode="cartList"

    // alert(orderedProductsArray);

    OrderNumberOfProductForThis = { OrderNumberOfProduct: OrderNumberOfProduct, orderedProductsArray: orderedProductsArray, email: EmailAddress }

    OrderNumberOfProductForThis = JSON.stringify(OrderNumberOfProductForThis);

    var deleteProductFromCart = new XMLHttpRequest();

    deleteProductFromCart.onload = function () {
        if (deleteProductFromCart.status == 200) {
            // alert("Cart");
            // alert(deleteProductFromCart.responseText);
            alert("Your cart is updated");
        }
    }



    deleteProductFromCart.open("POST", "cart.php", true);
    deleteProductFromCart.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    deleteProductFromCart.send("currentOrderList=" + OrderNumberOfProductForThis);

}
// 


function saveCart() {

    // we will interact with database here
    updateOrderDetails();
    deleteOrderCarts();

}

// // alert(document.getElementsByClassName("addToCart").length);//1
// var addToCartSave=document.getElementsByClassName("addToCart")[0];
// // alert(addToCartSave);
// addToCartSave.addEventListener("click",function(){//it's not working on click because it's not a button



//     alert("Hello");
// });