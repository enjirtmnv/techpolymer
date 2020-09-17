import $ from 'jquery';

$(document).ready(function(){

    $('.all-catalog-header__filter-title').click(function(){
        $('.filter').addClass('show-filter');
    });

    $('.filter__close').click(function(){
        $('.filter').removeClass('show-filter');
    });

    $('.filter-application-name').click(function(){
        $('.filter-application-list').slideToggle();
    });

    $('.filter-categories-name').click(function(){
        $('.filter-categories-list').slideToggle();
    });

    $('.filter-size-name').click(function(){
        $('.filter-size-list').slideToggle();
    });

    $('.filter-volume-name').click(function(){
        $('.filter-volume-list').slideToggle();
    });

    $('.filter-shtabel-name').click(function(){
        $('.filter-shtabel-list').slideToggle();
    });

    $('.filter-vklad-name').click(function(){
        $('.filter-vklad-list').slideToggle();
    });

});
