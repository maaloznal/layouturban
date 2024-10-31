let burgerButton = document.querySelector(".burger-button");
let burgerMenuDisplay = document.querySelector(".burger-menu-display");
let closeMenu = document.querySelector("#close-menu");

burgerButton.addEventListener("click", toggleDisplayBurger);

function toggleDisplayBurger() {
  let menu = burgerMenuDisplay;
  menu.style.display = "block";
}

closeMenu.addEventListener("click", hideVisDisplayBurger);

function hideVisDisplayBurger() {
  let menu = burgerMenuDisplay;
  menu.style.display = "none";
}
