import $ from 'jquery';

$('.card-product__button').click(function (event) {
    event.preventDefault();

    $('.pop-up-price').fadeIn(400);

});

$('.pop-up-price__close').click(function (event) {
    event.preventDefault();

    $('.pop-up-price').fadeOut(400);

});

$(document).mouseup(e => {
    if (!$('.pop-up-price__form').is(e.target)
        && $('.pop-up-price__form').has(e.target).length === 0
    ) {
        $('.pop-up-price').fadeOut(400);
    }
});
