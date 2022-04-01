var procedTopay=document.querySelector("#proceedPay");
    procedTopay.addEventListener("click", paymentpage);
    function paymentpage(){
        window.location.href="paymentPage.html";
    }



    var cartproducts=JSON.parse(localStorage.getItem("Cart"))||[];

    var totalprice=0;
    for(var i=0; i<cartproducts.length;i++){
        var allprice=cartproducts[i].price;
        totalprice=totalprice+Number(allprice);
    }
console.log("js working");
    var total=document.querySelector("#allItemprice");
    total.innerText=totalprice;

    var priceval=document.querySelector("#priceVal");
    priceval.innerText=totalprice;

    cartproducts.map(function(elem, index){

        var img=document.createElement("img");
        img.setAttribute("id","productPic");
    
        img.src=elem.image;
        
        
        var description=document.createElement("p");
        description.innerText=elem.name;

        var price=document.createElement("p");
        price.innerText=elem.price;
        var currency=document.createElement("p");
        currency.innerText="₹";
        // Dive to bind price and currency together.
        var priceTag=document.createElement("div");
        priceTag.setAttribute("id","priceTag");
        priceTag.append(currency,price);

        var minus=document.createElement("button");
        minus.setAttribute("id","decrease");
        minus.innerText="-";

        var quantity=document.createElement("p");
        quantity.setAttribute("id","quantity");

        var plus=document.createElement("button");
        plus.setAttribute("id","increase");
        plus.innerText="+";

        var qty=1;
        quantity.innerText=qty;

        var qtyPrice=0;
        plus.addEventListener("click",increaseQty)
            function increaseQty(){
                qty++;
                quantity.innerText=qty;
                totalprice=totalprice+(Number(elem.price));
                total.innerText=totalprice;
                console.log(totalprice);
                qtyPrice=Number(elem.price)*(qty-1);
                price.innerText=Number(elem.price)+qtyPrice;
            }
    
            
            minus.addEventListener("click",decreaseQty);
                function decreaseQty(){
                     
                    if(qty>1){
                    qty--;
                    quantity.innerText=qty;
                    console.log(totalprice);
                    totalprice=totalprice-Number(elem.price);
                    total.innerText=totalprice;
                    console.log(totalprice);
                    qtyPrice=Number(elem.price)*(qty-1);
                    price.innerText=Number(elem.price)+qtyPrice;
                    }
                }
       
          
        var manageQty=document.createElement("div");
        manageQty.setAttribute("id","manageQty");
        manageQty.append(minus,quantity,plus);

        var delproduct=document.createElement("img");
        delproduct.style.cursor="pointer";
        delproduct.src="https://i.pinimg.com/originals/2c/3e/60/2c3e6019a6a08b739bb607a4fc17ed38.png";
        
        delproduct.setAttribute("id","deleteItemBtn");
       
        delproduct.addEventListener("click",function(){
            deleteFromCart(elem,index);
            totalprice=totalprice-(Number(elem.price)*quantity.innerText);
            total.innerText=totalprice;
        });
        console.log(totalprice);
        var itemMgmtDiv=document.createElement("div");
        itemMgmtDiv.setAttribute("id","itemMgmtDiv");
        itemMgmtDiv.append(manageQty,delproduct);

        var productInfo=document.createElement("div");
        productInfo.setAttribute("id","productinfo");
        productInfo.append(description,priceTag,itemMgmtDiv);

        var cartItemList=document.createElement("div");
        cartItemList.setAttribute("id","cartItems");
        cartItemList.append(img,productInfo);
        document.querySelector("#productsInCart").append(cartItemList);
    });
    // function to delete items************************
    function deleteFromCart(elem,index){
        cartproducts.splice(index,1);
        localStorage.setItem("Cart",JSON.stringify(cartproducts));
        window.location.reload();
    }