import $ from 'jquery';

$(document).ready(function(){

    $('.sort-size-title').click(function(){
        $('.sort-size-content').slideToggle(200);
        $('.sort-volume-content').slideUp(200);
        $('.sort-shtabel-content').slideUp(200);
        $('.sort-vklad-content').slideUp(200);
    });

    $('.sort-volume-title').click(function(){
        $('.sort-volume-content').slideToggle(200);
        $('.sort-size-content').slideUp(200);
        $('.sort-shtabel-content').slideUp(200);
        $('.sort-vklad-content').slideUp(200);
    });

    $('.sort-shtabel-title').click(function(){
        $('.sort-shtabel-content').slideToggle(200);
        $('.sort-volume-content').slideUp(200);
        $('.sort-size-content').slideUp(200);
        $('.sort-vklad-content').slideUp(200);
    });

    $('.sort-vklad-title').click(function(){
        $('.sort-vklad-content').slideToggle(200);
        $('.sort-volume-content').slideUp(200);
        $('.sort-shtabel-content').slideUp(200);
        $('.sort-size-content').slideUp(200);
    });

    $(document).mouseup(e => {
        if (!$('.all-catalog-header__sort-inner').is(e.target)
            && $('.all-catalog-header__sort-inner').has(e.target).length === 0 &&
            !$('.all-catalog-header__sort-title').is(e.target)
            && $('.all-catalog-header__sort-title').has(e.target).length === 0
        ) {
            $('.all-catalog-header__sort-inner').slideUp(200);
        }
    });
});



// $(document).ready(function(){
//
//     $('.all-catalog-header__sort-list li').click(function(){
//         let sort_id = $(this).attr('data-sort');
//
//         $('.all-catalog-header__sort-list li').removeClass('current');
//         $('.sort-content').removeClass('current');
//
//         $(this).addClass('current');
//         $("#"+sort_id).addClass('current');
//     })
// });