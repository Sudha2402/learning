<?php 
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_GET["x"], false);

$conn = new mysqli("localhost", "root", "#sudha@2402", "shanayawork");

// $stmt = $conn->prepare("SELECT PROGRAM_NAME FROM program LIMIT ?");
$stmt = $conn->prepare("SELECT * FROM program LIMIT ?");
// $stmt = $conn->prepare("SELECT PROGRAM_NAME FROM program LIMIT 5");
/*
[{"PROGRAM_NAME":"Computer Science"},{"PROGRAM_NAME":"Mathematics"},{"PROGRAM_NAME":"Biology"},{"PROGRAM_NAME":"Chemistry"},{"PROGRAM_NAME":"Physics"}]
*/
// $stmt = $conn->prepare("SELECT * FROM program LIMIT 5");

// [{"STUDENT_REF_ID":201,"PROGRAM_NAME":"Computer Science","PROGRAM_START_DATE":"2021-09-01 00:00:00"},{"STUDENT_REF_ID":202,"PROGRAM_NAME":"Mathematics","PROGRAM_START_DATE":"2021-09-01 00:00:00"},{"STUDENT_REF_ID":203,"PROGRAM_NAME":"Biology","PROGRAM_START_DATE":"2021-09-01 00:00:00"},{"STUDENT_REF_ID":204,"PROGRAM_NAME":"Chemistry","PROGRAM_START_DATE":"2021-09-01 00:00:00"},{"STUDENT_REF_ID":205,"PROGRAM_NAME":"Physics","PROGRAM_START_DATE":"2021-09-01 00:00:00"}]




$stmt->bind_param("s", $obj->limit);
// $stmt->bind_param("i", $obj->limit);
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);

// echo json_encode($outp);//to  print the data in json format

// $data = json_decode($outp, true);//it is already passed in json_decode from database hence not used
?>

<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>JSON Data to HTML Table</title>  
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">  
    <!-- yhis bootstrap gives table structure bold and big -->
</head>  
<body>  
<div class="container mt-5">  
    <h2 class="mb-4">JSON Data to HTML Table</h2>  
    <table class="table table-bordered">  
        <thead>  
            <tr>  
                <th>STUDENT_REF_ID </th>  
                <th>PROGRAM_NAME</th>  
                <th>PROGRAM_START_DATE</th>  
            </tr>  
        </thead>  
        <tbody>  
            <?php foreach ($outp as $row): ?>  
                <tr>  
                    <td><?php echo htmlspecialchars($row['STUDENT_REF_ID']); ?></td>  
                    <td><?php echo htmlspecialchars($row['PROGRAM_NAME']); ?></td>  
                    <td><?php echo htmlspecialchars($row['PROGRAM_START_DATE']); ?></td>  
                </tr>  
            <?php endforeach; ?>  
        </tbody>  
    </table>  
</div>  
</body>  
</html>



<!-- Explaination
Your PHP code seems to fetch data from the program table in the shanaywork database using a limit value passed via a JSON object in the GET request. However, there's a small issue with the bind_param type definition and security concerns. Here's a breakdown and improvement:

Issues:
bind_param Type Mismatch: The limit parameter should be an integer, not a string. You are using "s", which means a string, while it should be "i" for an integer.
SQL Injection Risk: Using raw $_GET data directly without validation could lead to SQL injection vulnerabilities, even though you are using prepared statements.
Error Handling: The code does not handle connection or statement errors properly.
Security of Database Credentials: It's not secure to hardcode database credentials like this. Usually, credentials are stored in configuration files outside the webroot.


Changes made:
Proper Type Binding: Used "i" for the integer type in bind_param.
Input Validation: Validates and sanitizes the limit parameter to prevent invalid input.
Error Handling: Added checks for connection and statement preparation failures, outputting a JSON error message when they occur.
Security Practices: While credentials are still in the script for simplicity, in a real-world scenario, these should be stored securely outside of the codebase.
This ensures the application is more robust and secure. 
-->



<!-- 
?php
header("Content-Type: application/json; charset=UTF-8");

// Get and decode JSON input, ensure it's a valid request
if (!isset($_GET["x"])) {
    echo json_encode(["error" => "No input provided"]);
    exit();
}

$obj = json_decode($_GET["x"], false);

if (!isset($obj->limit) || !is_numeric($obj->limit)) {
    echo json_encode(["error" => "Invalid limit parameter"]);
    exit();
}

// Sanitize and convert limit to integer
$limit = intval($obj->limit);

// Database connection setup
$conn = new mysqli("localhost", "root", "#sudha@2402", "shanayawork");

// Check connection
if ($conn->connect_error) {
    echo json_encode(["error" => "Database connection failed: " . $conn->connect_error]);
    exit();
}

// Prepare SQL statement
// $stmt = $conn->prepare("SELECT * FROM program LIMIT ?");
$stmt = $conn->prepare("SELECT program_name FROM program LIMIT ?");

if (!$stmt) {
    echo json_encode(["error" => "Statement preparation failed: " . $conn->error]);
    exit();
}

// Bind parameters
// $stmt->bind_param("i", $limit);//i used as intval is used to convert into integer but if it had not been used then s can also be used
$stmt->bind_param("s", $limit);//i used as intval is used to convert into integer but if it had not been used then s can also be used

// Execute and get result
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);

// Close connections
$stmt->close();
$conn->close();

// Output the result as JSON
echo json_encode($outp);
?>

 -->

