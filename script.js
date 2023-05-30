const rightBar = document.querySelector(".right-bar");
const hamburger = document.querySelector(".hamburger");
const menuItems = document.querySelectorAll(".menu-item");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (rightBar.classList.contains("showMenu")) {
    rightBar.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    rightBar.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);