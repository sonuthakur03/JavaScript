let body = document.querySelector(".buttons");
let grey = document.querySelector("#grey");
let green = document.querySelector("#green");
let blue = document.querySelector("#blue");
let red = document.querySelector("#red");

red.addEventListener("click", ()=>{
    body.style.backgroundColor = "red";
})

blue.addEventListener("click", ()=>{
    body.style.backgroundColor = "blue";
})

green.addEventListener("click", ()=>{
    body.style.backgroundColor = "green";
})

grey.addEventListener("click", ()=>{
    body.style.backgroundColor = "grey";
})