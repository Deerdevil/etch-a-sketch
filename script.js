"use strict:";
const canvas = document.querySelector(".canvas");
const mainCanvas = document.getElementById("start--canvas");
const canvasButtons = document.querySelector(".canvas--buttons");
const btnCanvas16 = document.querySelector(".btn--create--16");
const btnCanvas32 = document.querySelector(".btn--create--32");
const btnCanvas64 = document.querySelector(".btn--create--64");
const btnReset = document.querySelector(".btn--reset");
const toolPickColor = document.querySelector(".tool--one");
const toolRandomColor = document.querySelector(".tool--two");
const toolEraser = document.querySelector(".tool--three");
//Buttons and clicks

btnCanvas16.addEventListener("click", createCanvas16);
btnCanvas32.addEventListener("click", createCanvas32);
btnCanvas64.addEventListener("click", createCanvas64);
btnReset.addEventListener("click", resetCanvas);
toolPickColor.addEventListener("click", colorPicker);
// toolRandomColor.addEventListener("click", pickRandomColor);
// toolEraser.addEventListener("click", eraser);
function colorPicker() {
  document.getElementById("color--picker").classList.remove("hidden");
  for (let i = 0; i < 8; i++) {
    let colorPicker = document.querySelector(".color--picker");
    let createDiv = document.createElement("div");
    colorPicker.appendChild(createDiv);
  }
  addClassToChildren("color--picker", "div", "color--picker--colors");

  addRandomColor("color--picker", "div");
}

//Create canvas
function createCanvas16() {
  mainCanvas.classList.remove("hidden");
  mainCanvas.id = "main--canvas";
  mainCanvas.classList.remove("canvas");
  mainCanvas.classList.add("canvas--16");
  for (let i = 0; i < 256; i++) {
    let canvas16 = document.querySelector(".canvas--16");
    let createDiv = document.createElement("div");

    canvas16.appendChild(createDiv);
  }
  addClassToChildren("main--canvas", "div", "color");
}
function createCanvas32() {
  mainCanvas.classList.remove("hidden");
  mainCanvas.id = "main--canvas";
  mainCanvas.classList.remove("canvas");
  mainCanvas.classList.add("canvas--32");
  for (let i = 0; i < 1024; i++) {
    let createDiv = document.createElement("div");
    let canvas16 = document.querySelector(".canvas--32");
    canvas16.appendChild(createDiv);
  }
  addClassToChildren("main--canvas", "div", "color");
}
function createCanvas64() {
  mainCanvas.classList.remove("hidden");
  mainCanvas.id = "main--canvas";
  mainCanvas.classList.remove("canvas");
  mainCanvas.classList.add("canvas--64");
  for (let i = 0; i < 4096; i++) {
    let createDiv = document.createElement("div");
    let canvas64 = document.querySelector(".canvas--64");
    canvas64.appendChild(createDiv);
  }
  addClassToChildren("main--canvas", "div", "color");
}
function resetCanvas() {
  mainCanvas.replaceChildren();
  mainCanvas.removeAttribute("class");
  mainCanvas.classList.add("hidden");
  mainCanvas.classList.add("canvas");
  document.querySelector(".canvas").style.backgroundColor = "";
  mainCanvas.style.backgroundColor = "";
  mainCanvas.id = "start--canvas";
}
//Adds class to the created divs
function addClassToChildren(id, tag, className) {
  let children = document.getElementById(id).getElementsByTagName(tag);

  for (let i = 0; i < children.length; i++) {
    children[i].classList.add(className);
  }
}
//Color picker add colors

function addRandomColor(id, tag) {
  let children = document.getElementById(id).getElementsByTagName(tag);

  for (let i = 0; i < children.length; i++) {
    children[i].style.backgroundColor = `${randomColorArr[i]}`;
  }
}

//Random colors

let randomColorArr = [
  "red",
  "green",
  "blue",
  "pink",
  "brown",
  "black",
  "yellow",
  "orange",
];
function randomColor(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

//Tells us where to paint
let holding = false;
function getCursorPos(mainCanvas) {
  mainCanvas.id = "main--canvas";
  const colors = document.getElementById("main--canvas");
  colors.onmousedown = function () {
    holding = true;
  };
  colors.onmouseup = function () {
    holding = false;
  };
  colors.onmousemove = function (event) {
    if (holding === true) {
      let target = event.target;
      target.style.backgroundColor = `${randomColor(randomColorArr)}`;
    }
  };
}
mainCanvas.addEventListener("mousedown", function (e) {
  holding = true;
});
mainCanvas.addEventListener("mouseup", function (e) {
  holding = false;
});
mainCanvas.addEventListener("mousemove", function (e) {
  if (holding === true) {
    // draw();
    getCursorPos(mainCanvas, e);
  }
});
