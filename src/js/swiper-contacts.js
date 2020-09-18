import 'swiper/swiper-bundle.css';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

let SwiperCarouselContacts = new Swiper('.carousel-contacts__swiper-container', {
    slidesPerView: 1,
    spaceBetween: 19,
    slideClass: 'carousel-contacts__swiper-slide',
    slideActiveClass: 'carousel-contacts__swiper-slide-active',
    slideDuplicateActiveClass: 'carousel-contacts__swiper-slide-duplicate-active',
    slideVisibleClass: 'carousel-contacts__swiper-slide-visible',
    slideDuplicateClass: 'carousel-contacts__swiper-slide-duplicate',
    slideNextClass:'carousel-contacts__swiper-slide-next',
    slideDuplicateNextClass:'carousel-contacts__swiper-slide-duplicate-next',
    slidePrevClass:'carousel-contacts__swiper-slide-prev',
    slideDuplicatePrevClass:'carousel-contacts__swiper-slide-duplicate-prev',
    wrapperClass: 'carousel-contacts__swiper-wrapper',
    containerModifierClass: 'carousel-contacts__swiper-container-',
    speed: 700,
    loop: false,
    navigation: {
        nextEl: '.carousel-contacts__swiper-button-next',
        prevEl: '.carousel-contacts__swiper-button-prev',
    },
});





