/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  numberGenerator();
  suitGenerator();
};
//♠︎♣︎♥︎♦︎
function rNG(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function numberGenerator() {
  const seccion = document.querySelector("h5");
  const parrafito = document.createElement("p");
  let numerote = rNG(1, 10);
  parrafito.textContent = numerote;
  seccion.appendChild(parrafito);
  const text = document.createTextNode(numerote);
  const linkPara = document.querySelector("p");
  // linkPara.appendChild(text);
  // console.log(text);
}

function suitIconGenerator() {
  let suit = rNG(1, 4);
  let generatedSuit = "";
  let color = "";
  if (suit == 4) {
    generatedSuit = "♦";
    color = "red";
  }
  if (suit == 3) {
    generatedSuit = "♥︎";
    color = "red";
  }
  if (suit == 2) {
    generatedSuit = "♣︎";
    color = "black";
  }
  if (suit == 1) {
    generatedSuit = "♠︎";
    color = "black";
  }
  return { suit: generatedSuit, color: color };
}
function suitGenerator() {
  const suitLocation1 = document.querySelector("#suit1");
  const suitLocation2 = document.querySelector("#suit2");
  const number = document.querySelector(".card-title");

  const suitDiv1 = document.createElement("div");
  const suitDiv2 = document.createElement("div");

  const suitIcon = suitIconGenerator();

  suitDiv1.innerHTML = suitIcon.suit;
  suitDiv2.innerHTML = suitIcon.suit;
  suitDiv1.classList.add(suitIcon.color);
  suitDiv2.classList.add(suitIcon.color);
  number.classList.add(suitIcon.color);

  suitLocation1.appendChild(suitDiv1);
  suitLocation2.appendChild(suitDiv2);

  // const linkSuit = document.querySelector("#suit");
  // linkSuit.appendChild(text);
  // console.log(text);
}
