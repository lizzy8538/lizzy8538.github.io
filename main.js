var myInput=document.getElementById("psw");
var number = document.getElementById("number);

if(myInput.match("85")) {
  number.classList.remove("invalid");
  number.classList.add("valid");
} else {
  number.classList.remove("valid");
  number.classList.add("invalid);
}
