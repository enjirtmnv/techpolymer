import './css/main.scss'

import './js/preload'

import './js/swiper-carousel-product'
import './js/swiper-carousel'

import './js/burger-menu'
import './js/list-all-categories'
import './js/list-application'
import './js/list-agricultures'
import './js/list-desk-application'

if (window.matchMedia('(max-width: 768px)').matches){
    $('.list-desk-application').css('display', 'none');
    // setTimeout(function () {
    //     $('.categories').removeClass('add-categories-box-shadow');
    // }, 1);
}