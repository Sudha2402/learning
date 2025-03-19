<?php
header("Content-Type: application/json; charset=UTF-8");



// Database connection setup
$conn = new mysqli("localhost", "root", "#sudha@2402", "shanayabazaar");

// Check connection

if ($conn->connect_error) {

    echo json_encode(["error" => "Database connection failed: " . $conn->connect_error]);
    exit();

}


$fileSrc = json_decode($_POST["fileSrc"], false);

$stmt = $conn->prepare("select IFNULL((SELECT product_Code FROM product_files WHERE file_src like '%$fileSrc%' limit 1),'null') as product_Code");

if (!$stmt) {
    echo json_encode(["error" => "Statement preparation failed: " . $conn->error]);
    exit();
}

$stmt->execute();
$result = $stmt->get_result();

if (isset($_POST["fileSrc"]) && !isset($_POST["productCode"])) {

  
    $productCode = $result->fetch_assoc();


    $stmt1 = $conn->prepare("SELECT * FROM product_files WHERE product_Code = ? and file_src like '%$fileSrc'");

    $stmt1->bind_param("s", $productCode['product_Code']);//works



}


// trim it
// $fileSrc = trim($fileSrc);

// insert into  product_files(product_Code,color,file_src) VALUES('WBW1','black','product/women/bottom wear/Anara Fashion Women Solid Bell Bottoms Black Trousers & Pants/colors option/black/rj4nc_512.webp');
// we are going to drop this .webp from $fileSrc and store in $fileSrc without .

// $fileName = explode('.', $fileSrc);

// $fileName = $fileName[0];

// $drop = explode('.',$fileSrc);
// $drop = end($drop);


