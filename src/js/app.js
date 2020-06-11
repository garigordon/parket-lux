// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js
// Feel free with using ES6 here.

import slider from './modules/slider-home';
import backToTop from './modules/backToTop';
import navMenu from './modules/navMenu';
import filterMobile from './modules/filterMobile';

(($) => {
  // When DOM is ready
  $(() => {
    slider.init();
    backToTop.init();
    navMenu.init();
    filterMobile.init();
  });
})(jQuery);
