// alert("navigationpage");

var EmailAddress;
EmailAddress = sessionStorage.getItem("EmailAddress");
// alert(EmailAddress);

if(EmailAddress === null || EmailAddress ===undefined){
// we can also get it from local storage
EmailAddress = localStorage.getItem("EmailAddress");
// alert(EmailAddress);
}




    // select * from products WHERE mainProductImage IS NOT NULL;
    // SELECT * FROM customers_data;
    // SELECT * FROM customers_data WHERE CustomersProfilePhoto IS NOT NULL;

// DELETE from products where productCode='WWWM1';

    // INSERT INTO products VALUES('AGP1','Four Sided Folding Mirror','accessories general products','','Four Sided Folding Mirror , Four Panel Folding Mirror, Compact Pocket Mirror with Multiple Panels, Travel Makeup Mirror with Adjustable Views,Material - ABS, Glass Functional & Usage Benefits Unveiling Your Beauty from Every Angle , Four Strategically Placed Panels: This mirror boasts four distinct panels that offer a variety of magnification levels and viewing angles. Compact and Portable Design: The four panels neatly fold into a compact unit, making it easy to slip into your purse, makeup bag, or even a pocket. This allows you to take your vanity essentials with you anywhere, ensuring you can achieve a flawless look on the go. Lightweight Construction: The mirror’s lightweight construction minimizes bulk in your bag. This makes it perfect for travel or carrying in your purse all day without added weight or inconvenience. Pocket Mirror with Stand, Magnifying Mirror for Travel, Adjustable Angle Makeup Mirror ','10','139','185','GPW0001-Four-Sided-Folding-Mirror.jpeg');
    
// UPDATE products set mainProductImage='product/accessories/general products/Four Sided Folding Mirror/GPW0001-Four-Sided-Folding-Mirror.jpeg' where productCode='AGP1';

// INSERT INTO products VALUES('AHB1','Graceful Stylish Slingbags Luxury High Quality PU Leather Women Shoulder Bag','accessories general products ,light green,white,grey,pink,dark green,sky blue,brown,red,peach','','Graceful Stylish Slingbags Luxury High Quality PU Leather Women Shoulder Bag small-sized shoulder bag tailored for women and girls , Graceful Stylish Slingbags Luxury High Quality PU Leather Women Shoulder Bag','10','472','800','product/accessories/handbags/Graceful Stylish Slingbags Luxury High Quality PU Leather Women Shoulder Bag/colors option/light green/main.png');

// INSERT INTO products VALUES('AHB2','Beautiful Sling Bags for women and girls','accessories general products ,white,purse','','Name : Beautiful Sling Bags for women and girls,Material : Faux Leather/Leatherette,No. of Compartments : 1,Pattern : Quilted,Net Quantity (N) : 1,Sizes : Free Size (Length Size: 12 in, Width Size: 3 in, Height Size: 10 in)','10','236','400','product/accessories/handbags/Beautiful Sling Bags for women and girls/colors option/white/main.png');

// INSERT INTO products VALUES('HADU1','Foldable Mini Capsule Umbrella Outdoor','home and kitchen,daily use','','SMALL & PORTABLE UMBRELLA WINDPROOF ,UNIQUE FOLDING UMBRELLA,UMBRELLA FOR SUN & RAIN,UNIQUE FOLDING UMBRELLA,UMBRELLA FOR SUN & RAIN ','10','232','399','product/home and kitchen/daily use/Foldable-Mini-Capsule-Umbrella Catelog - 250208021353/Foldable-Mini-Capsule-Umbrella-1720498695 Main.jpg');

// INSERT INTO products VALUES('KA1_2024','Electric Capsule Cutter Grinder Machine Kitchenware','home and kitchen,daily use','','Mini food chopper assists you easily chop vegetables, meat, fruits, crush ice cubes so on with 4-piece sharp stainless steel blades. Save prep time for your daily meals and allow you have more spare time ','10','399','499','product/home and kitchen/daily use/Foldable-Mini-Capsule-Umbrella Catelog - 250208021353/Foldable-Mini-Capsule-Umbrella-1720498695 Main.jpg');

// INSERT INTO products VALUES('ABAHHC1','Earpick Cleaner Tool Set Beauty Mackup Tool Personal Care','beauty and health , health care,daily use','','6 Pcs Ear Pick with a Storage Box Earwax Removal Kit | Ear Cleansing Tool Set | Resuable Ear Cleansing Tool Set | Stainless Steel Spiral Ear Curette Ear Wax Remover Tool with Cleaning Brush (6 Pcs Kit) ( Silver ) ','10','55','69','product/beauty and health/health care/Earpick-Cleaner-Tool-Set-Beauty-Mackup-Tool Catelog - 250207090729/Earpick-Cleaner-Tool-Set-Main.jpg');

