let menuToggle = document.querySelector("#menu-toggle");
let menu = document.querySelector(".sidebar");
let headerNav = document.querySelector(".header-nav");
let plus = document.querySelector(".plus");
let plusSpan2 = document.querySelector('.plus-span2')

menuToggle.addEventListener("click", function (event) {
  menuToggle.classList.toggle("visible");
  menu.classList.toggle("visible");
  event.preventDefault(); // Отменяет обычное поведение ссылки
});
plus.addEventListener("click", function (event) {
  headerNav.classList.toggle("on");
  plusSpan2.classList.toggle("on");
});
