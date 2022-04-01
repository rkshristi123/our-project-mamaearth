var procedTopay=document.querySelector("#proceedPay");
    procedTopay.addEventListener("click", paymentpage);
    function paymentpage(){
        window.location.href="paymentPage.html";
    }



    var cartproducts=JSON.parse(localStorage.getItem("Cart"))||[];
    cartproducts.map(function(elem, index){
        var img=document.createElement("img");
        img.src=elem.image;
        // Div to contain image**************
        var imgdiv=document.createElement("div");
        imgdiv.style.width="20%";
        imgdiv.innerContent=img;
        
        var description=document.createElement("p");
        description.innerText=elem.name;

        var price=document.createElement("p");
        price.innerText=elem.price;
        var currency=document.createElement("p");
        currency.innerText="₹";
        // Dive to bind price and currency together.
        var priceTag=document.createElement("div");
        priceTag.append(currency,price);

        var minus=document.createElement("button");
        minus.setAttribute("id","decrease");
        minus.innerText="-";

        var quantity=document.createElement("p");

        var plus=document.createElement("button");
        plus.setAttribute("id","increase");
        plus.innerText="+";

        var qty=1;
        quantity.innerText=qty;
        
        minus.addEventListener("click",function(){
            if(qty==1){
                minus.setAttribute("disabled","disabled");
            }
            else{ 
            decreaseQty(qty);
            }
        });
       
        plus.addEventListener("click",function(){
            increaseQty(qty);
        });

        var manageQty=document.createElement("div");
        manageQty.setAttribute("id","manageQty");
        manageQty.append(minus,quantity,plus);

        var delproduct=document.createElement("button");
        delproduct.setAttribute("id","deleteItemBtn");
       
        delproduct.addEventListener("click",function(){
            deleteFromCart(elem,indx);
        });

        var itemMgmtDiv=document.createElement("div");
        itemMgmtDiv.setAttribute("id","itemmgmtDiv");
        itemMgmtDiv.append(manageQty,delproduct);
        var addedProducts=document.createElement("div");
    });

    function decreaseQty(qty){
        qty--;
        quantity.innerText=qty;
    }

    function increaseQty(qty){
        qty++;
        quantity.innerText=qty;
    }

    function deleteFromCart(elem,index){
        cartproducts.splice(index,1);
        localStorage.setItem("Cart",JSON.stringify(cartproducts));
        window.location.reload();
    }