// INSERT INTO products VALUES('HC2_2024','Head Massager for Pain Relief Massager','beauty and health , health care,daily use','','Head Scalp Massager | Machine Head Massager Scalp Scratcher 12 Fingers Head Scratcher For Head Massage Body Relaxing | Hair Massage for Pain Relief ','10','35','50','product/beauty and health/health care/Head-Massager-for-Pain-Relief Catelog - 250207112506/Head-Massager-for-Pain-Main.jpg');

// INSERT INTO products VALUES('MU_2024','7 in 1 cosmetics bottle Personal Care','beauty and health , health care,daily use','','Refillable Cosmetic Container Kits | Bathroom Cosmetic Organizers | Refillable Containers | Ironing Spray Bottles,Material: Plastic/Acrylic,Water Bottles & Flasks | Kitchen Containers | Kitchen, Cookware & Serveware','10','99','180','product/beauty and health/makeup/7-in-1-cosmetics-bottle Catelog - 250208111013/7-in-1-cosmetics-bottle-1714370461 Main.jpg');

// INSERT INTO products VALUES('HC3_2024','Electric Hot Water Bag for Pain Relief Personal Care','beauty and health , health care,daily use','','Hot Water Bag, Heating Bags for Pain Relief, Electric Heating Pad, Heat Water Bottle (Multi Color),','10','78','130','product/beauty and health/health care/Electric-Hot-Water-Bag-for-Pain-Relief Catelog - 250208125716/Electric-Hot-Water-Bag-for-Pai1-1678772917.jpg');

// INSERT INTO products VALUES('HC3','Relax & Spin Tone Handheld Body Massager','beauty and health , health care,daily use','','Name : Relax & Spin Tone Handheld Body Massager ®Relax Tone Body Massager Machine For Pain Relief & Fat Burning (RT4) (Multi) Massager (White),Complete Body Massager Full Body Muscles Relief Fat Burning Body Slimmer very helpful in body pain relief. Very suitable for the waist, neck, shoulder, arm, hips, thighs and lower leg abdomen, and so on Allows you to use the simple way and movement and relax your body. Also Improves Blood Circulation,Material : Abs Plastic','10','867','1700','product/beauty and health/health care/Relax Spin Tone Body Full Body Massager Electric Machine with 3 Massage Heads for Pain Relief and Relaxation, For Back, Leg & Foot/relax-spin-tone-body-full-body-m.png');

// INSERT INTO products VALUES('HC6_2024','Electric Velvet heating bags for Pain Relief Personal Care','beauty and health , health care,daily use','','Velvet Heating Bag, Heat Bags for Pain Relief with soft velvet hand pocket, Electric hot Pad, Heat Water Bottle (Multi Color),electric charge gives heated pad,Electric Heating Pads,Hot Bags | Pain Relief Devices ','10','867','1700','product/beauty and health/health care/Electric Velvet heating bags for Pain Relief Personal Care/Electric-Velvet-heating-bags-f6-1678777060.jpg');



//INSERT INTO products VALUES('WWWM1','Women Floral V-neck Green Dresses','women ,western wear ,party wear,black,green,purple,violet,white','','Women Floral V-neck Green Dresses , Fabric : Crepe,Sleeve Length : Long Sleeves,Pattern : Printed ','10','490','700','product/women/western wear/Women Floral V-neck Multicolor Dresses/colors option/black/nm3lu_512.png');





//INSERT INTO products VALUES('WEWK1','Women Straight Printed Kurti Dresses','women ,festival wear ,party wear,black,dark blue,green,purple','','Women Straight Printed Kurti,Fabric : Rayon,Sleeve Length : Three-Quarter Sleeves,Pattern : Printed.Impress Everyone With Your Stunning Traditional Look By Wearing This Embroidered Gather Anarkali Kurta. Fine Finish And Latest Designs, The Trendy Work & Designs Speak A Language Of Elegance And Felinity, Using The Finest Quality Fabrics And Is Trendy Fashionable As Well As Comfortable.It Is Light In Weight And Will Be Soft For Your Skin. This Set Helps You Looking A Sophisticated Look And Enhance The Beauty Of The Women Which Can Be Worn For Functions, Festivals, Parties And Even Wedding Also. You Will Be A Centre Of Attraction In The Event Once You Wear It','10','360','600','product/women/ethnic wear/kurtis/Women Straight Printed Kurti/colors option/black/main.png');

