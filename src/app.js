import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  function getRandomIndex(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  function generaterandomstring() {
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    const randomString = getRandomIndex(who) + " " + getRandomIndex(action) + " " + getRandomIndex(what) + " " + getRandomIndex(when);
    let finalExcuse = document.getElementById("excuse")

    finalExcuse.innerHTML = randomString;
  }
  generaterandomstring();

  document
    .getElementById("randomizerBtn")
    .addEventListener("click", generaterandomstring);
};
console.log("Hello Rigo from the console!");