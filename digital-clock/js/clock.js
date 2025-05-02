let time = () => {
let date = new Date();
let months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
let d = date.toDateString();
let y = date.getFullYear();
let m = months[date.getMonth()];
let da = date.getDate();
let h = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
document.getElementById("date").innerHTML = `<p>${d}</p>`;
document.getElementById("hour").innerHTML = `${h}`;
document.getElementById("min").innerHTML = `${min}`;
document.getElementById("sec").innerHTML = `${sec}`;
}
setInterval(time , 1000);
