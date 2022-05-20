import { burger } from './modules/burger';
import { renderSlider } from './modules/renderSlider';
import { swiper } from './modules/swiper';
import { scroll } from './modules/scroll';
import { formModals } from './modules/formModals';

import { sendForm } from './modules/sendForm';


burger();
renderSlider();
scroll();
formModals();
swiper();
sendForm(document.querySelector('.subscribe__body'), 'https://jsonplaceholder.typicode.com/posts')
sendForm(document.querySelector('.feedback__body'), 'https://jsonplaceholder.typicode.com/posts')