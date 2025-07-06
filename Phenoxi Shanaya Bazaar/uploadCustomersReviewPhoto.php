<?php

$conn = new mysqli("localhost", "root", "#sudha@2402", "shanayabazaar");


if (isset($_POST["submit"])) {

    $stmt = $conn->prepare("INSERT INTO images_table (img_url, img_txt) VALUES (?, ?)");
    $stmt->bind_param("ss", $imagePath, $textData);
    $uploadedImages = $_FILES['images'];
    $textData = $_POST['text_data'];//we can do something as to store the product code here.
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
