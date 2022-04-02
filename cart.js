var count=localStorage.getItem("mamaEarthCartCount");
    var cartproducts=JSON.parse(localStorage.getItem("Cart"))||[];

    var totalprice=0;
    for(var i=0; i<cartproducts.length;i++){
        var allprice=cartproducts[i].price;
        totalprice=totalprice+Number(allprice);
    }
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
                priceval.innerText=total.innerText;
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
                    priceval.innerText=total.innerText;
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
            localStorage.setItem("mamaEarthCartCount",count);
            totalprice=totalprice-(Number(elem.price)*quantity.innerText);
            total.innerText=totalprice;
            priceval.innerText=total.innerText;
            
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

console.log(total.innerText);
    
    var itemPrice=document.querySelector("#itemTotal");
    itemPrice.innerText=priceval.innerText;
    var msg=document.querySelector("#cartHerder");

    var shipingcharge=document.querySelector("#shippingCharge");
    if(Number(priceval.innerText)>=399){
        msg.innerText="Congrats, Your Order is Eligible for FREE Shipping";
        shipingcharge.innerText=0;
    }
    else if(Number(priceval.innerText)<399 && Number(priceval.innerText)>=1) {
        var remaining=399-priceval.innerText;
        msg.innerText="Shop for Rs"+" "+ remaining +" "+"more to Avail Free Shipping";
        shipingcharge.innerText=40;
        total.innerText=Number(total.innerText)+40;
    }

    var newtotalPrice=priceval.innerText;
    var coupanDiscount=document.querySelector("#discount");
    document.querySelector("#apply").addEventListener("click", appliedCoupan);
    function appliedCoupan(){
      var coupanCode=document.querySelector("#coupanInput").value;
      var countCoupan=0;
      if(countCoupan==1){
          alert("you have already applied coupan");
      }
      else if(coupanCode=="masai30"){
        var discount=newtotalPrice*30/100;
        coupanDiscount.innerText=discount;
        total.innerText=Number(total.innerText)-discount;
      }
    }
   var onlinepaymentDiscount=Number(total.innerText)*5/100;
   document.querySelector("#onpaydis").innerText=onlinepaymentDiscount;

    var savedMoney=0;
    console.log(typeof(shipingcharge.innerText));
    if(shipingcharge.innerText==0){
        savedMoney= Number(coupanDiscount.innerText)+40;
        document.querySelector("#savedMoney").innerText=savedMoney;
    }
    else{
        savedMoney= Number(coupanDiscount.innerText);
        document.querySelector("#savedMoney").innerText=savedMoney;
    }
    

    var procedTopay=document.querySelector("#proceedPay");
    procedTopay.addEventListener("click", paymentpage);
    function paymentpage(){
        window.location.href="paymentPage.html";
    }