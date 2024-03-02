$(document).ready(function () {
  $(".work a").click(function () {
    $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
  });
});
const x = document.getElementById("1st");
const pass = document.getElementById("password");
const username = document.getElementById("username");

function myFunction() {
  if (username.type === "text") {
    x.src = "images/typeing.gif";
  } else {
    x.src = "images/1st.png";
  }
}
const check = document.getElementById("show-pwd");
function checkFunction() {
  if (pass.type === "password") {
    pass.type = "text";
    x.src = "images/showpass.gif";
  } else {
    pass.type = "password";
    x.src = "images/29.png";
  }
}

function passFunction() {
  x.src = "images/HidePassword.gif";
}
