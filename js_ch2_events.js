//event and event handler

function handleResize(/*event*/) {
  //console.log(event);
  console.log("I have been resized");
}
window.addEventListener("resize", handleResize);

//add event to title
const titleR = document.querySelector("#title");

function handleClick() {
  title.style.color = "blue";
}
//titleR.addEventListener("click", handleClick);

//if-else
if ("10" === 10) {
  console.log("hi");
} else if ("10" === "10") {
  console.log("lalalalalala");
} else {
  console.log("ho");
}

//&& : true && true == true
if (20 < 5 && "nicolas" === "nicolas") {
  console.log("yes");
} else {
  console.log("no");
}

//|| : only one true will make true
if (20 < 5 || "nicolas" === "nicolas") {
  console.log("yes");
} else {
  console.log("no");
}

//we don't use prompt anymore.. very old js
//just for test
const age = 12; //prompt("How old are you");
//console.log(age);
if (age >= 18 && age <= 21) {
  console.log("you can drink but you should not");
} else if (age > 21) {
  console.log("go ahead");
} else {
  console.log("too young");
}

//color change event
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "red"; //"#7f8c8d";
function clickTitle() {
  const currentColor = title.style.color;
  console.log(currentColor);

  //true at the beginning
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
    console.log(title.style.color);
  } else {
    title.style.color = BASE_COLOR;
    console.log(title.style.color);
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", clickTitle);
}

init();
///github contribution test

init();
