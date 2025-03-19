<?php
header("Content-Type: application/json; charset=UTF-8");

$product = json_decode($_GET["product"], false);

// Database connection setup
$conn = new mysqli("localhost", "root", "#sudha@2402", "shanayabazaar");

// Check connection
if ($conn->connect_error) {
    echo json_encode(["error" => "Database connection failed: " . $conn->connect_error]);
    exit();
}

// select * from products WHERE productName LIKE '%ford%';
// select * from products WHERE productName LIKE '%ford%car%' ;
// select * from products WHERE productName LIKE '%ford%' OR productName LIKE '%cars%' ;
// select * from products WHERE productName LIKE '%ford%' OR productName LIKE '%cars%' OR productDescription  LIKE '%high%' OR productLine  LIKE '%cars%' ;

// select * from products WHERE productName LIKE '%ford%' OR productName LIKE '%cars%' OR productDescription  LIKE '%high%' OR productLine  LIKE '%cars%' ;

// $stmt1 = $conn->prepare("SELECT * FROM products WHERE productName LIKE '%$product%' ");//works for exact sequence search.


// for splitting the words of product
$keywords = explode(" ", $product);



$keywords = array_map('trim', $keywords);//used to remove leading and trailing spaces from the keywords array

$keywords = array_filter($keywords, 'strlen'); // remove empty strings

$keywords = array_map('strtolower', $keywords); // convert to lowercase
// hgf gcg h H B  gives this in keywords["hgf","gcg","h","h","b"]

//now storing explode keywords in different variable

//let's check the size of this exploded keywords
$size = count($keywords);//gives the counting of explode result

// UPDATE table_name SET col1 = LOWER(col1), col2 = LOWER(col2), col3 = LOWER(col3);//to lower


//now we will create a query for each keyword and union them together




// we also want to check in the mainProductImage;
// we will use a loop to create a query for each keyword
for ($i = 0; $i < $size; $i++) {
    $query = "SELECT * FROM products WHERE mainProductImage LIKE '%/$keywords[$i]%'";
    // if this / is not used then women if found first will be shown first
}



// case sensitive search even in like according to table
$query .= "UNION SELECT * FROM products WHERE mainProductImage LIKE '%$product%' OR  productName LIKE '%$product%' OR productDescription LIKE '%$product%' OR productLine LIKE '%$product%' ";

// now we want to split keywords further with combination of 3 words
// we will use a loop to create a query for each combination of 3 words

for ($i = 0; $i < $size; $i++) {
    for ($j = $i + 1; $j < $size; $j++) {
        for ($k = $j + 1; $k < $size; $k++)
            $query .= "OR mainProductImage LIKE '%$keywords[$i]%$keywords[$j]%$keywords[$k]%' OR productName LIKE '%$keywords[$i]%$keywords[$j]%$keywords[$k]%' OR productDescription LIKE '%$keywords[$i]%$keywords[$j]%$keywords[$k]%' OR productLine LIKE '%$keywords[$i]%$keywords[$j]%$keywords[$k]%' ";
    }
}




// now we want to split keywords further with combination of 2 words
// we will use a loop to create a query for each combination of 2 words
for ($i = 0; $i < $size; $i++) {
    for ($j = $i + 1; $j < $size; $j++) {
        $query .= "OR productName LIKE '%$keywords[$i]%$keywords[$j]%' OR productDescription LIKE '%$keywords[$i]%$keywords[$j]%' OR productLine LIKE '%$keywords[$i]%$keywords[$j]%' ";
    }
}




// we also want to check in the mainProductImage;
// we will use a loop to create a query for each keyword
for ($i = 0; $i < $size; $i++) {
    $query .= "UNION SELECT * FROM products WHERE mainProductImage LIKE '%/$keywords[$i]%'";
    // if this / is not used then women if found first will be shown first
}





//for each keyword we will create a query and union them together
for ($i = 0; $i < $size; $i++) {
    $query .= "UNION SELECT * FROM products WHERE productName LIKE '%$keywords[$i]%' ";
    // we also want first whole keywords combination then one keyword less key combination like adjacent then seperate    
}

