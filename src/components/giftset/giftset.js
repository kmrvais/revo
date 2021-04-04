export default () => {

  const tabContainer = document.querySelector('.giftset__tabs')

  tabContainer.addEventListener('click', function (event) {
    event.preventDefault()
    let tab = event.target
    if (!tab.classList.contains('giftset__tab_active')) {
      let activeTab = document.querySelector('.giftset__tab_active')
      activeTab.classList.remove('giftset__tab_active')
      tab.classList.add('giftset__tab_active')
      let filter = tab.getAttribute('data-filter')
      let activeSlide = document.querySelector('.giftset__slide_active');
      activeSlide.classList.remove('giftset__slide_active');
      let newActiveSlide = document.querySelector(filter).classList.add('giftset__slide_active');
      bLazy.revalidate();
    }
  })

}