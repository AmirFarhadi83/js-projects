"use strict";

const container = document.querySelector(".container");
const meme = document.querySelector("#meme");
const title = document.querySelector("#title");
const getMemeBtn = document.querySelector("#get-meme-btn");
let subreddits = ["catmemes", "wholesomememes", "dogmemes", "me_irl"];

async function getMeme() {
  try {
    // Fetch a random meme
    let randomSubreddit =
      subreddits[Math.floor(Math.random() * subreddits.length)];
    const res = await fetch(`https://meme-api.com/gimme/${randomSubreddit}`);
    const data = await res.json();

    // Remove the existing meme and its title if present
    const existingMeme = container.querySelector("img");
    const existingTitle = container.querySelector("h3");
    if (existingMeme) existingMeme.remove();
    if (existingTitle) existingTitle.remove();

    // Create and display the new meme
    const image = document.createElement("img");
    image.setAttribute("src", data.url);
    image.setAttribute("alt", data.title);
    const h3Title = document.createElement("h3");
    h3Title.textContent = data.title;

    // Insert the new meme before the button
    container.insertBefore(image, getMemeBtn);
    container.insertBefore(h3Title, image);
  } catch (err) {
    console.error("Failed to fetch a new meme:", err);
  }
}

// Event listeners
getMemeBtn.onclick = () => {
  getMeme();
};

window.addEventListener("load", getMeme);
