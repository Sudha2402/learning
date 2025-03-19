<?php
error_reporting(0);

$msg = "";

// https://www.geeksforgeeks.org/how-to-upload-image-into-database-and-display-it-using-php/



// check link to learn about how to insert image in mySql.

// https://www.digitalocean.com/community/tutorials/how-to-use-the-mysql-blob-data-type-to-store-images-with-php-on-ubuntu-18-04

// update products Set mainProductImage=LOAD_FILE('C:\Sudhadocuments/Shanaya_bazaar/product/women/footwear/Patent Leather Heel Sandals/colors option/peach/tggz6_512.webp')where productCode="S18_2248" ;
// gives error

// update products Set mainProductImage=LOAD_FILE('C:\Sudhadocuments/Shanaya_bazaar/product/women/footwear/Patent Leather Heel Sandals/colors option/peach/tggz6_512.webp') where productCode='S18_2248';
//no error

// insert into products (mainProductImage) VALUES(LOAD_FILE('C:\Sudhadocuments/Shanaya_bazaar/product/women/footwear/Patent Leather Heel Sandals/colors option/peach/tggz6_512.webp'))
// this one works//but set it as null


// update products Set mainProductImage=LOAD_FILE('C:/Sudhadocuments/Shanaya_bazaar/product/women/footwear/Patent Leather Heel Sandals/review/5.jpeg') where productCode='S18_2248';//gives null

// update products Set mainProductImage='C:\Sudhadocuments\Shanaya_bazaar\product\women\footwear\Patent Leather Heel Sandals\review\5.jpeg' where productCode='S18_2248';//this gives blob type//but still image will not be set

// update products Set mainProductImage='product/women/footwear/Patent Leather Heel Sandals/review/5.jpeg' where productCode='S18_2248';//it works properly.

// update products Set mainProductImage='C:/Sudhadocuments/Shanaya_bazaar/product/women/footwear/Patent Leather Heel Sandals/review/5.jpeg' where productCode='S18_2248';//this will not work as it needs relative path, not the full path.


// https://www.tutorialspoint.com/mysql/mysql-blob.htm




// to create folder from php 
// https://help.scriptcase.net/portal/en/kb/articles/create-a-folder-using-php-code#:~:text=To%20create%20a%20folder%20on,read%20%2F%20write%20the%20new%20folder.

// To create a folder on the server partition, use the PHP command: mkdir ();

// In the example below, I will create a folder where your name will be the current system date.


// <php $folder = date("Ymd");mkdir ($folder, 0755); ?


// The value "0755", will be allowed to read / write the new folder.



// I remember:

// For dedicated servers, you can use 777.

// To host servers / cpanel, you should use the permission to 755.



//method to upload file and set it in database and folder and also to show it in the same page 
// If upload button is clicked ...
if (isset($_POST['upload'])) {

    // $folder = date("Ymd");
    // mkdir ($folder, 0755);


    // https://www.tutorialspoint.com/php/php_superglobals_files.htm

    $filename = $_FILES["uploadfile"]["name"];
    $tempname = $_FILES["uploadfile"]["tmp_name"];

    // $folder = "./image/" . $filename;
    // $folder = date("Ymd");
    $folder = "image";
    mkdir ($folder, 0755);
    $folder = "./image/" . $filename;
    $db = mysqli_connect("localhost", "root", "#sudha@2402", "shanayabazaar");

    // Get all the submitted data from the form
    // $sql = "INSERT INTO image (filename) VALUES ('$filename')";

    $sql = "update products Set mainProductImage='$filename' where productCode='S18_2248'";

    // Execute query
    mysqli_query($db, $sql);

    // Now let's move the uploaded image into the folder: image
    if (move_uploaded_file($tempname, $folder)) {
        echo "<h3>&nbsp; Image uploaded successfully!</h3>";
    } else {
        echo "<h3>&nbsp; Failed to upload image!</h3>";
    }
}
?>

<!DOCTYPE html>
<html>

<head>
    <title>Image Upload</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="uploadfileTry.css" />
</head>

<body>
    <div id="content">
        <form method="POST" action="" enctype="multipart/form-data">
            <div class="form-group">
                <input class="form-control" type="file" name="uploadfile" value="" />
            </div>
            <div class="form-group">
                <button class="btn btn-primary" type="submit" name="upload">UPLOAD</button>
            </div>
        </form>
    </div>
    <div id="display-image">
        <?php
        $query = " select * from products where productCode='S18_2248' ";
        $result = mysqli_query($db, $query);

        while ($data = mysqli_fetch_assoc($result)) {
        ?>
            <img src="./image/<?php echo $data['mainProductImage']; ?>">

        <?php
        }
        ?>
    </div>
</body>

</html>
