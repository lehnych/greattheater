'use strict';

function navInitialize() {

    let navMobileContent = 'aside nav';
    let navDesktopContent = 'header nav';

    var navContent = 'nav ul';

    if ($(window).width() >= 1024) {
        $(navContent).appendTo(navDesktopContent);

    } else {
        $(filterHtml).appendTo(navMobileContent);
    }
}

(function($) {
    $(document).ready(navInitialize);
    $(window).resize(navInitialize);
})(jQuery);









const menuIcon = document.querySelector('.menu__icon');
const menuExit = document.querySelector('.menu__wrap__exit');
const menu = document.querySelector('.menu__wrap');
menuIcon.addEventListener('click', openMenuList);
menuExit.addEventListener('click', closeMenuList);

function openMenuList(event) {
    menu.classList.remove('hover');
}

function closeMenuList(event) {
    menu.classList.add('hover');
}
