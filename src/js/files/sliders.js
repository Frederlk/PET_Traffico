import Swiper, { Navigation } from "swiper";

// Базовые стили
import "../../scss/base/swiper.scss";

// Инициализация слайдеров
function initSliders() {
    // Перечень слайдеров
    // Проверяем, есть ли слайдер на стронице
    if (document.querySelector(".bottom-slider__slider")) {
        // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper(".bottom-slider__slider", {
            // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 2,
            spaceBetween: 20,
            autoHeight: false,
            speed: 800,

            // Кнопки "влево/вправо"
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
    // Запуск инициализации слайдеров
    initSliders();
});
