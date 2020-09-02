let SwiperProductCarousel = new Swiper('.product-carousel__swiper-container', {
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
        768: {
            slidesPerView: 3,
        }
    },
});