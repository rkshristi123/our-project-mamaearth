<<<<<<< HEAD
=======
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
>>>>>>> d00fba9b0f926ca93a49cad5a6c6bdc694a5890e

var beautyData=[
    {
       image:"https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400", 
       name:"Charcoal Facewash for oil control, 100ml", 
       rating:"4.5★",
       price: "₹249"
    },

    {
       image:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400" ,
       name: "Tea Tree Facewash for acne and pimples, 100ml",
       rating:"4.9★",
       price: "₹249"
    },

    {
       image:"https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_hair_mask_1.jpg?auto=compress&fit=scale&w=400&h=400", 
       name:"Tea Tree Anti Dandruff Hair Mask, 200ml" ,
       rating:"5.0★",
       price:"₹599" 
    },

    {
       image:"https://honasa-mamaearth-production.imgix.net/t/e/template_1_16_2.jpg?auto=compress&fit=scale&w=400&h=400", 
       name:"Glow Serum Foundation-Toffee Glow " ,
       rating:"4.7★",
       price: "₹599"
    },

    {
       image: "https://honasa-mamaearth-production.imgix.net/p/e/perfume-1.jpg?auto=compress&fit=scale&w=400&h=400",
       name: "Mamaearth ME Eau De Parfum For a Fragrance As Unique As You - 50 ml",
       rating:"5.0★",
       price: "₹699"
    },

    {
       image:"https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-conditioner-250ml-with-ingredient_2.jpg?auto=compress&fit=scale&w=400&h=400", 
       name: "Onion Conditioner for Hair Fall Control  and also for strong hair- 250ml",
       rating:"4.6★",
       price:"₹349" 
    },

    {
       image: "https://honasa-mamaearth-production.imgix.net/a/l/aloevera_gel_1.jpg?auto=compress&fit=scale&w=400&h=400",
       name: "Aloe Ashwagandha Gel with Aloe Vera & Ashwagandha for a Youthful Glow - 300 ml",
       rating:"4.8★",
       price: "₹349"
    },

    {
       image: "https://honasa-mamaearth-production.imgix.net/l/e/leaves-of-clarity-essence-serum_2_1_1.jpg?auto=compress&fit=scale&w=400&h=400",
       name:"Leaves of Clarity Essence Serum with Neem & Salicylic Acid for Clear Skin– 30 ml", 
       rating:"4.9★",
       price: "₹599"
    },

    {
       image:"https://honasa-mamaearth-production.imgix.net/p/e/perfume-1_3.jpg?auto=compress&fit=scale&w=400&h=400", 
       name:"Mamaearth ME Eau De Parfum For a Fragrance As Unique As You - 8 ml Kit" ,
       rating:"5.0★",
       price:"₹300" 
    },

    {
        image:"https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash_1.jpg?auto=compress&fit=scale&w=400&h=400", 
        name: "Charcoal Face Wash with Activated Charcoal and Coffee for Oil Control",
        rating:"4.0★" ,
        price:"₹399"
    },

    
    {
        image:"https://honasa-mamaearth-production.imgix.net/b/h/bhringamla_shampoo_1.jpg?auto=compress&fit=scale&w=400&h=400", 
        name: "BhringAmla Shampoo with Bhringraj and Amla for Intense Hair Treatment - 250 ml",
        rating:"4.9★" ,
        price:"₹349.00"

    },

    
    {
        image: "https://honasa-mamaearth-production.imgix.net/o/i/oil-free_face_moisturizer_1.jpg?auto=compress&fit=scale&w=400&h=400",
        name: "Oil-Free Face Moisturizer for Acne-Prone Skin, 80ml",
        rating: "4.5★",
        price:"₹299.00"
    },

    {
       image:"https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-conditioner-250ml-with-ingredient_2.jpg?auto=compress&fit=scale&w=400&h=400", 
       name: "Onion Conditioner for Hair Fall Control ans also for strong hair - 250ml",
       rating:"4.6★",
       price:"₹349" 
    },

    {
       image: "https://honasa-mamaearth-production.imgix.net/a/l/aloevera_gel_1.jpg?auto=compress&fit=scale&w=400&h=400",
       name: "Aloe Ashwagandha Gel with Aloe Vera & Ashwagandha for a Youthful Glow - 300 ml",
       rating:"4.8★",
       price: "₹349"
    },

    {
       image: "https://honasa-mamaearth-production.imgix.net/l/e/leaves-of-clarity-essence-serum_2_1_1.jpg?auto=compress&fit=scale&w=400&h=400",
       name:"Leaves of Clarity Essence Serum with Neem & Salicylic Acid for Clear Skin– 30 ml", 
       rating:"4.9★",
       price: "₹599"
    },

    {
       image:"https://honasa-mamaearth-production.imgix.net/p/e/perfume-1_3.jpg?auto=compress&fit=scale&w=400&h=400", 
       name:"Mamaearth ME Eau De Parfum For a Fragrance As Unique As You - 8 ml Kit" ,
       rating:"5.0★",
       price:"₹300" 
    },

    
    


    {
        image:"https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash_1.jpg?auto=compress&fit=scale&w=400&h=400", 
        name: "Charcoal Face Wash with Activated Charcoal and Coffee for Oil Control",
        rating:"4.0★" ,
        price:"₹399"
    },

    {
       image:"https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_hair_mask_1.jpg?auto=compress&fit=scale&w=400&h=400", 
       name:"Tea Tree Anti Dandruff Hair Mask, 200ml" ,
       rating:"5.0★",
       price:"₹599" 
    },

    {
       image:"https://honasa-mamaearth-production.imgix.net/t/e/template_1_16_2.jpg?auto=compress&fit=scale&w=400&h=400", 
       name:"Glow Serum Foundation-Toffee Glow " ,
       rating:"4.7★",
       price: "₹599"
    },

    {
       image: "https://honasa-mamaearth-production.imgix.net/p/e/perfume-1.jpg?auto=compress&fit=scale&w=400&h=400",
       name: "Mamaearth ME Eau De Parfum For a Fragrance As Unique As You - 50 ml",
       rating:"5.0★",
       price: "₹699"
    },

    {
       image:"https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-conditioner-250ml-with-ingredient_2.jpg?auto=compress&fit=scale&w=400&h=400", 
       name: "Onion Conditioner for Hair Fall Control  and also for strong hair- 250ml",
       rating:"4.6★",
       price:"₹349" 
    },
    {
       image:"https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400", 
       name:"Charcoal Facewash for oil control, 100ml", 
       rating:"4.5★",
       price: "₹249"
    },

    {
       image:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400" ,
       name: "Tea Tree Facewash for acne and pimples, 100ml",
       rating:"4.9★",
       price: "₹249"
    },

    {
       image:"https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_hair_mask_1.jpg?auto=compress&fit=scale&w=400&h=400", 
       name:"Tea Tree Anti Dandruff Hair Mask, 200ml" ,
       rating:"5.0★",
       price:"₹599" 
    },

    {
       image:"https://honasa-mamaearth-production.imgix.net/t/e/template_1_16_2.jpg?auto=compress&fit=scale&w=400&h=400", 
       name:"Glow Serum Foundation-Toffee Glow " ,
       rating:"4.7★",
       price: "₹599"
    },

    {
       image: "https://honasa-mamaearth-production.imgix.net/a/l/aloevera_gel_1.jpg?auto=compress&fit=scale&w=400&h=400",
       name: "Aloe Ashwagandha Gel with Aloe Vera & Ashwagandha for a Youthful Glow - 300 ml",
       rating:"4.8★",
       price: "₹349"
    },

    {
       image: "https://honasa-mamaearth-production.imgix.net/l/e/leaves-of-clarity-essence-serum_2_1_1.jpg?auto=compress&fit=scale&w=400&h=400",
       name:"Leaves of Clarity Essence Serum with Neem & Salicylic Acid for Clear Skin– 30 ml", 
       rating:"4.9★",
       price: "₹599"
    },

    {
       image:"https://honasa-mamaearth-production.imgix.net/p/e/perfume-1_3.jpg?auto=compress&fit=scale&w=400&h=400", 
       name:"Mamaearth ME Eau De Parfum For a Fragrance As Unique As You - 8 ml Kit" ,
       rating:"5.0★",
       price:"₹300" 
    },

    {
        image:"https://honasa-mamaearth-production.imgix.net/c/h/charcoal-face-wash_1.jpg?auto=compress&fit=scale&w=400&h=400", 
        name: "Charcoal Face Wash with Activated Charcoal and Coffee for Oil Control",
        rating:"4.0★" ,
        price:"₹399"
    },
    
    {
       image: "https://honasa-mamaearth-production.imgix.net/p/e/perfume-1.jpg?auto=compress&fit=scale&w=400&h=400",
       name: "Mamaearth ME Eau De Parfum For a Fragrance As Unique As You - 50 ml",
       rating:"5.0★",
       price: "₹699"
    },

    {
       image:"https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-conditioner-250ml-with-ingredient_2.jpg?auto=compress&fit=scale&w=400&h=400", 
       name: "Onion Conditioner for Hair Fall Control  and also for strong hair- 250ml",
       rating:"4.6★",
       price:"₹349" 
    },

    {
       image: "https://honasa-mamaearth-production.imgix.net/a/l/aloevera_gel_1.jpg?auto=compress&fit=scale&w=400&h=400",
       name: "Aloe Ashwagandha Gel with Aloe Vera & Ashwagandha for a Youthful Glow - 300 ml",
       rating:"4.8★",
       price: "₹349"
    },
    {
       image:"https://honasa-mamaearth-production.imgix.net/t/e/tea-tree-face-wash-1.jpg?auto=compress&fit=scale&w=400&h=400" ,
       name: "Tea Tree Facewash for acne and pimples, 100ml",
       rating:"4.9★",
       price: "₹249"
    },

    {
       image:"https://honasa-mamaearth-production.imgix.net/t/e/tea_tree_hair_mask_1.jpg?auto=compress&fit=scale&w=400&h=400", 
       name:"Tea Tree Anti Dandruff Hair Mask, 200ml" ,
       rating:"5.0★",
       price:"₹599" 
    },

    
  
 
]






beautyData.map(function (elem) {
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

var price = document.createElement("p");
price.innerText = elem.price;
price.setAttribute("class","pr")

var btn2 = document.createElement("button");
btn2.innerText = "ADD TO CART";
btn2.setAttribute("class","add")


box.append(img, name,btn1, price, btn2);

document.querySelector("#container1").append(box);
});