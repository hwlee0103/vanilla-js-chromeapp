const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick() {
  //const currentClass = title.className;
  //console.log(currentClass);

  const hasClass = title.classList.contains(CLICKED_CLASS);

  /*if (currentClass !== CLICKED_CLASS) {
    title.className = CLICKED_CLASS;
  } else {
    title.className = "";
  }*/
  /*if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }*/
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
