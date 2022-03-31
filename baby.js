var home=document.querySelector("#home");
home.addEventListener("click", homePage)
function homePage(){
  window.location.href="index.html";
 
}
var baby=document.querySelector("#baby");
baby.addEventListener("click", babyPage)
function babyPage(){
  window.location.href="baby.html";
 
}
var beauty=document.querySelector("#beauty");
beauty.addEventListener("click", beautyPage)
function beautyPage(){
  window.location.href="beauty.html";
 
}
var hair=document.querySelector("#hair");
hair.addEventListener("click", hairPage)
function hairPage(){
  window.location.href="hair.html";
 
}
var face=document.querySelector("#face");
face.addEventListener("click", facePage)
function facePage(){
  window.location.href="face.html";
 
}
var body=document.querySelector("#body");
body.addEventListener("click", bodyPage)
function bodyPage(){
  window.location.href="body.html";
 
}
var giftPacks=document.querySelector("#giftPacks");
giftPacks.addEventListener("click", giftPacksPage)
function giftPacksPage(){
  window.location.href="header.html";
 
}
var allProducts=document.querySelector("#allProducts");
allProducts.addEventListener("click", allProductsPage)
function allProductsPage(){
  window.location.href="allProducts.html";
 
}
var blog=document.querySelector("#blog");
blog.addEventListener("click", blogPage)
function blogPage(){
  window.location.href="blog.html";
 
}
var plantGoodness=document.querySelector("#plantGoodness");
plantGoodness.addEventListener("click", plantGoodnessPage)
function plantGoodnessPage(){
  window.location.href="plantGoodness.html";
 
}
var storeLocator=document.querySelector("#storeLocator");
storeLocator.addEventListener("click", storeLocatorPage)
function storeLocatorPage(){
  window.location.href="storeLocator.html";
 
}
console.log("Hello");


