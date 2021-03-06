const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".menus");
const logins = document.querySelector(".logins");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("open");
  logins.classList.toggle("open");
});
