(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 1);
  };
  spinner();


  // Initiate the wowjs
  new WOW().init();


  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.sticky-top').addClass('shadow-sm').css('top', '0px');
    } else {
      $('.sticky-top').removeClass('shadow-sm').css('top', '0px');
    }
  });


  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout : 6000,
    smartSpeed: 1500,
    loop: true,
    nav: false,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    dotsData: true,
  });



})(jQuery);

