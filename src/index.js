import './fonts/Montserrat/stylesheet.css'
import './fonts/nunito/nunito.css'
import "./styles.sass";
import 'swiper/swiper.scss'
import Swiper from 'swiper'
window.Swiper = Swiper
import Blazy from 'blazy'
window.bLazy = new Blazy();

import slider from './components/slider/slider'
import lastScreen from './components/last-screen/last-screen'
import tabs  from './components/giftset/giftset'

document.addEventListener("DOMContentLoaded", () => {
  slider();
  lastScreen();
  tabs();
});