const tabBtns = Array.from(document.querySelectorAll(".services__button"));
const tabIndicator = document.querySelector("#services__indicator");
const tabSlide = Array.from(document.querySelectorAll(".services__slide"));

tabBtns[0].classList.add("services__button-active");
tabSlide[0].classList.add("services__slide-active");

let activeBtn = tabBtns[0];
let activeSlide = tabSlide[0];

 tabBtns.forEach((el) =>{
    el.addEventListener("click", onTabBtnClick);
 });

 function onTabBtnClick (e) {
    e.preventDefault();
    const btn = e.target.closest(".services__button");
    changeBtn(btn);
 };

 function changeBtn(btn){
    if (btn.classList.contains("services__button-active")){
      return;
   } 

    activeBtn.classList.remove("services__button-active");
    btn.classList.add("services__button-active");
    activeBtn = btn;
    changeIndicator(btn);
 }

 function changeIndicator(btn){
   const indexBtn = tabBtns.indexOf(btn);
   tabIndicator.style.left = `calc(${indexBtn}*100%/5)`;
   changeSlide(indexBtn);
 }
 function changeSlide(index){
    activeSlide.classList.remove("services__slide-active");
    tabSlide[index].classList.add("services__slide-active");
    activeSlide = tabSlide[index];
 }