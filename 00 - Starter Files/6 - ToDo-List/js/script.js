"use strict";

const inputEl = document.querySelector("#input-box");
const listEl = document.querySelector(".list-container");
const alertEl = document.querySelector(".alert");

function addTask() {
  if (inputEl.value === "") {
    alertEl.style.display = "flex";
    setTimeout(() => (alertEl.style.display = "none"), 2500);
  } else {
    listEl.innerHTML += `<li>${inputEl.value}<span>\u00d7\</span></li>`;
  }
  inputEl.value = "";
  saveData();
}

listEl.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listEl.innerHTML);
}

function showTask() {
  listEl.innerHTML = localStorage.getItem("data");
}

showTask();