var babyData = [
    {
      image:"https://honasa-mamaearth-production.imgix.net/s/h/shampo_props_ky0ozlvydza60eyc.jpg?auto=compress&fit=scale&w=400&h=400",
        
      name: "Dusting Powder with Organic Oatmeal and Arrowroot Powder for Babies",
      rating:"4.2★",
      price: "349"
      
    },
    {
        image: "https://honasa-mamaearth-production.imgix.net/_/m/_milky_soft_face_cream_.jpg?auto=compress&fit=scale&w=400&h=400",
        name: "Milky Soft Face Cream With Murumuru Butter for Babies, 60 ml",
        rating:"4.5★", 
        price: "199"
    },
    {
        image:"https://honasa-mamaearth-production.imgix.net/b/o/body-wash_probs_ui8gwmtjnj2sahbz.jpg?auto=compress&fit=scale&w=400&h=400" ,
        name: "Deeply Nourishing Body Wash for babies, 400ml pack of it",
        rating: "4.3★",
        price: "399"
    },
    {
        image: "https://honasa-mamaearth-production.imgix.net/f/d/fds_9573-props_qwhqvlzshodrynok.jpg?auto=compress&fit=scale&w=400&h=400",
        name:"Moisturizing Bathing Bar Soap For Babies, pack of 2*75g", 
        rating:"4.5★" ,
        price: "242"
    },
    {
    image: "https://honasa-mamaearth-production.imgix.net/a/g/agent-apple-body-wash.jpg?auto=compress&fit=scale&w=400&h=400",
    name: "Agent Apple Body Wash for Kids with Apple & Oat Protein – 300 ml (Pack of 2)",
    rating: "5.0★",
    price :"299" 
    },
    {
    image: "https://honasa-mamaearth-production.imgix.net/m/a/mango-body-wash.jpg?auto=compress&fit=scale&w=400&h=400",

    name: "Major Mango Body Wash For Kids with Mango & Oat Protein - 300 ml (Pack of 2)",
    rating: "5.0★",
    price : "299"
    },
    {
    image: "https://honasa-mamaearth-production.imgix.net/s/u/super-strawberry-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
    name: "Super Strawberry Body Lotion for Kids With Strawberry & Shea Butter - 400 ml (Pack of 2)",
    rating: "5.0★",
    price : "399"
    },
    {
    image: "https://honasa-mamaearth-production.imgix.net/o/r/original-orange-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
    name: "Original Orange Body Lotion For Kids With Orange & Shea Butter - 400 ml (Pack of 2)",

    rating: "5.0★",
    price : "399"
    },
    {
        image: "https://honasa-mamaearth-production.imgix.net/_/m/_milky_soft_face_cream_.jpg?auto=compress&fit=scale&w=400&h=400",
        name: "Milky Soft Face Cream With Murumuru Butter for Babies, 60 ml",
        rating:"4.5★", 
        price: "199"
    },
    {
    image: "https://honasa-mamaearth-production.imgix.net/a/g/agent-apple-body-wash.jpg?auto=compress&fit=scale&w=400&h=400",
    name: "Agent Apple Body Wash for Kids with Apple & Oat Protein – 300 ml (Pack of 2)",
    rating: "5.0★",
    price :"299" 
    },
    {
    image:"https://honasa-mamaearth-production.imgix.net/m/i/milky-soft-lip-balm-1.jpg?auto=compress&fit=scale&w=400&h=400", 
    name:"Milky Soft Natural Lip Balm for Babies with Oats, Milk & Calendula – 4g" ,
    rating:"4.9★" ,
    price : "199"
    },
    {
        image: "https://honasa-mamaearth-production.imgix.net/f/d/fds_9573-props_qwhqvlzshodrynok.jpg?auto=compress&fit=scale&w=400&h=400",
        name:"Moisturizing Bathing Bar Soap For Babies, pack of 2*75g", 
        rating:"4.5★" ,
        price: "242"
    },
    {
    image: "https://honasa-mamaearth-production.imgix.net/o/r/original-orange-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
    name: "Original Orange Body Lotion For Kids With Orange & Shea Butter - 400 ml (Pack of 2)",

    rating: "5.0★",
    price : "399"
    },
    {
    image:"https://honasa-mamaearth-production.imgix.net/m/i/milky-soft-lip-balm-1.jpg?auto=compress&fit=scale&w=400&h=400", 
    name:"Milky Soft Natural Lip Balm for Babies with Oats, Milk & Calendula – 4g" ,
    rating:"4.9★" ,
    price : "199"
    },
    {
      image:"https://honasa-mamaearth-production.imgix.net/s/h/shampo_props_ky0ozlvydza60eyc.jpg?auto=compress&fit=scale&w=400&h=400",
        
      name: "Dusting Powder with Organic Oatmeal and Arrowroot Powder for Babies",
      rating:"4.2★",
      price: "349"
      
    },
    {
        image: "https://honasa-mamaearth-production.imgix.net/_/m/_milky_soft_face_cream_.jpg?auto=compress&fit=scale&w=400&h=400",
        name: "Milky Soft Face Cream With Murumuru Butter for Babies, 60 ml",
        rating:"4.5★", 
        price: "199"
    },
    {
        image:"https://honasa-mamaearth-production.imgix.net/b/o/body-wash_probs_ui8gwmtjnj2sahbz.jpg?auto=compress&fit=scale&w=400&h=400" ,
        name: "Deeply Nourishing Body Wash for babies, 400ml pack of it",
        rating: "4.3★",
        price: "399"
    },
    {
    image: "https://honasa-mamaearth-production.imgix.net/s/u/super-strawberry-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
    name: "Super Strawberry Body Lotion for Kids With Strawberry & Shea Butter - 400 ml (Pack of 2)",
    rating: "5.0★",
    price : "399"
    },
    {
    image: "https://honasa-mamaearth-production.imgix.net/o/r/original-orange-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
    name: "Original Orange Body Lotion For Kids With Orange & Shea Butter - 400 ml (Pack of 2)",

    rating: "5.0★",
    price : "399"
    },
    {
        image: "https://honasa-mamaearth-production.imgix.net/_/m/_milky_soft_face_cream_.jpg?auto=compress&fit=scale&w=400&h=400",
        name: "Milky Soft Face Cream With Murumuru Butter for Babies, 60 ml",
        rating:"4.5★", 
        price: "199"
    },
    {
    image: "https://honasa-mamaearth-production.imgix.net/a/g/agent-apple-body-wash.jpg?auto=compress&fit=scale&w=400&h=400",
    name: "Agent Apple Body Wash for Kids with Apple & Oat Protein – 300 ml (Pack of 2)",
    rating: "5.0★",
    price :"299" 
    },
    {
    image:"https://honasa-mamaearth-production.imgix.net/m/i/milky-soft-lip-balm-1.jpg?auto=compress&fit=scale&w=400&h=400", 
    name:"Milky Soft Natural Lip Balm for Babies with Oats, Milk & Calendula – 4g" ,
    rating:"4.9★" ,
    price : "199"
    },
    {
      image:"https://honasa-mamaearth-production.imgix.net/s/h/shampo_props_ky0ozlvydza60eyc.jpg?auto=compress&fit=scale&w=400&h=400",
        
      name: "Dusting Powder with Organic Oatmeal and Arrowroot Powder for Babies",
      rating:"4.2★",
      price: "349"
      
    },
    {
        image: "https://honasa-mamaearth-production.imgix.net/_/m/_milky_soft_face_cream_.jpg?auto=compress&fit=scale&w=400&h=400",
        name: "Milky Soft Face Cream With Murumuru Butter for Babies, 60 ml",
        rating:"4.5★", 
        price: "199"
    },
    {
        image:"https://honasa-mamaearth-production.imgix.net/b/o/body-wash_probs_ui8gwmtjnj2sahbz.jpg?auto=compress&fit=scale&w=400&h=400" ,
        name: "Deeply Nourishing Body Wash for babies, 400ml pack of it",
        rating: "4.3★",
        price: "399"
    },
    {
    image: "https://honasa-mamaearth-production.imgix.net/s/u/super-strawberry-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
    name: "Super Strawberry Body Lotion for Kids With Strawberry & Shea Butter - 400 ml (Pack of 2)",
    rating: "5.0★",
    price : "399"
    },
    {
    image: "https://honasa-mamaearth-production.imgix.net/o/r/original-orange-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
    name: "Original Orange Body Lotion For Kids With Orange & Shea Butter - 400 ml (Pack of 2)",

    rating: "5.0★",
    price : "399"
    },
    {
        image: "https://honasa-mamaearth-production.imgix.net/f/d/fds_9573-props_qwhqvlzshodrynok.jpg?auto=compress&fit=scale&w=400&h=400",
        name:"Moisturizing Bathing Bar Soap For Babies, pack of 2*75g", 
        rating:"4.5★" ,
        price: "242"
    },
    {
    image: "https://honasa-mamaearth-production.imgix.net/o/r/original-orange-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
    name: "Original Orange Body Lotion For Kids With Orange & Shea Butter - 400 ml (Pack of 2)",

    rating: "5.0★",
    price : "399"
    },
    {
    image:"https://honasa-mamaearth-production.imgix.net/m/i/milky-soft-lip-balm-1.jpg?auto=compress&fit=scale&w=400&h=400", 
    name:"Milky Soft Natural Lip Balm for Babies with Oats, Milk & Calendula – 4g" ,
    rating:"4.9★" ,
    price : "199"
    },
    {
      image:"https://honasa-mamaearth-production.imgix.net/s/h/shampo_props_ky0ozlvydza60eyc.jpg?auto=compress&fit=scale&w=400&h=400",
        
      name: "Dusting Powder with Organic Oatmeal and Arrowroot Powder for Babies",
      rating:"4.2★",
      price: "349"
      
    },
    {
        image: "https://honasa-mamaearth-production.imgix.net/_/m/_milky_soft_face_cream_.jpg?auto=compress&fit=scale&w=400&h=400",
        name: "Milky Soft Face Cream With Murumuru Butter for Babies, 60 ml",
        rating:"4.5★", 
        price: "199"
    },
    {
        image:"https://honasa-mamaearth-production.imgix.net/b/o/body-wash_probs_ui8gwmtjnj2sahbz.jpg?auto=compress&fit=scale&w=400&h=400" ,
        name: "Deeply Nourishing Body Wash for babies, 400ml pack of it",
        rating: "4.3★",
        price: "399"
    },
    {
    image: "https://honasa-mamaearth-production.imgix.net/s/u/super-strawberry-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
    name: "Super Strawberry Body Lotion for Kids With Strawberry & Shea Butter - 400 ml (Pack of 2)",
    rating: "5.0★",
    price : "399"
    },
    {
    image: "https://honasa-mamaearth-production.imgix.net/o/r/original-orange-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
    name: "Original Orange Body Lotion For Kids With Orange & Shea Butter - 400 ml (Pack of 2)",

    rating: "5.0★",
    price : "399"
    },
    {
        image: "https://honasa-mamaearth-production.imgix.net/_/m/_milky_soft_face_cream_.jpg?auto=compress&fit=scale&w=400&h=400",
        name: "Milky Soft Face Cream With Murumuru Butter for Babies, 60 ml",
        rating:"4.5★", 
        price: "199"
    },
    {
    image: "https://honasa-mamaearth-production.imgix.net/o/r/original-orange-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
    name: "Original Orange Body Lotion For Kids With Orange & Shea Butter - 400 ml (Pack of 2)",

    rating: "5.0★",
    price : "399"
    },
    {
    image:"https://honasa-mamaearth-production.imgix.net/m/i/milky-soft-lip-balm-1.jpg?auto=compress&fit=scale&w=400&h=400", 
    name:"Milky Soft Natural Lip Balm for Babies with Oats, Milk & Calendula – 4g" ,
    rating:"4.9★" ,
    price : "199"
    },
]



babyData.map(function (elem) {
    var box = document.createElement("div");
    box.style.border="0.5px dotted rgb(223, 213, 213)"
    box.setAttribute("class","one")
    
    var img = document.createElement("img");
    img.src = elem.image;

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
   

    box.append(img, name,btn1, priceTag, btn2);

    document.querySelector("#container1").append(box);
  });