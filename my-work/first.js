/*let num=prompt("enter your age:");
if (num >= 18) {
    console.log("congrats , are you eligible.")
}
else {
    console.log("no you are not eligible.")
}*/
/*let h=document.getElementById("p1");
console.dir(h);

let h2=document.getElementsByClassName("p2");
console.dir(h2);

let a=document.querySelector("p"); //returns first element related tag
console.dir(a);

let b=document.querySelectorAll("p"); //returns nodelist
console.dir(b);

/*let div=document.querySelector("p");
console.log(div.setAttribute("id","para"));*/

/*let btn=document.createElement("button");
btn.innerText="click me!";
console.log(btn);

/*let div=document.querySelector("div");
div.append(btn);*/

/*let div=document.querySelector("div");
div.onclick=()=>
{
    console.log("you enetred in div");
}

let btn1=document.querySelector("button");
btn1.addEventListener("click" , () =>
{
    console.log("button clicked!");
});*/

//toggle button
/*
let btn=document.querySelector("button");
let mode="light";
btn.addEventListener("click" , () =>
{
    if (mode==='light') {
        mode="dark";
        document.querySelector('body').style.backgroundColor="black";
    }
    else{
        mode="light";
        document.querySelector('body').style.backgroundColor="white";
    }
    console.log(mode);
});*/
/*setTimeout(() =>{
    console.log("hello");
},2000);*/
/*const URL= "https://cat-fact.herokuapp.com/facts";
/*let promise=fetch(URL);
console.log(promise);*/
/*const factpara=document.querySelector("#f");
const btn = document.querySelector("#btn");


const getFacts=async () => {
    console.log("getting data.....");
    let response= await fetch (URL);
    console.log(response);
    let data = await response.json();
    factpara.innerText = data[2].text;
}

btn.addEventListener("click ", getFacts);*/