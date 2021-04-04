export default () => {
  const prevButton = document.querySelector('.slider__item-button-prev')
  const nextButton = document.querySelector('.slider__item-button-next')

  let mySwiper = new Swiper('.slider__item', {
    slidesPerView: 1,
    spaceBetween: 25,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    navigation: {
      prevEl: prevButton,
      nextEl: nextButton,
    },
    touchEventsTarget: 'wrapper',
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 15
      },
      1345: {
        slidesPerView: 'auto',
        slidesPerColumn: 2,
        spaceBetween: 29
      }
    },
    on: {
      slideChangeTransitionEnd: function () {
        bLazy.revalidate()
      },
      init: function () {
        bLazy.revalidate()
      },
    },
  })

  console.info(mySwiper.navigation)
}