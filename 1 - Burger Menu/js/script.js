"use strict";

const sidebarEl = document.querySelector(".sidebar");
const menuBtn = document.querySelector(".bx-menu");
const closeBtn = document.querySelector("i.bx.bx-x");

// menuBtn.addEventListener("click", () => {
//   sidebarEl.style.display = "flex";
// });

// closeBtn.addEventListener("click", () => {
//   sidebarEl.style.display = "none";
// });

window.addEventListener("click", function (e) {
  if (e.target.closest(".bx-menu") || e.target.closest(".sidebar")) {
    sidebarEl.style.display = "flex";
  } else {
    sidebarEl.style.display = "none";
  }
});
