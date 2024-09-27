function toggleMenu() {
  const menu = document.querySelector(".menu-links"); // Fixed class selector
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
