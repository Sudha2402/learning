<?php
$host = "sql309.infinityfree.com";
$username = "if0_39258950";
$password = "sudha240204";
$dbname = "if0_39258950_portfolio_db";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>