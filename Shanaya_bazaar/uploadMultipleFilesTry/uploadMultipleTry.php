<?php

// include_once("conn.php");
// Database connection setup
$conn = new mysqli("localhost", "root", "#sudha@2402", "shanayabazaar");


// CREATE TABLE images_table (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     img_url VARCHAR(255) NOT NULL,
//     img_txt TEXT NOT NULL
// );



if (isset($_POST["submit"])) {

    $stmt = $conn->prepare("INSERT INTO images_table (img_url, img_txt) VALUES (?, ?)");
    $stmt->bind_param("ss", $imagePath, $textData);
    $uploadedImages = $_FILES['images'];
    $textData = $_POST['text_data'];
    foreach ($uploadedImages['name'] as $key => $value) {
        $targetDir = "images/";
        $fileName = basename($uploadedImages['name'][$key]);
        $targetFilePath = $targetDir . $fileName;
        if (file_exists($targetFilePath)) {
            echo "Sorry, file already exists.<br>";
        } else {
            if (move_uploaded_file($uploadedImages["tmp_name"][$key], $targetFilePath)) {
                $imagePath = $targetFilePath;
                $stmt->execute();
                echo "The file " . $fileName . " has been uploaded successfully.<br>";
            } else {
                echo "Sorry, there was an error uploading your file.<br>";
            }
        }
    }
    $stmt->close();
    $conn->close();
}
?>





<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Upload</title>
</head>

<body>

    <!-- https://www.geeksforgeeks.org/how-to-upload-multiple-images-and-text-to-mysql-database-in-php/ -->

    <br><br>
    <form action="" method="post" enctype="multipart/form-data">
    <!-- <form action="file.php" method="post" enctype="multipart/form-data"> -->
        <!-- we add action when something is present in another file. -->
        Select Image Files:
        <input type="file" name="images[]" multiple>
        <br><br>
        <input type="text" name="text_data">
        <br><br>
        <input type="submit" name="submit" value="Upload">
    </form>
</body>

</html>