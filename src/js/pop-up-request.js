import $ from 'jquery';

$('.carousel__img-button').click(function (event) {
    event.preventDefault();

    $('.pop-up-request').fadeIn(400);

});

$('.pop-up-request__close').click(function (event) {
    event.preventDefault();

    $('.pop-up-request').fadeOut(400);

});

$(document).mouseup(e => {
    if (!$('.pop-up-request__form').is(e.target)
        && $('.pop-up-request__form').has(e.target).length === 0
    ) {
        $('.pop-up-request').fadeOut(400);
    }
});
