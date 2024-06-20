"use strict";

const submitBtn = document.querySelector("#submit-btn");
let loader = document.querySelector(".loader");
let wrapper = document.querySelector(".wrapper");
let searchBoxVal = document.querySelector("#search-box").value;
let gifCount;

function generateGif() {
  loader.style.display = "block";
  wrapper.style.display = "none";
  wrapper.innerHTML = "";
  gifCount = 10;
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchBoxVal}&limit=${gifCount}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  )
    .then((res) => res.json())
    .then((info) => {
      let infoData = info.data;
      console.log(info);
      infoData.forEach((gif) => {
        const container = document.createElement("div");
        container.classList.add("container");
        let iframe = document.createElement("img");
        console.log(gif);
        iframe.setAttribute("src", gif.images.fixed_height.url);

        iframe.onload = () => {
          // if iframes loaded correctly reduce the count when each gif loads
          gifCount--;
          if (gifCount == 0) {
            // if all gif have loaded then hide loader and display gifs
            loader.style.display = "none";
            wrapper.style.display = "grid";
          }
          container.append(iframe);
          wrapper.append(container);
        };
      });
    })
    .catch((err) => console.log(err));
}

submitBtn.addEventListener("click", generateGif);
window.addEventListener("load", generateGif);
