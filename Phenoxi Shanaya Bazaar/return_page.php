<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Return Product</title>




    <link rel="stylesheet" href="/style2.css">
    <link rel="stylesheet" href="returnPageStyle.css">


    <!-- <link rel="preload" href="script.js" as="script"> -->
    <link rel="preload" href="traceShanayaBazaar.js" as="script">
    <link rel="preload" href="shanayaBazaarCookie.js" as="script">
    <link rel="preload" href="allPageCommonScript.js" as="script">














</head>

<?php include 'includes/navigation.php'; ?>


<body>
    <div class="container">
        <h1>Return Product</h1>

        <div class="order-info">
            <p><strong>Order Number:</strong> <span id="displayOrderNumber"></span></p>
            <p><strong>Product Code:</strong> <span id="displayProductCode"></span></p>
        </div>

        <form id="returnForm" enctype="multipart/form-data">
            <input type="hidden" id="orderNumber" name="orderNumber">
            <input type="hidden" id="productCode" name="productCode">

            <div class="form-group">
                <label>Select Return Option</label>
                <div class="radio-group">
                    <label class="radio-option">
                        <input type="radio" name="returnOption" value="return" required>
                        <span class="checkmark"></span>
                        Return Product
                    </label>
                    <label class="radio-option">
                        <input type="radio" name="returnOption" value="replace">
                        <span class="checkmark"></span>
                        Replace Product
                    </label>
                    <label class="radio-option">
                        <input type="radio" name="returnOption" value="refund">
                        <span class="checkmark"></span>
                        Refund Amount
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label>Reason for Return</label>
                <select id="returnReason" name="returnReason" required>
                    <option value="">Select a reason</option>
                    <option value="quality_issue">Quality Issue</option>
                    <option value="damaged">Damaged Product</option>
                    <option value="part_missing">Part/Accessory Missing</option>
                    <option value="wrong_item">Wrong Item Received</option>
                    <option value="size_issue">Size Issue</option>
                    <option value="color_issue">Color Issue</option>
                </select>
            </div>

            <div class="form-group">
                <label for="description">Additional Details</label>
                <textarea id="description" name="description" placeholder="Please provide more details about the issue..."></textarea>
            </div>

            <div class="form-group">
                <label>Upload Product Photo (for verification)</label>
                <div class="photo-upload">
                    <input type="file" id="productPhoto" name="productPhoto" accept="image/*" required>
                    <label for="productPhoto" class="upload-label">Choose File</label>
                    <p id="file-name">No file chosen</p>
                    <div id="preview-container">
                        <img id="image-preview" src="#" alt="Preview">
                    </div>
                </div>
            </div>

            <button type="submit" class="btn-submit">Submit Return Request</button>
        </form>
    </div>

   


    <script src="returnScript.js" defer></script>
    <script src="script.js" defer></script>
    <script src="traceShanayaBazaar.js" defer></script>
    <script src="shanayaBazaarCookie.js" defer></script>
    <script src="allPageCommonScript.js" defer></script>







</body>

</html>