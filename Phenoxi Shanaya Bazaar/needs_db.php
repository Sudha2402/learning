<?php
header("Content-Type: application/json; charset=UTF-8");



// 🔍 

if (!isset($_GET["email"])) {
    echo json_encode(["error" => "No input provided"]);
    exit();
}

// $obj = json_decode($_GET["custNumb"], false);
$obj = json_decode($_GET["email"], false);

// if (!isset($obj->customerNumber) || !is_numeric($obj->customerNumber)) {

if (!isset($obj->email)) {
    echo json_encode(["error" => "Please login first to see your ordered product"]);
    exit();
}


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

$stmt1 = "SELECT order_details.orderNumber,order_details.productCode,order_details.colorMainImage,products.productName,orders.orderDate,order_details.quantityOrdered,products.buyPrice,orders.status ,orders.shippedDate,order_details.modeOfPayment  from products,orders,order_details where (products.productCode = order_details.productCode AND order_details.orderNumber=orders.orderNumber AND orders.customerNumber = $customerNumberPassed and order_details.modeOfPayment != 'cart' and order_details.productCode !='cartItems')"; //write it in capital.


$stmt1 .= "UNION ALL SELECT cartplaceorder.orderNumber, cartplaceorder.productCode,cartplaceorder.colorMainImage,products.productName,orders.orderDate,cartplaceorder.quantityOrdered,products.buyPrice,cartplaceorder.status ,orders.shippedDate ,cartplaceorder.modeOfPayment FROM cartplaceorder, products,orders,order_details  where (products.productCode = cartplaceorder.productCode AND order_details.orderNumber=orders.orderNumber  AND orders.orderNumber=cartplaceorder.orderNumber AND orders.customerNumber = $customerNumberPassed and cartplaceorder.modeOfPayment != 'cart' and order_details.productCode ='cartItems') ";


$stmt1 .= " ORDER BY orderDate Desc"; //works great

$stmt1 = $conn->prepare($stmt1);

if (!$stmt1) {
    echo json_encode(["error" => "Statement preparation failed: " . $conn->error]);
    exit();
}

// Execute and get result
$stmt1->execute();
$result1 = $stmt1->get_result();
$outp = $result1->fetch_all(MYSQLI_ASSOC);

// Close connections //but for lower one to get execute , don't close the connection but not necessary to not to close 
$stmt1->close();
$conn->close();

?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
   
    <link rel="stylesheet" type="" href="styleneeds.css">

</head>


<body>
    <div class="container mt-5">
        <!-- <h2 class="mb-4">Your Orders</h2>   -->
        <table class="table table-bordered">
            <thead>
                <caption>Your ordered products that you have need</caption>
                <tr>
                    <th rowspan="2">products id</th>
                    <th colspan="3">product description</th>
                    <th rowspan="2">Quantity</th>
                    <th rowspan="2">product price</th>
                    <th rowspan="2">Status</th>
                    <!-- <th rowspan="2">Shipped Date</th> -->
                    <th rowspan="2">Mode of Payment</th>

                </tr>

                <tr>
                    <th>Product</th>
                    <th>product name</th>
                    
                    <th>Ordered Date</th>
                    <!-- <th></th> -->

                </tr>

            </thead>
            <tbody>
                <?php foreach ($outp as $row): ?>
                    <tr>
                        <td onclick="findHref(this)" style="color:aqua;cursor:pointer">
                            <?php echo htmlspecialchars($row['productCode']); ?></td>
                      
                        <td style="cursor:pointer">
                            <div>
                                <p style="font-size:0px" onclick="findHref(this)">
                                    <?php echo htmlspecialchars($row['productCode']); ?>
                                    <img src='<?php echo htmlspecialchars($row['colorMainImage']); ?>'
                                        style="height: 100px;width:auto">
                                </p>
                            </div>
                        </td>
                        <td><?php echo htmlspecialchars($row['productName']); ?></td>
                      

                        <td><?php echo htmlspecialchars(date('d-m-Y', strtotime($row['orderDate']))); ?></td>
                        <td><?php echo htmlspecialchars($row['quantityOrdered']); ?></td>
                        <td><?php echo htmlspecialchars($row['buyPrice']); ?></td>

                        <td><?php echo htmlspecialchars($row['status']);

                        if ($row['status'] == 'Delivered') {

                            // echo '<br> On ' . htmlspecialchars($row['shippedDate']);
                    
                            echo '<br> On ' . htmlspecialchars(date('d-m-Y', strtotime($row['shippedDate'])));


                            $today=new DateTime("now");
                            $LastDateToReturn= new DateTime (date('d-m-Y', strtotime($row['shippedDate'] . '+7 days'))); //comarisons works only with new object
                    

                            if ($today < $LastDateToReturn) { //uncomment when operation on return button is performed
 
                                
                                ?>
                                    <!-- <button type="button" class="returnOrder" onclick="initiateReturn('ORD12345', 'PROD67890')">Return</button>  -->

                                  
                                    <button type="button" class="returnOrder" onclick="initiateReturn('<?php echo htmlspecialchars($row['orderNumber']); ?>', '<?php echo htmlspecialchars($row['productCode']); ?>')">Return</button> 

                                    
                                   
                                    <?php

                               
                            } //uncomment when if is uncommented



                           
                        }

                        ?>
                        </td>
                        <td><?php echo htmlspecialchars($row['modeOfPayment']); ?></td>
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