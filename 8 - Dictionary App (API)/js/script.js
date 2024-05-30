"use strict";

const resultEL = document.querySelector(".result");
const sound = document.querySelector("#sound");
const searchBtnEl = document.querySelector("#search-btn");
const wordInpEl = document.querySelector("#word-inp");

searchBtnEl.addEventListener("click", async function () {
  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInpEl}`
    );
    const data = await res.json();
    resultEL.innerHTML = `<div class="word">
      <h3>${wordInpEl}</h3>
      <button onclick='playSound()'>
        <i class="bx bxs-volume-full"></i>
      </button>
    </div>
    <div class="details">
      <p>${data[0].meanings[0].partOfSpeech}</p>
      <p>/${data[0].phonetic}/</p>
    </div>
    <p class="word-meaning">
      ${data[0].meanings[0].definitions[0].definition}
    </p>
    <p class="word-example">
      ${data[0].meanings[0].definitions[0].example || ""}
    </p>`;
    sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
  } catch (error) {
    console.log(error);
    resultEL.innerHTML = `<h3 class='error'>Couldn't find the word</h3>`;
  }
});

function playSound() {
  sound.play();
}
