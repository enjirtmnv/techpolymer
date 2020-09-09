import $ from 'jquery';

$(document).ready(function () {

    $('.categories__list-desk-application').click(function (event) {
        if (window.matchMedia('(min-width: 768px)').matches) {
            $('.list-desk-application').toggleClass('show-list-desk-application');
        }
        $('.categories').toggleClass('add-categories-box-shadow');

    });

});