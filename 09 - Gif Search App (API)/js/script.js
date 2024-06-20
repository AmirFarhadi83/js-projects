"use strict";

const submitBtn = document.querySelector("#submit-btn");
const loader = document.querySelector(".loader");
const searchBoxVal = document.querySelector("#search-box");
const wrapper = document.querySelector(".wrapper");

function generateGif() {
  loader.style.display = "block";
  wrapper.style.display = "none";
  wrapper.innerHTML = "";
  giphy();
}

let gifCount = 10;

async function giphy() {
  try {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchBoxVal.value}&limit=${gifCount}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    );
    const info = await res.json();
    const infoData = info.data;
    infoData.map((gif) => {
      const container = document.createElement("div");
      container.classList.add("container");
      const iframe = document.createElement("img");
      iframe.setAttribute("src", gif.images.fixed_height.url);
      iframe.onload = () => {
        gifCount--;
        if (gifCount == 0) {
          loader.style.display = "none";
          wrapper.style.display = "grid";
        }
        container.append(iframe);
        wrapper.append(container);
      };
    });
  } catch (error) {
    console.log(error);
  }
}

submitBtn.addEventListener("click", generateGif);
window.addEventListener("load", generateGif);
