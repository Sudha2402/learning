<?php
header("Content-Type: application/json; charset=UTF-8");

// Get and decode JSON input, ensure it's a valid request
// if (!isset($_GET["custNumb"])) {
if (!isset($_GET["email"])) {
    echo json_encode(["error" => "No input provided"]);
    exit();
}

// $obj = json_decode($_GET["custNumb"], false);
$obj = json_decode($_GET["email"], false);

// if (!isset($obj->customerNumber) || !is_numeric($obj->customerNumber)) {

if (!isset($obj->email)) {
    echo json_encode(["error" => "Invalid email parameter"]);
    exit();
}

// Sanitize and convert customerNumber to integer
// $customerNumberPassed = intval($obj->customerNumber);

$email = $obj->email;

// Database connection setup
$conn = new mysqli("localhost", "root", "#sudha@2402", "shanayabazaar");

// Check connection
if ($conn->connect_error) {
    echo json_encode(["error" => "Database connection failed: " . $conn->connect_error]);
    exit();
}



$stmt = $conn->prepare("SELECT CustomerNumber FROM customers_data WHERE EmailAddress='$email'");

$stmt->execute();
$result = $stmt->get_result();
$customerNumberPassed = $result->fetch_assoc()['CustomerNumber'];
// echo $customerNumberPassed;//1856176940



// Prepare SQL statement
// $stmt1 = "SELECT order_details.productCode,products.productName,products.productLine,products.productVendor,order_details.quantityOrdered,products.buyPrice from products,orders,order_details where (products.productCode = order_details.productCode AND order_details.orderNumber=orders.orderNumber AND orders.customerNumber = $customerNumberPassed and order_details.modeOfPayment != 'cart' and order_details.productCode !='cartItems')"; //write it in capital.
$stmt1 = "SELECT order_details.productCode,order_details.colorMainImage,products.productName,orders.orderDate,order_details.quantityOrdered,products.buyPrice from products,orders,order_details where (products.productCode = order_details.productCode AND order_details.orderNumber=orders.orderNumber AND orders.customerNumber = $customerNumberPassed and order_details.modeOfPayment != 'cart' and order_details.productCode !='cartItems')"; //write it in capital.
// // using query union

// $stmt1 .= "UNION SELECT cartplaceorder.productCode,products.productName,products.productLine,products.productVendor,cartplaceorder.quantityOrdered,products.buyPrice FROM cartplaceorder, products,orders,order_details  where (products.productCode = cartplaceorder.productCode AND orders.orderNumber=cartplaceorder.orderNumber AND orders.customerNumber = $customerNumberPassed and cartplaceorder.modeOfPayment != 'cart' and order_details.productCode ='cartItems') ";//it gives only one.//removes dublicate data, hence we will use UNION ALL instead of UNION

$stmt1 .= "UNION ALL SELECT cartplaceorder.productCode,cartplaceorder.colorMainImage,products.productName,orders.orderDate,cartplaceorder.quantityOrdered,products.buyPrice FROM cartplaceorder, products,orders,order_details  where (products.productCode = cartplaceorder.productCode AND order_details.orderNumber=orders.orderNumber  AND orders.orderNumber=cartplaceorder.orderNumber AND orders.customerNumber = $customerNumberPassed and cartplaceorder.modeOfPayment != 'cart' and order_details.productCode ='cartItems') ";





// $stmt1= $conn->prepare($stmt1);


// $stmt1 = "SELECT order_details.productCode,products.productName,products.productLine,products.productVendor,order_details.quantityOrdered,products.buyPrice from products,orders,order_details where (products.productCode = order_details.productCode AND order_details.orderNumber=orders.orderNumber AND orders.customerNumber = $customerNumberPassed)"; //write it in capital.

$stmt1= $conn->prepare($stmt1);

// $stmt1 = $conn->prepare("SELECT order_details.productCode,products.productName,products.productLine,products.productVendor,order_details.quantityOrdered,products.buyPrice from products,orders,order_details where (products.productCode = order_details.productCode AND order_details.orderNumber=orders.orderNumber AND customerNumber = 114 )"); //write it in capital.

if (!$stmt1) {
    echo json_encode(["error" => "Statement preparation failed: " . $conn->error]);
    exit();
}

// Bind parameters
// $stmt1->bind_param("i", $customerNumberPassed);//i used as intval is used to convert into integer but if it had not been used then s can also be used
// $stmt1->bind_param("i", $customerNumberPassed);//i used as intval is used to convert into integer but if it had not been used then s can also be used
// $stmt1->bind_param("s", $limit);//i used as intval is used to convert into integer but if it had not been used then s can also be used

// Execute and get result
$stmt1->execute();
$result1 = $stmt1->get_result();
$outp = $result1->fetch_all(MYSQLI_ASSOC);

// Close connections //but for lower one to get execute , don't close the connection but not necessary to not to close 
$stmt1->close();
$conn->close();

// Output the result as JSON
// echo json_encode($outp);//to get result in json format [{},{}...]

?>



<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title></title>  
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">   -->
    <!-- yhis bootstrap gives table structure bold and big -->
     <!-- this bootstrap was creating alignment disorder -->

    <link rel="stylesheet" type="" href="styleneeds.css">

</head>  
<body>  
<div class="container mt-5">  
    <!-- <h2 class="mb-4">Your Orders</h2>   -->
    <table class="table table-bordered" >  
    <thead>
                    <caption>Your ordered products that you have  need</caption>
                    <tr>
                        <th rowspan="2">products id</th>
                        <th colspan="3">product description</th>
                        <th rowspan="2">Quantity</th>
                        <th rowspan="2">product price</th>
    
                    </tr>
    
                    <tr>
                        <th>Product</th>
                        <th>product name</th>
                        <!-- <th>product category</th> -->
                        <!-- <th>product brand</th> -->
                        <th>Ordered Date</th>
                        <!-- <th></th> -->
    
                    </tr>
    
                </thead> 
        <tbody>  
            <?php foreach ($outp as $row): ?>  
                <tr>  
                    <td onclick="findHref(this)" style="color:aqua;cursor:pointer"><?php echo htmlspecialchars($row['productCode']); ?></td>  
                    <!-- <td><?php //echo htmlspecialchars($row['colorMainImage']); ?></td>   -->
                    <!-- we want to set this as src of image tag -->
                     <td style="cursor:pointer"><div>
                        <p style="font-size:0px" onclick="findHref(this)" ><?php echo htmlspecialchars($row['productCode']); ?>
                     <img src='<?php echo htmlspecialchars($row['colorMainImage']); ?>' style="height: 100px;width:auto"></p></div></td>
                    <td><?php echo htmlspecialchars($row['productName']); ?></td>  
                    <!-- <td><?php //echo htmlspecialchars($row['productLine']); ?></td>   -->
                    <!-- <td><?php //echo htmlspecialchars($row['productVendor']); ?></td>   -->
                    <td><?php echo htmlspecialchars($row['orderDate']); ?></td>  
                    <td><?php echo htmlspecialchars($row['quantityOrdered']); ?></td>  
                    <td><?php echo htmlspecialchars($row['buyPrice']); ?></td>  
                </tr>  
            <?php endforeach; ?>  
        </tbody>  
    </table>  
</div>  
</body>
<script src="allPageCommonScript.js"></script>
<script src="needdatabase.js"></script>
<script src="pagesnavigation.js"></script>  
</html>

