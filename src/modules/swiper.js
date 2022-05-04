import Swiper, { Autoplay, Navigation } from 'swiper';


export const swiper = () => {



    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        modules: [Autoplay, Navigation],
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
            stopOnLastSlide: false,
        },

        navigation: {
            nextEl: '.popular__right',
            prevEl: '.popular__left',
        },
        breakpoints: {
            991.98: {
                slidesPerView: 3,
            },
            767.98: {
                slidesPerView: 2,
            },
        }

    }
    );


}