//INSERT INTO products VALUES('WEWK2','New Trendy Embroidery Gaithering Anarkali kurtis','women ,festival wear ,party wear,maroon,dark blue,green,pink,blue','','New Trendy Embroidery Gaithering Anarkali kurtis,Fabric : Rayon,Sleeve Length : Three-Quarter Sleeves,Pattern : Printed ,Impress Everyone With Your Stunning Traditional Look By Wearing This Embroidered Gather Anarkali Kurta. Fine Finish And Latest Designs, The Trendy Work & Designs Speak A Language Of Elegance And Felinity, Using The Finest Quality Fabrics And Is Trendy Fashionable As Well As Comfortable.It Is Light In Weight And Will Be Soft For Your Skin. This Set Helps You Looking A Sophisticated Look And Enhance The Beauty Of The Women Which Can Be Worn For Functions, Festivals, Parties And Even Wedding Also. You Will Be A Centre Of Attraction In The Event Once You Wear It.','10','360','600','product/women/ethnic wear/kurtis/Embroidery Gaithering Anarkali kurtis/colors option/maroon/spnia_512.png');


//INSERT INTO products VALUES('WEWS1','two tone Georgette Saree with blouse','women ,festival wear ,party wear,grey,blue black,dark blue,green,pink,blue,purple,violet','','Name : two tone Georgette Saree with blouse,Saree Fabric : Georgette,Blouse : Separate Blouse Piece,Blouse Fabric : Silk,Pattern : Colorblocked,Blouse Pattern : Solid.','10','444','740','product/women/ethnic wear/saree/Two-Tone Georgette Saree With Blouse/colors option/grey/cgvon_512.png');

//INSERT INTO products VALUES('WEWS2','satin silk saree with Blouse','women ,festival wear ,party wear,grey,blue black,dark blue,green,blue,purple,violet,red,yellow,black','','Name : satin silk saree with Blouse,Saree Fabric : Satin Silk,Blouse : Separate Blouse Piece,Blouse Fabric : Jacquard,Pattern : Colorblocked,Blouse Pattern : Printed','10','444','740','product/women/ethnic wear/saree/satin silk saree with Blouse/colors option/violet/main.png');

// alter table products modify productLine varchar(200);

//INSERT INTO products VALUES('WEWSB1','banarasi saree trendy design','women ,festival wear,party wear,varanasi,banarsi,green,blue,dark blue,purple,violet,red,maroon,orange','','Name : Banarasi satin silk saree,Saree Fabric : Satin Silk,Blouse : Separate Blouse Piece,Blouse Fabric : Banarasi Silk,Pattern : Zari Woven,Blouse Pattern : Same as Border','10','444','740','product/women/ethnic wear/saree/Banarsi/banarasi saree/colors option/green/fufrj_512.png');

//INSERT INTO products VALUES('WEWKS1','Georgette Salwar Suit Set Floral Embroidered','women ,festival wear,party wear,Salwar Suit Set,green,blue,dark blue,purple,violet,black,musturd yellow','','Name :,Georgette Salwar Suit Set Floral Embroidered,Kurta Fabric : Georgette,Sleeve Length : Long Sleeves,Set Type : Kurta With Bottomwear,Bottom Type : Pants,Pattern : Embroidered','10','495','900','product/women/ethnic wear/kurta sets/Pakistani Suit  Women Kurta Pair/colors option/green/main.png');


//INSERT INTO products VALUES('WEWL1','solid Semi Stitched Lehenga Choli','women ,festival wear,party wear,Lehenga Choli,green,pink,dark blue,black','','Name : Solid Semi Stitched Lehenga Choli,The blouse will come un-stitched. only fabric will come so you can either attach the sleeve to it or keep it sleeveless.,Lehengha, blouse and dupatta fabric is jacquard,Lehenga length is 44 inches.','10','885','1500','product/women/ethnic wear/lahenga/Solid Semi Stitched Lehenga Choli/colors option/blue/Screenshot 2025-02-10 214459.png');

//if ' in between is creating problem then use \' then it will remove error

//INSERT INTO products VALUES('WEWL2','Velvet Embroidered Semi Stitched Lehenga Choli for Women','women ,festival wear,party wear,Lehenga Choli,maroon,violet,purple','','Name : Velvet Embroidered Semi Stitched Lehenga Choli for Women,The blouse will come un-stitched. only fabric will come so you can either attach the sleeve to it or keep it sleeveless.,Name : Velvet Embroidered Semi Stitched Lehenga Choli for Women,Topwear Fabric : Velvet,Bottomwear Fabric : Velvet,Dupatta Fabric : Net,Set type : Choli And Dupatta,Top Print or Pattern Type : Embroidered,Bottom Print or Pattern Type : Embroidered,Dupatta Print or Pattern Type : Embroidered,Sizes :,Free Size (Lehenga Waist Size : 44 in, Lehenga Length Size: 23 in)','10','885','1500','product/women/ethnic wear/lahenga/Velvet Embroidered Semi Stitched Lehenga Choli for Women/colors option/nfuto_512.png');

