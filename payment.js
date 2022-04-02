var count=localStorage.getItem("mamaEarthCartCount")||0;

    var cartproducts=JSON.parse(localStorage.getItem("Cart"))||[];

    var totalprice=0;
    for(var i=0; i<cartproducts.length;i++){
        var allprice=cartproducts[i].price;
        totalprice=totalprice+Number(allprice);
    }
