import Splide from "../vendor/splide";
import vars from '../_vars';
const {slider} = vars;

slider && new Splide( slider, {
  type   : 'loop',
  perPage: 1,
  speed:1200,
  gap: 14,
  // autoplay: true,
} ).mount();
