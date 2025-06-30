<?php
$host = "localhost";
$username = "root";
$password = "#sudha@2402";
$dbname = "portfolio_db";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>