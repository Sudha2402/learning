<?php
// db.php - database connection
$host = 'localhost';
$db = 'portfolio';
$user = 'root';
$pass = '';

try {
  $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  die("Database connection failed: " . $e->getMessage());
}
?>

<!-- partner.php -->
<?php
header('Location: contact.php');
exit();
?>

<!-- sprint.php -->
<?php
header('Location: contact.php');
exit();
?>

<!-- contact.php -->
<?php
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  if (!empty($name) && !empty($email) && !empty($message)) {
    $stmt = $pdo->prepare("INSERT INTO contact (name, email, message) VALUES (?, ?, ?)");
    $stmt->execute([$name, $email, $message]);
    echo "<script>alert('Message sent successfully!'); window.location.href='index.php';</script>";
  } else {
    echo "<script>alert('Please fill in all fields.'); history.back();</script>";
  }
} else {
  header('Location: index.php');
  exit();
}



// CREATE DATABASE IF NOT EXISTS portfolio;
// USE portfolio;

// CREATE TABLE contact (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(100) NOT NULL,
//   email VARCHAR(100) NOT NULL,
//   message TEXT NOT NULL,
//   submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );









?>



 