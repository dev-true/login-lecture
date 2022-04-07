"use strict"

//Dom -> document object model html문서를 가져와서 제어할수있다.
const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginbutton = document.querySelector("button");

loginbutton.addEventListener("click", login)

function login(){
const req = { //오브젝트
  id : id.value,
  pw : pw.value,
};
// console.log(req); 오브젝트 객체로 전달
// console.log(JSON.stringify(req)); 문자열로 전달
  fetch("/login", {
    method: "POST",
    headers:{
      "Content-Type" : "application/json",
    },
    body : JSON.stringify(req),
  })
    .then((res)=> res.json())
    .then((res)=> {
      if(res.success){
        location.href = "/";
      } else{
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("로그인 중 에러 발생"));
    });
}
