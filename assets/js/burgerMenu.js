let burgerButton = document.querySelector("#burgerButton");
let navLinks = document.querySelector("#navLinks");

// Listen for click on the burger button and toggle "open" class on navLinks
burgerButton.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});