<?php

//  xhr.setRequestHeader('X-File-Path', file.path);
// now we want to receive the path passed above and store it in a variable


// $filePath = $_POST['X-File-Path'];//error

$conn = new mysqli("localhost", "root", "#sudha@2402", "shanayabazaar");


// we have to get the href of mainpage from where files will be called
// $mainpage = $_SERVER['PHP_SELF'];//upload.php//it sends the file name from where this php is called not the mainpage where file is being send from 


if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {

    $file = $_FILES['file'];
    // formData.append('path', path);
    // we want to trace this
    $filePath = $_POST['path'];
    $EmailAddress = $_POST['EmailAddress'];
    $ProductCode = $_POST['productCode'];


    //let;s try

    // foreach ($file['name'] as $key => $value) {
    //     // $targetDir = "review/";
    //     $targetDir = "/";
    //     $fileName = basename($file['name'][$key]);
    //     $targetFilePath = $targetDir . $fileName;
    //     // if (file_exists($targetFilePath)) {
    //     //     echo "Sorry, file already exists.<br>";
    //     // } else {
    //         if (move_uploaded_file($file["tmp_name"][$key], $targetFilePath)) {
    //             $imagePath = $targetFilePath;
    //             $stmt->execute();
    //             echo "The file " . $fileName . " has been uploaded successfully.<br>";
    //         } else {
    //             echo "Sorry, there was an error uploading your file.<br>";
    //         }
    //     // }
    // }



    //try end

    // file will be uploaded to the following folder
    // you should give sufficient file permissions
    // $uploadDir = 'product/';
    // $uploadDir = '/';//error


    // Warning: move_uploaded_file(/67bf84c9161a7_profile_photo-removebg-preview grey.png): Failed to open stream: Permission denied in C:\Sudhadocuments\Shanaya_bazaar\upload.php on line 42

    // Warning: move_uploaded_file(): Unable to move "C:\Sudhadocuments\php\xampp installation\tmp\phpE2CD.tmp" to "/67bf84c9161a7_profile_photo-removebg-preview grey.png" in C:\Sudhadocuments\Shanaya_bazaar\upload.php on line 42
// Failed to upload file.





    // $uploadDir = '';//successful but saves in main shanayabazaardirectory //if we use it with require in the same directoy then all hapens in the same directory
    // $uploadDir = $mainpage.'/review/';


    $uploadDir = $filePath . '/review/';//works when "product/women/ethnic wear/kurta sets/Pakistani Suit  Women Kurta Pair/review/" directory is given
    // we want to create this review folder in case when review is not present
    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }



    // $uploadDir = $filePath;
    // $uploadDir = $filePath.'/';
    // $uploadDir = 'product/women/ethnic wear/kurta sets/Pakistani Suit Women Kurta Pair'.'/review/';

    // $uploadDir = 'product/women/ethnic wear/kurta sets/Pakistani Suit Women Kurta Pair';//works but set it in main file name not the review//"/product will not work hence we had to remove the very first / from the pathname

    // $uploadDir = 'product/women/ethnic wear/kurta sets/Pakistani Suit Women Kurta Pair/review';//
    // $uploadDir = 'product/women/ethnic wear/kurta sets/Pakistani Suit Women Kurta Pair/review/';//







    // unique file name generated
    $fileName = uniqid() . '_' . $file['name'];

    $direc = $uploadDir . $fileName;
    // moving the uploaded file from temp location to our target location
    if (move_uploaded_file($file['tmp_name'], $uploadDir . $fileName)) {
        $stmt = $conn->prepare("INSERT INTO customersreviewimages (img_url, prd_code, EmailAddress) VALUES (?,?,?)");
        $stmt->bind_param("sss", $direc, $ProductCode, $EmailAddress);
        // execute the  $stmt
        $stmt->execute();



        echo 'File uploaded successfully.';
    } else {
        echo 'Failed to upload file.';
    }
}


$stmt->close();
$conn->close();

?>