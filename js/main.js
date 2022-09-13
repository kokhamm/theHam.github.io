var header = $('.main__header')

$(document).ready(function () {
   setTimeout(function () {
      $('.main__header').toggleClass('show-main');
   }, 500);
   setTimeout(function () {
      $('.main__top-header').toggleClass('show-main');
   }, 1000);
   setTimeout(function () {
      $('.main__mid-header').toggleClass('show-main');
   }, 1500);
   setTimeout(function () {
      $('.main__bottom-header').toggleClass('show-main');
   }, 2000);
   setTimeout(function () {
      $('.main__buttons').toggleClass('show-main');
   }, 2500);
});
$(function () {
   window.onscroll = function () { scrollFunction() };

   function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
         header.addClass('header-thin');
      } else {
         header.removeClass('header-thin');
      }
   }
});