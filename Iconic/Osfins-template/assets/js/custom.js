/*
JS Index:
1. Desktop and Mobile menu
2. Home one
3. Slider 2
4. Data background
5. Search popup
6. Video popup 
7. Portfolio slider
8. Related portfolio slider 
9. Counter box 
10. Counter 2 
11. Parallax effect 
12. Circle progress 
13. Counter 3 
14. Testimonials slider
15. Partner slider 
16. Team carousel 
17. Progress Bar
18. Header sticky 
19. FAQ scripts 
20. Back to top scroll
21. Portfolio filter 
*/
(function ($) {
  "use strict";
  // 1. Desktop and Mobile menu
  $('.offcanvas-content ul.mobile-menu > li:has(ul)').addClass("has-sub");
  $('.header-navigation-menu li:has(ul)').addClass("menu-item-has-children");
  $('.offcanvas-content ul.mobile-menu > li:has(ul) > a').after('<span class="caret"></span>');
  $('.offcanvas-content ul.mobile-menu > li > .caret').on('click', function (e) {
    e.preventDefault();
    var checkElement = $(this).next();
    $('.offcanvas-content ul.mobile-menu > li').removeClass('menu-active');
    $(this).closest('li').addClass('menu-active');
    if ((checkElement.is('.submenu-inner')) && (checkElement.is(':visible'))) {
      $(this).closest('li').removeClass('menu-active');
      checkElement.slideUp('normal');
    }
    if ((checkElement.is('.submenu-inner')) && (!checkElement.is(':visible'))) {
      $('.offcanvas-content ul.mobile-menu .submenu-inner:visible').slideUp('normal');
      checkElement.slideDown('normal');
    }
    if (checkElement.is('.submenu-inner')) {
      return false;
    } else {
      return true;
    }
  });
  $('.canvas-menu.menu-offcanvas > a.dropdown-toggle').on('click', function (e) {
    e.preventDefault();
    var $style = $(this).data('canvas');
    if ($('.offcanvas-content' + $style).hasClass('open')) {
      $('.offcanvas-content' + $style).removeClass('open');
      $('#site-overlay').removeClass('open');
      $('#wp-main-content').removeClass('blur');
    } else {
      $('.offcanvas-content' + $style).addClass('open');
      $('#site-overlay').addClass('open');
      $('#wp-main-content').addClass('blur');
    }
  });
  $('#site-overlay').on('click', function (e) {
    e.preventDefault();
    $(this).removeClass('open');
    $('.offcanvas-content').removeClass('open');
    $('#wp-main-content').removeClass('blur');
  });
  $('.close-canvas').on('click', function (e) {
    e.preventDefault();
    $('.offcanvas-content').removeClass('open');
    $('#site-overlay').removeClass('open');
    $('#wp-main-content').removeClass('blur');
  });
  // 2. Home one 
  var swiperslider = new Swiper('.slider-one', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 8000,
    },
  });
  // 3. Slider 2 
  var slidertwo = new Swiper('.slider-two', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 8000,
    },
  });
  // 4. Data background 
  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  });
  // 5. Search popup 
  jQuery(".search-btn").on('click', function () {
    jQuery(".full-bar-search-wrap").addClass('search-show');
    jQuery("body").addClass('st-prevent-scroll');
    jQuery(".field.searchform-s").focus();
    return !1
  });
  jQuery(".close-search").on('click', function () {
    jQuery(".full-bar-search-wrap").removeClass('search-show');
    jQuery("body").removeClass('st-prevent-scroll');
    return !1
  });
  jQuery('.search-btn').on('click', function (event) {
    event.stopPropagation()
  });
  // 6. Video popup 
  $('.video-box a, .video-icon a').magnificPopup({
    type: 'iframe'
  });
  // 7. Portfolio slider 
  var portfolioswiper = new Swiper('.portfolio-carousel', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.portfolio-pagination',
      clickable: true,
    },
    breakpoints: {
      540: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }
  });
  // 8. Related portfolio slider 
  var relatedportfolioswiper = new Swiper('.related-portfolio-carousel', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });
  // 9. Counter box 
  $('.counter-block').appear(function () {
    var $endNum = parseInt(jQuery(this).find('.number-to-count').text());
    jQuery(this).find('.number-to-count').countTo({
      from: 0,
      to: $endNum,
      speed: 5000,
      refreshInterval: 60,
      formatter: function (value, options) {
        value = value.toFixed(options.decimals);
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '');
        return value;
      }
    });
  }, {
    accX: 0,
    accY: 0
  });
  // 10. Counter 2 
  $('.about-widget').appear(function () {
    var $endNum = parseInt(jQuery(this).find('.count-number').text());
    jQuery(this).find('.count-number').countTo({
      from: 0,
      to: $endNum,
      speed: 5000,
      refreshInterval: 60,
      formatter: function (value, options) {
        value = value.toFixed(options.decimals);
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '');
        return value;
      }
    });
  }, {
    accX: 0,
    accY: 0
  });
  // 11. Parallax effect 
  var rellax = new Rellax('.rellax', {
    breakpoints: [1201]
  });
  // 12. Circle progress 
  if ($(".circle-box").length) {
    $(".circle-box").appear(
      function () {
        var elm = $(this);
        var color = elm.attr("data-fgColor");
        var perc = elm.attr("value");
        var thickness = elm.attr("data-thickness");
        elm.knob({
          value: 0,
          min: 0,
          max: 100,
          skin: "tron",
          readOnly: true,
          thickness: thickness,
          dynamicDraw: true,
          displayInput: false
        });
        $({
          value: 0
        }).animate({
          value: perc
        }, {
          duration: 2000,
          easing: "swing",
          progress: function () {
            elm.val(Math.ceil(this.value)).trigger("change");
          }
        });
      }, {
        accY: 0
      }
    );
  }
  // 13. Counter 3 
  if ($(".counter-box").length) {
    $(".counter-box").appear(
      function () {
        var $t = $(this),
          n = $t.find(".counter-text").attr("data-stop"),
          r = parseInt($t.find(".counter-text").attr("data-speed"), 10);
        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".counter-text").text()
          }).animate({
            countNum: n
          }, {
            duration: r,
            easing: "linear",
            step: function () {
              $t.find(".counter-text").text(Math.floor(this.countNum));
            },
            complete: function () {
              $t.find(".counter-text").text(this.countNum);
            }
          });
        }
      }, {
        accY: 0
      }
    );
  }
  // 14. Testimonials slider 
  var testimonialsslider = new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: false,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
      },
    }
  });
  // 15. Partner slider 
  var partnersslider = new Swiper('.partners-carousel', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    }
  });
  // 16. Team carousel 
  var teamcarousel = new Swiper('.team-carousel', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });
  // 17. Progress Bar
  if ($('.bar-line-active').length) {
    $('.bar-line-active').appear(function () {
      var el = $(this);
      var percent = el.data('percent');
      $(el).css('width', percent).addClass('counted');
    }, {
      accY: -50
    });
  }
  // 18. Header sticky 
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 150) {
      $('.header-content').addClass("is-sticky");
    } else {
      $('.header-content').removeClass("is-sticky");
    }
  });
  // 19. FAQ scripts 
  $(".faq-header").on('click', function () {
    $(this).closest(".faq-item").toggleClass("faq-item-active").siblings().removeClass("faq-item-active");
  });
  // 20. Back to top scroll
  var $backToTop = $('.back-to-top');
  if ($backToTop.length > 0) {
    $backToTop.on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: '0px'
      }, 700);
    });
    $(window).on('scroll', function () {
      var scrollPosition = $(window).scrollTop();
      var windowHeight = $(window).height() / 2;
      if (scrollPosition > windowHeight) {
        $backToTop.addClass('in');
      } else {
        $backToTop.removeClass('in');
      }
    });
  }
  // 21. Portfolio filter 
  var mixitupcontainer = document.querySelector('.portfolio-gallary');
  var mixer = mixitup(mixitupcontainer);
})(jQuery);