// alert("navigationpage");

var EmailAddress;
EmailAddress = sessionStorage.getItem("EmailAddress");
// alert(EmailAddress);

if (EmailAddress === null || EmailAddress === undefined) {

    // we can also get it from local storage
    EmailAddress = localStorage.getItem("EmailAddress");

    // alert(EmailAddress);

}



var pageNavigation = [


    { productID: "home", productURL: "http://localhost:3000/index.php" },
    { productID: "about", productURL: "http://localhost:3000/about.php" },

    { productID: "contact", productURL: "http://localhost:3000/contact.php" },
    { productID: "need", productURL: "http://localhost:3000/need.php" },
    { productID: "help", productURL: "http://localhost:3000/help.php" },
    { productID: "login", productURL: "http://localhost:3000/animatedLogin.php" },


    { productID: "AEMC1", productURL: "http://localhost:3000/product/accessories/electronic/Charger%20Cover%20for%20iPhone%2018-20W%20USB-C%20Power%20Adapter/Charger%20Cover%20for%20iPhone%2018-20W%20USB-C%20Power%20Adapter.php" },
    { productID: "AEMC2", productURL: "http://localhost:3000/product/accessories/electronic/Charger%20Cover%20for%20iPhone%2018-20W%20USB-C%20Power%20Adapter%20kuromi/Charger%20Cover%20for%20iPhone%2018-20W%20USB-C%20Power%20Adapter%20kuromi.php" },


    { productID: "AHA1", productURL: "http://localhost:3000/product/accessories/hair%20accessories/Long%20Straight%20Natural%20Black%20Full%20Head%20Wigs/Long%20Straight%20Natural%20Black%20Full%20Head%20Wigs.php" },

    { productID: "AGP1", productURL: "http://localhost:3000/product/accessories/general%20products/Four%20Sided%20Folding%20Mirror/Four%20Sided%20Folding%20Mirror.php" },

    { productID: "AHB1", productURL: "http://localhost:3000/product/accessories/handbags/Graceful%20Stylish%20Slingbags%20Luxury%20High%20Quality%20PU%20Leather%20Women%20Shoulder%20Bag/Graceful%20Stylish%20Slingbags%20Luxury%20High%20Quality%20PU%20Leather%20Women%20Shoulder%20Bag.php" },



    { productID: "AHB2", productURL: "http://localhost:3000/product/accessories/handbags/Beautiful%20Sling%20Bags%20for%20women%20and%20girls/Beautiful%20Sling%20Bags%20for%20women%20and%20girls.php" },

    { productID: "AFW1", productURL: "http://localhost:3000/product/accessories/footwear/Patent%20Leather%20Heel%20Sandals/Patent%20Leather%20Heel%20Sandals.php" },

    { productID: "HADU1", productURL: "http://localhost:3000/product/home%20and%20kitchen/daily%20use/Foldable-Mini-Capsule-Umbrella%20Catelog%20-%20250208021353/Foldable%20Mini%20Capsule%20Umbrella%20Outdoor.php" },

    { productID: "KA1_2024", productURL: "http://localhost:3000/product/home%20and%20kitchen/kitchen%20and%20appliances/Electric%20Capsule%20Cutter%20Grinder%20Machine%20Kitchenware/Electric-Capsule-Cutter-Grinde.php" },

    { productID: "HAKAHD1", productURL: "http://localhost:3000/product/home%20and%20kitchen/home%20decor/Floor%20Cleaning%20Healthy%20Spray%20Mop/Floor%20Cleaning%20Healthy%20Spray%20Mop.php" },

    { productID: "ABAHHC1", productURL: "http://localhost:3000/product/beauty%20and%20health/health%20care/Earpick-Cleaner-Tool-Set-Beauty-Mackup-Tool%20Catelog%20-%20250207090729/Earpick-Cleaner-Tool-Set.php" },

    // { productID:"HC1_2024", productURL: "http://localhost:3000/product/beauty%20and%20health/health%20care/Earpick-Cleaner-Tool-Set-Beauty-Mackup-Tool%20Catelog%20-%20250207090729/Earpick-Cleaner-Tool-Set.php" },

    { productID: "HC2_2024", productURL: "http://localhost:3000/product/beauty%20and%20health/health%20care/Head-Massager-for-Pain-Relief%20Catelog%20-%20250207112506/Head-Massager-for-Pain.php" },

    { productID: "MU_2024", productURL: "http://localhost:3000/product/beauty%20and%20health/makeup/7-in-1-cosmetics-bottle%20Catelog%20-%20250208111013/7-in-1-cosmetics-bottle.php" },

    { productID: "HC3_2024", productURL: "http://localhost:3000/product/beauty%20and%20health/health%20care/Electric-Hot-Water-Bag-for-Pain-Relief%20Catelog%20-%20250208125716/Electric-Hot-Water-Bag.php" },

   
    { productID: "HC3", productURL: "http://localhost:3000/product/beauty%20and%20health/health%20care/Relax%20Spin%20Tone%20Body%20Full%20Body%20Massager%20Electric%20Machine%20with%203%20Massage%20Heads%20for%20Pain%20Relief/Relax%20Spin%20Tone%20Body%20Full%20Body%20Massager%20Elect.php" },

    { productID: "HC6_2024", productURL: "http://localhost:3000/product/beauty%20and%20health/health%20care/Electric%20Velvet%20heating%20bags%20for%20Pain%20Relief%20Personal%20Care/Electric-Velvet-heating-bags-for-Pain-Relief%20Catelog.php" },

    // { productID:"WWWM1", productURL: "http://localhost:3000/product/women/western%20wear/Women/'s%20Floral%20V-neck%20Multicolor%20Dresses/Women/'s%20Floral%20V-neck%20Multicolor%20Dresses.php" },
    { productID: "WWWM1", productURL: "http://localhost:3000/product/women/western%20wear/Women%20Floral%20V-neck%20Multicolor%20Dresses/Women's%20Floral%20V-neck%20Multicolor%20Dresses.php" },
    { productID: "WWWM2", productURL: "http://localhost:3000/product/women/western%20wear/Rose%20Embroidery%20Black%20Net%20Dress/Rose%20Embroidery%20Black%20Net%20Dress.php" },

    { productID: "WEWK2", productURL: "http://localhost:3000/product/women/ethnic%20wear/kurtis/Embroidery%20Gaithering%20Anarkali%20kurtis/Embroidery%20Gaithering%20Anarkali%20kurtis.php" },

    { productID: "WEWK1", productURL: "http://localhost:3000/product/women/ethnic%20wear/kurtis/Women%20Straight%20Printed%20Kurti/Women%20Straight%20Printed%20Kurti.php" },

    { productID: "WEWS1", productURL: "http://localhost:3000/product/women/ethnic%20wear/saree/Two-Tone%20Georgette%20Saree%20With%20Blouse/two%20tone%20Georgette%20Saree%20with%20blouse.php" },

    { productID: "WEWS2", productURL: "http://localhost:3000/product/women/ethnic%20wear/saree/satin%20silk%20saree%20with%20Blouse/satin%20silk%20saree%20with%20Blouse.php" },

    { productID: "WEWSB1", productURL: "http://localhost:3000/product/women/ethnic%20wear/saree/Banarsi/banarasi%20saree/banarasi%20saree%20trendy%20design.php" },

    { productID: "WEWKS1", productURL: "http://localhost:3000/product/women/ethnic%20wear/kurta%20sets/Pakistani%20Suit%20%20Women%20Kurta%20Pair/Embroidery%20Gaithering%20Anarkali%20kurtis.php" },

    { productID: "WEWL1", productURL: "http://localhost:3000/product/women/ethnic%20wear/lahenga/Solid%20Semi%20Stitched%20Lehenga%20Choli/Solid%20Semi%20Stitched%20Lehenga%20Choli.php" },

    { productID: "WEWL2", productURL: "http://localhost:3000/product/women/ethnic%20wear/lahenga/Velvet%20Embroidered%20Semi%20Stitched%20Lehenga%20Choli%20for%20Women/Velvet%20Embroidered%20Semi%20Stitched%20Lehenga%20Choli%20for%20Women.php" },

    { productID: "WEWL3", productURL: "http://localhost:3000/product/women/ethnic%20wear/lahenga/Beautifull%20Embroidey%20Zari%20Work%20Lehenga%20For%20Women%20With%20Blouse%20Piece%20And%20Dupatta/Beautifull%20Embroidey%20Zari%20Work%20Lehenga%20For%20Women%20With%20Blouse%20Piece%20And%20Dupatta.php" },

    { productID: "WWAW1", productURL: "http://localhost:3000/product/women/women%20accessories/watch/Flowered%20Dial%20Megnet%20Watch/Flowered%20Dial%20Megnet%20Watch.php" },

    { productID: "G1", productURL: "http://localhost:3000/product/gifts/Artificial%20Red%20Rose%2024K%20Gold%20Plated/Artificial%20Red%20Rose%2024K%20Gold%20Plated.php" },

    { productID: "KGW1", productURL: "http://localhost:3000/product/kids/girl%20wear/Stylish%20Beautiful%20Printed%20Cotton%20Frock%20And%20Jacket%20Dresses/Stylish%20Beautiful%20Printed%20Cotton%20Frock%20And%20Jacket%20Dresses.php" },

    { productID: "KGW2", productURL: "http://localhost:3000/product/kids/girl%20wear/Stylish%20Partywear%20Multicolor%20Cotton%20Girls%20Frocks%20Dresses/Stylish%20Partywear%20Multicolor%20Cotton%20Girls%20Frocks%20&%20Dresses.php" },
    { productID: "KGW3", productURL: "http://localhost:3000/product/kids/girl%20wear/roshani%20frock%20blue/roshani%20frock%20blue.php" },

    { productID: "KGW4", productURL: "http://localhost:3000/product/kids/girl%20wear/Baby%20Girls%20trendy%20western%20Dress/Baby%20Girls%20trendy%20western%20Dress.php" },
    { productID: "KGW5", productURL: "http://localhost:3000/product/kids/girl%20wear/Girls%20Silk%20Frocks%20Dresses/Girls%20Silk%20Frocks%20&%20Dresses.php" },
    { productID: "KGW6", productURL: "http://localhost:3000/product/kids/girl%20wear/Trending%20Frock%20And%20Dresess%20For%20Summer/Trending%20Frock%20And%20Dresess%20For%20Summer.php" },



    { productID: "WTW1", productURL: "http://localhost:3000/product/women/top%20wear/White%20embroidery%20short%20top/White%20embroidery%20short%20top.php" },



    { productID: "WTW2", productURL: "http://localhost:3000/product/women/top%20wear/Classic%20Glamorous%20Women%20Shirts/Classic%20Glamorous%20Women%20Shirts.php" },

    { productID: "WTW3", productURL: "http://localhost:3000/product/women/top%20wear/latest%20trending%20classic%20check%20shirt%20and%20top/latest%20trending%20classic%20check%20shirt%20and%20top.php" },

    { productID: "WTW4", productURL: "http://localhost:3000/product/women/top%20wear/woman%20half%20kurti%20top/woman%20half%20kurti%20top.php" },

    { productID: "WFW1", productURL: "http://localhost:3000/product/women/footwear/Patent%20Leather%20Heel%20Sandals/Patent%20Leather%20Heel%20Sandals.php" },

    { productID: "SK1", productURL: "http://localhost:3000/product/beauty%20and%20health/skin%20care/3%20In%201%20Electric%20Face%20Massager/3%20In%201%20Electric%20Face%20Massager.php" },

    { productID: "SK2", productURL: "http://localhost:3000/product/beauty%20and%20health/skin%20care/Matico%20Brightening%20Whitening%20Vitamin%20C%20Face%20Serum/Brightening%20&%20Whitening%20Vitamin%20C%20Face%20Serum.php" },

    // caplock and small lock matters

    { productID: "SK3", productURL: "http://localhost:3000/product/beauty%20and%20health/skin%20care/The%20Derma%20Co%20Kojic%20Acid%20Face%20Serum/The%20Derma%20Co%20Kojic%20Acid%20Face%20Serum.php" },

    { productID: "SK4", productURL: "http://localhost:3000/product/beauty%20and%20health/skin%20care/face%20shaver/face%20shaver.php" },


    { productID: "WWAP1", productURL: "http://localhost:3000/product/women/women%20accessories/perfume/Ramsons%20-%20U%20R%20LOVELY%20Eau%20De%20Parfume/Ramsons%20-%20U%20R%20LOVELY%20Eau%20De%20Parfume.php" },

    { productID: "MBW1", productURL: "http://localhost:3000/product/men/bottom%20wear/331%20Jogger%20Trackpant/331%20Jogger%20Trackpant.php" },

    { productID: "WBW1", productURL: "http://localhost:3000/product/women/bottom%20wear/Anara%20Fashion%20Women%20Solid%20Bell%20Bottoms%20Black%20Trousers%20Pants/Anara%20Fashion%20Women's%20Solid%20Bell%20Bottoms%20Black%20Trousers%20&%20Pants.php" },

    { productID: "MMAS1", productURL: "http://localhost:3000/product/men/men%20accessories/sports%20shocks/SPORTS%20SOCKS%20FOR%20MEN%2012%20PAIR/SPORTS%20SOCKS%20FOR%20MEN%2012%20PAIR.php" },

    { productID: "MTW1", productURL: "http://localhost:3000/product/men/top%20wear/Stylish%20Glamorous%20Men%20Shirts/Stylish%20Glamorous%20Men%20Shirts.php" },


    { productID: "WIWP1", productURL: "http://localhost:3000/product/women/inner%20wear/pantys/Pack%20of%206%20pure%20cotton%20pantys/Pack%20of%206%20pure%20cotton%20pantys.php" },

    { productID: "WWAS1", productURL: "http://localhost:3000/product/women/women%20accessories/Scarves/Summer%20Sun%20Protection%20Women%20Cap%20Mask/Summer%20Sun%20Protection%20Women%20Cap%20Mask.php" },

    { productID: "WWAS2", productURL: "http://localhost:3000/product/women/women%20accessories/Scarves/Stylish%20Design%20Cotton%20and%20Breathable%20Scarf/Stylish%20Design%20Cotton%20and%20Breathable%20Scarf.php" },
    { productID: "WWAS3", productURL: "http://localhost:3000/product/women/women%20accessories/Scarves/Cotton%20Long%20Scarf%20Cum%20Mask%20scarf/Cotton%20Long%20Scarf%20Cum%20Mask%20scarf.php" },

    { productID: "WWAS4", productURL: "http://localhost:3000/product/women/women%20accessories/Scarves/Elegant%20Multicolored%20chiffon%20stoles%20pack%20of%206/Elegant%20Multicolored%20chiffon%20stoles%20pack%20of%206.php" },

    { productID: "WSWT1", productURL: "http://localhost:3000/product/women/sleep%20wear/top/Women%20Camisole%20Slip%20Cotton/Women%20Camisole%20Slip%20Cotton.php" },

    { productID: "WSWT2", productURL: "http://localhost:3000/product/women/sleep%20wear/top/Women%20Camisole%20Slip%20Cotton%20line%20pattern/Women%20Camisole%20Slip%20Cotton%20line%20pattern.php" },



];


function findHref(element) {
    var productIDpassed = element.innerText;
    var productIDpassed = productIDpassed.trim();
    for (var i in pageNavigation) {
        if (pageNavigation[i].productID == productIDpassed) {

            // alert(pageNavigation[i].productURL);

            window.location.href = pageNavigation[i].productURL;
          
        }

    }
}


// export function navigateProductClick(productID){
function navigateProductClick(productID) {
    var productIDpassed = productID.trim();
    // alert(productIDpassed);
    for (var i in pageNavigation) {
        if (pageNavigation[i].productID == productIDpassed) {



            // alert(pageNavigation[i].productURL);

            window.location.href = pageNavigation[i].productURL;

          
        }

    }
}

