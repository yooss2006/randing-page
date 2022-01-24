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
  console.log(scrollValue);

  if (scrollValue > 43) {
    //헤더 고정
    if (!document.querySelector(".header").classList.contains("fixed")) {
      document.querySelector(".header").classList.add("fixed");
      //스크롤 온
    }
  } else {
    if (document.querySelector(".header").classList.contains("fixed")) {
      document.querySelector(".header").classList.remove("fixed");
    }
  }

  if (scrollValue > 100) {
    if (scrollTop.classList.contains("hide")) {
      console.log("zz");
      scrollTop.classList.remove("hide");
    }
  } else {
    scrollTop.classList.add("hide");
  }
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

//구독 input 입력
let subscribeForm = document.querySelector(".contForm form");
let subscribeInp = document.querySelector("#emailInp");
let regExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (regExp.test(subscribeInp.value)) {
    document.querySelector(".modal").classList.toggle("hide");
    subscribeInp.value = "";
  } else {
    alert("이메일 형식에 맞지않습니다. 다시 작성해주세요");
    subscribeInp.value = "";
  }
});
let contModalBtn = document.querySelector(".modal button");
contModalBtn.addEventListener("click", () => {
  document.querySelector(".modal").classList.toggle("hide");
});
