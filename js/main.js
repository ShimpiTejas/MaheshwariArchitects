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
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    $(document).ready(function() {
        $('#btn1').click(function() {
          $('#service-modal').modal('show');
        });
      });
    $(document).ready(function() {
        $('#btn2').click(function() {
          $('#service-modal1').modal('show');
        });
      });
    $(document).ready(function() {
        $('#btn3').click(function() {
          $('#service-modal2').modal('show');
        });
      });
    $(document).ready(function() {
        $('#btn4').click(function() {
          $('#service-modal3').modal('show');
        });
      });
    $(document).ready(function() {
        $('#btn5').click(function() {
          $('#service-modal4').modal('show');
        });
      });
    $(document).ready(function() {
        $('#btn6').click(function() {
          $('#service-modal5').modal('show');
        });
      });
})(jQuery);

