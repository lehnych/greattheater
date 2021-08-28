'use strict';

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