  <header class="header" id="headerIdCommon">

      <div class="headertitle" id="colorToggle">


          <div style="display: flex; justify-content: center;align-items:center;width:100vw">
             
              <img class="titlelogo" src="../files acc/title logo.png" alt="">

              <div style="display: block;">


                  <h3>Phenoxi Shanaya Bazaar</h3>
                  <h5>Buy with intention, live with purpose</h5>
              </div>


          </div>

          <div id="colorTheme">
              <ul id="switcher" style="display: flex;align-items:center;">
                  <li id="blueButton" onclick="chBackcolor('rgb(184, 184, 244)');"></li>
                  <li id="greyButton" onclick="chBackcolor('rgb(128, 128, 128)');">
                  </li>
                  <li id="chocolateButton" onclick="chBackcolor('rgb(76, 38, 11)');"></li>
                  <li id="whiteButton" onclick="chBackcolor('white');"
                      style="border: 2px solid red; background-color: White;"></li>
              </ul>

              <!-- later on apply js here -->
          </div>

      </div>

      <div class="mobiletop">


          <div class="menuitems">
             
              <a href="http://localhost:3000/index.php" class="topmenu underlineremover home">Home</a>
             
              <a href="http://localhost:3000/about.php" class="topmenu underlineremover about">About</a>
             
              <a href="http://localhost:3000/contact.php" class="topmenu  underlineremover contact">Contact</a>
              
              <a href="http://localhost:3000/need.php" class="topmenu underlineremover needs">Needs</a>
            
              <a href="http://localhost:3000/help.php" class="topmenu underlineremover help">Help</a>
              
              <a href="http://localhost:3000/HTMLGame.php" class="topmenu underlineremover">
                  <p>Play/Win</p>
                 
              </a>
              <a href="http://localhost:3000/animatedLogin.php" class="topmenu underlineremover">
                  <p class="loginCollapsed">Login</p>
              </a>
          </div>



          <div class="headerinputs">

              <img src="../files acc/logo_enhanced.png" alt="" id="shanayabazaar">
              <div class="optioninputbox">
                  <select class="boxstyling" id="mySelect" onchange="myFunctionOnChange()"
                      onhashchange="myFunctiononhashchange()">
                      <option value="allCategory">All</option>
                      <option value="women">Women</option>
                      <option value="men">Men</option>
                      <option value="kids">Kids</option>
                      <option value="beautyHealth">Beauty and Health</option>
                      <option value="accessories">Accessories</option>
                      <option value="homeGarden">Home and Garden</option>




                  </select>


                  <form name="searchProduct">
                      <div class="searchbox boxstyling">


                        
                          <input type="text" name="searchProductEnteredbyTyping" placeholder="Search..."
                              id="myInput" onkeyup="filterFunction()" onclick="myDropdownOpen()" class="dropbtn"
                              type="search" autocomplete="off" spellcheck="false" role="combobox"
                              aria-controls="matches" aria-expanded="false" aria-live="polite" ondblclick="removeDropDown()">

                          <button class="search" onclick="searchEnteredProduct(),removeDropDown()"><i class="fa  fa-search"
                                  type="submit"></i></button>

                      </div>


                     
                      <div id="myDropdownSearch" class="dropdownSearch-content">
                        
                          <p>Women</p>
                          <p>Men</p>
                          <p>kids</p>
                          <p>Beauty and health</p>
                          <p>Accessories</p>
                          <p>home and kitchen</p>


                      </div>
                  </form>
              </div>

          </div>

      </div>



      <div id="offline1" class="mahalootdesclaimer">




          <div class="mahalootscrollingsection ">




              <p>Welcome to Maha loot, your go-to destination for all things fabulous! Step into a world of style
                  and
                  savings with our wide range of products. Shop now and stand a chance to win big - one lucky
                  customer
                  walks away with a Rs 1001 coupon every day! Don't miss out on this exciting opportunity to shop
                  and
                  win with Maha loot. Start browsing now and treat yourself to something special!</p>
          </div>
      </div>





  </header>

  <!-- <div class="progressbar" onprogress="progressbar()"> </div> -->
  <div class="progressbar" onload="progressbar()" > </div>

  <!-- <br> -->

  <div id="Welcome">

      <div> Welcome
          <p id="user" style="color: aqua;font-size: medium;font-weight: bolder;">......... </p> to Shanaya
          Bazaar.
      </div>

      <p class="icon">
        
          <a href="http://localhost:3000/cart.php"> <i class="fa fa-shopping-cart visitCart"></i></a>

         
          <a href="http://localhost:3000/animatedLogin.php">
            

              <i class="fa fa-user loginCollapsed " aria-hidden="true"></i>



          </a>


      </p>
      <div class="loginHoveredDetails">



          <form class="loginDetailOfUser" method="POST" action="" enctype="multipart/form-data">

              <input type="text" name="hiddenCustomerNumber" class="CustomerNumber" style="display: none;" />
              <h3 class="userName">Name</h3>
              <div>
                  <img class="profileImage profileBackground">
                  <br>
                  <!-- Profile -->
              </div>
              <div class="profilePhotoSet">

                  <h6>Customize Profile</h6>


                  <?php include(__DIR__ . '../../uploadProfileImage.php'); ?>


                  <input type="file" name="uploadfile" onchange="getFileData(this);"></input>

                  <input style="cursor: pointer;display: none;color: aqua;" type="submit" name="submit"></input>


              </div>

              <p class="emailOfThisUser">Email : </p>
              <h6>Highest Score : <p class="score"></p>
              </h6>
              <h6>Win Amount : &#8377;<p class="credit"></p>
              </h6>


              <br>
            
              <a href="http://localhost:3000/animatedLogin.php">
                  <button type="button">Switch User</button>
              </a>

          </form>


      </div>


      <div class="clickedReviewImg" style="display: none;">
          <button type="button" class="cuttab" onclick="cutImgbutton(this)">✖</button>
          <img src="" class="imgOpener"
              style="height:90vh;width:100vw;max-width:428px;position:fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index:3" />
      </div>




  </div>

  <script>
      if (document.getElementById("mainPageHrefOrSrc")) {
          var mainPageHrefOrSrc = document.getElementById("mainPageHrefOrSrc").innerHTML;

          mainPageHrefOrSrc = mainPageHrefOrSrc.trim();
      }
  </script>