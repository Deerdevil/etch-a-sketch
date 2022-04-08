"use strict:";
const canvas = document.querySelector(".canvas");
const mainCanvas = document.getElementById("main--canvas");
const canvasButtons = document.querySelector(".canvas--buttons");
const btnCanvas16 = document.querySelector(".btn--create--16");
const btnCanvas32 = document.querySelector(".btn--create--32");
const btnCanvas64 = document.querySelector(".btn--create--64");
const btnReset = document.querySelector(".btn--reset");

//Create canvas
function createCanvas16() {
  mainCanvas.classList.remove("canvas");
  mainCanvas.classList.add("canvas--16");
  for (let i = 0; i < 256; i++) {
    let canvas16 = document.querySelector(".canvas--16");
    let createDiv = document.createElement("div");

    canvas16.appendChild(createDiv);
  }
  addColorClass();
  draw();
}

function createCanvas32() {
  mainCanvas.classList.remove("canvas");
  mainCanvas.classList.add("canvas--32");
  for (let i = 0; i < 1024; i++) {
    let createDiv = document.createElement("div");
    let canvas16 = document.querySelector(".canvas--32");
    canvas16.appendChild(createDiv);
  }
  addColorClass();
  draw();
}
function createCanvas64() {
  mainCanvas.classList.remove("canvas");
  mainCanvas.classList.add("canvas--64");
  for (let i = 0; i < 4096; i++) {
    let createDiv = document.createElement("div");
    let canvas64 = document.querySelector(".canvas--64");
    canvas64.appendChild(createDiv);
  }
  addColorClass();
  draw();
}
function resetCanvas() {
  mainCanvas.replaceChildren();
  mainCanvas.classList.add("canvas");
}
//DRAW on the canvas
function draw() {
  const colors = document.getElementById("main--canvas");
  //Checks if target is within the main canvas and applies color
  colors.onmouseover = function (event) {
    let target = event.target;
    target.style.backgroundColor = "blue";
  };
  colors.onmouseout = function (event) {
    let target = event.target;
    target.style.backgroundColor = "blue";
  };
}
//Adds the class of color to the created divs
function addColorClass() {
  let children = document
    .getElementById("main--canvas")
    .getElementsByTagName("div");

  for (let i = 0; i < children.length; i++) {
    children[i].classList.add("color");
  }
}
//Buttons and clicks

btnCanvas16.addEventListener("click", createCanvas16);
btnCanvas32.addEventListener("click", createCanvas32);
btnCanvas64.addEventListener("click", createCanvas64);
btnReset.addEventListener("click", resetCanvas);
