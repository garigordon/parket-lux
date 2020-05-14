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

  // You can write a call and import your functions in this file.

  (function ($) {
    // When DOM is ready
    $(function () {
      slider.init();
    });
  })(jQuery);

}());
