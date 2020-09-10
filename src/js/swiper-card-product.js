import 'swiper/swiper-bundle.css';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

let SwiperCarouselProduct = new Swiper('.card-product-carousel__swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 19,
    slideClass: 'card-product-carousel__swiper-slide',
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
        768: {
            slidesPerView: 4,
        }
    },
});


