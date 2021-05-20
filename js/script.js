document.addEventListener('DOMContentLoaded', () => {

  // SmoothScroll
  var scroll = new SmoothScroll('a[href*="#"]');

  // WOW.js
  new WOW().init();

  // Swiper.js
  const swiper = new Swiper('.swiper-container', {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 120,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        navigation: false,
      },

      767: {
        slidesPerView: 2,
        navigation: true,
      },

      991: {
        slidesPerView: 3
      }
    }
  });
});