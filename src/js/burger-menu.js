import $ from 'jquery';

$(document).ready(function () {

    $('.nav__mobile-burger').on('click',function (event) {
        $('.burger').toggleClass('show-burger');
        $('body').toggleClass('lock');
        $('.burger-catalog, .burger-about, .burger-rent, .burger-ransom, .burger-contacts').removeClass('show-sub-menu');
        $('.list-all-categories').removeClass('show-list-all-categories');
    });

    $('.burger__catalog').on('click',function (event) {
        $('.burger-catalog').toggleClass('show-sub-menu');
        $('.burger__nav-arrow').toggleClass('arrow-open');
        $('.burger-about, .burger-rent, .burger-ransom, .burger-contacts').removeClass('show-sub-menu');
    });

    $('.burger__about').on('click',function (event) {
        $('.burger-about').toggleClass('show-sub-menu');
        $('.burger__nav-arrow').toggleClass('arrow-open');
        $('.burger-catalog, .burger-rent, .burger-ransom, .burger-contacts').removeClass('show-sub-menu');
    });

    $('.burger__rent').on('click',function (event) {
        $('.burger-rent').toggleClass('show-sub-menu');
        $('.burger__nav-arrow').toggleClass('arrow-open');
        $('.burger-catalog, .burger-about, .burger-ransom, .burger-contacts').removeClass('show-sub-menu');
    });

    $('.burger__ransom').on('click',function (event) {
        $('.burger-ransom').toggleClass('show-sub-menu');
        $('.burger__nav-arrow').toggleClass('arrow-open');
        $('.burger-catalog, .burger-about, .burger-rent, .burger-contacts').removeClass('show-sub-menu');
    });

    $('.burger__contacts').on('click',function (event) {
        $('.burger-contacts').toggleClass('show-sub-menu');
        $('.burger__nav-arrow').toggleClass('arrow-open');
        $('.burger-catalog, .burger-about, .burger-rent, .burger-ransom').removeClass('show-sub-menu');
    });


});


