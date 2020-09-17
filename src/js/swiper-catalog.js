import 'swiper/swiper-bundle.css';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

let SwiperCarouselCatalog = new Swiper('.carousel-catalog__swiper-container', {
    slidesPerView: 1,
    spaceBetween: 19,
    slideClass: 'carousel-catalog__swiper-slide',
    slideActiveClass: 'carousel-catalog__swiper-slide-active',
    slideDuplicateActiveClass: 'carousel-catalog__swiper-slide-duplicate-active',
    slideVisibleClass: 'carousel-catalog__swiper-slide-visible',
    slideDuplicateClass: 'carousel-catalog__swiper-slide-duplicate',
    slideNextClass:'carousel-catalog__swiper-slide-next',
    slideDuplicateNextClass:'carousel-catalog__swiper-slide-duplicate-next',
    slidePrevClass:'carousel-catalog__swiper-slide-prev',
    slideDuplicatePrevClass:'carousel-catalog__swiper-slide-duplicate-prev',
    wrapperClass: 'carousel-catalog__swiper-wrapper',
    containerModifierClass: 'carousel-catalog__swiper-container-',
    speed: 700,
    // loop: true,
    navigation: {
        nextEl: '.carousel-catalog__swiper-button-next',
        prevEl: '.carousel-catalog__swiper-button-prev',
    },
});





