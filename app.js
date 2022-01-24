//작은화면일 떄 목록 클릭시
let navBtnOn = document.querySelector(".nav .btnHam");
let closeNav = document.querySelector(".nav .closeNav");
let scrollTop = document.querySelector(".scroll-top");
navBtnOn.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
  document.querySelector(".header").classList.add("onHam");
});
closeNav.addEventListener("click", () => {
  document.querySelector(".header").classList.remove("onHam");
});

//스크롤시 헤드 고정
document.addEventListener("scroll", () => {
  let scrollValue = document.documentElement.scrollTop;
  //스크롤 탑 버튼

  // scrollTop.addEventListener("click", () => {
  //   $("html, body").animate({ scrollTop: "0px" });
  // });
  console.log(scrollValue);
  if (scrollValue > 43) {
    //헤더 고정
    if (!document.querySelector(".header").classList.contains("fixed")) {
      document.querySelector(".header").classList.add("fixed");
      //스크롤 온
      scrollTop.querySelector("");
    }
  } else {
    if (document.querySelector(".header").classList.contains("fixed")) {
      document.querySelector(".header").classList.remove("fixed");
    }
  }

  if (scrollValue > 303) {
    if (!scrollTop.classList.contains("underFooter")) {
      scrollTop.classList.add("underFooter");
    }
  } else {
    if (scrollTop.classList.contains("underFooter")) {
      scrollTop.classList.remove("underFooter");
    }
  }
});

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
