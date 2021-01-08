/** @format */

"use strict";

let colorImage = document.querySelectorAll(".color-image");
let currentColor = document.querySelectorAll(".current-color");
let checkoutBtn = document.querySelector(".checkout");
let addToCartBtn = document.querySelector(".add-to-cart");
let modalQuantity = document.querySelector(".modal-quantity");

// Function that targets the clicked color circles and changes relatives labels to the name of the clicked color
const targetColorCircles = (event) => {
  let target = event.currentTarget;

  for (let i = 0; i < colorImage.length; i++) {
    if (colorImage[i] == target) {
      colorImage[i].classList.toggle("toggle-border"); // Add a border to color circles
      for (let j = 0; j < currentColor.length; j++) {
        currentColor[j].innerText = target.classList[1].toUpperCase(); // Changes the value the color in the modal and COLOR:
      }
    } else if (colorImage[i] != target) {
      colorImage[i].classList.remove("toggle-border");
    }
  }
  addToCartBtn.style.display = "block";
  checkoutBtn.style.display = "none";
  modalQuantity.innerText = 0;
  addToCartBtn.disabled = false;
};

