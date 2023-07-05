function btnclick(){
    alert("Hello you have clicked me");
}
function bdload(){
    alert("The body has loaded")
}

//addeventlistner
//element.addeventlistner(event,function)
//events-mouseclick,mouseover,keypress
 var ly=document.querySelector(".btn")
 ly.addEventListener("click",myfuction)

 function myfuction(){
    alert("hello")
 }

 ly.addEventListener("mouseover",secondfunction)
function secondfunction(){
    ly.style.color="red"
}

const btntwo=document.querySelector(".one")
btntwo.addEventListener("click",thirdfunction)
function thirdfunction(){
    btntwo.style.backgroundColor="yellow"
}

btntwo.addEventListener("mouseout",fouthfunction)
function fouthfunction(){
    btntwo.innerHTML="mouse out"
}