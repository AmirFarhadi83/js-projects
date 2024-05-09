"use strict";

const hourEl = document.querySelector("#hr");
const minuteEl = document.querySelector("#mn");
const secondEl = document.querySelector("#sc");

setInterval(function () {
  const day = new Date();
  const HourTime = day.getHours() * 30;
  const minuteTime = day.getMinutes() * 6;
  const secondTime = day.getSeconds() * 6;

  hourEl.style.transform = `rotateZ(${HourTime + minuteTime / 12}deg)`;

  minuteEl.style.transform = `rotateZ(${minuteTime}deg)`;

  secondEl.style.transform = `rotateZ(${secondTime}deg)`;

  // Digital Clock
  const hourDigEl = document.querySelector("#hour-dig");
  const minuteDigEl = document.querySelector("#minute-dig");
  const secondDigEl = document.querySelector("#second-dig");
  const amPmDigEl = document.querySelector("#ampm-dig");

  let hourDigTime = new Date().getHours();
  let minuteDigTime = new Date().getMinutes();
  let secondDigTime = new Date().getSeconds();

  let amPmDigTime = hourDigTime >= 12 ? "PM" : "AM";
  // convert 24hr clock to 12hr clock
  if (hourDigTime >= 12) hourDigTime -= 12;
  // add zero before single digit number

  hourDigTime = hourDigTime < 10 ? "0" + hourDigTime : hourDigTime;
  minuteDigTime = minuteDigTime < 10 ? "0" + minuteDigTime : minuteDigTime;
  secondDigTime = secondDigTime < 10 ? "0" + secondDigTime : secondDigTime;

  hourDigEl.innerHTML = hourDigTime;
  minuteDigEl.innerHTML = minuteDigTime;
  secondDigEl.innerHTML = secondDigTime;
  amPmDigEl.innerHTML = amPmDigTime;
}, 1000);

// console.log((day.getMinutes() * 6) / 12);
