<?php
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_GET["x"], false);

$conn = new mysqli("myServer", "myUser", "myPassword", "Northwind");
$result = $conn->query("SELECT name FROM ".$obj->$table." LIMIT ".$obj->$limit);
$outp = array();
$outp = $result->fetch_all(MYSQLI_ASSOC);

echo "myFuncD(".json_encode($outp).")";
?>
<!-- PHP File explained:
Convert the request into an object, using the PHP function json_decode().
Access the database, and fill an array with the requested data.
Add the array to an object.
Convert the array into JSON using the json_encode() function.
Wrap "myFunc()" around the return object. -->