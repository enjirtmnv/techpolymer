import $ from 'jquery';

$(document).ready(function () {

    $('.list-all-categories__list-application').click(function (event) {
        $('.list-application ').addClass('show-list-application');
        $('.list-all-categories').removeClass('show-list-all-categories');
    });

    $('.list-application__nav-item').click(function (event) {
        $('.list-application ').removeClass('show-list-application');
        $('.list-all-categories').addClass('show-list-all-categories');
    });

});

$(document).mouseup(e => {
    if (!$('.list-application ').is(e.target)
        && $('.list-application ').has(e.target).length === 0)
    {
        $('.list-application ').removeClass('show-list-application');
    }
});
