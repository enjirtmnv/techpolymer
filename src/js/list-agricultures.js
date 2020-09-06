import $ from 'jquery';

$(document).ready(function () {

    $('.list-application__agriculture').click(function (event) {
        $('.list-agriculture').addClass('show-list-agriculture');
        $('.list-application').removeClass('show-list-application');
    });

    $('.list-agriculture__nav-item').click(function (event) {
        $('.list-agriculture').removeClass('show-list-agriculture');
        $('.list-application').addClass('show-list-application');
    });

});

$(document).mouseup(e => {
    if (!$('.list-agriculture').is(e.target)
        && $('.list-agriculture').has(e.target).length === 0)
    {
        $('.list-agriculture').removeClass('show-list-application');
    }
});
