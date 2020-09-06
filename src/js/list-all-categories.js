import $ from 'jquery';

$(document).ready(function () {

    $('.categories__item-all-categories').click(function (event) {
        $('.list-all-categories').addClass('show-list-all-categories');
    });

    $('.list-all-categories__nav-item').click(function (event) {
        $('.list-all-categories').removeClass('show-list-all-categories');
    });


});

// const $menu = $('.all-categories');

$(document).mouseup(e => {
    if (!$('.list-all-categories').is(e.target)
        && $('.list-all-categories').has(e.target).length === 0)
    {
        $('.list-all-categories').removeClass('show-list-all-categories');
    }
});
