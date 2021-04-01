export default () => {

  let mySwiper = new Swiper('.last-screen__slider', {
    slidesPerView: 1,
    spaceBetween: 15,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    navigation: {
      prevEl: ".last-screen__slider-button-prev",
      nextEl: ".last-screen__slider-button-next",
    },
    breakpoints: {
      768: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      1345: {
        spaceBetween: 30,
        slidesPerView: 'auto',
      }
    }
  });

}