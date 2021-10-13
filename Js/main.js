let parentNameInput = document.querySelector(".parentName");
let nameInput = document.querySelector("#name");
let newNamed = document.querySelector(".newNamed");
let parentSurnameInput = document.querySelector(".parentSurname");
let surnameInput =document.querySelector("#surname");
let newSurname = document.querySelector(".newSurname");
let parentEmailInput = document.querySelector(".parentEmail");
let emailInput = document.querySelector("#email");
let newEmail = document.querySelector(".newEmail");
let parentPasswordInput = document.querySelector(".parentPassword");
let passwordInput = document.querySelector("#psw");
let newPassword = document.querySelector(".newPassword");
let button = document.querySelector(".registerbtn");


let changeNameInput;
let surnameChangeInput;
let emailChangeInput;
let passwordChangeInput;



nameInput.addEventListener("change",nameChange);
surnameInput.addEventListener("change",surnameChange);
emailInput.addEventListener("change",emailChange);
passwordInput.addEventListener("change",passwordChange);


button.addEventListener("click",(e)=>{
    parentNameInput.innerHTML = changeNameInput;
    parentSurnameInput.innerHTML = surnameChangeInput;
    parentEmailInput.innerHTML = emailChangeInput;
    parentPasswordInput.innerHTML = passwordChangeInput;
})


function nameChange(e){
  if(nameInput.value == " " || nameInput.value == null){
      alert('Name is empty');
  }
  else
  return changeNameInput =e.target.value;
}

function surnameChange(e){
    if(surnameInput.value == " "|| surnameInput.value == null){
        return alert("Surname is empty");
    }
    else
    return surnameChangeInput = e.target.value;
}
function emailChange(e){
      if(emailInput.value == " " || emailInput.value == null){
        return alert("Email is empty");
    }
    else
    return emailChangeInput = e.target.value;
}
function passwordChange(e){
     if(passwordInput.value == " " || passwordInput.value == null){
        return alert("password boshdur");
    }
    else
    return passwordChangeInput = e.target.value;
}



