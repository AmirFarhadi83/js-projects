`use strict`;

function myFunction() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        2000,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

//modal
let popupEl = document.querySelector(".my-popup");

setTimeout(() => {
  popupEl.classList.add("displayBlock");
}, 2000);

setTimeout(() => {
  popupEl.classList.remove("displayBlock");
}, 7000);

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

let swiper = new Swiper(".mySwiper", {
  speed: 900,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//   let swiper2 = new Swiper1(".mySwiper", {
//     direction: "vertical",
//     slidesPerView: "auto",
//     freeMode: true,
//     scrollbar: {
//       el: ".swiper-scrollbar",
//     },
//     mousewheel: true,
//   });

// function moreFunction() {
//   let moreCard = document.getElementById("more-card");
//   let more = document.getElementById("more-card-details");
//   let btnMore = document.getElementById("my-more-Btn");

//   if (moreCard.style.display === "none") {
//     moreCard.style.display = "inline";
//     btnMore.innerHTML = "show more";
//       more.style.display = "none";
//   } else {
//     moreCard.style.display = "none";
//     btnMore.innerHTML = "show less";
//       more.style.display = "inline";
//   }
// }