// for each keyword in the array of keywords
foreach ($keywords as $keyword) {

    // create a query for the current keyword
    $query .= "OR productName LIKE '%$keyword%' OR productDescription LIKE '%$keyword%' OR productLine LIKE '%$keyword%' ";
    // we want 4 consecutive letters from $keyword then find the match in like 

    for ($i = 0; $i < strlen($keyword); $i++) {
        // it is creating error this way , letter check is below

        // $query .= "OR productName LIKE '%$keyword[$i]%$keyword[$i+1]%
        // OR productDescription LIKE '%$keyword[$i]%$keyword[$i+1]%' OR product
        // Line LIKE '%$keyword[$i]%$keyword[$i]%' ";//errors
        // // without error of above line






        // ERRORS

        // $j = $i;
        // $k=$i+1;
        // $l=$i+2;
        // $m=$i+3;

        // $query .="OR productName LIKE '%$keyword[$j]$keyword[$k]$keyword[$l]$keyword[$m]%' OR productDescription LIKE 
        // '$keyword[$j]$keyword[$k]$keyword[$l]$keyword[$m]%' OR product
        // Line LIKE '%$keyword[$j]$keyword[$k]$keyword[$l]$keyword[$m]%' ";



    }
}


// now there might be problem in spelling , hence we will use combination of 5 consecutive letters
// we will use a loop to create a query for each combination of 5 letters

// foreach ($keywords as $keyword) {
// // creates error

//     // we want 4 consecutive letters from $keyword then find the match in like 
//     for ($i = 0; $i < strlen($keyword); $i++) {
//         // create empty $lettercomb

//         $lettercomb = "";//used to empty it

//         for ($j = $i; $j < $i + 4; $j++) {
//             $lettercomb += $keyword[$j];
//         }
//         $query .= "OR productName LIKE '%$lettercomb%' OR productDescription LIKE '%$lettercomb%' OR productLine LIKE '%$lettercomb%' ";
//     }
// }

// now we want to split keywords further with combination of










// it works for give result even after spelling mistake
// size of $keyword word
$size = strlen($keyword);
for ($p = 0; $p < $size; $p++) {
    for ($i = $p; $i < $size; $i++) {
        for ($j = $i + 1; $j < $size; $j++) {
            for ($k = $j + 1; $k < $size; $k++) {
                for ($l = $k + 1; $l < $size; $l++) {
                    for ($m = $l + 1; $m < $size; $m++)
                        $query .= "OR productName LIKE '%$keyword[$i]$keyword[$j]$keyword[$k]$keyword[$l]$keyword[$m]%' OR productDescription LIKE '%$keyword[$i]$keyword[$j]$keyword[$k]$keyword[$l]$keyword[$m]%' OR productLine LIKE '%$keyword[$i]$keyword[$j]$keyword[$k]$keyword[$l]$keyword[$m]%' ";
                }
            }
        }

    }
}



// // we will use a loop to create a query for each combination of 4 letters
// foreach ($keywords as $keyword) {
//     // size of $keyword word
//     $size = strlen($keyword);
//     for ($i = 0; $i < $size; $i++) {
//         for ($j = $i + 1; $j < $size; $j++) {
//             for ($k = $j + 1; $k < $size; $k++) {
//                 for ($l = $k + 1; $l < $size; $l++) {
//                     $query .= "OR productName LIKE '%$keyword[$i]%$keyword[$j]%$keyword[$k]%$keyword[$l]%' OR productDescription LIKE '%$keyword[$i]%$keyword[$j]%$keyword[$k]%$keyword[$l]%' OR productLine LIKE '%$keyword[$i]%$keyword[$j]%$keyword[$k]%$keyword[$l]%' ";
//                 }
//             }
//         }


//     }

// }

// // we will use a loop to create a query for each combination of 3 letters
// foreach ($keywords as $keyword) {
//     // size of $keyword word
//     $size = strlen($keyword);
//     for ($i = 0; $i < $size; $i++) {
//         for ($j = $i + 1; $j < $size; $j++) {
//             for ($k = $j + 1; $k < $size; $k++) {
//                 $query .= "OR productName LIKE '%$keyword[$i]%$keyword[$j]%$keyword
//                 [$k]%' OR productDescription LIKE '%$keyword[$i]%$keyword[$j]%$keyword
//                 [$k]%' OR productLine LIKE '%$keyword[$i]%$keyword[$j]%$
//                 [$k]%' ";
//             }
//         }
//     }
// }













