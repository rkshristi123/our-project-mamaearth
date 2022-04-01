// var home=document.querySelector("#home");
// home.addEventListener("click", homePage)
// function homePage(){
//  window.location.href="home.html";

// }
// var baby=document.querySelector("#baby");
// baby.addEventListener("click", babyPage)
// function babyPage(){
//  window.location.href="baby.html";

// }
// var beauty=document.querySelector("#beauty");
// beauty.addEventListener("click", beautyPage)
// function beautyPage(){
//  window.location.href="beauty.html";

// }
// var hair=document.querySelector("#hair");
// hair.addEventListener("click", hairPage)
// function hairPage(){
//  window.location.href="hair.html";

// }
// var face=document.querySelector("#face");
// face.addEventListener("click", facePage)
// function facePage(){
//  window.location.href="face.html";

// }
// var body=document.querySelector("#body");
// body.addEventListener("click", bodyPage)
// function bodyPage(){
//  window.location.href="body.html";

// }
// var giftPacks=document.querySelector("#giftPacks");
// giftPacks.addEventListener("click", giftPacksPage)
// function giftPacksPage(){
//  window.location.href="header.html";

// }
// var allProducts=document.querySelector("#allProducts");
// allProducts.addEventListener("click", allProductsPage)
// function allProductsPage(){
//  window.location.href="allProducts.html";

// }
// var blog=document.querySelector("#blog");
// blog.addEventListener("click", blogPage)
// function blogPage(){
//  window.location.href="blog.html";

// }
// var plantGoodness=document.querySelector("#plantGoodness");
// plantGoodness.addEventListener("click", plantGoodnessPage)
// function plantGoodnessPage(){
//  window.location.href="plantGoodness.html";

// }
// var storeLocator=document.querySelector("#storeLocator");
// storeLocator.addEventListener("click", storeLocatorPage)
// function storeLocatorPage(){
//  window.location.href="storeLocator.html";

// }
// console.log("Hello");

var bestSellers=[{
    image:"https://honasa-mamaearth-production.imgix.net/_/o/_onion-oil-150ml_.jpg?auto=compress&fit=scale&w=400&h=400", 
    name: "Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl, 150ml",
    rating:"4.8★",
    price: "349"
    
  },
  {
    image:"https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-shampoo-250ml-with-ingredient_2.jpg?auto=format&fit=crop&w=768&auto=compress", 
    name: "Onion Shampoo with Onion and Plant Keratin for Hair Fall Control - 250ml",
    rating:"4.8★",
    price: "449"
    
  },
  {
    image:"https://honasa-mamaearth-production.imgix.net/v/i/vitamin_c_foaming_face_wash_1.jpg?auto=format&fit=crop&w=768&auto=compress", 
    name: "Vitamin C Foaming Face Wash with Vitamin C and Turmeric for Skin Illumination - 150ml",
    rating:"4.8★",
    price: "349"
    
  }];

  var bestDeals=[
                {
                    image:"https://honasa-mamaearth-production.imgix.net/a/n/anti_hair_fall_spa_kit_1.jpg?auto=format&fit=crop&w=768&auto=compress", 
                    name: "Anti-Hair Fall Spa Kit",
                    rating:"4.8★",
                    price: "749",
                    strikedPrice:"₹1,097",
                    off:"(30% off)"
                    
                },
                {
                    image:"https://honasa-mamaearth-production.imgix.net/t/a/tan-removal-regimen_10_whntawimnjpocnz9.jpg?auto=format&fit=crop&w=768&auto=compress", 
                    name: "Tan Removal Regimen Kit",
                    rating:"4.8★",
                    price: "768",
                    strikedPrice:"₹1,097",
                    off:"(30% off)"
                    
                },
                {
                    image:"https://honasa-mamaearth-production.imgix.net/b/a/baby-essential-hamper-kit_1_sv72nonvryczkplz.jpg?auto=format&fit=crop&w=768&auto=compress", 
                    name: "Baby Essential Hamper Kit",
                    rating:"4.8★",
                    price: "999",
                    strikedPrice:"₹1,097",
                    off:"(30% off)"
                    
                },
            ];

   var colorcare=[
                {
                    image:"https://honasa-mamaearth-production.imgix.net/_/o/_onion-oil-150ml_.jpg?auto=compress&fit=scale&w=400&h=400", 
                    name: "Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl, 150ml",
                    rating:"4.8★",
                    price: "349"
                    
                },
                {
                    image:"https://honasa-mamaearth-production.imgix.net/_/o/_onion-oil-150ml_.jpg?auto=compress&fit=scale&w=400&h=400", 
                    name: "Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl, 150ml",
                    rating:"4.8★",
                    price: "349"
                    
                },
                {
                    image:"https://honasa-mamaearth-production.imgix.net/_/o/_onion-oil-150ml_.jpg?auto=compress&fit=scale&w=400&h=400", 
                    name: "Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl, 150ml",
                    rating:"4.8★",
                    price: "349"
                    
                },
           ];

  var count=localStorage.getItem("mamaEarthCartCount")||0;
 var displayCount= document.querySelector("#count");
 displayCount.innerText=count;
  var addToCart=JSON.parse(localStorage.getItem("Cart"))||[];
