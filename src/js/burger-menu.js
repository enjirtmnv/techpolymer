import $ from 'jquery';

$(document).ready(function () {

    $('.nav__mobile-burger').on('click',function (event) {
        $('.burger').toggleClass('showBurger');
        $('.header-nav').toggleClass('header-nav-fixed');
        $('body').toggleClass('lock');
        $('.burger-catalog').removeClass('show');
        $('.burger-about').removeClass('show');
        $('.burger-rent').removeClass('show');
        $('.burger-ransom').removeClass('show');
        $('.burger-contacts').removeClass('show');
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

    $('.burger__catalog').on('click',function (event) {
        $('.burger-catalog').toggleClass('show');

        $('.burger-about').removeClass('show');
        $('.burger-rent').removeClass('show');
        $('.burger-ransom').removeClass('show');
        $('.burger-contacts').removeClass('show');
        // $('.all-categories').removeClass('show');
        // $('.categories__wrapper').removeClass('hidden');
    });

    $('.burger__about').on('click',function (event) {
        $('.burger-about').toggleClass('show');

        $('.burger-catalog').removeClass('show');
        $('.burger-rent').removeClass('show');
        $('.burger-ransom').removeClass('show');
        $('.burger-contacts').removeClass('show');
        // $('.all-categories').removeClass('show');
        // $('.categories__wrapper').removeClass('hidden');
    });

    $('.burger__rent').on('click',function (event) {
        $('.burger-rent').toggleClass('show');

        $('.burger-catalog').removeClass('show');
        $('.burger-about').removeClass('show');
        $('.burger-ransom').removeClass('show');
        $('.burger-contacts').removeClass('show');
        // $('.all-categories').removeClass('show');
        // $('.categories__wrapper').removeClass('hidden');
    });

    $('.burger__ransom').on('click',function (event) {
        $('.burger-ransom').toggleClass('show');

        $('.burger-catalog').removeClass('show');
        $('.burger-about').removeClass('show');
        $('.burger-rent').removeClass('show');
        $('.burger-contacts').removeClass('show');
        // $('.all-categories').removeClass('show');
        // $('.categories__wrapper').removeClass('hidden');
    });

    $('.burger__contacts').on('click',function (event) {
        $('.burger-contacts').toggleClass('show');

        $('.burger-catalog').removeClass('show');
        $('.burger-about').removeClass('show');
        $('.burger-rent').removeClass('show');
        $('.burger-ransom').removeClass('show');
        // $('.all-categories').removeClass('show');
        // $('.categories__wrapper').removeClass('hidden');
    });


});


