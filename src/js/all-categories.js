import $ from 'jquery';

$(document).ready(function () {

    $('.categories__item-all-categories').click(function (event) {
        $('.all-categories-home').addClass('show');
        $('.all-categories').addClass('show');
        $('.categories__wrapper').addClass('hidden');
    });

    $('.all-categories__nav-item').click(function (event) {
        $('.all-categories-home').removeClass('show');
        $('.all-categories').removeClass('show');
        $('.categories__wrapper').removeClass('hidden');
    });

    // let container = $(".all-categories");
    // if (container.has(e.target).length === 0){
    //     container.hide();
    // }

});





//на документ вешаю обработчик клика, проверка если есть класс меню