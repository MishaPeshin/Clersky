'use strict';

window.addEventListener('DOMContentLoaded', () => {
    //hamburger

    const wrapper = document.querySelector('.navigation__wrapper');
    const hamburger = document.querySelector('.navigation__hamburger'),
          menu = document.querySelector('.navigation__items');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('navigation__hamburger_active');
        menu.classList.toggle('navigation__items_active');
    });
});