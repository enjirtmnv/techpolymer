import 'swiper/swiper-bundle.css';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

let SwiperCarouselCardProduct = new Swiper('.card-product-carousel__swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 19,
    slideClass: 'card-product-carousel__swiper-slide',
    slideActiveClass: 'card-product-carousel__swiper-slide-active',
    slideDuplicateActiveClass: 'card-product-carousel__swiper-slide-duplicate-active',
    slideVisibleClass: 'card-product-carousel__swiper-slide-visible',
    slideDuplicateClass: 'card-product-carousel__swiper-slide-duplicate',
    slideNextClass:'card-product-carousel__swiper-slide-next',
    slideDuplicateNextClass:'card-product-carousel__swiper-slide-duplicate-next',
    slidePrevClass:'card-product-carousel__swiper-slide-prev',
    slideDuplicatePrevClass:'card-product-carousel__swiper-slide-duplicate-prev',
    wrapperClass: 'card-product-carousel__swiper-wrapper',
    containerModifierClass: 'card-product-carousel__swiper-container-',
    // slidesPerView: 3,
    speed: 700,
    loop: true,
    navigation: {
        nextEl: '.card-product-carousel__swiper-button-next',
        prevEl: '.card-product-carousel__swiper-button-prev',
    },
    breakpoints: {
        769: {
            slidesPerView: 4,
        }
    },
});





