"use strict";

const input = document.querySelector(".signup__input");
const btn = document.querySelector(".signup__btn");

btn.addEventListener("click", function () {
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const result = validateEmail(input.value);
  if (!result) {
    input.classList.remove("valid");
    document.querySelector(".invalid-txt").textContent =
      "⛔ Please provide a valid email address";
    document.querySelector(".invalid-txt").removeAttribute("style");
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
    document.querySelector(".invalid-txt").textContent =
      "🥳 Congratulations! You are now a member of our newsletter";
    document.querySelector(".invalid-txt").style.color = "rgb(0, 160, 64)";
    input.classList.add("valid");
  }
});
