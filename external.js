//getelementbyid
const abc=document.getElementById("one");
abc.style.color="red";

//getelementsbyclassname
let xyz = document.getElementsByClassName("hello");
//xyz[0].style.color = "blue";

for(i=0;i<xyz.length;i++){
    xyz[i].style.color="yellow";
}

//getelementsbytagname
const st=document.getElementsByTagName("h1")[0];
st.style.color="blue";

//queryselector
const x=document.querySelector("#two");
x.style.color="purple";

//queryselectorall
const y=document.querySelectorAll(".b");
// y.style.backgroundColor="maroon";
for (i=0; i<y.length; i++){
    y[i].style.backgroundColor="maroon";
}

//creating elements

const dov=document.createElement("div");
document.body.appendChild(dov);

const xy=document.createElement("h2");
xy.innerText=("Hello world");
document.getElementById("mydiv").appendChild(xy);

//removing the div element'
document.body.removeChild(dov);

document.getElementById("name").setAttribute("type","password")
//innerHtml
const px=document.createElement("p");
px.innerHTMl="hello";
document,body.appendChild(px)

console.log(st);
console.log(st.innerText)
console.log(st.innerHTML)