// for best seller***************
    bestSellers.map(function (elem) {
    var box = document.createElement("div");
    box.style.border="0.5px dotted rgb(223, 213, 213)";
    box.setAttribute("class","one")
    
    var img = document.createElement("img");
    img.src = elem.image;
    img.style.width="100%";
    img.style.height="50%";

    var name = document.createElement("p");
    name.textContent = elem.name;
    name.setAttribute("class","name")
     var btn1=document.createElement("button")
     btn1.innerText=elem.rating ;
     btn1.setAttribute("class","btn")
    
     var priceTag=document.createElement("div");
     priceTag.style.display="flex";
     priceTag.style.justifyContent="center";
     priceTag.style.alignItems="center";
     var currency=document.createElement("p");
     currency.innerText="$";
    var price = document.createElement("p");
    price.innerText = elem.price;
    priceTag.append(currency,price)
    // 
    priceTag.setAttribute("class","pr")

    var btn2 = document.createElement("button");
    btn2.innerText = "ADD TO CART";
    btn2.setAttribute("class","add")
    btn2.addEventListener("click", function(){
      console.log("in function");
      addtocart(elem);
      count++;
      localStorage.setItem("mamaEarthCartCount",count);
      displayCount.innerText=count;
    
     window.alert("you have a product");
    })

    box.append(img, name,btn1, priceTag, btn2);

    document.querySelector("#bestSellers").append(box);
  });
  function addtocart(elem){
    addToCart.push(elem);
    console.log(addToCart);
    localStorage.setItem("Cart",JSON.stringify(addToCart));
  }

//   For best dealer****************

