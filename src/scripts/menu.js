var menuOpen = false;

let menu = document.getElementsByClassName("menu")[0];
let overlay = document.getElementsByClassName("overlay")[0];
let hamburger = document.getElementsByClassName("hamburger")[0];

function toggleMenu() {
  hamburger.classList.toggle("toggled");
  menu.classList.toggle("toggled");
  overlay.classList.toggle("toggled");

  menuOpen = menu.classList.contains("toggled");
}
