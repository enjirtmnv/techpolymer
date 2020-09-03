// let burger = document.querySelector('.nav__mobile-burger');
// let menu = document.querySelector('.categories__menu-wrapper');
// let categories = document.querySelector('.categories__wrapper');
//
// burger.addEventListener('click', function () {
//
//     if(menu.classList.contains('show')){
//         menu.style.display = 'none';
//
//     } else {
//         menu.style.display = 'block';
//         categories.style.display = 'none';
//     }
//
//
// });
import $ from 'jquery';

$(document).ready(function () {

    // $('.nav__mobile-burger').click(function (event) {
    //     $('.categories__menu-wrapper').toggleClass('show');
    //     $('.categories__wrapper').toggleClass('hidden');
    // })

    $('.categories__item-all-categories').click(function (event) {
        $('.categories__menu-wrapper').addClass('show');
        $('.categories__wrapper').addClass('hidden');
    });

    $('.categories__nav-item').click(function (event) {
        $('.categories__menu-wrapper').removeClass('show');
        $('.categories__wrapper').removeClass('hidden');
    });


});


