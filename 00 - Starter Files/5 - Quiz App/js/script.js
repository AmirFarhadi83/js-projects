"use strict";

const questions = [
  {
    question: "Which is largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Mouse", correct: false },
      { text: "Cat", correct: false },
    ],
  },
  {
    question: "Which is Biggest country in the world?",
    answers: [
      { text: "Russia", correct: true },
      { text: "Iran", correct: false },
      { text: "USA", correct: false },
      { text: "Spain", correct: false },
    ],
  },
  {
    question: "Which is smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Africa", correct: false },
      { text: "South America", correct: false },
      { text: "Australia", correct: true },
    ],
  },
  {
    question: "Which city is in Iran?",
    answers: [
      { text: "NC", correct: false },
      { text: "Melbourne", correct: false },
      { text: "Qum", correct: true },
      { text: "Paris", correct: false },
    ],
  },
];

const questionEl = document.querySelector("#question");
const answerBtnEl = document.querySelector("#answer-buttons");
const nextBtn = document.querySelector("#next-btn");

let curQue, queNum, curQueIndex, score;

function init() {
  curQueIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  curQue = questions[curQueIndex];
  queNum = curQueIndex + 1;
  questionEl.innerHTML = queNum + ". " + curQue.question;

  curQue.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtnEl.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (answerBtnEl.firstChild) {
    answerBtnEl.removeChild(answerBtnEl.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerBtnEl.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function showScore() {
  resetState();
  questionEl.innerHTML = `You Scored ${score} out of ${questions.length}`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

function handleNextBtn() {
  curQueIndex++;
  curQueIndex < questions.length ? showQuestion() : showScore();
}

nextBtn.addEventListener("click", function () {
  curQueIndex < questions.length ? handleNextBtn() : init();
});
init();
