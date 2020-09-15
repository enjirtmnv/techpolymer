import $ from 'jquery';

$(document).ready(function(){

    $(".card-product-info__nav-list li a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function(){
                window.location.hash = hash;
            });
        }
    });

    $('.card-product-info__nav-list li').on('click', function() {
        $('.card-product-info__nav-list li').removeClass('active_anchor');
        $(this).addClass('active_anchor');
    });
});