"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnShowModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");

const toggleClass = () => {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

btnShowModal.forEach((element) => {
  element.addEventListener("click", toggleClass);
});

// const closeModal = () => {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

btnCloseModal.addEventListener("click", toggleClass);
overlay.addEventListener("click", toggleClass);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    toggleClass();
  }
});