if (isset($_POST["productCode"])) {
    //we have to decode
    $productCode = json_decode($_POST["productCode"], false);

    // echo $productCode;//it is valid //WEWK1
    $stmt1 = $conn->prepare("SELECT * FROM product_files WHERE product_Code ='$productCode'
    AND file_src like '%$fileSrc%'");



}




// note .webp files will not be able to do the conversion
// $fileSrc = str_replace('.webp', '.jpg', $fileSrc);
// $fileSrc = str_replace('.webp', '', $fileSrc);
// if no webp then do nothing




// try this

// First, have to check

// SELECT * FROM `university` WHERE course_name LIKE '%&amp%'
// Next, have to update

// UPDATE university
// SET course_name = REPLACE(course_name, '&amp', '&') WHERE id = 1


// Note:
// UPDATE product_files SET file_src=Replace(file_src,'.webp','.png'); //works


// UPDATE cartplaceorder SET colorMainImage=Replace(colorMainImage,'.webp','.png');

// UPDATE customers_data SET CustomersProfilePhoto=Replace(CustomersProfilePhoto,'.webp','.png');

// UPDATE customersreviewimages SET img_url=Replace(img_url,'.webp','.png');

// UPDATE order_details SET colorMainImage=Replace(colorMainImage,'.webp','.png');

// UPDATE products SET mainProductImage=Replace( mainProductImage,'.webp','.png');















// How to Change File Extension in Windows?
// https://www.geeksforgeeks.org/how-to-change-file-extension-in-windows/

// Method 1: Change File Type Using Rename Option
// Method 2: Change File Type Using Save As (Only for Documents)
// Method 3: Change File Type Using CMD
// Method 4: Change File Type in Bulk


// Change the file format to the desired format & press Enter. You will find a window for verification. Click on the Yes option.

// While saving the file, change the File Format along with the File Type. It will help to make the same kind of document with different file extensions.


// IMP
// To Change File Types on Windows Using CMD
// To change a file type simple execute write ren followed by File_name.<current file extension> File_name.<new file extension.


// IMP
// Change File Type in Bulk

// Step 1: Open the folder to change file type in bulk.
// Step 2: Right click on empty space and select open in terminal.

// Step 3: Now write following command in cmd.

// ren *.* *.docx        // to change all file's extension to docx

// or 

// ren *.*txt*.docx    // to change only txt file extension to docx
















// product/accessories/handbags/Graceful Stylish Slingbags Luxury High Quality PU Leather Women Shoulder Bag/colors option/peach/main.webp


// Insert into product_files(product_Code, file_src) values()



// $stmt = $conn->prepare("SELECT product_Code FROM product_files WHERE file_src='$fileSrc'");
// $stmt = $conn->prepare("SELECT product_Code FROM product_files WHERE file_src like '$fileSrc%'");
// we want to update file_src and trim it in main table

// if file_src contains webg , then convert it to jpg then match with this
// $stmt = $conn->prepare(
//     "SELECT product_Code FROM product_files WHERE file_src LIKE ?"
//     );
//     $stmt->bind_param("s", $fileSrc);



// $stmt = $conn->prepare("SELECT product_Code FROM product_files WHERE file_src ='$fileSrc'");

// $stmt = $conn->prepare("SELECT product_Code FROM product_files WHERE file_src like '$fileSrc%'");

// $stmt = $conn->prepare("SELECT product_Code FROM product_files WHERE file_src like '%$fileSrc%'");

// SELECT product_Code FROM product_files WHERE file_src like '%product/women/bottom wear/Anara Fashion Women Solid Bell Bottoms Black Trousers & Pants/colors option/black/rj4nc_512.png%';//it works but don't know why it's giving another product code AFW1 instead of WBW1


// select IFNULL((SELECT product_Code FROM product_files WHERE file_src like '%pen/bottom wear/Anara Fashion Women Solid Bell Bottoms Black Trousers & Pants/colors option/black/rj4nc_512.png%'),'null');




// $stmt = $conn->prepare("select IFNULL((SELECT product_Code FROM product_files WHERE file_src like '%$fileSrc%' limit 1),'null') as product_Code");//this will give productCode exact only when full src is passed but if it is passed from productpage then it passes from color only

// $stmt = $conn->prepare("select IFNULL((SELECT product_Code FROM product_files WHERE file_src like '%$fileSrc%' limit 1,1),'null') as product_Code");


// SELECT
//     *
// FROM
//     mytable
// ORDER BY
//     somefield
// LIMIT 1 OFFSET 20;
// This example selects the 21st row. OFFSET 20 is telling Postgres to skip the first 20 records. If you don't specify an ORDER BY clause, there's no guarantee which record you will get back, which is rarely useful.








// $stmt = $conn->prepare("select IFNULL((SELECT product_Code FROM product_files WHERE file_src ='$fileSrc'),'null') as product_Code");//it will return first row only



// SELECT IFNULL( (SELECT field1 FROM table WHERE id = 123 LIMIT 1) ,'not found');


// if (!$stmt) {
//     echo json_encode(["error" => "Statement preparation failed: " . $conn->error]);
//     exit();
// }

// $stmt->execute();
// $result = $stmt->get_result();
// $productCode = $result->fetch_assoc();
// $productCode = $result->fetch_array(MYSQLI_ASSOC);
// $productCode = $result->fetch_array(MYSQLI_NUM);
// echo $productCode;


// $stmt1 = $conn->prepare("select IFNULL((SELECT * FROM product_files WHERE file_src like '%$fileSrc%'),'null') as product_Code") ;
// $stmt1 = $conn->prepare("SELECT * FROM product_files WHERE  file_src like '%$fileSrc'");//this will create problem as file src only contains url from color to the end , hence not good, and we will have to give productcode also
// we will take, productCode and color

// $stmt1 = $conn->prepare("SELECT * FROM product_files WHERE product_Code = $productCode and file_src like '%$fileSrc'");//it will give array to string conversion fro the productCode, hence we will do this by bind params
// $stmt1 = $conn->prepare("SELECT * FROM product_files WHERE product_Code = ?and file_src like ?");
// $stmt1->bind_param("si", $productCode, $fileSrc);
//now we neet to execute but without any array to string conversion error

// $stmt1 = $conn->prepare("SELECT * FROM product_files WHERE product_Code = ? and file_src like '%$fileSrc'");
// //we have to bind only productCode
// // $stmt1->bind_param("s", $productCode);//we can't use productcode this way, we need to have this array not the string
// //we have to get product_Code value from this productCode array
// // $productCode = $productCode['product_Code'];

// // WEWK1


// $stmt1->bind_param("s", $productCode['product_Code']);//works



$stmt1->execute();//it gives array to string conversion warning for that


$result1 = $stmt1->get_result();
$result1 = $result1->fetch_all(MYSQLI_ASSOC);

// $colorsOfProduct=array();
foreach ($result1 as $row) {
    $productCodeColor = $row['product_Code'];
    $color = $row['color'];

    if ($color != 'null') {
        $stmt2 = $conn->prepare("SELECT * FROM product_files WHERE product_Code='$productCodeColor' and color='$color'");
        $stmt2->execute();
        $result2 = $stmt2->get_result();
        $result2 = $result2->fetch_all(MYSQLI_ASSOC);

        //if result2 is null then set it 'null'


    }



}

if (empty($result2)) {
    $result2 = 'null';//[{"product_Code":"null"},"null"]//otherwise created error like [{"product_Code":"null"},null]
}





// echo json_encode(["productCode" => $productCode]);//{"productCode":{"product_Code":"WEWL1"}}





// echo json_encode($productCode,$result2);//{"product_Code":"WEWL1"}

// echo json_encode(array($productCode,$result2));//{"product_Code":"WEWL1"}

// ["WEWL1",[{"file_Id":214,"product_Code":"WEWL1","color":"blue pink","file_src":"product\/women\/ethnic wear\/lahenga\/Solid Semi Stitched Lehenga Choli\/colors option\/blue\/Screenshot 2025-02-10 214459.png"},{"file_Id":215,"product_Code":"WEWL1","color":"blue pink","file_src":"product\/women\/ethnic wear\/lahenga\/Solid Semi Stitched Lehenga Choli\/colors option\/blue\/Screenshot 2025-02-10 214521.png"},{"file_Id":216,"product_Code":"WEWL1","color":"blue pink","file_src":"product\/women\/ethnic wear\/lahenga\/Solid Semi Stitched Lehenga Choli\/colors option\/blue\/Screenshot 2025-02-10 214538.png"},{"file_Id":217,"product_Code":"WEWL1","color":"blue pink","file_src":"product\/

// echo json_encode(array("product_Code"=>$productCode,"colorsOfProduct"=>$result2));//{"product_Code":{"product_Code":"WEWL1"},"colorsOfProduct":[{"file_Id":214,"product_Code":"WEWL1","color":"blue pink","file_src":"product\/women\/ethnic wear\/lahenga\/Solid Semi Stitched Lehenga Choli\/colors option\/blue\/Screenshot 2025-02-10 214459.png"},{"file_Id":215,"product_Code

// echo json_encode(array($productCode,"colorsOfProduct"=>$result2));//{"0":{"product_Code":"WEWL1"},"colorsOfProduct":[{"file_Id":214,"product_Code":"WEWL1","color":"blue pink","file_src":"product\/women\/ethnic wear\/lahenga\/Solid Semi Stitched Lehenga Ch


echo json_encode(array($productCode, $result2));//[{"product_Code":"WEWL1"},[{"file_Id":214,"product_Code":"WEWL1","color":"blue pink","file_src":"product\/women\/ethnic wear\/lahenga\/Solid Semi Stitched Lehenga Choli\/colors option\/blue\/Screenshot 2025-02-10 214459.png"},{"file_Id":215,"product_Code":"WEWL1","color":"blue pink","file_src":"produc

$stmt->close();

$conn->close();

?>