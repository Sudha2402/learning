<?php
header("Content-Type:application/json; charset=UTF-8");
$obj = json_decode($_POST["x"], false);
// <!-- Use $_POST instead of $_GET: -->
$conn = new mysqli("localhost", "root", "#sudha@2402", "shanayawork");
$stmt = $conn->prepare("SELECT PROGRAM_NAME FROM program LIMIT ?");
$stmt->bind_param("s", $obj->limit);

/* //NOTE:
$employeeIDSelected=$obj->employeeID;
$UsernameSelected=$obj->Username;
$stmt = $conn->prepare("SELECT * FROM $tableSelected WHERE employee_id =$employeeIDSelected AND first_name='$UsernameSelected'");//works

// $sql = "SELECT * FROM $tableSelected WHERE employee_id=$employeeIDSelected AND first_name='$UsernameSelected'";// works

// $sql = "SELECT employee_id,first_name,last_name,position,salary FROM $tableSelected WHERE employee_id=$employeeIDSelected AND first_name='$UsernameSelected'";//works

// $sql = "SELECT employee_id,first_name,last_name,position,salary FROM $tableSelected WHERE employee_id=$employeeIDSelected AND first_name=$UsernameSelected";//not works due to no '' in $UsernameSelected as it gives ERROR 1054 (42S22): Unknown column 'Sudha' in 'where clause'
// $stmt = $conn->prepare($sql);

*/




$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($outp);
// echo $outp;//Warning: Array to string conversion in C:\Sudhadocuments\website\json_demo_db_post.php on line 12
// make sure that no such statement should be present <!-- Use $_POST instead of $_GET: --> outside  the php file and without any enclosure otherwise it gives parse error
?>