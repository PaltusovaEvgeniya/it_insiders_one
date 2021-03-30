'use strict';


(function () {
  var sectionFeatured = document.querySelector('.featured');
  var sliderFeatured = sectionFeatured.querySelector('.swiper-container__featured');

  if (!sectionFeatured.classList.contains('only-js')) {
    sectionFeatured.classList.add('only-js');
  }

  if (sliderFeatured) {
    sliderFeatured = new Swiper('.swiper-container.swiper-container__featured', {
      direction: 'horizontal',
      slidesPerView: "2",
      spaceBetween: 15,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: 'true',
      },
      breakpoints: {
        360: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        }
      }
    })
  }
})();