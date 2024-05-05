"use strict";

// 1. press a number - we save a number
// 2. press operator - we save a operator
// 3. press second number - we save second number
// 4. press equal sign - make calculation

let firstNumber,
  secondNumber,
  operation,
  result,
  step,
  firstNumberArray,
  secondNumberArray;

const init = function () {
  firstNumber, operation, secondNumber;
  secondNumberArray = [];
  firstNumberArray = [];
  step = 0;
  result = 0;
};

init();

// const btnNumEl = document.querySelector(".btn-number");

// btnNumEl.addEventListener("click", function () {
//     console.log('btn');
// });

const display = document.querySelector("#display");

function getNumber(num) {
  if (step === 0 || step === 1) {
    step = 1;
    firstNumberArray.push(num); // [1,2,3,4,5]
    firstNumber = Number(firstNumberArray.join(""));
    display.value = firstNumber;
  } else if (step === 2) {
    secondNumberArray.push(num);
    secondNumber = Number(secondNumberArray.join(""));
    display.value = secondNumber;
  }
}

function getOperator(op) {
  step = 2;
  operation = op;
  display.value = operation;
}

function clearDisplay() {
  display.value = 0;
  init();
}

const calculateEquals = function () {
  if (operation === "+") {
    result = firstNumber + secondNumber;
    display.value = result;
  } else if (operation === "-") {
    result = firstNumber - secondNumber;
    display.value = result;
  } else if (operation === "*") {
    result = firstNumber * secondNumber;
    display.value = result;
  } else if (operation === "/") {
    result = firstNumber / secondNumber;
    display.value = result;
  }
};
