import $ from 'jquery';

$(document).ready(function () {

    $('.nav__mobile-burger').click(function (event) {
        $('.burger').toggleClass('showBurger');
        $('.header-nav').toggleClass('header-nav-fixed');
        // $('body').toggleClass('lock');
        // $('.all-categories').removeClass('show');
        // $('.categories__wrapper').removeClass('hidden');
    });

    // $('.categories__item-all-categories').click(function (event) {
    //     $('.all-categories').addClass('show');
    //     $('.categories__wrapper').addClass('hidden');
    // });
    //
    // $('.all-categories__nav-item').click(function (event) {
    //     $('.all-categories').removeClass('show');
    //     $('.categories__wrapper').removeClass('hidden');
    // });

});


