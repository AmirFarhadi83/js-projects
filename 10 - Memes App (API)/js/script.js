"use strict";

const container = document.querySelector(".container");
const meme = document.querySelector("#meme");
const title = document.querySelector("#title");
const getMemeBtn = document.querySelector("#get-meme-btn");
let subreddits = ["catmemes", "wholeseomememes", "dogmemes", "me_irl"];

async function getMeme() {
  try {
    let randomSubreddit =
      subreddits[Math.floor(Math.random() * subreddits.length)];
    console.log(randomSubreddit);
    const res = await fetch(`https://meme-api.com/gimme/${randomSubreddit}`);
    const data = await res.json();

    console.log(data);
    const image = document.createElement("img");
    image.setAttribute("src", data.url);
    image.setAttribute("alt", data.title);
    const h3Title = document.createElement("h3");
    h3Title.textContent = data.title;
    container.prepend(h3Title);
    container.prepend(image);
  } catch (err) {
    console.log(err);
  }
}

getMemeBtn.onclick = () => {
  getMeme();
};

window.addEventListener("load", getMeme);
