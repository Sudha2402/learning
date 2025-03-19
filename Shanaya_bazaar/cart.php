<?php
header("Content-Type: application/json; charset=UTF-8");



if (!isset($_POST["email"]) && !isset($_POST["dbparam"]) && !isset($_POST["currentOrderList"])) {
    echo json_encode(["error" => "Required inputs not provided"]);

    exit();
}

if (isset($_POST["email"])) {
    $dbparam = json_decode($_POST["email"], false);
    $email = $dbparam->email;
}


$update=0;

if (isset($_POST["dbparam"])) {

    $dbparam = json_decode($_POST["dbparam"], false);
    $email = $dbparam->email;
    // orderNumber: OrderNumberOfProduct,
    // productCode: productCode,
    // quantity: quantity,
    // totalCost: totalCost,
    // orderDate: orderDate,
    // buy: 0,

    $orderNumberSt = $dbparam->orderNumber;
    $orderNumber = intval($orderNumberSt);
    $productNumber = $dbparam->productCode;
    $quantity = $dbparam->quantity;
    $quantity = intval($dbparam->quantity);
    $totalCost = $dbparam->totalCost;
    $update = $dbparam->update;

}


if(isset($_POST["currentOrderList"])){

    $currentOrderList = json_decode($_POST["currentOrderList"], false);

    $email = $currentOrderList->email;
    $orderNumbersIn =$currentOrderList->orderedProductsArray;

    $currentOrderList = $currentOrderList->OrderNumberOfProduct;

    


    // $currentOrderList = json_decode($currentOrderList, true);//this removes error because passing sting to mysql created the error
    // ;et's convert this array to string


    // echo $currentOrderList;


    // $currentOrderList = json_encode($currentOrderList);

    // echo $currentOrderList; //gives proper list

    // now we will replace [] with ()
    // $currentOrderList = str_replace(array('[',']'),array('(', ')'), $currentOrderList);
    // now let's decode it
    // $currentOrderList = json_decode($currentOrderList, true);



    // $orderNumbersIn = json_encode($orderNumbers);
    // $currentOrderList = str_replace("[", "(", $currentOrderList);
    // $currentOrderList = str_replace("]", ")", $currentOrderList);
    // replace all " to nothing
    // $currentOrderList = str_replace('"', '', $currentOrderList);


    // echo $currentOrderList; 
// now decode it again because it is creating error in mysql statement

// $currentOrderList = json_decode($currentOrderList, true);

// echo $currentOrderList; //it is an empty ,








// $array = ['apple', 'banana', 'cherry']; // Define the array

// // Use implode() to join array elements into a single string with ", " as a separator
// echo implode(", ", $array);

// Let's try this

// echo implode(",", $currentOrderList);
// we want to store this in a string variable

$currentOrderList = "(".implode(",", $currentOrderList).")";
// now we can use this in our query
// echo $currentOrderList;


$orderNumbersIn = "(".implode(",", $orderNumbersIn).")";
// echo $orderNumbersIn;
   
}







// Database connection setup
$conn = new mysqli("localhost", "root", "#sudha@2402", "shanayabazaar");

// Check connection
if ($conn->connect_error) {
    echo json_encode(["error" => "Database connection failed: " . $conn->connect_error]);
    exit();
}


$stmt = $conn->prepare("SELECT CustomerNumber FROM customers_data WHERE EmailAddress='$email';");
$stmt->execute();
$result = $stmt->get_result();
$customerNumber = $result->fetch_assoc()['CustomerNumber'];

// $stmt1 = $conn->prepare("select orderNumber from orders where customerNumber='$customerNumber'");




$stmt1 = $conn->prepare("select orderNumber from orders where customerNumber='$customerNumber'");
// $stmt1 = $conn->prepare("select orderNumber from orders where customerNumber=1856176940");
$stmt1->execute();
$result1 = $stmt1->get_result();

$orderNumbers = array();

while ($row = $result1->fetch_assoc()) {
    $orderNumbers[] = $row;
    // convert $row into sting
   
}

// $orderNumbersIn=$orderNumbers;

if(isset($_POST["currentOrderList"])){


 // convert array to string and remove the wrning
//  $orderNumbersIn = json_encode($orderNumbersIn);
//  $orderNumbersIn = str_replace(array('["', '"]'), '', $orderNumbersIn);


//  $orderNumbersIn = "(" . implode(",", $orderNumbersIn) . ")";
  
 // now we can use this in our query
 // echo $orderNumbersIn;

}


// $orderNumbers give [] surrounded , we want to remove it or convert the [] into ()
// $orderNumbers = array_map(function($item) {
//     return $item['orderNumber'];
//     }, $orderNumbers);



// decode all $orderNumbers[]
// $decodedOrderNumbers = array_map(function ($orderNumber) {
//     return json_decode($orderNumber, true);
// }, $orderNumbers);


