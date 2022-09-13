$(document).ready(function(){
   $('.connect__checkbox').on('click', function(){
      $('.connect__checkbox').toggleClass('connect__checkbox-on');
      $('.connect__agreement-text').toggleClass('connect__agreement-off')
      $('.connect__checkbox-hidden').removeClass('_error');
      $('.connect__item-checkbox').removeClass('_error');
   })
});

document.addEventListener('DOMContentLoaded', function () {
   const form = document.getElementById('theHamForm');
   form.addEventListener('submit', formSend);
   async function formSend(e) {
      e.preventDefault();
      let error = formValidate(form);

      if(error === 0){
         form.classList.add('_sending');
         setTimeout(function () {
            form.reset();
            form.classList.remove('_sending');
         }, 2000);
         setTimeout(function () {
            alert("Well done) Form was send.")
         }, 2100);
      }
   }
   function formValidate(form){
      let error = 0;
      let formReq = document.querySelectorAll('.__req');

      for (let index = 0; index < formReq.length; index++) {
         const input = formReq[index];
         formRemoveError(input);

         if(input.classList.contains('_email')){
            if (emailTest(input)){
               formAddError(input);
               error++;
            }
         } else if(input.getAttribute("type") === "checkbox" && input.checked === false){
            formAddError(input);
            error++
         } else{
            if(input.value === ''){
               formAddError(input);
               error++;
            }
         }
      }
      return error;
   }
   function shakeAddError(input) {
      input.parentElement.classList.add('_shake-box');
      input.classList.add('_shake-box');
   }
   function formAddError(input){
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
   }
   function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
   }
   function emailTest(input){
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
   }
});

