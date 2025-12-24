const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn")
const rupaybtn = document.getElementById("rupaybtn")
const Upi = document.getElementById("Upi")
const mysubmit = document.getElementById("mysubmit")
const  subresult = document.getElementById("subresult")
const paymentresult = document.getElementById("paymentresult")

mysubmit.onclick = function(){

    if(mycheckbox.checked){
        subresult.textContent = `YOU ARE SUBSCRIBED!`;
    }
    else{
        subresult.textContent = `YOU ARE NOT SUBSCRIBED!!`;
    }
    if(visabtn.checked){
     paymentresult.textContent = `you are paying with visa`;
    }
    else if(rupaybtn.checked){
     paymentresult.textContent = `you are paying with rupay`;
    }
    else if(Upi.checked){
        paymentresult.textContent = `you are paying with Upi`;
    }
    else{
        paymentresult.textContent = `please select a payment method`
    }

}
