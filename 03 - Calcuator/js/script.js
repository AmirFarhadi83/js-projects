"use strict";

// 1. press a number - we save that number
// 2. press a operator - we save that operator
// 3. press second number - save second number
// 4. press equal sign - make calculation

// let firstNumber,
//   secondNumber,
//   operation = null;

// let step = 0;
// let result = 0;

// let firstNumArray = [];
// let secondNumArray = [];

let firstNumber,
  secondNumber,
  operation,
  step,
  result,
  firstNumArray,
  secondNumArray;

const init = function () {
  firstNumber, secondNumber, operation;
  step = 0;
  result = 0;
  firstNumArray = [];
  secondNumArray = [];
};

init();

const display = document.querySelector("#display");

function getNumber(num) {
  if (step === 0 || step === 1) {
    firstNumArray.push(num); // [1,2,3,4,5]
    step = 1;
    firstNumber = Number(firstNumArray.join("")); // merge into one string, then into number
    display.value = firstNumber;
  } else if (step === 2) {
    secondNumArray.push(num);
    secondNumber = Number(secondNumArray.join(""));
    display.value = secondNumber;
  }
}

function getOperator(op) {
  step = 2;
  operation = op;
}

function clearDisplay() {
  display.value = 0;
  init();
}

const calculateEquals = function () {
  //   result = Number(`${firstNumber}${operation}${secondNumber}`);
  // result = (firstNumber)(operation)(secondNumber);
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
