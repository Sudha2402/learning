<?php
header("Content-Type: application/json; charset=UTF-8");




if (!isset($_POST["dbparam"]) && !isset($_POST["cartParam"]) && !isset($_POST["dbparamCart"])) {
    echo json_encode(["error" => "Required inputs not provided"]);
    exit();
}



// ALTER TABLE order_details ADD colorMainImage blob;


$updateActive = 0;
$cartOrder = 0;

if (isset($_POST["dbparam"])) {
    $dbparam = json_decode($_POST["dbparam"], false);
    $buy = $dbparam->buy;
    $modeOfPayment = $dbparam->modeOfPayment;
    $colorMainImage = $dbparam->colorMainImage;
}



if (isset($_POST["cartParam"])) {
    // for adding to cart

    $cartParam = json_decode($_POST["cartParam"], false);
    $email = $cartParam->email;
    $buy = $cartParam->buy;
    $colorMainImage = $cartParam->colorMainImage;
    // convert  $colorMainImage into string
    $colorMainImage = strval($colorMainImage);

    $orderNumberS = $cartParam->orderNumber;
    $orderNumber = intval($orderNumberS);
    $productNumber = $cartParam->productNumber;
    $quantity = intval($cartParam->quantity);
    $size = $cartParam->size;
    // $size = strtolower($size);
    $productPrice = $cartParam->productPrice;
    $totalCost = $cartParam->totalCost;


}





if (isset($_POST["dbparamCart"])) {
// for order cart

    $dbparam = json_decode($_POST["dbparamCart"], false);
    $buy = $dbparam->buy;
    $modeOfPayment = $dbparam->modeOfPayment;
    $cartOrder = $dbparam->cartOrder;
    $colorMainImage = $dbparam->colorMainImage;
    $orderNumberCart=$dbparam->orderNumberCart;
    
}