// // now we want to use this in stmt2
// $stmt2 = $conn->prepare("SELECT productCode FROM order_details  WHERE OrderNumber=?");
// $stmt2->bind_param("i", $decodedOrderNumbers[0]['OrderNumber']);
// $stmt2->execute();
// $result2 = $stmt->get_result();
// $product=json_encode($result2->fetch_assoc());
// echo $product;


// echo json_encode($orderNumbers);

// [{"orderNumber":23},{"orderNumber":24},{"orderNumber":85896051},{"orderNumber":132452345},{"orderNumber":355293828},{"orderNumber":401701697},{"orderNumber":472096704},{"orderNumber":522644145},{"orderNumber":542793965},{"orderNumber":682015235},{"orderNumber":717109026},{"orderNumber":773609765},{"orderNumber":857562051},{"orderNumber":865439137},{"orderNumber":1101679006},{"orderNumber":1212216730},{"orderNumber":1274227075},{"orderNumber":1402820554},{"orderNumber":1429555141},{"orderNumber":1781473638}]


$stmt2 = $conn->prepare("SELECT productCode FROM order_details  WHERE OrderNumber=? and amountPending>0 and modeOfPayment='cart'");//outside also works
// $stmt2->bind_param("i", $orderNumbers[0]['orderNumber']);
// let's use for loop to execute stmt2 for each OrderNumber





$productCodes = array();
for ($i = 0; $i < count($orderNumbers); $i++) {
    // $stmt2 = $conn->prepare("SELECT productCode FROM order_details  WHERE OrderNumber=?"); //inside also works
    $stmt2->bind_param("i", $orderNumbers[$i]['orderNumber']);
    $stmt2->execute();
    $result2 = $stmt2->get_result();
    $productCodes[] = $result2->fetch_assoc();
}





// we want quantity,and totalcost also along with productCode FROM order_details 

// orderNumber,productCode,quantityOrdered,priceEach,totalCost
$stmt4 = $conn->prepare("SELECT productCode,quantityOrdered,totalCost FROM order_details  WHERE OrderNumber=? and amountPending>0 and modeOfPayment='cart'");
// 

for ($i = 0; $i < count($orderNumbers); $i++) {
    $stmt4->bind_param("i", $orderNumbers[$i]['orderNumber']);
    $stmt4->execute();
    $result4 = $stmt4->get_result();
    $productDetails = $result4->fetch_assoc();



}

// echo json_encode($productDetails);
// {"productCode":"WEWKS1","quantityOrdered":3,"totalCost":"1485.00"}








// echo json_encode($productCodes);
// [{"productCode":"WEWS1"},null,{"productCode":"WEWKS1"},{"productCode":"WEWKS1"},{"productCode":"WEWKS1"},{"productCode":"WEWKS1"},{"productCode":"WEWKS1"},{"productCode":"WEWKS1"},{"productCode":"WEWKS1"},{"productCode":"WEWKS1"},{"productCode":"WEWKS1"},{"productCode":"WEWKS1"},{"productCode":"WEWKS1"},{"productCode":"WEWKS1"},{"productCode":"WEWKS1"},{"productCode":"WEWKS1"},{"productCode":"WEWKS1"},{"productCode":"WEWKS1"},{"productCode":"WEWKS1"},{"productCode":"WEWKS1"}]


// All below methods give error

// foreach ($orderNumbers as $orderNumber) {
//     $stmt2->bind_param("i", $orderNumber['orderNumber']);
// }

// let's execute stmt2 and store the result in array of $productCodes
// $stmt2->execute();
// $result2 = $stmt2->get_result();
// $productCodes = array();
// while ($row = $result2->fetch_assoc()) {
//     $productCodes[] = $row;
// }

// echo json_encode($orderNumbers);
// $productCodes = array();


// foreach ($orderNumbers as $orderNumber) {
//     // further we want each $orderNumber value from the list at a time










//     // echo json_encode($orderNumber); //only [] is removed

//     // {"orderNumber":23}{"orderNumber":24}{"orderNumber":85896051}{"orderNumber":132452345}{"orderNumber":355293828}{"orderNumber":401701697}{"orderNumber":472096704}{"orderNumber":522644145}{"orderNumber":542793965}{"orderNumber":682015235}{"orderNumber":717109026}{"orderNumber":773609765}{"orderNumber":857562051}{"orderNumber":865439137}{"orderNumber":1101679006}{"orderNumber":1212216730}{"orderNumber":1274227075}{"orderNumber":1402820554}{"orderNumber":1429555141}{"orderNumber":1781473638}[]


// // we need further extration of orderNumber one at a time
// // $stmt2 = $conn->prepare("SELECT productCode FROM order_details  WHERE OrderNumber=?");
// // $stmt2->bind_param("i", $orderNumber['orderNumber']);//works but since it is in for each hence gives repeated result




//     // $stmt2 = $conn->prepare("SELECT productCode FROM order_details WHERE orderNumber= $orderNumber ");//gives array to string conversion error , hence we will use $stmt2 in this way

//     // $stmt2 = $conn->prepare("SELECT productCode FROM order_details WHERE orderNumber =?");
//     // $stmt2->bind_param("i", $orderNumber);//this will take whole array
//     // $stmt2->bind_param("s", $orderNumber);//take whole at once and give null result



