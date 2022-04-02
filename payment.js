var count=localStorage.getItem("mamaEarthCartCount")||0;

   

var totalprice=localStorage.getItem("mamaearthTotalPrice");
    var orderedItems=JSON.parse(localStorage.getItem("Orders")) ||[];

    console.log(count,totalprice);

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
            console.log(orderedItems);
           localStorage.setItem("mamaearthTotalPrice",0);
        //    localStorage.setItem("mamaEarthCartCount",0);

            //Storing data on local storage
            localStorage.setItem("Orders",JSON.stringify(orderedItems));
            alert("Congratulation! You have successfully registered.");
            window.open("index.html");
        
        }
        else{
            alert("Oops! you have entered wrong otp");
        }
    }
    console.log(count,totalprice);