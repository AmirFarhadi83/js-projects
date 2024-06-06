"use strict";

let container = document.querySelector(".container");
let meme = document.querySelector("#meme");
let title = document.querySelector("#title");
let getMemeBtn = document.querySelector("#get-meme-btn");
let subReddit = ["catmemes", "wholesomememes", "dogmemes", "me_irl"];

async function getMeme() {
  try {
    let randomSubReddit =
      subReddit[Math.floor(Math.random() * subReddit.length)];
    console.log(randomSubReddit);
    const res = await fetch(`https://meme-api.com/gimme/${randomSubReddit}`);
    const data = res.json();
    console.log(data);
    container.innerHTML = `
      <img src="${data.url}" alt="meme" id="meme" />
        <h3 id="title">${data.title}</h3>`;
  } catch (error) {
    console.log(error);
  }
}

getMemeBtn.addEventListener("click",getMeme);
window.addEventListener('load',getMeme)