// execute the query
$stmt = $conn->prepare($query);
$stmt->execute();

// let take the result
$result = $stmt->get_result();

$productsResult = array();
while ($row = $result->fetch_assoc()) {
    $productsResult[] = $row;
}

echo json_encode($productsResult);//this will show the exact result
// echo json_encode($size);
// echo json_encode($keywords);
// echo json_encode($result);//return empty object //if it will be parsed then [object Object]

$stmt->close();








// $keyword1 = $keywords[0];
// $keyword2 = $keywords[1];
// $keyword3 = $keywords[2];
// $keyword4 = $keywords[3];
// $keyword5 = $keywords[4];
// $keyword6 = $keywords[5];
// $keyword7 = $keywords[6];
// $keyword8 = $keywords[7];
// $keyword9 = $keywords[8];
// $keyword10 = $keywords[9];
// $keyword11 = $keywords[10];
// $keyword12 = $keywords[11];
// $keyword13 = $keywords[12];
// $keyword14 = $keywords[13];
// $keyword15 = $keywords[14];
// $keyword16 = $keywords[15];
// $keyword17 = $keywords[16];
// $keyword18 = $keywords[17];
// $keyword19 = $keywords[18];
// $keyword20 = $keywords[19];


// $stmt2 = $conn->prepare("SELECT * FROM products WHERE productName LIKE '%$keyword1%' OR productName LIKE '%$keyword2%' OR productName LIKE '%$keyword3%' OR productName LIKE '%$keyword4%' OR productName LIKE '%$keyword5%' OR productName LIKE '%$keyword6%' OR productName LIKE '%$keyword7%' OR productName LIKE '%$keyword8%' OR productName LIKE '%$keyword9%' OR
// productName LIKE '%$keyword10%' OR
// productName LIKE '%$keyword11%' OR
// productName LIKE '%$keyword12%' OR
// productName LIKE '%$keyword13%' OR
// productName LIKE '%$keyword14%' OR
// productName LIKE '%$keyword15%' OR
// productName LIKE '%$keyword16%' OR
// productName LIKE '%$keyword17%' OR
// productName LIKE '%$keyword18%' OR
// productName LIKE '%$keyword19%' OR
// productName LIKE '%$keyword20%'

// ");//works for exact sequence search.





// // $stmt2 = $conn->prepare("SELECT * FROM products WHERE productName LIKE '%$keyword1%' 
// // OR 
// // productName LIKE '%$keyword2%'");//works for exact sequence search.


// // now let's search these keywords in productLine

// $stmt3 = $conn->prepare("SELECT * FROM products WHERE productLine LIKE '%$keyword1%'
// OR productLine LIKE '%$keyword2%' 
// OR
// productLine LIKE '%$keyword3%' OR
// productLine LIKE '%$keyword4%' OR
// productLine LIKE '%$keyword5%' OR
// productLine LIKE '%$keyword6%' OR
// productLine LIKE '%$keyword7%' OR
// productLine LIKE '%$keyword8%' 
// ");


// // $stmt3 = $conn->prepare("SELECT * FROM products WHERE productLine LIKE '%$keyword1%'
// // OR productLine LIKE '%$keyword2%' ");






// $stmt1->execute();
// $result1 = $stmt1->get_result();
// $exactproducts = array();
// while ($row = $result1->fetch_assoc()) {
//     $exactproducts[] = $row;
//     // $exactproducts[] = $row['productCode'];
// }

// $stmt2->execute();
// $result2 = $stmt2->get_result();
// $sequenceproducts = array();
// while ($row = $result2->fetch_assoc()) {
//     $sequenceproducts[] = $row;
// }



// $stmt3->execute();
// $result3 = $stmt3->get_result();
// $lineproducts = array();
// while ($row = $result3->fetch_assoc()) {
//     $lineproducts[] = $row;
// }


// // echo json_encode($products);
// echo json_encode(array($exactproducts,$sequenceproducts,$lineproducts));


// $stmt1->close();
// $stmt2->close();
// $stmt3->close();




$conn->close();


?>