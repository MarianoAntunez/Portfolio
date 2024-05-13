const carousel = document.querySelector(".carousel");
const sections = document.querySelectorAll(".carousel-section");
const buttons = document.querySelectorAll(".controls button");

function showSlide(index) {
  sections.forEach((section, i) => {
    if (i === index) {
      section.style.display = "block";
      buttons[i].classList.add("active");
    } else {
      section.style.display = "none";
      buttons[i].classList.remove("active");
    }
  });
}

showSlide(0);

$(document).ready(function () {
  $("[data-fancybox='galeria']").fancybox({
    infobar: false,
    buttons: ["close"],
  });
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});
