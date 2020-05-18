(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _nav = require('./modules/nav');

var _nav2 = _interopRequireDefault(_nav);

var _accordion = require('./modules/accordion');

var _accordion2 = _interopRequireDefault(_accordion);

var _slimScroll = require('./modules/slimScroll');

var _slimScroll2 = _interopRequireDefault(_slimScroll);

var _sliders = require('./modules/sliders');

var _sliders2 = _interopRequireDefault(_sliders);

var _sidebarScroll = require('./modules/sidebarScroll');

var _sidebarScroll2 = _interopRequireDefault(_sidebarScroll);

var _sidebarMenu = require('./modules/sidebar-menu');

var _sidebarMenu2 = _interopRequireDefault(_sidebarMenu);

var _btnClick = require('./modules/btnClick');

var _btnClick2 = _interopRequireDefault(_btnClick);

var _backToTop = require('./modules/back-to-top');

var _backToTop2 = _interopRequireDefault(_backToTop);

var _tabs = require('./modules/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _rewiew = require('./modules/rewiew');

var _rewiew2 = _interopRequireDefault(_rewiew);

var _cabinetShow = require('./modules/cabinet-show');

var _cabinetShow2 = _interopRequireDefault(_cabinetShow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
  // When DOM is ready
  $(function () {
    _nav2.default.init();
    _accordion2.default.init();
    _slimScroll2.default.init();
    _sliders2.default.init();
    _sidebarScroll2.default.init();
    _sidebarMenu2.default.init();
    _btnClick2.default.init();
    _backToTop2.default.init();
    _tabs2.default.init();
    _rewiew2.default.init();
    _cabinetShow2.default.init();
  });
})(jQuery); // You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

},{"./modules/accordion":2,"./modules/back-to-top":3,"./modules/btnClick":4,"./modules/cabinet-show":5,"./modules/nav":6,"./modules/rewiew":7,"./modules/sidebar-menu":8,"./modules/sidebarScroll":9,"./modules/sliders":10,"./modules/slimScroll":11,"./modules/tabs":12}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var accordionMob = function ($) {
  'use strict';

  function init() {
    var allAccordions = $('.accordion .data');
    var allAccordionItems = $('.accordion .accordion-item');

    $('.accordion .accordion-item').click(function (e) {
      if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).next().slideUp("slow", function () {
          $('.mb-body-left').animate({ scrollTop: 0 }, 500);
        });
      } else {
        var _this = this;

        allAccordions.slideUp("slow");
        allAccordionItems.removeClass('open');
        $(this).addClass('open');
        $(this).next().slideDown("slow", function () {
          var pTop = $(_this).parents('.fltr').position().top,
              eTop = $(_this).offset().top;

          if (eTop < 0) var top = Math.abs(pTop) - Math.abs(eTop);else var top = eTop + Math.abs(pTop);

          $('.mb-body-left').animate({ scrollTop: top }, 500);
        });
      }

      return false;
    });
  }

  return {
    init: init
  };
}(jQuery);

exports.default = accordionMob;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});
var backToTop = function ($) {
		'use strict';

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
						jQuery('html, body').animate({ scrollTop: 0 }, duration);
						return false;
				});
		}

		return {
				init: init
		};
}(jQuery);

exports.default = backToTop;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sidebarScroll = function ($) {
  'use strict';

  function init() {
    var $sidebarLeft = $('.btn_click');
    $('.slideout-menu .search-form').hide();

    $sidebarLeft.on('click', function () {
      $('.slideout-menu .search-form').toggle();
    });
  }

  return {
    init: init
  };
}(jQuery);

exports.default = sidebarScroll;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var cabinetShow = function ($) {
  'use strict';

  function init() {
    var ifClick = false;
    var link = $('.sale-order-detail__read-more');
    var content = $('.sale-order-detail__content');
    $('.sale-order-detail__read-more').on('click', function () {
      if (ifClick) {
        link.removeClass('active');
        link.html('подробнее');
        content.hide();
        ifClick = false;
      } else {
        link.addClass('active');
        link.html('свернуть');
        content.show();
        ifClick = true;
      }
    });

    $('.button-filter button').on('click', function () {
      $('body').addClass('st-menu-open');
    });

    $('.shadow, .refresh-block').on('click', function () {
      $('body').removeClass('st-menu-open');
    });
  }

  return {
    init: init
  };
}(jQuery);

