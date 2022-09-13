var openButton = $('#popupOpen');
var promoForm = $('#promoFormPopup');
var formClose = $('#formClose');
var formCancel = $('#formCancel');
var body = $('#body');
var visa = $('#promoVisa');
var mastercardNum = $('#promoMastercard');






// Wait for the DOM to be ready
$(function () {
   // Initialize form validation on the promotionForm form.
   // It has the name attribute "registration"
   $("form[name='promotionForm']").validate({
      // Specify validation rules
      rules: {
         // The key name on the left side is the name attribute
         // of an input field. Validation rules are defined
         // on the right side
         cardHolder: "required",
         cardNumber: {
            required: true,
            minlength: 19,
         },
         validTo: {
            required: true,
            minlength: 5,
         },
         cvv: {
            required: true,
            minlength: 3,
         }
      },
      // Specify validation error messages
      messages: {
         cardHolder: "Please enter your full name",
         cardNumber: {
            required: "Please enter your card number",
            minlength: "Card number must be 16 digits long"
         },
         validTo: {
            required: "Please enter your 'Valid to' date",
            minlength: "Date must be in format MM/YY"
         },
         validTo: {
            required: "Please enter your 'Valid to' date",
            minlength: "Date must be in format MM/YY"
         },
         cvv: {
            required: "Please enter your cvv code",
            minlength: "Cvv code must be 3 digits long"
         },
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function () {
         alert("good");
         document.getElementById
      }
   });
});


$(function(){
   openButton.on('click', function(){
      promoForm.addClass('promoForm__open')
      body.addClass('lock');
   });
   formCancel.add(formClose).on('click', function(){
      promoForm.removeClass('promoForm__open')
      body.removeClass('lock');
   });
});
$(function(){
   var cardNumberMask = new IMask(document.getElementById('promInputNumber'), {
      mask: 
      [
         {
            mask: '0000 0000 0000 0000',
            regex: '^4\\d{0,15}',
            cardtype: 'visa'
         },
         {
            mask: '0000 0000 0000 0000',
            regex: '^5\\d{0,15}',
            cardtype: 'mastercard'
         }, 
         {
            mask: '0000 0000 0000 0000',
            cardtype: 'Unknown'
         }
      ],
      dispatch: function (appended, dynamicMasked) {
         var number = (dynamicMasked.value + appended).replace(/\D/g, '');

         for (var i = 0; i < dynamicMasked.compiledMasks.length; i++) {
            let re = new RegExp(dynamicMasked.compiledMasks[i].regex);
            if (number.match(re) != null) {
               return dynamicMasked.compiledMasks[i];
            }
         }
      }
   });
   var expDateMask = IMask(
      document.getElementById('promInputValid'),
      {
         mask: 'MM/YY',
         blocks: {
            YY: {
               mask: IMask.MaskedRange,
               from: 22,
               to: 99
            },

            MM: {
               mask: IMask.MaskedRange,
               from: 1,
               to: 12
            }
         }
      });
   var cvvMask = IMask(
      document.getElementById('promInputCvv'),
      {
         mask: '000',
      });


   //pop in the appropriate card icon when detected
   cardNumberMask.on("accept", function () {
      switch (cardNumberMask.masked.currentMask.cardtype) {
         case 'visa':
            visa.addClass('promo-visible');
            break;
         case 'mastercard':
            mastercardNum.addClass('promo-visible');
            break;
         default:
            visa.removeClass('promo-visible');
            mastercardNum.removeClass('promo-visible');
            break;
      }

   });
});


