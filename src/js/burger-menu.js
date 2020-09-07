import $ from 'jquery';

$(document).ready(function () {

    $('.nav__mobile-burger').on('click',function (event) {
        $('.burger').toggleClass('show-burger');
        $('body').toggleClass('lock');
        $('.burger-catalog, .burger-about, .burger-rent, .burger-ransom, .burger-contacts').removeClass('show-sub-menu');
        $('.list-all-categories').removeClass('show-list-all-categories');
    });

    $('.burger__catalog').on('click',function (event) {
        $('.burger-catalog').toggleClass('close-sub-menu');
        $('.burger__catalog-arrow').toggleClass('arrow-close');
    });

});