exports.default = cabinetShow;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var headerNav = function ($) {
  'use strict';

  function InitNav() {

    function MobileNav(options) {
      this.options = $.extend({
        container: null,
        hideOnClickOutside: false,
        menuActiveClass: 'nav-active',
        menuOpener: '.nav-opener',
        menuDrop: '.nav-drop',
        toggleEvent: 'click',
        outsideClickEvent: 'click touchstart pointerdown MSPointerDown'
      }, options);
      this.initStructure();
      this.attachEvents();
    }
    MobileNav.prototype = {
      initStructure: function initStructure() {
        this.page = $('html');
        this.container = $(this.options.container);
        this.opener = this.container.find(this.options.menuOpener);
        this.drop = this.container.find(this.options.menuDrop);
      },
      attachEvents: function attachEvents() {
        var self = this;

        if (activateResizeHandler) {
          activateResizeHandler();
          activateResizeHandler = null;
        }

        this.outsideClickHandler = function (e) {
          if (self.isOpened()) {
            var target = $(e.target);
            if (!target.closest(self.opener).length && !target.closest(self.drop).length) {
              self.hide();
            }
          }
        };

        this.openerClickHandler = function (e) {
          e.preventDefault();
          self.toggle();
        };

        this.opener.on(this.options.toggleEvent, this.openerClickHandler);
      },
      isOpened: function isOpened() {
        return this.container.hasClass(this.options.menuActiveClass);
      },
      show: function show() {
        this.container.addClass(this.options.menuActiveClass);
        if (this.options.hideOnClickOutside) {
          this.page.on(this.options.outsideClickEvent, this.outsideClickHandler);
        }
      },
      hide: function hide() {
        this.container.removeClass(this.options.menuActiveClass);
        if (this.options.hideOnClickOutside) {
          this.page.off(this.options.outsideClickEvent, this.outsideClickHandler);
        }
      },
      toggle: function toggle() {
        if (this.isOpened()) {
          this.hide();
        } else {
          this.show();
        }
      },
      destroy: function destroy() {
        this.container.removeClass(this.options.menuActiveClass);
        this.opener.off(this.options.toggleEvent, this.clickHandler);
        this.page.off(this.options.outsideClickEvent, this.outsideClickHandler);
      }
    };

    var activateResizeHandler = function activateResizeHandler() {
      var win = $(window),
          doc = $('html'),
          resizeClass = 'resize-active',
          flag,
          timer;
      var removeClassHandler = function removeClassHandler() {
        flag = false;
        doc.removeClass(resizeClass);
      };
      var resizeHandler = function resizeHandler() {
        if (!flag) {
          flag = true;
          doc.addClass(resizeClass);
        }
        clearTimeout(timer);
        timer = setTimeout(removeClassHandler, 500);
      };
      win.on('resize orientationchange', resizeHandler);
    };

    $.fn.mobileNav = function (options) {
      return this.each(function () {
        var params = $.extend({}, options, { container: this }),
            instance = new MobileNav(params);
        $.data(this, 'MobileNav', instance);
      });
    };

    $('body').mobileNav({
      menuActiveClass: 'open-nav',
      menuOpener: '.btn-menu'
    });
  }

  return {
    init: InitNav
  };
}(jQuery);

exports.default = headerNav;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var rewiewForm = function ($) {
  'use strict';

  function init() {
    $('#showhide-comments-form').click(function (e) {
      e.preventDefault();

      $('#comment_form').slideToggle();
      $('#showhide-comments-form').fadeOut();
      $('.write_comment').fadeIn();
    });

    $('.write_comment').click(function (e) {
      e.preventDefault();

      $('#comment_form').slideToggle();
      $('#showhide-comments-form').fadeIn();
      $('.write_comment').fadeOut();
    });
  }

  return {
    init: init
  };
}(jQuery);

exports.default = rewiewForm;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sidebarMenu = function ($) {
  'use strict';

  function init() {
    $('.dropdown-vertical > li > a').click(function () {
      $('.dropdown-vertical > li').removeClass('active');
      $(this).parent().addClass("active");
      $('.dropdown-vertical > li > ul').hide();
      $(this).next().toggle();
      return false;
    });

    $('body').click(function () {
      $('.dropdown-vertical > li').removeClass('active');
      $('.dropdown-vertical > li > ul').hide();
    });
  }

  return {
    init: init
  };
}(jQuery);

