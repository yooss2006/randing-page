// //작은화면일 떄 목록 클릭시
// let navBtnOn = document.querySelector(".header__menu");
// navBtnOn.addEventListener("click", () => {
//   window.scrollTo({ top: 0 });
//   document.querySelector(".App").classList.add("list-btn--on");
//   document.querySelector(".nav-hidden").classList.add("nav--on");
// });
// //작은화면일 때 화살표 클릭시
// let navBtnOff = document.querySelector(".nav-hidden__right-arrow");
// navBtnOff.addEventListener("click", () => {
//   document.querySelector(".App").classList.remove("list-btn--on");
//   document.querySelector(".nav-hidden").classList.remove("nav--on");
// });
// //스크롤 탑 버튼 클릭
// let scollTop = document.querySelector(".scroll-top__btn");
// scollTop.addEventListener("click", () => {
//   $("html, body").animate({ scrollTop: "0px" });
// });

// //스크롤시 헤드 고정
// document.addEventListener("scroll", () => {
//   let scrollValue = document.documentElement.scrollTop;
//   if (scrollValue > 50) {
//     if (!document.querySelector(".header").classList[1]) {
//       document.querySelector(".header").classList.add("header--scroll");
//     }
//   } else {
//     if (document.querySelector(".header").classList[1]) {
//       document.querySelector(".header").classList.remove("header--scroll");
//     }
//   }
// });

// //구독 input 입력
// let subscribeForm = document.querySelector(".subscribe__form");
// let subscribeInp = document.querySelector(".subscribe__email");
// let regExp =
//   /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
// subscribeForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   if (regExp.test(subscribeInp.value)) {
//     document.querySelector(".cont-modal").classList.toggle("cont-modal--hide");
//     subscribeInp.value = "";
//   } else {
//     alert("이메일 형식에 맞지않습니다. 다시 작성해주세요");
//     subscribeInp.value = "";
//   }
// });
// let contModalBtn = document.querySelector(".cont-modal__btn");
// contModalBtn.addEventListener("click", () => {
//   document.querySelector(".cont-modal").classList.toggle("cont-modal--hide");
// });
