import $ from 'jquery';

$(document).ready(function () {

$('.categories__list-desk-application').click(function (event) {
    $('.list-desk-application').toggleClass('show-list-desk-application');
    // $('body').addClass('lock');

    // $('.categories__list-desk-application').on('click',function(event){
    //     $('.list-desk-application').slideToggle();
    // });
});

});