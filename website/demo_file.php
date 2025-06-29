<?php
$myObj = new stdClass();
$myObj->name = "Sudha";
$myObj->age = 30;
$myObj->city = "Lucknow";

$myJSON = json_encode($myObj);
// Objects in PHP can be converted into JSON by using the PHP function json_encode():

echo $myJSON;//{"name":"Sudha","age":30,"city":"Lucknow"}
?>
