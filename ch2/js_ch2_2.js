const title = document.getElementById("title");
console.log(title);

title.innerHTML = "Hi From JS";
//해당 요소의 정보(내부 요소)를 확인할 수 있음.
console.dir(title);

//modifying style with js
title.style.color = "red";
//we can manipulate html from js

//we can navigate through objects
console.dir(document);

document.title = "I own JS page now";

//is similar to CSS selector
const titleQ = document.querySelector("#title");
console.log(titleQ);