bestDeals.map(function (elem) {
    var box = document.createElement("div");
    box.style.border="0.5px dotted rgb(223, 213, 213)";
    box.setAttribute("class","one")
    
    var img = document.createElement("img");
    img.src = elem.image;
    img.style.width="100%";
    img.style.height="50%";

    var name = document.createElement("p");
    name.textContent = elem.name;
    name.setAttribute("class","name")
     var btn1=document.createElement("button")
     btn1.innerText=elem.rating ;
     btn1.setAttribute("class","btn")
    
     var priceTag=document.createElement("div");
     priceTag.style.display="flex";
     priceTag.style.justifyContent="center";
     priceTag.style.alignItems="center";
     var currency=document.createElement("p");
     currency.innerText="$";
    var price = document.createElement("p");
    price.innerText = elem.price;

    var strikedprice = document.createElement("p");
    strikedprice.innerText = elem.strikedPrice;
    strikedprice.style.textDecoration="line-through";
    strikedprice.style.color="gray";

    var off = document.createElement("p");
    off.innerText = elem.off;
    off.style.color="red";

    priceTag.append(currency,price);
    
    // 
    priceTag.setAttribute("class","pr")
    var allPrice=document.createElement("div");
    allPrice.style.display="flex";
    allPrice.style.width="80%";
    allPrice.style.marginLeft="10%";
    allPrice.style.fontSize="16px";
    allPrice.style.justifyContent="space-around";
    allPrice.append(priceTag,strikedprice,off);

    var btnBestDealer = document.createElement("button");
    btnBestDealer.innerText = "ADD TO CART";
    btnBestDealer.setAttribute("class","add");

    btnBestDealer.addEventListener("click", function(){
      console.log("in function");
     addtocartBestDealer(elem);
     count++;
      localStorage.setItem("mamaEarthCartCount",count);
      displayCount.innerText=count;
     window.alert("you have a product");
    })

    box.append(img, name,btn1, allPrice, btnBestDealer);

    document.querySelector("#bestDealers").append(box);
  });
  function addtocartBestDealer(elem){
      var obj={
          image:elem.image,
          name:elem.name,
          rating:elem.rating,
          price:elem.price
      };
     
     console.log(obj);
    addToCart.push(obj);
    // console.log(addToCart);
    localStorage.setItem("Cart",JSON.stringify(addToCart));
  }
  // color Care js***************************************************************************
  var colorRange=[
    {
    image:"https://honasa-mamaearth-production.imgix.net/k/o/kohl-3_3_5.jpg?auto=format&fit=crop&w=768&auto=compress", 
    name: "Charcoal Black Long Stay Kajal Kohl Pencil With Castor Oil ",
    rating:"4.9★",
    price: "499"
    },
    {
      image:"https://honasa-mamaearth-production.imgix.net/r/o/rose-lip-balm_1_1.jpg?auto=format&fit=crop&w=768&auto=compress", 
      name: "Mamaearth Rose Tinted 100% Natural Lip Balm With Rose Oil and Castor Oil - 2 g",
      rating:"4.9★",
      price: "299"
      },
      {
        image:"https://honasa-mamaearth-production.imgix.net/a/r/artboard_1_1.jpg?auto=format&fit=crop&w=584&auto=compress", 
        name: "Naturally Matte Lip Serum with Vitamin C & E for Upto 12-Hour Long Stay - 3 ml",
        rating:"4.9★",
        price: "599"
        },
];

colorRange.map(function (elem) {
  var box = document.createElement("div");
  box.style.border="0.5px dotted rgb(223, 213, 213)";
  box.setAttribute("class","one")
  
  var img = document.createElement("img");
  img.src = elem.image;
  img.style.width="100%";
  img.style.height="50%";

  var name = document.createElement("p");
  name.textContent = elem.name;
  name.setAttribute("class","name")
   var btn1=document.createElement("button")
   btn1.innerText=elem.rating ;
   btn1.setAttribute("class","btn")
  
   var priceTag=document.createElement("div");
   priceTag.style.display="flex";
   priceTag.style.justifyContent="center";
   priceTag.style.alignItems="center";
   var currency=document.createElement("p");
   currency.innerText="$";
  var price = document.createElement("p");
  price.innerText = elem.price;
  priceTag.append(currency,price)
  // 
  priceTag.setAttribute("class","pr")

  var colorcare = document.createElement("button");
  colorcare.innerText = "ADD TO CART";
  colorcare.setAttribute("class","add");

  colorcare.addEventListener("click", function(){
    console.log("in function");
   addtocartColorCare(elem);
   count++;
      localStorage.setItem("mamaEarthCartCount",count);
      displayCount.innerText=count;
   window.alert("you have a product");
  })

  box.append(img, name,btn1, priceTag, colorcare);

  document.querySelector("#colorCare").append(box);
});
function addtocartColorCare(elem){
  addToCart.push(elem);
  console.log(addToCart);
  localStorage.setItem("Cart",JSON.stringify(addToCart));
}

