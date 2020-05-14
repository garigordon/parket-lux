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

  // You can write a call and import your functions in this file.

  (function ($) {
    // When DOM is ready
    $(function () {
      slider.init();
      backToTop.init();
    });
  })(jQuery);

}());
