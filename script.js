/* CLOCK */

function updateClock(){

const now = new Date();

let h = now.getHours()
.toString()
.padStart(2,"0");

let m = now.getMinutes()
.toString()
.padStart(2,"0");

let s = now.getSeconds()
.toString()
.padStart(2,"0");

document.getElementById("clock")
.innerHTML = `${h}:${m}:${s}`;

}

setInterval(updateClock,1000);

updateClock();

/* SIDEBAR SECTION SYSTEM */

function showSection(id){

document.querySelectorAll(".section")
.forEach(section=>{

section.classList.add("hidden");

});

document.getElementById(id)
.classList.remove("hidden");

/* ACTIVE SIDEBAR */

document.querySelectorAll(".icon")
.forEach(icon=>{

icon.classList.remove("active");

});

event.currentTarget
.classList.add("active");

}
