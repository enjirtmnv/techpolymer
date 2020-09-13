import 'swiper/swiper-bundle.css';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

let SwiperCarouselProduct = new Swiper('.product-carousel__swiper-container', {
    slidesPerView: 2,
    slideClass: 'product-carousel__swiper-slide',
    wrapperClass: 'product-carousel__swiper-wrapper',
    containerModifierClass: 'product-carousel__swiper-container-',
    // slidesPerView: 3,
    speed: 700,
    loop: true,
    navigation: {
        nextEl: '.product-carousel__swiper-button-next',
        prevEl: '.product-carousel__swiper-button-prev',
    },
    breakpoints: {
        769: {
            slidesPerView: 3,
        }
    },
});