import $ from 'jquery';

$(document).ready(function () {

    $('.categories__list-desk-application').click(function (event) {
        if (window.matchMedia('(min-width: 768px)').matches) {
            // $('.list-desk-application').toggleClass('show-list-desk-application');
            $('.list-desk-application').slideToggle(400);

                // $('.list-desk-application').removeClass('hidden-list-desk-application');
                // $('.list-desk-application').fadeIn();


        }
        if (!$('.categories').hasClass('add-categories-box-shadow')){
            $('.categories').addClass('add-categories-box-shadow');
        }else{

            setTimeout(function() {
                $('.categories').removeClass('add-categories-box-shadow');
            }, 399);

        }

    });

});


