import $ from 'jquery';

$(document).ready(function () {

    $('.nav__mobile-burger').on('click',function (event) {
        $('.burger').toggleClass('show-burger');
        $('body').toggleClass('lock');
        $('.burger-catalog, .burger-about, .burger-rent, .burger-ransom, .burger-contacts').removeClass('show-sub-menu');
        $('.list-all-categories').removeClass('show-list-all-categories');
    });

    $('.burger__about').on('click',function (event) {
        $('.burger-about').toggleClass('show-sub-menu');
        $('.burger__about-arrow').toggleClass('arrow-open');
        $('.burger-rent, .burger-ransom, .burger-contacts').removeClass('show-sub-menu');
        $('.burger-catalog').addClass('close-sub-menu');
        $('.burger__rent-arrow, .burger__ransom-arrow, .burger__contacts-arrow').removeClass('arrow-open');
        $('.burger__catalog-arrow').addClass('arrow-close');
    });

    $('.burger__rent').on('click',function (event) {
        $('.burger-rent').toggleClass('show-sub-menu');
        $('.burger__rent-arrow').toggleClass('arrow-open');
        $('.burger-about, .burger-ransom, .burger-contacts').removeClass('show-sub-menu');
        $('.burger-catalog').addClass('close-sub-menu');
        $('.burger__about-arrow, .burger__ransom-arrow, .burger__contacts-arrow').removeClass('arrow-open');
        $('.burger__catalog-arrow').addClass('arrow-close');
    });

    $('.burger__ransom').on('click',function (event) {
        $('.burger-ransom').toggleClass('show-sub-menu');
        $('.burger__ransom-arrow').toggleClass('arrow-open');
        $('.burger-about, .burger-rent, .burger-contacts').removeClass('show-sub-menu');
        $('.burger-catalog').addClass('close-sub-menu');
        $('.burger__about-arrow, .burger__rent-arrow, .burger__contacts-arrow').removeClass('arrow-open');
        $('.burger__catalog-arrow').addClass('arrow-close');
    });

    $('.burger__contacts').on('click',function (event) {
        $('.burger-contacts').toggleClass('show-sub-menu');
        $('.burger__contacts-arrow').toggleClass('arrow-open');
        $('.burger-about, .burger-rent, .burger-ransom').removeClass('show-sub-menu');
        $('.burger-catalog').addClass('close-sub-menu');
        $('.burger__about-arrow, .burger__ransom-arrow, .burger__rent-arrow').removeClass('arrow-open');
        $('.burger__catalog-arrow').addClass('arrow-close');
    });

    $('.burger__catalog').on('click',function (event) {
        $('.burger-catalog').toggleClass('close-sub-menu');
        $('.burger__catalog-arrow').toggleClass('arrow-close');
        $('.burger-about, .burger-rent, .burger-ransom, .burger-contacts').removeClass('show-sub-menu');
        $('.burger__rent-arrow, .burger__about-arrow, .burger__ransom-arrow, .burger__contacts-arrow').removeClass('arrow-open');
    });


});


