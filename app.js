let navBtnOn = document.querySelector(".header__menu");
navBtnOn.addEventListener("click", () => {
  document.querySelector(".App").classList.add("list-btn--on");
  document.querySelector(".nav-hidden").classList.add("nav--on");
});
let navBtnOff = document.querySelector(".nav-hidden__right-arrow");
navBtnOff.addEventListener("click", () => {
  document.querySelector(".App").classList.remove("list-btn--on");
  document.querySelector(".nav-hidden").classList.remove("nav--on");
});
let scollTop = document.querySelector(".scroll-top__btn");
scollTop.addEventListener("click", () => {
  $("html, body").animate({ scrollTop: "0px" });
});
document.addEventListener("scroll", () => {
  let z = document.documentElement.scrollTop;
  console.log(z);
});
