"use strict"

//Dom -> document object model html문서를 가져와서 제어할수있다.
const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginbutton = document.querySelector("button");

loginbutton.addEventListener("click", login)

function login(){
const req = { //오브젝트
  id : id.value,
  psword : pw.value,
};
console.log(req);
}