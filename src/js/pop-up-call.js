import $ from 'jquery';

$('.nav__request-call').click(function (event) {
    event.preventDefault();

    $('.pop-up-call').fadeIn(400);

});

$('.footer__request-call').click(function (event) {
    event.preventDefault();

    $('.pop-up-call').fadeIn(400);

});

$('.pop-up-call__close').click(function (event) {
    event.preventDefault();

    $('.pop-up-call').fadeOut(400);

});

$(document).mouseup(e => {
    if (!$('.pop-up-call__form').is(e.target)
        && $('.pop-up-call__form').has(e.target).length === 0
    ) {
        $('.pop-up-call').fadeOut(400);
    }
});