//INSERT INTO products VALUES('WEWL3','Beautifull Embroidey Zari Work Lehenga For Women With Blouse Piece And Dupatta','women ,festival wear,party wear,Lehenga Choli,dark blue,embroidary design,heavy work','','Name : Beautifull Embroidey Zari Work Lehenga For Women With Blouse Piece And Dupatta,Topwear Fabric : Velvet,Bottomwear Fabric : Velvet,Dupatta Fabric : Net,Set type : Choli And Dupatta,Top Print or Pattern Type : Embroidered,Bottom Print or Pattern Type : Embroidered,Dupatta Print or Pattern Type : Solid','10','880','1600','product/women/ethnic wear/lahenga/Beautifull Embroidey Zari Work Lehenga For Women With Blouse Piece And Dupatta/colors option/cgp6r_512.png');

//INSERT INTO products VALUES('WWAW1','Flowered Dial Megnet Watch','women ,festival wear,party wearwatch,black,pink','','Name : Flowered Dial Megnet Watch for Womens and Girls Combo Watches for Women and Girl Pack of 2,Strap Material : Alloy,Case/Bezel Material : Alloy,Case : The Goal,Clasp Type : Bracelet,Date Display : No,Dial Color : Black,Dial Design : Flowers Design,Dial Shape : Round,Dual Time : No,Light : No,Mechanism : Quartz,Power Source : Battery Powered,Scratch Resistant : No,Shock Resistance : No,Water Resistance : No,Add On : Others,Net Quantity (N) : 2,Dark Black color Magnetic belt diamond Studded watch for girls or women Analog Watch - For Women Malmo 21st Century Black Color,Sizes :,Free Size (Dial Diameter Size : 20 mm)','10','880','1600','product/women/women accessories/watch/Flowered Dial Megnet Watch/colors option/ssr1i_512.png');

//INSERT INTO products VALUES('G1','Artificial Gold Plated 24K Gold Rose with Love Stand Valentine Day Gift for Girlfriend, Boyfriend, Husband & Wife','gifts,red , golden,with stand,love','','Name : Artificial Gold Plated 24K Gold Rose with Love Stand Valentine Day Gift for Girlfriend, Boyfriend, Husband & Wife (Pack of 1)','10','295','500','product/gifts/Artificial Red Rose 24K Gold Plated/colors option/red/wk92y_512.png');

//INSERT INTO products VALUES('KGW1',\'stylish Beautiful Printed Cotton Frock And Jacket Dresses','girls frock','','Name : Stylish Beautiful Printed Cotton Frock And Jacket Dresses For Girls (pack Of 1) Sizes: 0-15 Years,Fabric : Cotton,Sleeve Length :,Three-Quarter Sleeves,Pattern : Printed','10','138','250','product/kids/girl wear/Stylish Beautiful Printed Cotton Frock And Jacket Dresses/colors option/red/main.png');

//INSERT INTO products VALUES('KGW2',\'stylish Partywear Multicolor Cotton Girls Frocks & Dresses','girls frock','','Name : Stylish Partywear Multicolor Cotton Girls Frocks & Dresses,Fabric : Cotton,Sleeve Length : Three-Quarter Sleeves,Pattern : Printed','10','138','250','product/kids/girl wear/Stylish Partywear Multicolor Cotton Girls Frocks & Dresses/colors option/brown/g3gkk_512.png');

//INSERT INTO products VALUES('WTW1','Embroider flower top','women top','','Name : New Trendy Embroidery Gaithering Anarkali kurtis,Fabric : Rayon,Sleeve Length : Three-Quarter Sleeves,Pattern : Printed','10','210','350','product/women/top wear/White embroidery short top/colors option/white/main.png');

//INSERT INTO products VALUES('WTW2','Classic Glamorous Women Shirts top','women top shirt','','Name : Classic Glamorous Women Shirts.Fabric : Cotton Blend,Sleeve Length : Long Sleeves,Pattern : Solid','10','185','240','product/women/top wear/Classic Glamorous Women Shirts/colors option/black/edrio_512.png');

//INSERT INTO products VALUES('WTW3','latest trending classic check shirt and top for woman and classic check shirt and top for kids girl casual shirt and casual top for girl and woman','women top shirt crop top','','Name : latest trending classic check shirt and top for woman and classic check shirt and top for kids girl casual shirt and casual top for girl and woman,Fabric : Cotton,Sleeve Length :,Three-Quarter Sleeves,Pattern : Checked','10','140','350','product/women/top wear/latest trending classic check shirt and top/colors option/black/main.png');

//INSERT INTO products VALUES('WTW4','woman half kurti top','women top ,blue','','Name : latest trending top for woman and classic check shirt and top for kids girl casual shirt and casual top for girl  and woman ,Fabric : Viscose Rayon,Sleeve Length : Three-Quarter Sleeves,Pattern : Printed','10','197','352','product/women/top wear/woman half kurti top/colors option/blue/main.png');




