'use strict';

var introHighlights = new Swiper("#introHighlights", {
    loop: true,
    navigation: {
        nextEl: ".swiper-custom-button-next",
        prevEl: ".swiper-custom-button-prev",
    },
});

var projectHighlights = new Swiper("#projectHighlights", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,
    breakpoints: {
        568: {
            slidesPerView: 1.5,
        },
        /*768: {
            slidesPerView: 3,
        },*/
        1024: {
            slidesPerView: 4,
        }
    }
});