//     // $stmt2 =$conn->prepare("SELECT productCode FROM order_details WHERE orderNumber = '$orderNumber'");


//     // $stmt2->execute();
//     // $result2 = $stmt2->get_result();
//     // while ($row = $result2->fetch_assoc()) {
//     //     $productCodes[] = $row;
//     // }
//     // // $productCodes[] = $result2->fetch_assoc()['productCode'];


//     // echo json_encode($productCodes);//[][][][][][][][][][][][][][][][][][][][] //when whole is used



// }

// upto here full of erro


// we want details from product table for each productCode
// $products = array();
// foreach ($productCodes as $productCode) {
//     $stmt3 = $conn->prepare("SELECT * 
//     FROM products WHERE productCode = '$productCode'");
//     $stmt3->execute();
//     $result3 = $stmt3->get_result();
//     $products[] = $result3->fetch_assoc();
// }




// ALTER TABLE order_details ADD modeOfPayment varchar(100) default "cart";

$stmt3 = $conn->prepare("SELECT * 
    FROM products WHERE productCode = ?");
$products = array();
for ($i = 0; $i < count($productCodes); $i++) {
    // $stmt2 = $conn->prepare("SELECT productCode FROM order_details  WHERE OrderNumber=?"); //inside also works
    $stmt3->bind_param("i", $productCodes[$i]['productCode']);
    $stmt3->execute();
    $result3 = $stmt3->get_result();
    $products[] = $result3->fetch_assoc();
}


// echo $products

// echo json_encode($products);

// [object Object],,[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]

// now we want to echo both $productDetails and $products innerjoin by their productCode
$stmt5 = $conn->prepare("SELECT *
FROM order_details
INNER JOIN products ON order_details.productCode = products.productCode
WHERE order_details.OrderNumber = ? and amountPending>0 and modeOfPayment='cart'");



// ALTER TABLE order_details ADD productSize varchar(50) default "free size";

// 


$orderDetails = array();//for array

for ($i = 0; $i < count($orderNumbers); $i++) {
    $stmt5->bind_param("i", $orderNumbers[$i]['orderNumber']);
    $stmt5->execute();
    $result5 = $stmt5->get_result();
    // $orderDetails = $result5->fetch_assoc();//gives only one
    $orderDetails[] = $result5->fetch_assoc();
}



if($update && isset($_POST["dbparam"])){
// if(isset($_POST["dbparam"])){

$stmt6 = $conn->prepare("Update order_details set quantityOrdered=$quantity,totalCost=$totalCost where (orderNumber =$orderNumber and productCode='$productNumber')");
$stmt6->execute();


}



// now we need to remove [] at the end from an array $orderNumbers or replace [] with ()
// convert array $orderNumbers to string and store in $orderNumbersIn

// $orderNumbersIn = json_encode($orderNumbers);
// $orderNumbersIn = str_replace("[", "(", $orderNumbersIn);
// $orderNumbersIn = str_replace("]", ")", $orderNumbersIn);
// // now decode it again because it is creating error in mysql statement
// $orderNumbersIn = json_decode($orderNumbersIn, true);
// echo $orderNumbersIn ;

// $orderNumbersIn = "(".implode(",", $orderNumbers).")";
// now we can use this in our query
// echo $orderNumbersIn;

if(isset($_POST["currentOrderList"])){

  

    // select orderNumber from order_details where orderNumber NOT IN (23,85896051);

    // Delete from order_details where orderNumber IN (23,542793965,682015235)and orderNumber NOT IN (23,542793965);//it will delete 2 rows //23 is deleted and 542793965 deleted

    // Delete from order_details where orderNumber IN (23,542793965,682015235)and orderNumber IN (23,542793965);//it will delete 2 rows //23 is deleted and 542793965 deleted

    // Delete from order_details where orderNumber IN (23,542793965,682015235)and orderNumber NOT IN (23,542793965);

    // $stmt7 = $conn->prepare("Delete from order_details,orders where orderNumber IN $orderNumbers and orderNumber NOT IN $currentOrderList and productCode != 'cartItems'");

    // $stmt7 = $conn->prepare("Delete from order_details,orders where orderNumber IN $orderNumbersIn and orderNumber NOT IN $currentOrderList and productCode != 'cartItems'");

    $stmt7 = $conn->prepare("DELETE from order_details where (orderNumber IN $orderNumbersIn ) AND (orderNumber NOT IN $currentOrderList) and productCode != 'cartItems'");
    $stmt7->execute();
    
    // $stmt8 = $conn->prepare("DELETE from orders where (orderNumber IN $orderNumbersIn ) AND (orderNumber NOT IN $currentOrderList) and customerNumber='$customerNumber'");


    $stmt8 = $conn->prepare("DELETE from orders where orderNumber NOT IN (Select orderNumber from order_details)");//works


    $stmt8->execute();



   
}


echo json_encode($orderDetails);
// now it is giving everything , all details




$conn->close();
?>