// onion range**********************************

var onionRange=[
  {
  image:"https://honasa-mamaearth-production.imgix.net/_/o/_onion-oil-250ml__1.jpg?auto=format&fit=crop&w=584&auto=compress", 
  name: "Onion Hair Oil for Hair Regrowth and Hair Fall Control, 250ml",
  rating:"4.8★",
  price: "599"
  },
  {
    image:"https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-conditioner-250ml-with-ingredient_2.jpg?auto=format&fit=crop&w=584&auto=compress", 
    name: "Onion Conditioner for Hair Fall Control - 250ml",
    rating:"4.8★",
    price: "390"
    },
    {
      image:"https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-serum1200x1200_ad8hgvjdve7vcczs.jpg?auto=format&fit=crop&w=584&auto=compress", 
      name: "Onion Hair Serum with Onion and Biotin for Strong, Frizz-Free Hair - 100 ml",
      rating:"4.8★",
      price: "299"
      },
];

onionRange.map(function (elem) {
var box = document.createElement("div");
box.style.border="0.5px dotted rgb(223, 213, 213)";
box.setAttribute("class","one")

var img = document.createElement("img");
img.src = elem.image;
img.style.width="100%";
img.style.height="50%";

var name = document.createElement("p");
name.textContent = elem.name;
name.setAttribute("class","name")
 var btn1=document.createElement("button")
 btn1.innerText=elem.rating ;
 btn1.setAttribute("class","btn")

 var priceTag=document.createElement("div");
 priceTag.style.display="flex";
 priceTag.style.justifyContent="center";
 priceTag.style.alignItems="center";
 var currency=document.createElement("p");
 currency.innerText="$";
var price = document.createElement("p");
price.innerText = elem.price;
priceTag.append(currency,price)
// 
priceTag.setAttribute("class","pr")

var onionAddBtn = document.createElement("button");
onionAddBtn.innerText = "ADD TO CART";
onionAddBtn.setAttribute("class","add");

onionAddBtn.addEventListener("click", function(){
  console.log("in function");
 addtoCartOnion(elem);
 count++;
      localStorage.setItem("mamaEarthCartCount",count);
      displayCount.innerText=count;
 window.alert("you have a product");
})

box.append(img, name,btn1, priceTag, onionAddBtn);

document.querySelector("#onionRange").append(box);
});
function addtoCartOnion(elem){
addToCart.push(elem);
console.log(addToCart);
localStorage.setItem("Cart",JSON.stringify(addToCart));
}

// Vitamin C range js**********************************************

var vitaminCRange=[
  {
  image:"https://honasa-mamaearth-production.imgix.net/v/i/vitamin_c_face_wash_1.jpg?auto=format&fit=crop&w=768&auto=compress", 
  name: "Vitamin C Face Wash with Vitamin C and Turmeric for Skin Illumination - 100ml",
  rating:"4.8★",
  price: "249"
  },
  {
    image:"https://honasa-mamaearth-production.imgix.net/v/i/vit_c_face_mask.jpg?auto=format&fit=crop&w=768&auto=compress", 
    name: "Vitamin C Face Mask With Vitamin C and Kaolin Clay for Skin Illumination - 100 g",
    rating:"4.9★",
    price: "499"
    },
    {
      image:"https://honasa-mamaearth-production.imgix.net/v/i/vitamin_c_face_toner_1.jpg?auto=format&fit=crop&w=768&auto=compress", 
      name: "Vitamin C Face Toner with Vitamin C and Cucumber for Pore Tightening, 200 ml",
      rating:"4.8★",
      price: "399"
      },
];

