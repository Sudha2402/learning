<?php
header("Content-Type:application/json; charset=UTF-8");
$obj = json_decode($_POST["x"], false);
// <!-- Use $_POST instead of $_GET: -->
$conn = new mysqli("localhost", "root", "#sudha@2402", "shanayawork");
// $stmt = $conn->prepare("SELECT PROGRAM_NAME FROM program LIMIT ?");
$tableSelected=$obj->table;
$limitSet=$obj->limit;
// $stmt = $conn->prepare("SELECT * FROM $tableSelected LIMIT ?");
$stmt = $conn->prepare("SELECT * FROM $tableSelected LIMIT $limitSet");
// $stmt = $conn->prepare("SELECT * FROM ? LIMIT ?");
// $stmt->bind_param("s", $obj->table);//wrong way any one ? value can be binded not more
// $stmt->bind_param("s", $obj->limit);
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($outp);

?>