const calculate = document.querySelector("#calculate"),
  cBtn = document.querySelector("#C"),
  numBtns = document.querySelector(".nums"),
  opBtns = document.querySelector(".op-btns"),
  zeroBtn = document.querySelector("#zero");

const calResult = document.querySelector("#result");
let nowResult = 0;
let nowOperator = "";
let nowClickedNum = 0;

function operation() {
  if (nowOperator === "+") {
    nowResult = nowResult + nowClickedNum;
  } else if (nowOperator === "-") {
    nowResult = nowResult - nowClickedNum;
  } else if (nowOperator === "*") {
    nowResult = nowResult * nowClickedNum;
  } else if (nowOperator === "/") {
    nowResult = nowResult / nowClickedNum;
  }
  showResult(nowResult);
  nowResult = 0;
  nowClickedNum = 0;
  nowOperator = "";
}

function opClick(event) {
  const nowClickedOp = event.target;
  nowOperator = nowClickedOp.innerText;
}

function numClick(event) {
  const nowClicked = event.target;
  if (nowOperator === "") {
    nowClickedNum = 0;
    nowResult =
      nowResult === 0
        ? parseInt(nowClicked.innerText)
        : nowResult * 10 + parseInt(nowClicked.innerText);
    showResult(nowResult);
  } else {
    nowClickedNum =
      nowClickedNum === 0
        ? parseInt(nowClicked.innerText)
        : nowClickedNum * 10 + parseInt(nowClicked.innerText);
    showResult(nowClickedNum);
  }
}

function showResult(num) {
  calResult.innerText = num;
}

function initializeResult() {
  nowResult = 0;
  nowClickedNum = 0;
  nowOperator = "";
  showResult(nowResult);
}

function init() {
  numBtns.addEventListener("click", numClick);
  cBtn.addEventListener("click", initializeResult);
  opBtns.addEventListener("click", opClick);
  zeroBtn.addEventListener("click", numClick);
  calculate.addEventListener("click", operation);
}

init();
