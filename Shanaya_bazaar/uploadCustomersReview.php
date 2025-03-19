<?php

// include_once("conn.php");
// Database connection setup

$conn = new mysqli("localhost", "root", "#sudha@2402", "shanayabazaar");

if ($conn->connect_error) {
    echo json_encode(["error" => "Database connection failed: " . $conn->connect_error]);
    exit();
}



// CREATE TABLE CustomersReviewImages (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     img_url VARCHAR(255) NOT NULL,
//     prd_code VARCHAR(50) NOT NULL,
// EmailAddress VARCHAR(100)
// );

// echo "inside uploadCustomersReview.php";

// if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file']) && isset($_POST["dbparam"])){
// if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST["dbparam"]) && isset($_POST["formData"])) {

// if (isset($_POST["submit"])){
// if (isset($_POST["submit"]) && isset($_POST["dbparam"])) {


if (isset($_POST["dbparam"])) {

    $dbparam = json_decode($_POST["dbparam"], false);
    // $formData = json_decode($_POST["formData"], false);
    // convert this object into array so that we can use it in foreach
    // $formData = (array) $formData;
    // $formData = array_map(function($value) { return $value; }, $formData);


    // var dbparam = { EmailAddress: reviewEmail,reviewName:reviewName , reviewText:reviewText, checkedValueOfReviewOfProdct: checkedValueOfReviewOfProdct};

    if (!isset($dbparam->EmailAddress) && !isset($dbparam->checkedValueOfReviewOfProdct)) {

        echo json_encode(["error" => "Invalid parameter"]);
        exit();
    }

    $productCode = $dbparam->productCode;
    $email = $dbparam->EmailAddress;
    $reviewName = $dbparam->reviewName;
    $reviewText = $dbparam->reviewText;
    // there may be an issue when user use ' inbetween , hence we need to completely stringify it so that special characters will be stored as it is
    $reviewText = json_encode($reviewText);//it will work



    $checkedValueOfReviewOfProdct = $dbparam->checkedValueOfReviewOfProdct;

    // $files = (array) $dbparam->files;//it takes in the form of an object form,{"0":{},"1":{},"2":{}}
    // echo $files;

    $stmt1 = $conn->prepare("SELECT * FROM customers_data WHERE EmailAddress ='$email'");
    $stmt1->execute();
    $result1 = $stmt1->get_result();
    $row1 = $result1->fetch_assoc();
    $CustomerNumber = $row1['CustomerNumber']; //1



    //oR

    // $stmt1 = $conn->prepare("SELECT CustomerNumber FROM customers_data WHERE EmailAddress='$email'");

    // $stmt1->execute();
    // $result1 = $stmt->get_result();
    // $CustomerNumber = $result1->fetch_assoc()['CustomerNumber'];













    // echo $CustomerNumber;
    // exit();
    // now we need to check if it is empty or not then we will give two condition
    // if it is empty then we will insert the data into the table
    if ($CustomerNumber == null) {
        echo "You need to register before giving your review";
        exit();
    }


    // $stmt2 = $conn->prepare("INSERT INTO CustomersReviewImages (img_url, prd_code,EmailAddress) VALUES (?,?,?)");

    // $stmt2->bind_param("sss", $imagePath, $productCode, $EmailAddress);

    // we need to extract imagePath link value from $formData which is group of various files uploaded and save it here and also in review directory using files name


    // $imagePath = "";
    // $file = "";
    // // foreach ($files as $file) {
    // foreach ($formData as $file) {
    //     $imagePath .= $file['name'] . ",";
    //     $imagePath = str_replace(" ", "_", $imagePath);
    //     $imagePath = str_replace(":", "", $imagePath);
    //     $imagePath = str_replace(",", "", $imagePath);
    //     $targetDir = $filePath . '/review/';
    //     $fileName = basename($file['name'][$key]);
    //     $targetFilePath = $targetDir . $fileName;

    //     if (move_uploaded_file($file["tmp_name"][$key], $targetFilePath)) {
    //         $imagePath = $targetFilePath;
    //         $stmt->execute();
    //         echo "The file " . $fileName . " has been uploaded successfully.<br>";
    //     } else {
    //         echo "Sorry, there was an error uploading your file.<br>";
    //     }
    // }









    // to get the uploaded files in the input type file 
    // $imagePath = $_FILES["image"]["name"];//shows error of undefined array key image
    // $uploadedImages = $_FILES['file'];//showing images arguement not defined but we have showed it in input type files in the form

    // $uploadedImages =$files;
    // to check the length of this object
    // echo count($uploadedImages);


    // $productCode = $_POST['productCode'];//error as now we are using Xmlhttprequest
    // $EmailAddress = $_POST['email'];//works

    // $EmailAddress = $email;


    // not works to include this way.
    // $result= include 'getThisCustomerDetail.php';
    // // now we need to decode the result from getThisCustomerDetail.php
    // $customerNumber = $result['CustomerNumber'];
    // not works as $result is not defined in this page but in getThisCustomerDetail.php

    // foreach ($uploadedImages['0'] as $key => $value) {

    //     // here $files is like an object not the the list hence it gives error
    //     // so we need to use $files->name instead of $files['name']

    // //  foreach ($uploadedImages->name as $key => $value) { //foreach is used only for list not for object and here name is undefined$
    // // foreach ($uploadedImages as $key => $value) { 
    // // we need for loop to get all the values from object like
    //        // we need to get values in index for 
    //     // alert(files[0].name);//work//let’s work together.png//it works this way
    //     // files[1].name etc hecne we will take a second value hence we will use a loop to chance the value index


    //     // $filesReceived = array();
    //     // foreach ($uploadedImages as $filesReceived) { 
    //     //     $filesReceived[] = $filesReceived->name;
    //     //     // $images[] = $file->type;


    //     // for $i in $uploadedImages{
    // // [$i] to be changing value in loop for each key in the object. hence we use this loop
    // // foreach ($uploadedImages as $key => $value) {
    //     // $filesReceived = array();
    //     // $filesReceived[] = $value->name;
    //     // $filesReceived[] = $value->type;                                                                                                                                                                                                     
    //         $targetDir = "review/";
    //         // $fileName = basename($uploadedImages[$i]->name);
    //         // $fileName = basename($uploadedImages->name);
    //         $fileName = basename($uploadedImages['0'][$key]);
    //         $targetFilePath = $targetDir . $fileName;

    //         // if (file_exists($targetFilePath)) {
    //         //     echo "Sorry, file already exists.<br>"; //here we are allowing dublicate
    //         // } else {

    //         if (move_uploaded_file($uploadedImages["tmp_name"][$key], $targetFilePath)) {
    //             $imagePath = $targetFilePath;
    //             $stmt2->execute();
    //             echo "The file " . $fileName . " has been uploaded successfully.<br>";
    //         } else {
    //             echo "Sorry, there was an error uploading your file.<br>";
    //         }
    //         // }
    //     }

    // $filePath = $_POST['path'];



    // foreach ($uploadedImages['name'] as $key => $value) {
    //     // $targetDir = "review/";
    //     // $targetDir = "/";
    //     $targetDir = $filePath.'/review/';
    //     $fileName = basename($uploadedImages['name'][$key]);
    //     $targetFilePath = $targetDir . $fileName;
    //     // if (file_exists($targetFilePath)) {
    //     //     echo "Sorry, file already exists.<br>";
    //     // } else {
    //         if (move_uploaded_file($file["tmp_name"][$key], $targetFilePath)) {
    //             $imagePath = $targetFilePath;
    //             $stmt->execute();
    //             echo "The file " . $fileName . " has been uploaded successfully.<br>";
    //         } else {
    //             echo "Sorry, there was an error uploading your file.<br>";
    //         }
    //     // }
    // }




    // insert INTO products (productCode) VALUES ('WEWKS1');
    // insert INTO orders (CustomerNumber,orderNumber) VALUES (1,1856176940);//1856176940
    // insert INTO order_details (orderNumber,productCode) VALUES (1856176940,'WEWKS1');



    // quite bad logic from below.. hence commenting together//uncomment to check if want



    //     $stmt3 = $conn->prepare("SELECT orderNumber FROM orders WHERE CustomerNumber='$CustomerNumber'");
    //     // it will give a list of orderNumber and then we have to use this ordernumbers and product code from order_details to match then we will update

    //     $stmt3->execute();
    //     $result3 = $stmt3->get_result();

    //     // $row3 = $result3->fetch_assoc();

    //     // $OrderNumber = $row3['orderNumber'];//it will store only the one orderNumber or all , we have doubt
    //     // we want list of all $OrderNumber from this then we will use for each to check at further level

    //     // foreach ($row3['orderNumber'] as $OrderNumber){

    //     // foreach ($row3 as $OrderNumber){

    //     // it gives error that trying to access offset on value of null type
    //     // so we have to use while loop to get all the orderNumber from the result like this

    //     while ($row3 = $result3->fetch_assoc()) {

    //         $OrderNumber = $row3['orderNumber'];
    // // echo "inside ";
    //         $stmt4 = $conn->prepare("SELECT orderNumber FROM order_details WHERE (orderNumber='$OrderNumber' and productCode='$productCode')");//"WEWKS1"


    //         $stmt4->execute();

    //         $result4 = $stmt4->get_result();

    //         // we want orderNumber from this result

    //         $row4 = $result4->fetch_assoc();
    //         if(!$row4){
    //             // this is helpful in case no row is returned means not ordered
    //             echo "No order found for this product.Please order to give the review";

    //             exit();
    //         }

    //         if ($row4['orderNumber'] != null) {
    //             // this is giving warning that trying to access array offset on value of null 

    //             // if (!is_null($row4['orderNumber'])){
    //                 // it's not working too

    //             $OrderNumber = $row4['orderNumber'];//final orderNumber.

    //             // $stmt5 = $conn->prepare("Update orders SET ratingOfStars='$checkedValueOfReviewOfProdct',comments='$reviewText'  WHERE orderNumber='$OrderNumber'");//this way not works
    //             // $stmt5 = $conn->prepare("Update orders SET (ratingOfStars, comments)=('$checkedValueOfReviewOfProdct','$reviewText') WHERE orderNumber='1'");

    //             $stmt5 = $conn->prepare("Update orders SET ratingOfStars='$checkedValueOfReviewOfProdct',comments='$reviewText' WHERE orderNumber='$OrderNumber'");//this way not works


    //             $stmt5->execute();
    //             echo "Your review is added";
    //             // continue;
    //             // exit();
    //         }
    //         else{
    //             echo "No order found for this product.Please order to give the review";

    //             exit();
    //         }

    //     }


    // we need to get all orderNumber and then we will use them to update the values in orders

    // $customerNumbers = array();
    // while ($row = $result1->fetch_assoc()) {
    //     $customerNumbers[] = $row['CustomerNumber'];
    // }
    // echo json_encode(array($customerNumbers,$emailAddresses));


    // better to store in array and then check for each $OrderNumber in order_details table
    // insert INTO orders (CustomerNumber,orderNumber) VALUES ()

    // we need to check exact ordernumber with matched productcode from orders detail
    // $stmt4 = $conn->prepare("SELECT orderNumber FROM order_details WHERE (orderNumber='$OrderNumber' and productCode='$productCode')");
    // $stmt4->execute();
    // $result4 = $stmt3->get_result();
    // // we want orderNumber from this result
    // $row4 = $result4->fetch_assoc();
    // $OrderNumber = $row4['orderNumber'];//final orderNumber.

    // // $stmt5 = $conn->prepare("Update orders SET ratingOfStars='$checkedValueOfReviewOfProdct',comments='$reviewText'  WHERE orderNumber='$OrderNumber'");//this way not works
    // $stmt5 = $conn->prepare("Update orders SET (ratingOfStars, comments)=('$checkedValueOfReviewOfProdct','$OrderNumber'");
    // $stmt5->execute();
    // $stmt5->execute(array($checkedValueOfReviewOfProdct,$reviewText,$Order

    // $stmt6 = $conn->prepare("Update order_details SET '");
    // $stmt6->execute();

    // we need to update these values


    // we need to update in 




    // $stmt2->close();

    // $stmt3->close();
    // $stmt4->close();
    // $stmt5->close();
    // $stmt6->close();
    // $conn->close();




    // select * FROM order_details,orders where productCode='WEWKS1' and order_details.orderNumber=orders.orderNumber;
    // 1856176940






    // let's start from here proper logic




    // Prepare SQL statement

    
    $stmt2 = "SELECT orders.orderNumber as orderNumber,order_details.productCode,orders.customerNumber,orders.ratingOfStars,orders.comments from products,orders,order_details where (products.productCode = order_details.productCode AND order_details.orderNumber=orders.orderNumber AND orders.customerNumber = $CustomerNumber and order_details.modeOfPayment != 'cart' and orders.status='delivered' and order_details.productCode = '$productCode' and order_details.productCode !='cartItems')"; //write it in capital.

    $stmt2 .= "UNION All SELECT cartplaceorder.orderNumberCart as orderNumber,cartplaceorder.productCode,orders.customerNumber,cartplaceorder.ratingOfStars,cartplaceorder.comments FROM cartplaceorder, products,orders,order_details  where (products.productCode = cartplaceorder.productCode AND order_details.orderNumber=orders.orderNumber AND  orders.orderNumber=cartplaceorder.orderNumber AND orders.customerNumber = $CustomerNumber and cartplaceorder.modeOfPayment != 'cart'  and cartplaceorder.productCode = '$productCode' and order_details.productCode ='cartItems' and cartplaceorder.status='delivered') ";

    // SELECT orders.orderNumber as orderNumber,order_details.productCode,orders.customerNumber,orders.ratingOfStars,orders.comments from products,orders,order_details where (products.productCode = order_details.productCode AND order_details.orderNumber=orders.orderNumber) UNION All SELECT cartplaceorder.orderNumberCart as orderNumber,cartplaceorder.productCode,orders.customerNumber,cartplaceorder.ratingOfStars,cartplaceorder.comments FROM cartplaceorder, products,orders,order_details  where (products.productCode = cartplaceorder.productCode AND order_details.orderNumber=orders.orderNumber AND  orders.orderNumber=cartplaceorder.orderNumber) ;

    // it would give column name as orderNumber,productCode,customerNumber,ratingOfStars,comments


    // this is useful to check all relevant data for review together.


    
    $stmt2 = $conn->prepare($stmt2); //it will give list of products ordered by this customernumber


    if (!$stmt2) {
        echo json_encode(["error" => "Statement preparation failed: " . $conn->error]);
        exit();
    }


    $stmt2->execute();
    $result2 = $stmt2->get_result();
    $outp = $result2->fetch_all(MYSQLI_ASSOC);
  

    // now we need update in each row of    $outp



    if (empty($outp)) {
        $response = array(
            "status" => "false",
            "message" => "No products ordered
    "
        );
        echo json_encode($response);
        exit();
    } else {
        $response = array(
            "status" => "true",
            "message" => "Products ordered",
            "data" => $outp
        );
    }
    // echo json_encode($response);


    // if it is ok then we want to insert the review into database

    // $productCode = $dbparam->productCode;
    // $email = $dbparam->EmailAddress;
    // $reviewName = $dbparam->reviewName;
    // $reviewText = $dbparam->reviewText;

    // $checkedValueOfReviewOfProdct = $dbparam->checkedValueOfReviewOfProdct;



    // Alter TABLE cartplaceorder ADD COLUMN comments text;
    // Alter TABLE cartplaceorder ADD COLUMN ratingOfStars int;

    //now we need to insert into reivew 


    // orderNumber,productCode,customerNumber,ratingOfStars,comments
    foreach ($outp as $row) {
        // echo htmlspecialchars($row['orderNumber']); //we need to store this in another variable orderNumber
        $orderNumber = $row['orderNumber'];
        $productCode = $row['productCode'];
        $customerNumber = $row['customerNumber'];
        $ratingOfStars = $row['ratingOfStars'];
        $comments = $row['comments'];

        $stmt3 = $conn->prepare("Update orders set ratingOfStars=$checkedValueOfReviewOfProdct,comments=$reviewText where orderNumber=$orderNumber");
        // similarly we have to update cartplaceorder
        $stmt4 = $conn->prepare("Update cartplaceorder set ratingOfStars=$checkedValueOfReviewOfProdct,comments=$reviewText where 
              orderNumberCart=$orderNumber");
        // $stmt3->bindParam(':orderNumber', $orderNumber);

        //now execute $stmt3 and $stmt4
        $stmt3->execute();
        $stmt4->execute();
    }


    // }



    // } catch (Exception $e) {
    //     echo json_encode(["error" => $e->getMessage()]);
    //     } finally {
    //         $conn->close();
    //         }

echo json_encode(["success" => true, "message" => "Review inserted successfully"]);
// echo json_encode($outp);//array of each row

// echo json_encode(["success" => true, "message" => "Review inserted successfully","reviews"=>$outp]);//it will open u only when review is inserted//not a good idea

    $conn->close();
} else {
    echo "No matching order found";
}



?>