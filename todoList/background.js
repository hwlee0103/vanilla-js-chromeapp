const body = document.querySelector("body");

const IMG_NUMBER = 10;

/*
//required if we were using api
function handleImgLoad() {
  console.log("image loading");
}
*/
function paintImage(imgNumber) {
  const image = new Image();
  image.src = `../images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
  //required if we were using api
  //image.addEventListener("loaded", handleImgLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
function init() {
  //generate number
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
