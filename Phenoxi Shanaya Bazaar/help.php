<!DOCTYPE html>
<html lang="en">

<head>
    <title>help</title>
    <link rel="stylesheet" type="" href="helpStyle.css" />

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rancho&effect=shadow-multiple">

    <!-- <script src="help.js"> </script> -->
    <!-- here script is not working -->

    <link rel="stylesheet" href="allPageCommonStyle.css">

    <!-- <script src="allPageCommonScript.js"></script> -->

     <link rel="stylesheet" href="/style2.css">
     <link rel="preload" href="script.js" as="script">
    <link rel="preload" href="traceShanayaBazaar.js" as="script">
    <link rel="preload" href="shanayaBazaarCookie.js" as="script">
    <link rel="preload" href="allPageCommonScript.js" as="script">

</head>

<?php include 'includes/navigation.php'; ?>
<body>

 <img src="files acc/help.png" alt="consumers right" class="helpPoster">

    <div class="background-image">

    </div>

        <div class="scrollsection">
            
    
    <div id="requestAnimationFrameId">
        We will be glad to help you
    </div>
</div>

    <div class="content">

 
        <h1>Your rights are our responsibility</h1>
        <h2>Here is some helps</h2>
        <h3>Issues</h3>
        <a href="contact.php">
            <p>1. If you have any issues with the website, please ,Contact for help</p>
        </a>
        <a href="animatedLogin.php">
            <p>2. If you have login problem, please ,try again to login</p>
        </a>
        <br>
        <br>

        <p class="simpleHeighlight">3. If you have any other issues, please describe below in the box</p>

        <textarea id="issues" rows="10" cols="65" placeholder="describe your issues here"></textarea>

        <button type="submit" onclick="submitIssueMentioned()">Submit</button>

        <h3>Complaints</h3>
        <label for="badquality"><input type="checkbox" name="complaints" value="badquality">Bad Quality</label>
        <label for="damaged"><input type="checkbox" name="complaints" value="damaged">Damaged</label>
        <label for="missing"><input type="checkbox" name="complaints" value="missing">Missing products</label>
        <label for="wrong"><input type="checkbox" name="complaints" value="wrong">Wrong products</label>
        <label for="other"><input type="checkbox" name="complaints" value="other">Other</label>
        <br>
        <br>
        <textarea id="complaintdescription" rows="10" cols="65"
            placeholder="describe the complain with complete details"></textarea>
       

        <button type="submit" onclick="submitComplainMentioned()">Submit</button>

        <br>
        <br>
        <a href="rights.php">Consumer Rights and responsibilities</a>
        

    </div>

</body>

<?php include 'includes/footer.php'; ?>
<script src="help.js"> </script>


<script src="allPageCommonScript.js"> </script>
<script src="script.js" defer></script>
        <script src="traceShanayaBazaar.js" defer></script>
        <script src="shanayaBazaarCookie.js" defer></script>
        <script src="allPageCommonScript.js" defer></script>

</html>