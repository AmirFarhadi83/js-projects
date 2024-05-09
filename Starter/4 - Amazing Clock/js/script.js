"use strict";

const secondEl = document.querySelector("#sc");
const minuteEl = document.querySelector("#mn");
const hourEl = document.querySelector("#hr");

setInterval(function () {
  const day = new Date();
  const secondTime = day.getSeconds() * 6;
  const minuteTime = day.getMinutes() * 6;
  const hourTime = day.getHours() * 30;

  hourEl.style.transform = `rotateZ(${hourTime + minuteTime / 12}deg)`;
  minuteEl.style.transform = `rotateZ(${minuteTime}deg)`;
  secondEl.style.transform = `rotateZ(${secondTime}deg)`;


  // digital clock
  const hourDigEl = document.querySelector("#hour--digital");
  const minuteDigEl = document.querySelector("#minute--digital");
  const secondDigEl = document.querySelector("#second--digital");
  const amPmDigEl = document.querySelector("#ampm--digital");

  let hourDigTime = day.getHours();
  let minuteDigTime = day.getMinutes();
  let secondDigTime = day.getSeconds();

  let amPmDigTime = hourDigTime >= 12 ? "PM" : "AM";
  // convert 24hr to 12hr
  if (hourDigTime >= 12) hourDigTime -= 12;

  // add zero before single number
  hourDigTime = hourDigTime < 10 ? "0" + hourDigTime : hourDigTime;
  minuteDigTime = minuteDigTime < 10 ? "0" + minuteDigTime : minuteDigTime;
  secondDigTime = secondDigTime < 10 ? "0" + secondDigTime : secondDigTime;

  hourDigEl.innerHTML = hourDigTime;
  minuteDigEl.innerHTML = minuteDigTime;
  secondDigEl.innerHTML = secondDigTime;
  amPmDigEl.innerHTML = amPmDigTime;
});
