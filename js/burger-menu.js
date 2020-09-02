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

$(document).ready(function () {
    // $('.categories__item-all-categories').click(function (event) {
    $('.nav__mobile-burger').click(function (event) {
        $('.categories__menu-wrapper').toggleClass('show');
        $('.categories__wrapper').toggleClass('hidden');
    })
});


