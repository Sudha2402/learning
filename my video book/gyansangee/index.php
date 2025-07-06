<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GyanSangee</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="bookContainer">
        <div class="stars" id="stars"></div>
        <div class="book-container">
            <div class="book" id="book">
                <div class="cover" id="cover">
                    <div class="title">Gyan Sangee</div>
                    <div class="logo">
                        <img src="attachments/gyan sangee.jpg" alt="Gyansangee">
                    </div>
                    <div class="author"> - By Sudha Kumari</div>
                </div>
                <div class="pages" id="pages">
                    <!-- Pages will be created dynamically by JavaScript -->
                </div>
            </div>
        </div>

        <div class="controls">
            <button id="openBtn" class="btn">Open Book</button>
            <div id="navControls" class="hidden">
                <button id="prevBtn" class="btn btn-nav">&lt;</button>
                <div id="pageIndicator" class="page-indicator">Page 1/5</div>
                <button id="nextBtn" class="btn btn-nav">&gt;</button>
            </div>
        </div>

        <div id="candleContainer">
            <div class="candle">
                <div class="candle-body"></div>
                <div class="candle-top"></div>
                <div class="candle-wick"></div>
                <div class="glow"></div>
                <div class="flame"></div>
                <div class="spark"></div>
                <div class="spark"></div>
                <div class="spark"></div>
                <div class="spark"></div>
            </div>
        </div>
    </div>

    <!-- <script src="gyansangeefinal.js"></script> -->
    <!-- <script src="gyansangeePlaylistPlay.js"></script> -->
    <script src="GyanSangeeLogic.js"></script>
</body>
</html>