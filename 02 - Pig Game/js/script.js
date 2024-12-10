"use strict";

// Selecting ELements
const musicEl = document.getElementById("music-file");
const musicIconEl = document.getElementById("music-icon");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting Conditions
let scores, currentScore, activePlayer, playing;

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

init();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Music Play Functionality
musicIconEl.onclick = () => {
  if (musicEl.paused) {
    musicEl.play();
    musicIconEl.src = "./assets/img/icons8-pause-100.png";
    musicIconEl.classList.toggle("rotating");
  } else {
    musicEl.pause();
    musicIconEl.src = "./assets/img/icons8-play-100.png";
    musicIconEl.classList.toggle("rotating");
  }
};

// Rolling Dice Functionality
btnRoll.addEventListener("click", () => {
  if (playing) {
    // 1. Generating a Random Dice Roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display Dice
    diceEl.classList.remove("hidden");
    diceEl.src = `./assets/img/bx-dice-${dice}.svg`;

    // 3. Check For Rolled 1:
    if (dice !== 1) {
      // Add Dice To Current Score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to Next Player
      switchPlayer();
    }
  }
});

// Hold Btn
btnHold.addEventListener("click", () => {
  if (playing) {
    const currentPlayer = document.querySelector(`.player--${activePlayer}`);
    const activePlayerScore = document.getElementById(`score--${activePlayer}`);

    // 1. Add Current Score to Active Player's Score
    scores[activePlayer] += currentScore;
    activePlayerScore.textContent = scores[activePlayer];

    // 2. Check If Player's Score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the Game
      playing = false;
      diceEl.classList.add("hidden");

      currentPlayer.classList.add("player--winner");
      currentPlayer.classList.remove("player--active");
    } else {
      // Switch to the Next Player
      switchPlayer();
    }
  }
});

// Reset Btn
btnNew.addEventListener("click", init);
