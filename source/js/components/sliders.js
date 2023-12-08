import Splide from "../vendor/splide";
import vars from '../_vars';
const {mainSlider, jackpotSlider, casinoSlider} = vars;

jackpotSlider && new Splide( jackpotSlider, {
  type   : 'loop',
  perPage: 4,
  speed:1200,
  gap: 14,
  // autoplay: true,
} ).mount();

casinoSlider && new Splide( casinoSlider, {
  type   : 'loop',
  perPage: 5,
  speed:1200,
  gap: 14,
  // autoplay: true,
} ).mount();

mainSlider && new Splide( mainSlider, {
  type   : 'loop',
  perPage: 1,
  speed:1200,
  gap: 14,
  autoplay: true,
} ).mount();
