let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let num3=document.getElementById("num3");
let total=document.getElementById("total");
let button=document.getElementById("button");

button.addEventListener("click",()=>{
    let x=num1.value;
    let y=num2.value;
    let z=num3.value;
    let sum=(parseInt(x)*500)+(parseInt(y)*800)+(parseInt(z)*300)
    total.innerHTML="Rs."+sum+".00";
})

num1.addEventListener("click",()=>{
    let m=num1.value;
    let sum=(parseInt(m)*500)
    price1.innerHTML="Rs."+sum+".00";   
})

num2.addEventListener("click",()=>{
    let m=num2.value;
    let sum=(parseInt(m)*800)
    price2.innerHTML="Rs."+sum+".00";   
})

num3.addEventListener("click",()=>{
    let m=num3.value;
    let sum=(parseInt(m)*300)
    price3.innerHTML="Rs."+sum+".00";   
})

