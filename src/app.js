/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

window.onload = function() {
  //write your code here
  let div = document.getElementById("excuse");
  div.innerHTML =
    who[getRandomInt(4)] +
    " " +
    action[getRandomInt(4)] +
    " " +
    what[getRandomInt(3)] +
    " " +
    when[getRandomInt(5)];
};
