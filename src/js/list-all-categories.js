import $ from 'jquery';

$(document).ready(function () {

    $('.categories__item-all-categories').click(function (event) {
        $('.list-all-categories').addClass('show-list-all-categories');
        $('body').addClass('lock');
    });

    $('.list-all-categories__nav-item').click(function (event) {
        $('.list-all-categories').removeClass('show-list-all-categories');
        $('body').removeClass('lock');
    });

});