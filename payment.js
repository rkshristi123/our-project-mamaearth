var count=localStorage.getItem("mamaEarthCartCount")||0;

    var cartproducts=JSON.parse(localStorage.getItem("Cart"))||[];

    var totalprice=0;
    for(var i=0; i<cartproducts.length;i++){
        var allprice=cartproducts[i].price;
        totalprice=totalprice+Number(allprice);
    }

var totalprice=localStorage.getItem("mamaearthTotalPrice");
    var orderedItems=JSON.parse(localStorage.getItem("Orders")) ||[];

    document.querySelector("form").addEventListener("submit", checkoutFunction);
    function checkoutFunction(){
        event.preventDefault();
        var cardNumber=document.querySelector("#number").value;
        var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
        if(cardNumber==" " || cardNumber.length!=16){
            alert("Not a valid Visa credit card number!");
        }
        var cvv=document.querySelector("#cvv").value;
        if(cvv==" " || cvv.length!=3 ){
            alert("Not a valid cvv number!"); 
        }
        var expirydate=document.querySelector("#exp").value;
        if(expirydate==" " ){
            alert("Plese enter the date");
        }
        var name=document.querySelector("#name").value;
        if(name==" " ){
            alert("Plese enter the Card Holder Name");
       }
      var otp=prompt("The OTP has bees sent to your registered mob. number, Please enter the otp");
      if(otp==1234){
            addedIntoKart.map(function(elem){
                orderedItems.push(elem);
                return orderedItems;

            })
            console.log(orderedItems);
            //Storing data on local storage
            localStorage.setItem("Orders",JSON.stringify(orderedItems));
            alert("Congratulation! You have successfully registered.");
            window.open("index.html");
        
        }
        else{
            alert("Oops! you have entered wrong otp");
        }
    }
