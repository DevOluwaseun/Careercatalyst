// Side Bar Buttons
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

// Registration form Buttons

const form = document.querySelector("form");
const nextBtn = document.querySelector(".nextBtn");
const backBtn = document.querySelector(".backBtn");
const allInput = document.querySelectorAll(".first input");

nextBtn.addEventListener("click", () => {
  allInput.forEach((input) => {
    if (input.value != "") {
      form.classList.add("secActive");
    } else {
      form.classList.remove("secActive");
    }
  });
});

backBtn.addEventListener("click", () => form.classList.remove("secActive"));

// Registration Hide and Show
function hideReg() {
  const regform = document.querySelector(".reg-form");
  regform.style.display = "none";
  const body = document.querySelector("body");
  body.style.overflow = "visible";
}

function showReg() {
  const regform = document.querySelector(".reg-form");
  regform.style.display = "flex";
  const regContainer = document.querySelector(".reg-container");
  regContainer.style.display = "block";
  const body = document.querySelector("body");
  body.style.overflow = "hidden";
}

function hidePopup() {
  const popUp = document.querySelector(".Thanks-popup");
  popUp.style.display = "none";
  hideReg();
}

function showPopup() {
  const popUp = document.querySelector(".Thanks-popup");
  popUp.style.display = "flex";
  const regform = document.querySelector(".reg-container");
  regform.style.display = "none";
  const body = document.querySelector("body");
  body.style.overflow = "visible";
  console.log("submit is clicked");
}
