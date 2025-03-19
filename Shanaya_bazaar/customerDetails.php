<?php

// echo hello
// echo "hello";

header("Content-Type: application/json; charset=UTF-8");

// Get and decode JSON input, ensure it's a valid request
if ( !isset($_GET["custNumb"]) && !isset($_GET["custName"]) && !isset($_GET["custEmail"]) && !isset($_GET["custPassword"]) ) {
    echo json_encode(["error" => "Required inputs not provided"]);
    exit();
}

$custNumb = json_decode($_GET["custNumb"], false);
$custNameP = json_decode($_GET["custName"], false);
$custEmailP = json_decode($_GET["custEmail"], false);
$custPasswordP = json_decode($_GET["custPassword"], false);

if (!isset($custNumb->customerNumber) || !isset($custNameP->custName) || !isset($custEmailP->custEmail)|| !isset($custPasswordP->custPassword)) {
    echo json_encode(["error" => "Invalid parameter"]);
    exit();
}

// Sanitize and convert custNumb to integer
$customerNumber = intval($custNumb->customerNumber);
$custName = $custNameP->custName;
$custEmail = $custEmailP->custEmail;
$custPassword = $custPasswordP->custPassword;


// now we need to split $custName on whitespace to fill data in firstName and lastName

//using explode
// $str = 'one,two,three,four';

// // zero limit
// print_r(explode(',',$str,0));
// print "<br>";

// // positive limit
// print_r(explode(',',$str,2));
// print "<br>";

// // negative limit 
// print_r(explode(',',$str,-1));


$CustomerNameSep = explode(" ", $custName);
$firstName = $CustomerNameSep[0];
// $lastName = $CustomerNameSep[1];//not working


// $words = array();
// foreach($CustomerNameSep as $word)
//         $words[] = $word;

// list($firstName,$lastName)= explode(" ", $custName);


// $custEmail = json_decode($_GET["custEmail"], false);

// $custPassword = json_decode($_GET["custPassword"], false);

// echo $firstName;
// echo $custEmail;
// echo $custPassword;

// Database connection setup
$conn = new mysqli("localhost", "root", "#sudha@2402", "shanayabazaar");


// Check connection
if ($conn->connect_error) {
    echo json_encode(["error" => "Database connection failed: " . $conn->connect_error]);
    exit();
}


// Prepare SQL statement
// INSERT INTO customers(custoMerNumber) VALUES(1);
// INSERT INTO customers_data(CustomerNumber,FirstName,LastName,Password) VALUES(1,"Sudha","Kumari","#sudha@2402");
// DELETE FROM customers_data WHERE CustomerNumber=1;
// DELETE FROM customers WHERE CustomerNumber=1;

// INSERT INTO customers(custoMerNumber) VALUES(1);
// INSERT INTO customers_data(CustomerNumber,FirstName,LastName,EmailAddress,Password) VALUES(1,"Sudha","Kumari","sudhakumarichauhan24@gmail.com","#sudha@2402");

// $stmt = $conn->prepare("INSERT INTO customers(customerNumber) VALUES(2);INSERT INTO customers_data(CustomerNumber,FirstName,LastName,EmailAddress,Password) VALUES(2,'Sana','Kumari','sanakumarichauhan24@gmail.com','#sana@2402')");


// $stmt1 = $conn->prepare("INSERT INTO customers(customerNumber) VALUES(2)");
// $stmt2 = $conn->prepare("INSERT INTO customers_data(CustomerNumber,FirstName,LastName,EmailAddress,Password) VALUES(2,'Sana','Kumari','sanakumarichauhan24@gmail.com','#sana@2402')");

// if (!$stmt1 || !$stmt2) {
//     echo json_encode(["error" => "Statement preparation failed: " . $conn->error]);
//     exit();
// }

// $stmt1 = $conn->prepare("INSERT INTO customers(customerNumber) VALUES(?)");
// $stmt2 = $conn->prepare("INSERT INTO customers_data(CustomerNumber,FirstName,LastName,EmailAddress,Password) VALUES(?,?,?,?,?)");

$stmt1 = $conn->prepare("INSERT INTO customers(customerNumber) VALUES($customerNumber)");

// $stmt2 = $conn->prepare("INSERT INTO customers_data(CustomerNumber,FirstName,LastName,EmailAddress,Password) VALUES($customerNumber,'$firstName','$lastName','$custEmail','$custPassword')");

// $stmt2 = $conn->prepare("INSERT INTO customers_data(CustomerNumber,FirstName,EmailAddress,Password) VALUES($customerNumber,'$firstName','$custEmail','$custPassword')");

$stmt2 = $conn->prepare("INSERT INTO customers_data(CustomerNumber,FirstName,EmailAddress,Password) VALUES($customerNumber,'$firstName','$custEmail','$custPassword')");

if (!$stmt1 || !$stmt2) {
    echo json_encode(["error" => "Statement preparation failed: " . $conn->error]);
    exit();
}

// Binding all parameters into $stmt1 and $stmt2 
// $stmt1->bind_param("i", $customerNumber);
// $stmt1->bind_param("s",)





// Execute and get result
// $stmt->execute();
$stmt1->execute();
$stmt2->execute();

// $stmt->store_result();
// $stmt->bind_result($cid, $cname, $name, $adr, $city, $pcode, $country);

// $result = $stmt->get_result();
// $outp = $result->fetch_all(MYSQLI_ASSOC);

echo "You are successfully registered";

// Close connections //but for lower one to get execute , don't close the connection but not necessary to not to close 
// $stmt->close();
$stmt1->close();
$stmt2->close();
$conn->close();

// Output the result as JSON
// echo json_encode($outp);//to get result in json format [{},{}...]

?>








