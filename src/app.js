import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


const whorandom = Math.floor(Math.random() * who.length);
const actionrandom = Math.floor(Math.random() * action.length);
const whatrandom = Math.floor(Math.random() * what.length);
const whenrandom = Math.floor(Math.random() * when.length);

let nam=who[whorandom]+' '+action[actionrandom]+' '+what[whatrandom]+' '+when[whenrandom]

let escusejs = document.getElementById("excuse")

escusejs.innerHTML=nam



};
  console.log("Hello Rigo from the console!");