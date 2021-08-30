'use strict';

/* Mobile Menu */
function navInitialize() {
    let navMobileContent = 'aside nav';
    let navDesktopContent = 'header nav';
    let navContent = 'nav ul';

    if ($(window).width() >= 1024) {
        $(navContent).appendTo(navDesktopContent);
        $('#sidebar').removeClass('sidebar--mobile').addClass('sidebar--desktop');
    } else {
        $(navContent).appendTo(navMobileContent);
        $('#sidebar').removeClass('sidebar--desktop').addClass('sidebar--mobile');

        $('#sidebar .sidebar__close').on('click', function () {
            $('#sidebar').removeClass('active');
            $('body').removeClass('noscroll');
        });
        $('header .menu__icon').on('click', function () {
            $('#sidebar').toggleClass('active');
            $('body').toggleClass('noscroll');
        });
    }
}
(function($) {
    $(document).ready(navInitialize);
    $(window).resize(navInitialize);
})(jQuery);



/* Sliders */
let introHighlights = new Swiper("#introHighlights", {
    loop: true,
    navigation: {
        nextEl: ".swiper-custom-button-next",
        prevEl: ".swiper-custom-button-prev",
    },
});

let projectHighlights = new Swiper("#projectHighlights", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,
    breakpoints: {
        568: {
            slidesPerView: 1.5,
        },
        1024: {
            slidesPerView: 4,
        }
    }
});


/* Phone Pattern */
$(".phone").mask("+7(999)999-9999");
