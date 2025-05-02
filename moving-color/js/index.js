const box = document.querySelector('#box');
console.log(box);

function loca(e){
let rect = box.getBoundingClientRect();
let mouselocation = e.clientX - rect.left;

if(mouselocation < rect.width/2){
 let red = gsap.utils.mapRange(0,rect.width/2,255,0, mouselocation);
  red = Math.floor(red);
  gsap.to(box, {
    backgroundColor : `rgb(${red},0,0)`,
    ease : Power4,
  })
} else {
  let blue = gsap.utils.mapRange(rect.width/2,rect.width,0,255, mouselocation);
  blue = Math.floor(blue);
  gsap.to(box, {
    backgroundColor : `rgb(0,0,${blue})`,
    ease : Power4,
  })
}
}
box.addEventListener('mousemove', loca)
// gsap.utils.mapRange(inMin,inMax,outMin,outMax, valueToMap);
// gsap.to(targetedElement,{
//   key : value; of css,
//   key : value; of css,
// })