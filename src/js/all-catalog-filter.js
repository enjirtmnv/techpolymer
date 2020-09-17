import $ from 'jquery';

$(document).ready(function(){

    $('.filter-application-title').click(function(){
        $('.filter-application-content').slideToggle(400);
    });

    $('.filter-garbage-containers-title').click(function(){
        $('.filter-garbage-containers-content').slideToggle(400);
    });

    $('.filter-pallets-title').click(function(){
        $('.filter-pallets-content').slideToggle(400);
    });



    // $(document).mouseup(e => {
    //     if (!$('.all-catalog-side__filter-title').is(e.target)
    //         && $('.all-catalog-side__filter-title').has(e.target).length === 0 &&
    //         !$('.all-catalog-side__filter-inner-wrap').is(e.target)
    //         && $('.all-catalog-side__filter-inner-wrap').has(e.target).length === 0
    //     ) {
    //         $('.all-catalog-side__filter-inner-wrap').slideUp(400);
    //     }
    // });
});
