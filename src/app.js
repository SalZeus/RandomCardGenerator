/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
//♠︎♣︎♥︎♦︎
function rNG(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function numberGenerator() {
  const seccion = document.querySelector("h5");
  const parrafito = document.createElement("h1");
  let numerote = rNG(1, 10);
  parrafito.textContent = numerote;
  seccion.appendChild(parrafito);
  const text = document.createTextNode(numerote);
  const linkPara = document.querySelector("h1");
  // linkPara.appendChild(text);
  // console.log(text);
}
numberGenerator();

function suitIconGenerator() {
  let suit = rNG(1, 4);
  let generatedSuit = "";
  if (suit == 4) {
    generatedSuit = "♦";
  }
  if (suit == 3) {
    generatedSuit = "♥︎";
  }
  if (suit == 2) {
    generatedSuit = "♣︎";
  }
  if (suit == 1) {
    generatedSuit = "♠︎";
  }
  return `<div class="id="suit" class="card-text text-end fs-1">${generatedSuit}</div>`;
}
function suitGenerator() {
  const suitLocation1 = document.querySelector("#suit1");
  const suitLocation2 = document.querySelector("#suit2");

  const suitDiv = document.createElement("div");
  const suitIcon = suitIconGenerator();
  suitDiv.innerHTML = suitIcon;

  suitLocation1.appendChild(suitDiv);
  suitLocation2.appendChild(suitDiv);

  // const linkSuit = document.querySelector("#suit");
  // linkSuit.appendChild(text);
  // console.log(text);
}

suitGenerator();
