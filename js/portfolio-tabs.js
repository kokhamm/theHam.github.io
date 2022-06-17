const tabBtnsPortfolio = Array.from(document.querySelectorAll(".portfolio__button"));
const tabIndicatorPortfolio = document.querySelector("#portfolio__indicator");
const tabSlidePortfolio = Array.from(document.querySelectorAll(".portfolio__slide"));
const btnLoadMore = document.querySelector("#portfolio__loadmorebtn");
const tabs = document.querySelector("#portfolio__tabs");


tabBtnsPortfolio[0].classList.add("portfolio__button-active");
tabSlidePortfolio[0].classList.add("portfolio__slide-active");

let activeBtnPortfolio = tabBtnsPortfolio[0];
let activeSlidePortfolio = tabSlidePortfolio[0];

tabBtnsPortfolio.forEach((el) => {
   el.addEventListener("click", onTabBtnClickPortfolio);
});

function onTabBtnClickPortfolio(e) {
   e.preventDefault();
   const btnPortfolio = e.target.closest(".portfolio__button");
   changeBtnPortfolio(btnPortfolio);
};

function changeBtnPortfolio(btnPortfolio) {
   if (btnPortfolio.classList.contains("portfolio__button-active")) {
      return;
   }

   activeBtnPortfolio.classList.remove("portfolio__button-active");
   btnPortfolio.classList.add("portfolio__button-active");
   activeBtnPortfolio = btnPortfolio;
   changeIndicatorPortfolio(btnPortfolio);
}

function changeIndicatorPortfolio(btnPortfolio) {
   const indexBtnPortfolio = tabBtnsPortfolio.indexOf(btnPortfolio);
   changeSlidePortfolio(indexBtnPortfolio);
}
function changeSlidePortfolio(index) {
   activeSlidePortfolio.classList.remove("portfolio__slide-active");
   tabSlidePortfolio[index].classList.add("portfolio__slide-active");
   activeSlidePortfolio = tabSlidePortfolio[index];
}

// function showCards(){
//    portfolioCards.slice(0, 12).show();
// }

