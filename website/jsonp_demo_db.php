<?php
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_GET["x"], false);

$conn = new mysqli("localhost", "root", "#sudha@2402", "shanayawork");
$result = $conn->query("SELECT PROGRAM_NAME FROM ".$obj->table." LIMIT ".$obj->limit);
// $outp = array();//no need
$outp = $result->fetch_all(MYSQLI_ASSOC);

// $tableSelected=$obj->table;
// $limitSet=$obj->limit;
// $stmt = $conn->prepare("SELECT * FROM $tableSelected LIMIT $limitSet");
// $stmt->execute();
// $result = $stmt->get_result();
// $outp = $result->fetch_all(MYSQLI_ASSOC);

echo "myFuncD(".json_encode($outp).")";
?>
