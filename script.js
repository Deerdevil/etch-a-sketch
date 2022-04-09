"use strict:";
//Selectors
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
const openColorPicker = document.getElementById("color--picker");
//Booleans
//Sets if the color should be random
let randomChoice = false;

//Buttons and clicks

btnCanvas16.addEventListener("click", createCanvas16);
btnCanvas32.addEventListener("click", createCanvas32);
btnCanvas64.addEventListener("click", createCanvas64);
btnReset.addEventListener("click", resetCanvas);
toolPickColor.addEventListener("click", colorPicker);

toolEraser.addEventListener("click", function () {
  randomChoice = false;
  toolChoice = "white";
});

function colorPicker() {
  randomChoice = false;
  openColorPicker.replaceChildren();
  openColorPicker.classList.remove("hidden");
  openColorPicker.classList.add("active");
  createElements(".color--picker", "div", 8);
  addClassToChildren("color--picker", "div", "color--picker--colors");
  addRandomColor("color--picker", "div");
  const colorpick = document.getElementById("color--picker");
  //Choose color and close colorpicker
  colorpick.addEventListener("click", function (event) {
    let target = event.target;
    toolChoice = target.style.backgroundColor;
    openColorPicker.classList.add("hidden");
    openColorPicker.classList.remove("active");
  });
}

toolRandomColor.addEventListener("click", function () {
  mainCanvas.id = "main--canvas";
  randomChoice = true;
});

//Create canvas
function createCanvas16() {
  mainCanvas.classList.remove("hidden");
  //Swap canvas ID so we can draw on it
  mainCanvas.id = "main--canvas";
  mainCanvas.classList.remove("canvas");
  mainCanvas.classList.add("canvas--16");
  //Populate grid with DIVs
  createElements(".canvas--16", "div", 256);
  //Add color class to DIVs
  addClassToChildren("main--canvas", "div", "color");
}
function createCanvas32() {
  mainCanvas.classList.remove("hidden");
  mainCanvas.id = "main--canvas";
  mainCanvas.classList.remove("canvas");
  mainCanvas.classList.add("canvas--32");
  createElements(".canvas--32", "div", 1024);
  addClassToChildren("main--canvas", "div", "color");
}
function createCanvas64() {
  mainCanvas.classList.remove("hidden");
  mainCanvas.id = "main--canvas";
  mainCanvas.classList.remove("canvas");
  mainCanvas.classList.add("canvas--64");
  createElements(".canvas--64", "div", 4096);
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
  randomChoice = false;
}
//Create DIVs to populate the grid
function createElements(SelectClass, CreateElement, iterations) {
  for (let i = 0; i < iterations; i++) {
    let classBe = document.querySelector(SelectClass);
    let elementBe = document.createElement(CreateElement);
    classBe.appendChild(elementBe);
  }
}
//Adds class to the created divs
function addClassToChildren(id, tag, className) {
  let children = document.getElementById(id).getElementsByTagName(tag);
  for (let i = 0; i < children.length; i++) {
    children[i].classList.add(className);
  }
}
//Add random colors to the color picker

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
    if (holding === true && randomChoice === false) {
      let target = event.target;
      target.style.backgroundColor = `${toolChoice}`;
    }
  };
}
mainCanvas.addEventListener("mousedown", function () {
  holding = true;
});
mainCanvas.addEventListener("mouseup", function () {
  holding = false;
});
mainCanvas.addEventListener("mousemove", function (e) {
  if (holding === true) {
    // draw();
    getCursorPos(mainCanvas, e);
    if (randomChoice === true) {
      let target = e.target;
      target.style.backgroundColor = `${randomColor(randomColorArr)}`;
    }
  }
});
