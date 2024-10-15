const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("menu");

openMenu.addEventListener("click", () => {
  menu.classList.remove("translate-x-[-100%]");
});

closeMenu.addEventListener("click", () => {
  menu.classList.add("translate-x-[-100%]");

});