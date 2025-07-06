<!DOCTYPE html>
<html lang="en">

<head>

    <title>orders</title>

    <link rel="stylesheet" type="" href="styleneeds.css">

    <link rel="stylesheet" href="/allPageCommonStyle.css">

<link rel="stylesheet" href="/style2.css">
     <link rel="preload" href="script.js" as="script">
    <link rel="preload" href="traceShanayaBazaar.js" as="script">
    <link rel="preload" href="shanayaBazaarCookie.js" as="script">
    <link rel="preload" href="allPageCommonScript.js" as="script">


    
    <style>
    
    .returnOrder {
        background-color: rgb(12, 203, 43);color: white; font-size: larger;
    }

    .returnOrder:hover {
        transform: scale(1.05);
        filter: contrast(120%);
    }

    </style>


</head>


 <?php include 'includes/menu.php'; ?>

<body onafterprint="alert('This document is now being printed')">
   
    <img src="files acc/logo_enhanced.png"" alt="" width="170">
    
    
    
    
    <h1>Your orders</h1>
     <p>
        <button type="text" onclick="printPage()"
            style="float: right; background-color: rgb(12, 203, 43);color: white; font-size: larger;">Print</button>
    </p>
    <h4>Buy with intention, live with purpose</h4>
   

  
    <br>

    <br>


    <div id="orderedlist" >
      
    </div>

    <div class="bootfooter"  >
    <span>
        <h2>have a nice and joyful life</h2>
    </span>
    <h3><a href="index.php">Want to Add more products in you need<img src="files acc/logo_enhanced.png" alt=""
        width="100px"></a>
</h3>
</div>
   
</body>


<script src="allPageCommonScript.js"></script>
<script src="needdatabase.js"></script>
<script src="pagesnavigation.js"></script>

</html>