"use strict";

const menuBtn = document.querySelector(".bx-menu");
const sidebarEl = document.querySelector(".sidebar");

const closeBtn = document.querySelector(".bx-x");

// menuBtn.addEventListener('click', function () {
//     sidebarEl.style.display = 'flex';
// })

// closeBtn.addEventListener('click', function () {
//     sidebarEl.style.display = 'none';
// })

window.addEventListener("click", function (e) {
  if (e.target.closest(".sidebar") || e.target.closest(".bx-menu")) {
    sidebarEl.style.display = "flex";
  } else {
    sidebarEl.style.display = "none";
  }
});