//INSERT INTO products VALUES('WFW1','Patent Leather Heel Sandals','women footwear ,black , peach','','Name : Patent Leather Heel Sandals,Fastening & Back Detail : Slip-On,Heel Height (in) : 3 inches,Heel Type : Block,Material : Patent Leather','10','413','750','product/women/footwear/Patent Leather Heel Sandals/colors option/peach/tggz6_512.png');

//INSERT INTO products VALUES('Sk1','3 In 1 Electric Face Massager','beauty and health, skin care','','3 In 1 Electric Face Massager 3 In 1 Electric Face Massager - Anti Wrinkle and Anti Ageing Vibration Machine 3 in 1 Facial Massage Instrument Firming Wrinkle Beauty Devicer for Facial/Neck/Eye, Multifunctional Vibration Massage Instrument, 3-in-1 Facial Skincare Instrument for Skin Care for Improve,Smooth and Tightening Skin','10','424','800','product/beauty and health/skin care/3 In 1 Electric Face Massager/pgigs_512.png');

//INSERT INTO products VALUES('Sk2','Matico Brightening & Whitening Vitamin C Face Serum, hyaluronic acid for Anti pimple, Acne Free Skin, Aloe Vera extract for face Anti Ageing, Face Oil & Serum for Dry Skin and Oily Skin, Fairness & Face Glow | 30ml *2','beauty and health, skin care','','Product Name : Matico Brightening & Whitening Vitamin C Face Serum, hyaluronic acid for Anti pimple, Acne Free Skin, Aloe Vera extract for face Anti Ageing, Face Oil & Serum for Dry Skin and Oily Skin, Fairness & Face Glow | 30ml *2,Brand Name : Matico,Skin Type : All Skin Types,Flavour : Vitamin C,Net Quantity (N) : 2,Concern : Whitening','10','186','350','product/beauty and health/skin care/Matico Brightening & Whitening Vitamin C Face Serum/main.png');

//INSERT INTO products VALUES('Sk3','The Derma Co. 2% Salicylic Acid Serum with Witch Hazel & Willow Bark for Active Acne','beauty and health, skin care','','Name : The Derma Co. 2% Salicylic Acid Serum with Witch Hazel & Willow Bark for Active Acne - 10ml,Brand Name : Mamaearth,Skin Type : All Skin Types,Flavour : No Flavour,Net Quantity (N) : 1,Concern : No Concern,Let acne be a short story! The Derma Co. 2% Salicylic Acid Serum is a multitasking formulation that treats acne, unclogs pores, and prevents skin damage. Introduce this skincare BFF to your regimen and you are sorted! The combination of 2% Salicylic Acid & Witch Hazel exfoliates the pores, walls to prevent the appearance of whiteheads and blackheads. With no more sebum in the pores, it eventually stops the formation of acne. When pimples say hi, give them the best farewell with this super serum! Bring on the best of the filter-free YOU with your spotless, unique & youthful skin.','10','224','260','product/beauty and health/skin care/The Derma Co Kojic Acid Face Serum/main.png');


//INSERT INTO products VALUES('WWAP1','Ramsons - U R LOVELY Eau De Parfum | 30 ML | Perfume For Women | TN - Bergamot, Peach, Orange, Grapefruit, Aquatic | MN - Lilly of the valley, Rose, Jasmine, Cinnamon | BN - Woody, Musk, Vanilla','perfume,women perfume,men perfume,beauty and health, skin care,body care','','Name : Ramsons - U R LOVELY Eau De Parfum | 30 ML | Perfume For Women | TN - Bergamot, Peach, Orange, Grapefruit, Aquatic | MN - Lilly of the valley, Rose, Jasmine, Cinnamon | BN - Woody, Musk, Vanilla ,Ramsons U R Lovely Eau De Parfum 30ml |Perfume For Women| Long Lasting Perfume | Luxury Perfume | Premium Perfume','10','192','240','product/women/women accessories/perfume/Ramsons - U R LOVELY Eau De Parfume/colors option/xqawd_512.png');

//INSERT INTO products VALUES('MBW1','331 Jogger Trackpant','men ,bottom wear,331 Jogger Trackpant','','Name : 331 Jogger Trackpant,Fabric : Polycotton,Pattern : Solid,Net Quantity (N) : 1','10','319','490','product/men/bottom wear/331 Jogger Trackpant/colors option/white/iz8wr_512.png');

//INSERT INTO products VALUES('WBW1','Anara Fashion Women Solid Bell Bottoms Black Trousers & Pants','black,women pant,bottom wear,trouser,pant','','Name : Anara Fashion Women Solid Bell Bottoms Black Trousers & Pants,Fabric : Cotton Blend,Pattern : Solid,Net Quantity (N) : 1','10','138','450','product/women/bottom wear/Anara Fashion Women Solid Bell Bottoms Black Trousers & Pants/colors option/black/rj4nc_512.png');


