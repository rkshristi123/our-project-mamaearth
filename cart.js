

    var count=localStorage.getItem("mamaEarthCartCount")||0;

    var cartproducts=JSON.parse(localStorage.getItem("Cart"))||[];

    var totalprice=0;
    for(var i=0; i<cartproducts.length;i++){
        var allprice=cartproducts[i].price;
        totalprice=totalprice+Number(allprice);
    }

    var total=document.querySelector("#allprice");
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
            count--;
            localStorage.setItem("mamaEarthCartCount", count);

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


    // show cart price***************

    var msg=document.querySelector("#cartHerder");
    var totalItemPrice=document.querySelector("#totalItemPrice");
    totalItemPrice.innerText=Number(priceval.innerText);


      var shippingCost=document.querySelector("#shippingCharge")
    if(Number(priceval.innerText)>=399){
        msg.innerText="Congrats, Your Order is Eligible for FREE Shipping";
        shippingCost.innerText=0;
    }
    else if(Number(priceval.innerText)<399 && Number(priceval.innerText)>1){
        var remaining=399-priceval.innerText;
        msg.innerText="Shop for Rs"+" "+ remaining +" "+"more to Avail Free Shipping";
        shippingCost.innerText=40;
        var priceWithShippingCharge=Number(total.innerText);
        total.innerText=priceWithShippingCharge+40;
    }
    else{
        total.innerText=0;
    }

    var copdiscount=document.querySelector("#coupanDiscount");
    var newtotalPrice=Number(priceval.innerText);
    document.querySelector("#apply").addEventListener("click", appliedCoupan);
    function appliedCoupan(){
      var coupanCode=document.querySelector("#coupanInput").value;
      var coupanCount=0;
      if(coupanCount==1){
          alert("you have alreasy applied coupan");
      }
      else if(coupanCode=="masai30"){
        coupanCount++;
        var discount=newtotalPrice*30/100;
        total.innerText=newtotalPrice-discount;
        copdiscount.innerText=discount;
      }
    }

    var onlinePaymentDiscount=Number(total.innerText);
    
    var paydiscount=onlinePaymentDiscount*5/100;
    var onPayDiscount=document.querySelector("#onlinePayDis");
    onPayDiscount.innerText=paydiscount;
    onPayDiscount.style.color="green";
    var perDis=document.querySelector("#percentDis");
    perDis.style.color="green";

    var procedTopay=document.querySelector("#proceedPay");
    procedTopay.addEventListener("click", paymentpage);
    function paymentpage(){
        localStorage.setItem("mamaearthTotalPrice",total.innerText);
        window.location.href="paymentPage.html";
    }
      
    var savedMoney=0;
    if(shippingCost.innerText==0){
        savedMoney=Number(copdiscount.innerText)+40;
        document.querySelector("#savedPrice").innerText=savedMoney;
    }
    else{
        savedMoney=Number(copdiscount.innerText);
        document.querySelector("#savedPrice").innerText=savedMoney;
    }
    