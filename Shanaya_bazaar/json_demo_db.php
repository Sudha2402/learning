
<?php
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
$stmt = $conn->prepare("SELECT * FROM program LIMIT ?");
if (!$stmt) {
    echo json_encode(["error" => "Statement preparation failed: " . $conn->error]);
    exit();
}

// Bind parameters
$stmt->bind_param("i", $limit);//i used as intval is used to convert into integer but if it had not been used then s can also be used
// $stmt->bind_param("s", $limit);//i used as intval is used to convert into integer but if it had not been used then s can also be used

// Execute and get result
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);

// Close connections //but for lower one to get execute , don't close the connection but not necessary to not to close 
$stmt->close();
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
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">  
    <!-- yhis bootstrap gives table structure bold and big -->
</head>  
<body>  
<div class="container mt-5">  
    <h2 class="mb-4">Your programs</h2>  
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

