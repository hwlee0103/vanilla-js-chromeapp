const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

//to save todo by list
let toDos = [];

//function filterFn(toDo) {
//array
//  return toDo.id === 1;
//}

function deleteToDo(event) {
  //console.log(event.target);
  //console.dir(event.target);
  //console.log(event.target.parentNode);
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  //for each와 같이 각 요소마다 실행하는 것을 만들기
  const cleanToDos = toDos.filter(function (toDo) {
    //check int and string
    //console.log(li.id, toDo.id);
    return toDo.id !== parseInt(li.id);
  });
  //console.log(cleanToDos);
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  delBtn.innerText = "✖";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  //put sth in father element
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);

  //to save todos in list
  //an object - element of array
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      //console.log(toDo.text);
      paintToDo(toDo.text);
    });
  } // else {
  //form is always showing.
  //have to do nothing
  //    }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
