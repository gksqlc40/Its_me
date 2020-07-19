"use strict";
const imgs = document.querySelector(".itsme__img");
const SHOWING_IMG = "showing";
const firstSlide = document.querySelector(".itsme__img:first-child");

function slide() {
  const currentImg = document.querySelector(`.${SHOWING_IMG}`);
  if (currentImg) {
    currentImg.classList.remove(SHOWING_IMG);
    const nextImg = currentImg.nextElementSibling;

    if (nextImg) {
      currentImg.classList.remove(SHOWING_IMG);
      nextImg.classList.add(SHOWING_IMG);
    } else {
      firstSlide.classList.add(SHOWING_IMG);
    }
  } else {
    firstSlide.classList.add(SHOWING_IMG);
  }
}

slide();
setInterval(slide, 4000);