vitaminCRange.map(function (elem) {
var box = document.createElement("div");
box.style.border="0.5px dotted rgb(223, 213, 213)";
box.setAttribute("class","one")

var img = document.createElement("img");
img.src = elem.image;
img.style.width="100%";
img.style.height="50%";

var name = document.createElement("p");
name.textContent = elem.name;
name.setAttribute("class","name")
 var btn1=document.createElement("button")
 btn1.innerText=elem.rating ;
 btn1.setAttribute("class","btn")

 var priceTag=document.createElement("div");
 priceTag.style.display="flex";
 priceTag.style.justifyContent="center";
 priceTag.style.alignItems="center";
 var currency=document.createElement("p");
 currency.innerText="$";
var price = document.createElement("p");
price.innerText = elem.price;
priceTag.append(currency,price)
// 
priceTag.setAttribute("class","pr")

var vitaminCAddBtn = document.createElement("button");
vitaminCAddBtn.innerText = "ADD TO CART";
vitaminCAddBtn.setAttribute("class","add");

vitaminCAddBtn.addEventListener("click", function(){
  console.log("in function");
 addtoCartVitaminC(elem);
 count++;
      localStorage.setItem("mamaEarthCartCount",count);
      displayCount.innerText=count;
 window.alert("you have a product");
})

box.append(img, name,btn1, priceTag, vitaminCAddBtn);

document.querySelector("#vitaminC").append(box);
});
function addtoCartVitaminC(elem){
addToCart.push(elem);
console.log(addToCart);
localStorage.setItem("Cart",JSON.stringify(addToCart));
}

// ubtan range js**********************************************

var ubtanRange=[
  {
  image:"https://honasa-mamaearth-production.imgix.net/2/_/2_4.jpg?auto=format&fit=crop&w=768&auto=compress", 
  name: "Ubtan Foaming Face Wash with Turmeric and Saffron for Tan Removal - 150ml",
  rating:"4.8★",
  price: "349"
  },
  {
    image:"https://honasa-mamaearth-production.imgix.net/u/b/ubtan_face_mask_1.jpg?auto=format&fit=crop&w=768&auto=compress", 
    name: "Ubtan Face Mask with Saffron and Turmeric for Skin Brightening and Tan Removal - 100g",
    rating:"4.9★",
    price: "499"
    },
    {
      image:"https://honasa-mamaearth-production.imgix.net/u/b/ubtan-oil-free-moisturizer1.jpg?auto=compress&fit=scale&w=400&h=400", 
      name: "Ubtan Oil-Free Face Moisturizer for Skin Brightening - 80 ml",
      rating:"4.8★",
      price: "299"
      },
];

ubtanRange.map(function (elem) {
var box = document.createElement("div");
box.style.border="0.5px dotted rgb(223, 213, 213)";
box.setAttribute("class","one")

var img = document.createElement("img");
img.src = elem.image;
img.style.width="100%";
img.style.height="50%";

var name = document.createElement("p");
name.textContent = elem.name;
name.setAttribute("class","name")
 var btn1=document.createElement("button")
 btn1.innerText=elem.rating ;
 btn1.setAttribute("class","btn")

 var priceTag=document.createElement("div");
 priceTag.style.display="flex";
 priceTag.style.justifyContent="center";
 priceTag.style.alignItems="center";
 var currency=document.createElement("p");
 currency.innerText="$";
var price = document.createElement("p");
price.innerText = elem.price;
priceTag.append(currency,price)
// 
priceTag.setAttribute("class","pr")

var ubtanAddBtn = document.createElement("button");
ubtanAddBtn.innerText = "ADD TO CART";
ubtanAddBtn.setAttribute("class","add");

ubtanAddBtn.addEventListener("click", function(){
  console.log("in function");
 addtoCartUbtan(elem);
 count++;
      localStorage.setItem("mamaEarthCartCount",count);
      displayCount.innerText=count;
 
  window.alert("you have a product");
})

box.append(img, name,btn1, priceTag, ubtanAddBtn);

document.querySelector("#ubtan").append(box);
});
function addtoCartUbtan(elem){
addToCart.push(elem);
console.log(addToCart);
localStorage.setItem("Cart",JSON.stringify(addToCart));
}