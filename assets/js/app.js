(function () {
  'use strict';

  var slider = function ($) {

    function init() {
      $(".slider-home").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
      });
    }

    return {
      init: init
    };
  }(jQuery);

  var backToTop = function ($) {

    function init() {
      var offset = 220;
      var duration = 500;
      jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
          jQuery('.back-to-top').fadeIn(duration);
        } else {
          jQuery('.back-to-top').fadeOut(duration);
        }
      });
      jQuery('.back-to-top').click(function (event) {
        event.preventDefault();
        jQuery('html, body').animate({
          scrollTop: 0
        }, duration);
        return false;
      });
    }

    return {
      init: init
    };
  }(jQuery);

  var navMenu = function ($) {

    function init() {
      var slideout = new Slideout({
        'panel': document.querySelector('.gtk_main'),
        'menu': document.querySelector('.gtk_menu'),
        'padding': 276,
        'tolerance': 70,
        'touch': false
      });
      var menu_a = jQuery('.gtk_menu a.toggle');
      var main_a = jQuery('.gtk_main a.toggle');
      main_a.click(function (e) {
        e.preventDefault(); //menu_a.toggleClass('opened');

        slideout.toggle();
      });
      menu_a.click(function () {
        slideout.close();
      });
    }

    return {
      init: init
    };
  }(jQuery);

  // You can write a call and import your functions in this file.

  (function ($) {
    // When DOM is ready
    $(function () {
      slider.init();
      backToTop.init();
      navMenu.init();
    });
  })(jQuery);

}());
