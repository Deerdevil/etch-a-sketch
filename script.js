"use strict:";

function createCanvas16() {
  for (let i = 0; i < 256; i++) {
    let createDiv = document.createElement("div");
    let canvas16 = document.querySelector(".canvas--16");
    canvas16.appendChild(createDiv);

    console.log(`Created div ${i}`);
  }
}
function createCanvas32() {
  for (let i = 0; i < 1024; i++) {
    let createDiv = document.createElement("div");
    let canvas16 = document.querySelector(".canvas--32");
    canvas16.appendChild(createDiv);

    console.log(`Created div ${i}`);
  }
}
function createCanvas64() {
  for (let i = 0; i < 4096; i++) {
    let createDiv = document.createElement("div");
    let canvas64 = document.querySelector(".canvas--64");
    canvas64.appendChild(createDiv);
  }
}

createCanvas16();
