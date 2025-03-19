<?php
error_reporting(0);

// https://www.w3schools.com/php/php_file_upload.asp


// $folder = "temporaryProfilePhoto";
//     mkdir ($folder, 0755);


// //this works only for uploading the image to the folder not to the database.(from line 10 to 60 )


// $target_dir = "temporaryProfilePhoto/";
// $target_file = $target_dir . basename($_FILES["uploadfile"]["name"]);
// $uploadOk = 1;
// $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// // Check if image file is a actual image or fake image
// if(isset($_POST["submit"])) {
//   $check = getimagesize($_FILES["uploadfile"]["tmp_name"]);
//   if($check !== false) {
//     echo "File is an image - " . $check["mime"] . ".";
//     $uploadOk = 1;
//   } else {
//     echo "File is not an image.";
//     $uploadOk = 0;
//   }
// }


// // Check if file already exists
// if (file_exists($target_file)) {
//   echo "Sorry, file already exists.";
//   $uploadOk = 0;
// }

// // Check file size
// if ($_FILES["uploadfile"]["size"] > 500000) {
//   echo "Sorry, your file is too large.";
//   $uploadOk = 0;
// }

// // Allow certain file formats
// if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
// && $imageFileType != "gif" ) {
//   echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
//   $uploadOk = 0;
// }

// // Check if $uploadOk is set to 0 by an error
// if ($uploadOk == 0) {
//   echo "Sorry, your file was not uploaded.";
// // if everything is ok, try to upload file
// } else {
//   if (move_uploaded_file($_FILES["uploadfile"]["tmp_name"], $target_file)) {
//     echo "The file ". htmlspecialchars( basename( $_FILES["uploadfile"]["name"])). " has been uploaded.";
//   } else {
//     echo "Sorry, there was an error uploading your file.";
//   }
// }




// below not worked in case we had to upload images into the folder . but it can work if we have to fetch from database and then set it into the folder.
// header("Content-Type: application/json; charset=UTF-8");

// $msg = "";

// // If upload button is clicked ...
// if (isset($_POST['upload'])) {

//     // $folder = date("Ymd");
//     // mkdir ($folder, 0755);

//     // 

//     $filename = $_FILES["uploadfile"]["name"];

//     $tempname = $_FILES["uploadfile"]["tmp_name"];

//     // $filename = json_decode($_POST["upload"], false);

//     // $tempname = $filename;

//     // $folder = "./image/" . $filename;
//     // $folder = date("Ymd");

// $folder = "temporaryProfilePhoto";
// mkdir ($folder, 0755);

//     $folder = "./temporaryProfilePhoto/" . $filename;

// $db = mysqli_connect("localhost", "root", "#sudha@2402", "shanayabazaar");

// $sql = "update products Set mainProductImage='$filename' where productCode='S18_2248'";

// Execute query
// mysqli_query($db, $sql);

//     // Now let's move the uploaded image into the folder: image
//     if (move_uploaded_file($tempname, $folder)) {
//         // echo "&nbsp; Image uploaded successfully!";
//         echo json_encode($folder);
//     } else {
//         echo "&nbsp; Failed to upload image!";
//     }

//     // echo json_encode($folder);
// }



// trying to upload by integrating both the above methods
if (isset($_POST['submit']) && isset($_POST['hiddenCustomerNumber'])) {



  $CustomerNumber = $_POST['hiddenCustomerNumber'];

  // echo $CustomerNumber; //1856176940 //it works to successfully receive the CustomerNumber


  if (!empty($_FILES["uploadfile"])) {

    //  below not worked
//   $filename = $_FILES["uploadfile"]["name"];
//   $tempname = $_FILES["uploadfile"]["tmp_name"];
//   $filetype = $_FILES["uploadfile"]["type"];

    // $imgname =  $CustomerNumber.$filetype;

    // // mkdir ("temporaryProfilePhoto", 0755);

    //   $folder = "./temporaryProfilePhoto/".$imgname;
//   // $folder = "./CustomersProfilePhoto/" . $filename;
//   // move_uploaded_file($tempname, $folder);
//   move_uploaded_file($tempname, $folder);


    // trying another way and it works
    $target_dir = "temporaryProfilePhoto/";
    $target_file = $target_dir . basename($_FILES["uploadfile"]["name"]);
    $imageFileType = pathinfo($target_file, PATHINFO_EXTENSION);
    // $imgname =  "abc.".$imageFileType;
    $imgname = $CustomerNumber . "." . $imageFileType;//it works
// move_uploaded_file($_FILES["uploadfile"]["tmp_name"], $target_dir.$imgname);//must be moved from tmp to the selected location

    // we also need to remove old file with this new file uploaded
    // $oldfile = $target_dir . $CustomerNumber . "." . $imageFileType;//not works

    // below method will remove only those photos with same image type but not the same CustomerNumber with different datatype.
    // $oldfile = $target_dir . $imgname;//works
    // $newfile = $target_dir . $imgname;//works
    // if (file_exists($oldfile)) {
    //   unlink($oldfile);
    // }




    // we want to check the file name exist with same CustomerNumber of any file type

    $files = scandir($target_dir);
    foreach ($files as $file) {
      if ($file != "." && $file != "..") {
        $filetype = pathinfo($file, PATHINFO_EXTENSION);
      }
    }

    $oldfile = $target_dir . $CustomerNumber . "." . $filetype;
    $newfile = $target_dir . $imgname;
    if (file_exists($oldfile)) {
      unlink($oldfile);
    }

    //now this will work for all types of file with customer number same.



    // $upload_success = move_uploaded_file($_FILES["uploadfile"]["tmp_name"], $target_dir . $imgname);//works
    $upload_success = move_uploaded_file($_FILES["uploadfile"]["tmp_name"], $newfile);

    if ($upload_success) {
      echo "&nbsp; Successfully uploaded image!";
    } else {
      echo "&nbsp; Failed to upload image!";
    }
    // echo $imgname;


    // intval($CustomerNumber);//no need here

    $db = mysqli_connect("localhost", "root", "#sudha@2402", "shanayabazaar");


    // Check connection
    if ($db->connect_error) {
      echo json_encode(["error" => "Database connection failed: " . $db->connect_error]);
      exit();
    }

    // ALTER TABLE customers_data ADD COLUMN CustomersProfilePhoto BLOB;

    // select * from customers_data WHERE CustomerNumber=1856176940;

    $sql = "update customers_data Set CustomersProfilePhoto='$newfile' where CustomerNumber='$CustomerNumber'";

    if (!$sql) {
      echo json_encode(["error" => "Statement preparation failed: " . $db->error]);
      exit();
    }

    // Execute query
    mysqli_query($db, $sql);


    // close the connection
    mysqli_close($db);






  }

} else {
  echo "&nbsp; Please select a profile photo to upload!";
}

?>