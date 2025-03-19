<?php
$myObj = new stdClass();
$myObj->name = "John";
$myObj->age = 30;
$myObj->city = "New York";

$myJSON = json_encode($myObj);
// Objects in PHP can be converted into JSON by using the PHP function json_encode():

echo $myJSON;
?>