exports.default = sidebarMenu;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sidebarScroll = function ($) {
  'use strict';

  function init() {
    var $sidebarLeft = $('.sidebar-left');

    if (!check($sidebarLeft)) return;
    new StickySidebar('.sidebar-left', {
      topSpacing: 30,
      bottomSpacing: 20,
      innerWrapperSelector: '.sidebar-left-inner',
      containerSelector: '.main'
    });

    function check($el) {
      var height = $el.outerHeight(true);
      var heights = [];
      $el.siblings().each(function (i, el) {
        heights.push($(el).outerHeight(true));
      });
      return Math.max.apply(null, heights) > height;
    }
  }

  return {
    init: init
  };
}(jQuery);

exports.default = sidebarScroll;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sliders = function ($) {
  'use strict';

  function init() {
    var slider1 = new Swiper('.slider-1', {
      slidesPerView: 3,
      freeMode: false,
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 2
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 2
        },
        // when window width is <= 640px
        768: {
          slidesPerView: 2
        }
      },
      navigation: {
        nextEl: '.swiper-button-next.slider-btn-1',
        prevEl: '.swiper-button-prev.slider-btn-1'
      }
    });

    var slider2 = new Swiper('.slider-2', {
      slidesPerView: 3,
      freeMode: false,
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 2
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 2
        },
        // when window width is <= 640px
        768: {
          slidesPerView: 2
        }
      },
      navigation: {
        nextEl: '.swiper-button-next.slider-btn-2',
        prevEl: '.swiper-button-prev.slider-btn-2'
      }
    });

    var slider3 = new Swiper('.slider-3', {
      slidesPerView: 3,
      freeMode: false,
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 2
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 2
        },
        // when window width is <= 640px
        768: {
          slidesPerView: 2
        }
      },
      navigation: {
        nextEl: '.swiper-button-next.slider-btn-3',
        prevEl: '.swiper-button-prev.slider-btn-3'
      }
    });

    var slider4 = new Swiper('.slider-4', {
      slidesPerView: 3,
      freeMode: false,
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 2
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 2
        },
        // when window width is <= 640px
        768: {
          slidesPerView: 2
        }
      },
      navigation: {
        nextEl: '.swiper-button-next.slider-btn-4',
        prevEl: '.swiper-button-prev.slider-btn-4'
      }
    });

    var slider5 = new Swiper('.slider-5', {
      slidesPerView: 3,
      freeMode: false,
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 2
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 2
        },
        // when window width is <= 640px
        768: {
          slidesPerView: 2
        }
      },
      navigation: {
        nextEl: '.swiper-button-next.slider-btn-5',
        prevEl: '.swiper-button-prev.slider-btn-5'
      }
    });

    var slider6 = new Swiper('.slider-6', {
      slidesPerView: 3,
      freeMode: false,
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 2
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 2
        },
        // when window width is <= 640px
        768: {
          slidesPerView: 2
        }
      },
      navigation: {
        nextEl: '.swiper-button-next.slider-btn-6',
        prevEl: '.swiper-button-prev.slider-btn-6'
      }
    });

    var slider7 = new Swiper('.slider-7', {
      slidesPerView: 3,
      freeMode: false,
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 2
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 2
        },
        // when window width is <= 640px
        768: {
          slidesPerView: 2
        }
      },
      navigation: {
        nextEl: '.swiper-button-next.slider-btn-7',
        prevEl: '.swiper-button-prev.slider-btn-7'
      }
    });
  }

  return {
    init: init
  };
}(jQuery);

exports.default = sliders;

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var slimScroll = function ($) {
  'use strict';

  function init() {
    $('.mb-body-left').slimScroll({
      height: $('.menu_main').height() - 20,
      touchScrollStep: 100
    });
  }

  return {
    init: init
  };
}(jQuery);

exports.default = slimScroll;

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tabsJS = function ($) {
  'use strict';

  function init() {
    if (!$('.tab-container').length) return;
    var container = document.querySelector('.tab-container');
    tabs(container);
  }

  return {
    init: init
  };
}(jQuery);

exports.default = tabsJS;

},{}]},{},[1]);
