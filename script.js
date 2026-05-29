/* =========================
   CLOCK
========================= */

function updateClock(){

const now = new Date();

let h = now.getHours().toString().padStart(2,"0");
let m = now.getMinutes().toString().padStart(2,"0");
let s = now.getSeconds().toString().padStart(2,"0");

document.getElementById("clock").innerHTML =
`${h}:${m}:${s}`;

}

setInterval(updateClock,1000);
updateClock();

/* =========================
   COUNTERS
========================= */

let views = 314499;
let players = 106397;

setInterval(()=>{

views += Math.floor(Math.random()*3);
players += Math.floor(Math.random()*2);

document.getElementById("views").innerText =
views.toString().padStart(11,"0");

document.getElementById("players").innerText =
players.toString().padStart(11,"0");

},2000);

/* =========================
   BUTTONS
========================= */

const buttons = document.querySelectorAll(".icon");

buttons[0].onclick = () => {
showNotification("🏠 Home Loaded");
window.scrollTo({
top:0,
behavior:"smooth"
});
};

buttons[1].onclick = () => {
showNotification("🎮 Games Menu Coming Soon");
};

buttons[2].onclick = () => {
showNotification("📂 Categories Opened");
};

buttons[3].onclick = () => {
showNotification("💬 Messages Opened");
};

buttons[4].onclick = () => {
openSearch();
};

buttons[5].onclick = () => {
showNotification("🖼️ Wallpapers Coming Soon");
};

buttons[6].onclick = () => {
addGame();
};

/* =========================
   DISCORD BUTTON
========================= */

document.querySelector(".fab.fa-discord").onclick = () => {

window.open(
"https://discord.com/",
"_blank"
);

};

/* =========================
   FILE BUTTON
========================= */

document.querySelector(".fa-file").onclick = () => {
showNotification("📁 Files Loaded");
};

/* =========================
   SEARCH SYSTEM
========================= */

function openSearch(){

const search = prompt(
"Search for a game:"
);

if(search){

showNotification(
`🔍 Searching for ${search}`
);

}

}

/* =========================
   ADD GAME SYSTEM
========================= */

let games = [];

function addGame(){

const name = prompt("Game name?");
const url = prompt("Game URL?");

if(!name || !url) return;

games.push({
name,
url
});

saveGames();

showNotification(
`🎮 ${name} added`
);

}

/* =========================
   SAVE / LOAD
========================= */

function saveGames(){

localStorage.setItem(
"codez_games",
JSON.stringify(games)
);

}

function loadGames(){

const saved =
localStorage.getItem("codez_games");

if(saved){

games = JSON.parse(saved);

}

}

loadGames();

/* =========================
   EXPORT SAVE
========================= */

document.querySelectorAll("button")[0]
.onclick = () => {

const data = JSON.stringify(games);

navigator.clipboard.writeText(data);

showNotification(
"💾 Save copied!"
);

};

/* =========================
   IMPORT SAVE
========================= */

document.querySelectorAll("button")[1]
.onclick = () => {

const data = prompt(
"Paste save code"
);

if(!data) return;

try{

games = JSON.parse(data);

saveGames();

showNotification(
"📥 Save imported!"
);

}catch{

showNotification(
"❌ Invalid save"
);

}

};

/* =========================
   NOTIFICATION SYSTEM
========================= */

function showNotification(text){

const div = document.createElement("div");

div.className = "notify";

div.innerText = text;

document.body.appendChild(div);

setTimeout(()=>{

div.style.opacity = "0";
div.style.transform =
"translateX(100px)";

},2000);

setTimeout(()=>{

div.remove();

},3000);

}
