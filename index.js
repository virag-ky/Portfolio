const menu = document.getElementById("menu");
const sideNav = document.getElementById("side-nav");

menu.addEventListener("click", () => {
  sideNav.classList.toggle("hidden");
  menu.classList.toggle("slide");
});
