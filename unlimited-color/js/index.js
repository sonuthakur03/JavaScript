const colors = () => {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for(let i = 0; i < 6; i++){
    let j = Math.floor(Math.random() * 16);
    color += hex[j];
  }
  return color;
}


const begin = () => {
  let color = colors();
  console.log(color);
  body.style.backgroundColor = `${color}`
}

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const body = document.querySelector("body");

let intervalid;

let click = () =>{
  if(!intervalid){
  intervalid = setInterval(begin, 1000);
}
}

start.addEventListener('click', click)

stop.addEventListener('click', () =>{
  clearInterval(intervalid);
  intervalid = null;
})