if ($buy) {

    if (
        !isset($dbparam->orderNumber) || !isset
    ($dbparam->productNumber) || !isset($dbparam->quantity) || !isset($dbparam->size) || !isset($dbparam->productPrice) || !isset($dbparam->totalCost) || !isset($dbparam->orderDate) || !isset($dbparam->firstname) || !isset($dbparam->lastname) || !isset($dbparam->email) || !isset($dbparam->phone) || !isset($dbparam->address) || !isset($dbparam->city) || !isset($dbparam->state) || !isset($dbparam->zip) || !isset($dbparam->country) || !isset($dbparam->latitude) || !isset($dbparam->longitude)
    ) {
        echo json_encode(["error" => "Invalid parameter"]);
        exit();
    }

    $orderNumberS = $dbparam->orderNumber;
    $orderNumber = intval($orderNumberS);
    $productNumber = $dbparam->productNumber;
    $quantity = intval($dbparam->quantity);
    $size = $dbparam->size;
    // $size = strtolower($size);
    $productPrice = $dbparam->productPrice;
    $totalCost = $dbparam->totalCost;
    $orderDate = $dbparam->orderDate;

    // convert $orderDate to date format
    $orderDate = date("Y-m-d", strtotime($orderDate));//not neccesary to convert , it can be inseted with string too.
// $orderDate = date("d-m-Y", strtotime($orderDate));

    // $orderDate = date("d-m-Y", strtotime($orderDate));

    $firstname = $dbparam->firstname;
    $lastname = $dbparam->lastname;
    $email = $dbparam->email;
    $phone = $dbparam->phone;
    $address = $dbparam->address;
    $city = $dbparam->city;
    $state = $dbparam->state;
    $zip = $dbparam->zip;
    $country = $dbparam->country;
    $latitude = $dbparam->latitude;
    $longitude = $dbparam->longitude;
    $updateActive = $dbparam->updateActive;
    $updateActive = intval($updateActive);

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



if (isset($_POST["dbparam"]) && !$cartOrder) {
    $stmt1 = $conn->prepare("INSERT INTO orders(orderNumber,orderDate,customerNumber,status) VALUES($orderNumber,Date('$orderDate'),$customerNumber,'Order Received')");


    $stmt2 = $conn->prepare("INSERT INTO order_details(orderNumber,productCode,quantityOrdered,priceEach,totalCost,productSize,modeOfPayment,colorMainImage) VALUES($orderNumber,'$productNumber',$quantity,$productPrice,$totalCost,'$size','$modeOfPayment','$colorMainImage')");






    $stmt1->execute();
    $stmt2->execute();


}


if ($cartOrder) {




$stmt1 = $conn->prepare("INSERT IGNORE INTO orders(orderNumber,orderDate,customerNumber,status) VALUES($orderNumber,Date('$orderDate'),$customerNumber,'Order Received')");//no error
// INSERT IGNORE INTO orders(orderNumber,orderDate,customerNumber) VALUES(23,2025/03/14,24);

$stmt1->execute();

$stmt2 = $conn->prepare("INSERT IGNORE INTO order_details(orderNumber,productCode,modeOfPayment) VALUES($orderNumber,'cartItems','$modeOfPayment')");


$stmt2->execute();


    $stmt4 = $conn->prepare("INSERT INTO cartPlaceOrder(orderNumber,orderNumberCart,customerNumber,productCode,quantityOrdered,priceEach,totalCost,productSize,modeOfPayment,colorMainImage,orderDate) VALUES($orderNumber,$orderNumberCart,$customerNumber,'$productNumber',$quantity,$productPrice,$totalCost,'$size','$modeOfPayment','$colorMainImage',Date('$orderDate'))");


  
  
    $stmt4->execute();


    $stmt5 = $conn->prepare("SELECT orderNumberCart from cartPlaceOrder");
    $stmt5->execute();
    $result5 = $stmt5->get_result();
    // ;et's fetch each and concate to string
    $orderNumberSetted = "(";
    while ($row = $result5->fetch_assoc()) {
        $orderNumberSetted .= $row['orderNumberCart'] . ",";
    }
    $orderNumberSetted = rtrim($orderNumberSetted, ","); // remove last comma
    $orderNumberSetted .= ")"; // add closing parenthesis

    // let's remove "
    $orderNumberSetted = str_replace('"', '', $orderNumberSetted);




    // deleting any row from orders will delete that row in all tables.
   
    $stmt6=$conn->prepare("DELETE FROM orders where orderNumber IN $orderNumberSetted");
    $stmt6->execute();

  

}


if (isset($_POST["cartParam"])) {

    $stmt1 = $conn->prepare("INSERT INTO orders(orderNumber,customerNumber) VALUES($orderNumber,$customerNumber)");

    $stmt2 = $conn->prepare("INSERT INTO order_details(orderNumber,productCode,quantityOrdered,priceEach,totalCost,productSize,colorMainImage) VALUES($orderNumber,'$productNumber',$quantity,$productPrice,$totalCost,'$size','$colorMainImage')");

    // don't forget to put string into '' otherwise it will raise error


    $stmt1->execute();
    $stmt2->execute();

}



//execute $stmt3 only when $updateActive 
if ($updateActive) {
    $stmt3 = $conn->prepare("Update customers SET contactFirstName='$firstname',contactLastName='$lastname',phone='$phone',addressLine1='$address',city='$city',state='$state',postalCode='$zip',country='$country' WHERE CustomerNumber ='$customerNumber'");
    $stmt3->execute();
}
if (!$updateActive && $buy) {
    $stmt3 = $conn->prepare("Update customers SET contactFirstName='$firstname',contactLastName='$lastname',phone='$phone',addressLine1='$address',city='$city',state='$state',postalCode='$zip',country='$country' WHERE CustomerNumber ='$customerNumber' and contactFirstName IS NULL and phone IS NULL");
    $stmt3->execute();
}



if (!$stmt1 || !$stmt2) {
    echo json_encode(["error" => "Statement preparation failed: " . $conn->error]);
    exit();
}

echo "Successful";

// $stmt1->close();
// $stmt2->close();


$conn->close();

?>