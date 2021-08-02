/*!
* Start Bootstrap - Modern Business v4.3.0 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project




/* ========================================================================= */
/*  On scroll fade/bounce fffect
/* ========================================================================= */

wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: false
});
wow.init();

/*Animación de cateles*/

$(".BannerHolderEx3,.BannerBorderEx3,.BannerBorderLineEx3,.SalesEx3,.Best,.Limited").delay(0).fadeOut(500);  
$(".Banner3").delay(1000).fadeIn(500);
$(".BannerHolderEx3").delay(1500).fadeIn(500);
$(".BannerBorderEx3,.BannerBorderLineEx3").delay(2000).fadeIn(500);
$(".SalesEx3").delay(2300).fadeIn(500);
$(".Best").delay(3500).fadeIn(500);
$(".Limited").delay(4000).fadeIn(500);


$(".OffEx6").delay(1660).fadeIn(500);




// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    document.querySelectorAll('.number-animate').forEach( (el) => {
      const endValue = el.getAttribute('data-end-value');
      const incrementValue = el.getAttribute('data-increment');
      const durationValue = el.getAttribute('data-duration');
      
      if (endValue) numberAnimation(el, endValue, incrementValue, durationValue);
      
    });
    
    
    function numberAnimation(el, endValue, incrementor, duration) {
      anime({
        targets: el,
        textContent: endValue,
        round: incrementor ? 1/incrementor : 1/5,
        easing: 'easeInOutQuad',
        duration: duration ? duration : 4000,
      });
    }


    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
  })()


