// alert("hello");

var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); //we used this to prevent reload of page after XMLHttpRequest
    // Your form submission logic here 
});


var containerbox = document.getElementsByClassName("completeonecategory")[0].firstElementChild;

var clonebox = document.getElementsByClassName("completeonecategory")[0].firstElementChild.getElementsByTagName("a")[0];

var clone = clonebox.cloneNode(true);
// var container;


// for(var i=0;i<15;i++){
//     // containerbox.parentNode.appendChild(clone);
//     // containerbox.parentNode.insertBefore(clone, containerbox.nextSibling);
//     // containerbox.parentNode.insertBefore(clone, containerbox);

//     // containerbox.appendChild(clone);//clone node is used to appent only one at the end hence we will use innerHTML.

//     // containerbox.innerHTML += clone;
//     // containerbox.innerHTML += containerbox.appendChild(clone);

//     // containerbox=document.getElementsByClassName("completeonecategory")[0].firstElementChild;

//     // container = document.getElementsByClassName("completeonecategory")[0].firstElementChild;

//     // alert("hello");




// // trying innerhtml with containerbox and clone outerHTML.
// containerbox.innerHTML += clone.outerHTML;



// }

// alert(clonebox);
// alert(clone);


function searchEnteredProduct() {

    var productEntered = document.searchProduct.searchProductEnteredbyTyping.value;
    var productEntered = productEntered.trim();
    var productEntered = productEntered.toLowerCase();
    var productEntered = productEntered.replace(/[^a-z0-9\s]/g, ''); //this line is used to remove all special symbols d%w3 changes to  dw3

    var productEntered = productEntered.replace(/\s+/g, ' ');
    if (productEntered == "") {
        document.getElementById("searchedOutput").style.display = "flex";
        document.getElementById("searchedOutput").innerHTML = "Please type the product you want to search for";
        // alert("empty");//ok


        setTimeout(function () {
            document.getElementById("searchedOutput").style.display = "none";
        }, 5000);
        // return;
    }
    else {

        document.getElementById("searchedOutput").style.display = "none";

        searchThisProduct(productEntered);
    }

}


function searchThisProduct(product) {

    var product = JSON.stringify(product);

    getProducts = new XMLHttpRequest();

    getProducts.open("GET", "searchProduct.php?product=" + product, true);


    getProducts.onload = function () {

        if (getProducts.status >= 200 && getProducts.status < 300) {

            if (this.responseText == "[]") {
                document.getElementById("searchedOutput").style.display = "flex";
                document.getElementById("searchedOutput").innerHTML = "Sorry, we could not find any product matching";

            }
            else {

                document.getElementById("searchedOutput").style.display = "flex";

                document.getElementById("searchedOutput").innerHTML = "Your search result for " + product + " is ready ";

                var responseOfDataBase = JSON.parse(this.responseText);

                // var responseOfDataBase=this.responseText;

                // alert(responseOfDataBase);

                var numOfMatchedProducts = responseOfDataBase.length;

                // alert(numOfMatchedProducts);//16 outputs in case of ford

                // alert(responseOfDataBase[0]);//[object Object]


                // alert(responseOfDataBase[0].productName);//1968 Ford Mustang//works only after stringify


                for (var i = 0; i < numOfMatchedProducts; i++) {
                    // alert("inside");

                    // var productDetails = responseOfDataBase[i];
                    // var productDetailsString = JSON.stringify(productDetails);
                    // alert(productDetailsString);//gives whole object details as it is back converted into string
                    // {"productCode":"S12_1099","productName":"1968 Ford Mustang","productLine":"Classic Cars","productVendor":"Autoart Studio Design","productDescription":"Hood, doors and trunk all open to reveal highly detailed interior features. Steering wheel actually turns the front wheels. Color dark green.","quantityInStock":68,"buyPrice":"95.34","MSRP":"194.57"}

                    // alert(responseOfDataBase[i].productName); //1968 Ford Mustang

                    // document.getElementById("searchedOutput").innerHTML += responseOfDataBase[i].productName + " ";


clone.firstElementChild.lastElementChild.lastElementChild.innerHTML=responseOfDataBase[i].productName;

// alert(clone.firstElementChild.lastElementChild.lastElementChild.className);


                    containerbox.innerHTML += clone.outerHTML;


                }




            }


        }
        else {
            document.getElementById("searchedOutput").style.display = "flex";
            document.getElementById("searchedOutput").innerHTML = "Server is slow and unable to get matched product";

        }

        setTimeout(function () {
            document.getElementById("searchedOutput").style.display = "none";
        }, 5000);

    }

    getProducts.send();

}




// {"productCode":"S12_1099","productName":"1968 Ford Mustang","productLine":"Classic Cars","productVendor":"Autoart Studio Design","productDescription":"Hood, doors and trunk all open to reveal highly detailed interior features. Steering wheel actually turns the front wheels. Color dark green.","quantityInStock":68,"buyPrice":"95.34","MSRP":"194.57"},{"productCode":"S12_3891","productName":"1969 Ford Falcon","productLine":"Classic Cars","productVendor":"Second Gear Diecast","productDescription":"Turnable front wheels; steering function; detailed interior; detailed engine; opening hood; opening trunk; opening doors; and detailed chassis.","quantityInStock":1049,"buyPrice":"83.05","MSRP":"1.073.02"},{"productCode":"S18_1097","productName":"1940 Ford Pickup Truck","productLine":"Trucks and Buses","productVendor":"Studio M Art Models","productDescription":"This model features soft rubber tires, working steering, rubber mud guards, authentic Ford logos, detailed undercarriage, opening doors and hood,  removable split rear gate, full size spare mounted in bed, detailed interior with opening glove box","quantityInStock":2613,"buyPrice":"58.33","MSRP":"116.67"},{"productCode":"S18_2248","productName":"1911 Ford Town Car","productLine":"Vintage Cars","productVendor":"Motor City Art Classics","productDescription":"Features opening hood, opening doors, opening trunk, wide white wall tires, front door arm rests, working steering system.","quantityInStock":540,"buyPrice":"33.30","MSRP":"60.54"},{"productCode":"S18_2325","productName":"1932 Model A Ford J-...