//INSERT INTO products VALUES('MMAS1','SPORTS SOCKS FOR MEN 12 PAIR','black,grey,blue,green,sports socks,shock,','','Name : SPORTS SOCKS FOR MEN 12 PAIR,Color : Multicolor,Fabric : Cotton,Length : Ankle length,Net Quantity (N) : 12,Pattern : Printed,Type : Sports socks,Each pair of socks is made only from combed cotton of the premium most quality and incorporates an all round terry design that provides ample cushioning to your feet while winking moisture away to keep your feet fresh and odour free. The top grade elastic that keeps the socks firm to your feet is selected carefully to ensure a comfortable fit and long-lasting durability','10','192','240','product/men/men accessories/sports shocks/SPORTS SOCKS FOR MEN 12 PAIR/colors option/2wzfz_512.png');

//INSERT INTO products VALUES('MTW1','Stylish Glamorous Men Shirts','black shirt, t shirt,Tshirt','','Name : Stylish Glamorous Men Shirts,Fabric : Polycotton,Sleeve Length : Long Sleeves,Pattern : Checked,Net Quantity (N) : 1','10','315','450','product/men/top wear/Stylish Glamorous Men Shirts/colors option/black/5sg2j_512.png');






















var pageNavigation = [

    // { productID:"S11_2024", productURL: "/Hair%20Spa%20Cap%20Steamer%20For%20Women%20Beauty%20Products.html" },

    // { productID:"S10_2016", productURL: "http://127.0.0.1:5501/product/accessories/general%20products/Four%20Sided%20Folding%20Mirror/Four%20Sided%20Folding%20Mirror.html" },
    
    { productID:"home", productURL: "http://localhost:3000/shanaya_bazaar_main.php" },
    { productID:"about", productURL: "http://localhost:3000/about.html" },
   
    { productID:"contact", productURL: "http://localhost:3000/contact.html" },
    { productID:"need", productURL: "http://localhost:3000/need.html" },
    { productID:"help", productURL: "http://localhost:3000/help.html" },
    { productID:"login", productURL: "http://localhost:3000/animatedLogin.html" },

    { productID:"AGP1", productURL: "http://localhost:3000/product/accessories/general%20products/Four%20Sided%20Folding%20Mirror/Four%20Sided%20Folding%20Mirror.html" },

    { productID:"AHB1", productURL: "http://localhost:3000/product/accessories/handbags/Graceful%20Stylish%20Slingbags%20Luxury%20High%20Quality%20PU%20Leather%20Women%20Shoulder%20Bag/Graceful%20Stylish%20Slingbags%20Luxury%20High%20Quality%20PU%20Leather%20Women%20Shoulder%20Bag.html" },

    

    { productID:"AHB2", productURL: "http://localhost:3000/product/accessories/handbags/Beautiful%20Sling%20Bags%20for%20women%20and%20girls/Beautiful%20Sling%20Bags%20for%20women%20and%20girls.html" },

    { productID:"AFW1", productURL: "http://localhost:3000/product/accessories/footwear/Patent%20Leather%20Heel%20Sandals/Patent%20Leather%20Heel%20Sandals.html" },

    { productID:"HADU1", productURL: "http://localhost:3000/product/home%20and%20kitchen/daily%20use/Foldable-Mini-Capsule-Umbrella%20Catelog%20-%20250208021353/Foldable%20Mini%20Capsule%20Umbrella%20Outdoor.html" },

    { productID:"KA1_2024", productURL: "http://localhost:3000/product/home%20and%20kitchen/kitchen%20and%20appliances/Electric%20Capsule%20Cutter%20Grinder%20Machine%20Kitchenware/Electric-Capsule-Cutter-Grinde.html" },

    { productID:"ABAHHC1", productURL: "http://localhost:3000/product/beauty%20and%20health/health%20care/Earpick-Cleaner-Tool-Set-Beauty-Mackup-Tool%20Catelog%20-%20250207090729/Earpick-Cleaner-Tool-Set.html" },

    // { productID:"HC1_2024", productURL: "http://localhost:3000/product/beauty%20and%20health/health%20care/Earpick-Cleaner-Tool-Set-Beauty-Mackup-Tool%20Catelog%20-%20250207090729/Earpick-Cleaner-Tool-Set.html" },

    { productID:"HC2_2024", productURL: "http://localhost:3000/product/beauty%20and%20health/health%20care/Head-Massager-for-Pain-Relief%20Catelog%20-%20250207112506/Head-Massager-for-Pain.html" },

    { productID:"MU_2024", productURL: "http://localhost:3000/product/beauty%20and%20health/makeup/7-in-1-cosmetics-bottle%20Catelog%20-%20250208111013/7-in-1-cosmetics-bottle.html" },

    { productID:"HC3_2024", productURL: "http://localhost:3000/product/beauty%20and%20health/health%20care/Electric-Hot-Water-Bag-for-Pain-Relief%20Catelog%20-%20250208125716/Electric-Hot-Water-Bag.html" },

    // { productID:"HC3", productURL: "http://localhost:3000/product/beauty%20and%20health/health%20care/Relax%20Spin%20Tone%20Body%20Full%20Body%20Massager%20Electric%20Machine%20with%203%20Massage%20Heads%20for%20Pain%20Relief%20and%20Relaxation,%20For%20Back,%20Leg%20&%20Foot/Relax%20Spin%20Tone%20Body%20Full%20Body%20Massager%20Elect.html" },
    { productID:"HC3", productURL: "http://localhost:3000/product/beauty%20and%20health/health%20care/Relax%20Spin%20Tone%20Body%20Full%20Body%20Massager%20Electric%20Machine%20with%203%20Massage%20Heads%20for%20Pain%20Relief%20and%20Relaxation%20For%20Back%20Leg%20&%20Foot/Relax%20Spin%20Tone%20Body%20Full%20Body%20Massager%20Elect.html" },

    { productID:"HC6_2024", productURL: "http://localhost:3000/product/beauty%20and%20health/health%20care/Electric%20Velvet%20heating%20bags%20for%20Pain%20Relief%20Personal%20Care/Electric-Velvet-heating-bags-for-Pain-Relief%20Catelog.html" },

    // { productID:"WWWM1", productURL: "http://localhost:3000/product/women/western%20wear/Women\'s%20Floral%20V-neck%20Multicolor%20Dresses/Women\'s%20Floral%20V-neck%20Multicolor%20Dresses.html" },
    { productID:"WWWM1", productURL: "http://localhost:3000/product/women/western%20wear/Women%20Floral%20V-neck%20Multicolor%20Dresses/Women's%20Floral%20V-neck%20Multicolor%20Dresses.html" },

    { productID:"WEWK2", productURL: "http://localhost:3000/product/women/ethnic%20wear/kurtis/Embroidery%20Gaithering%20Anarkali%20kurtis/Embroidery%20Gaithering%20Anarkali%20kurtis.html" },

    { productID:"WEWK1", productURL: "http://localhost:3000/product/women/ethnic%20wear/kurtis/Women%20Straight%20Printed%20Kurti/Women%20Straight%20Printed%20Kurti.html" },

    { productID:"WEWS1", productURL: "http://localhost:3000/product/women/ethnic%20wear/saree/Two-Tone%20Georgette%20Saree%20With%20Blouse/two%20tone%20Georgette%20Saree%20with%20blouse.html" },

    { productID:"WEWS2", productURL: "http://localhost:3000/product/women/ethnic%20wear/saree/satin%20silk%20saree%20with%20Blouse/satin%20silk%20saree%20with%20Blouse.html" },

    { productID:"WEWSB1", productURL: "http://localhost:3000/product/women/ethnic%20wear/saree/Banarsi/banarasi%20saree/banarasi%20saree%20trendy%20design.html" },

    { productID:"WEWKS1", productURL: "http://localhost:3000/product/women/ethnic%20wear/kurta%20sets/Pakistani%20Suit%20%20Women%20Kurta%20Pair/Embroidery%20Gaithering%20Anarkali%20kurtis.html" },

    { productID:"WEWL1", productURL: "http://localhost:3000/product/women/ethnic%20wear/lahenga/Solid%20Semi%20Stitched%20Lehenga%20Choli/Solid%20Semi%20Stitched%20Lehenga%20Choli.html" },

    { productID:"WEWL2", productURL: "http://localhost:3000/product/women/ethnic%20wear/lahenga/Velvet%20Embroidered%20Semi%20Stitched%20Lehenga%20Choli%20for%20Women/Velvet%20Embroidered%20Semi%20Stitched%20Lehenga%20Choli%20for%20Women.html" },

    { productID:"WEWL3", productURL: "http://localhost:3000/product/women/ethnic%20wear/lahenga/Beautifull%20Embroidey%20Zari%20Work%20Lehenga%20For%20Women%20With%20Blouse%20Piece%20And%20Dupatta/Beautifull%20Embroidey%20Zari%20Work%20Lehenga%20For%20Women%20With%20Blouse%20Piece%20And%20Dupatta.html" },

    { productID:"WWAW1", productURL: "http://localhost:3000/product/women/women%20accessories/watch/Flowered%20Dial%20Megnet%20Watch/Flowered%20Dial%20Megnet%20Watch.html" },

    { productID:"G1", productURL: "http://localhost:3000/product/gifts/Artificial%20Red%20Rose%2024K%20Gold%20Plated/Artificial%20Red%20Rose%2024K%20Gold%20Plated.html" },

    { productID:"KGW1", productURL: "http://localhost:3000/product/kids/girl%20wear/Stylish%20Beautiful%20Printed%20Cotton%20Frock%20And%20Jacket%20Dresses/Stylish%20Beautiful%20Printed%20Cotton%20Frock%20And%20Jacket%20Dresses.html" },

    { productID:"KGW2", productURL: "http://localhost:3000/product/kids/girl%20wear/Stylish%20Partywear%20Multicolor%20Cotton%20Girls%20Frocks%20&%20Dresses/Stylish%20Partywear%20Multicolor%20Cotton%20Girls%20Frocks%20&%20Dresses.html" },

    // { productID:"WTW1", productURL: "file:///C:/Sudhadocuments/Shanaya_bazaar/product/women/top%20wear/White%20embroidery%20short%20top/White%20embroidery%20short%20top.html" },
    { productID:"WTW1", productURL: "http://localhost:3000/product/women/top%20wear/White%20embroidery%20short%20top/White%20embroidery%20short%20top.html" },

   

    { productID:"WTW2", productURL: "http://localhost:3000/product/women/top%20wear/Classic%20Glamorous%20Women%20Shirts/Classic%20Glamorous%20Women%20Shirts.html" },

    { productID:"WTW3", productURL: "http://localhost:3000/product/women/top%20wear/latest%20trending%20classic%20check%20shirt%20and%20top/latest%20trending%20classic%20check%20shirt%20and%20top.html" },

    { productID:"WTW4", productURL: "http://localhost:3000/product/women/top%20wear/woman%20half%20kurti%20top/woman%20half%20kurti%20top.html" },

    { productID:"WFW1", productURL: "http://localhost:3000/product/women/footwear/Patent%20Leather%20Heel%20Sandals/Patent%20Leather%20Heel%20Sandals.html" },

    { productID:"Sk1", productURL: "http://localhost:3000/product/beauty%20and%20health/skin%20care/3%20In%201%20Electric%20Face%20Massager/3%20In%201%20Electric%20Face%20Massager.html" },

    { productID:"SK2", productURL: "http://localhost:3000/product/beauty%20and%20health/skin%20care/Matico%20Brightening%20&%20Whitening%20Vitamin%20C%20Face%20Serum/Brightening%20&%20Whitening%20Vitamin%20C%20Face%20Serum.html" },
    
    { productID:"SK3", productURL: "http://localhost:3000/product/beauty%20and%20health/skin%20care/The%20Derma%20Co%20Kojic%20Acid%20Face%20Serum/The%20Derma%20Co%20Kojic%20Acid%20Face%20Serum.html" },


    { productID:"WWAP1", productURL: "http://localhost:3000/product/women/women%20accessories/perfume/Ramsons%20-%20U%20R%20LOVELY%20Eau%20De%20Parfume/Ramsons%20-%20U%20R%20LOVELY%20Eau%20De%20Parfume.html" },

    { productID:"MBW1", productURL: "http://localhost:3000/product/men/bottom%20wear/331%20Jogger%20Trackpant/331%20Jogger%20Trackpant.html" },

    { productID:"WBW1", productURL: "http://localhost:3000/product/women/bottom%20wear/Anara%20Fashion%20Women%20Solid%20Bell%20Bottoms%20Black%20Trousers%20&%20Pants/Anara%20Fashion%20Women's%20Solid%20Bell%20Bottoms%20Black%20Trousers%20&%20Pants.html" },

    { productID:"MMAS1", productURL: "http://localhost:3000/product/men/men%20accessories/sports%20shocks/SPORTS%20SOCKS%20FOR%20MEN%2012%20PAIR/SPORTS%20SOCKS%20FOR%20MEN%2012%20PAIR.html" },
    
    { productID:"MTW1", productURL: "http://localhost:3000/product/men/top%20wear/Stylish%20Glamorous%20Men%20Shirts/Stylish%20Glamorous%20Men%20Shirts.html" },

    // this is to delete
    // { productID:"S12_1099", productURL: "http://localhost:3000/product/men/top%20wear/Stylish%20Glamorous%20Men%20Shirts/Stylish%20Glamorous%20Men%20Shirts.html" },
    
];


function findHref(element) {
    var productIDpassed = element.innerText;
    var productIDpassed = productIDpassed.trim();
    for (var i in pageNavigation) {
        if (pageNavigation[i].productID == productIDpassed) {
            window.location.href = pageNavigation[i].productURL;
        }

    }
}


// export function navigateProductClick(productID){
function navigateProductClick(productID){
    var productIDpassed = productID.trim();
    // alert(productIDpassed);
    for (var i in pageNavigation) {
        if (pageNavigation[i].productID == productIDpassed) {
            window.location.href = pageNavigation[i].productURL;


            // return pageNavigation[i].productURL;
        }

    }
}

