import Swiper, { Navigation } from "swiper";

import "../../scss/base/swiper.scss";

function initSliders() {
    if (document.querySelector(".bottom-slider__slider")) {
        new Swiper(".bottom-slider__slider", {
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 2,
            spaceBetween: 20,
            autoHeight: false,
            speed: 800,

            navigation: {
                nextEl: ".slider-about__nav_next",
                prevEl: ".slider-about__nav_prev",
            },

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
            },
        });
    }
}

window.addEventListener("load", function (e) {
    initSliders();
});
