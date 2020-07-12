const itsmeImg = document.querySelector(".itsme__imgs");
const imgNumber = 5;

function paintImage(imgNumber) {
  const img = new Image();
  img.src = `img/itsme_${imgNumber + 1}.jpg`;
  img.classList.add("itsme__img");
  itsmeImg.prepend(img);
}

function getRandom() {
  const number = Math.floor(Math.random() * imgNumber);
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
