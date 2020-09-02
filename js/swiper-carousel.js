let SwiperCarousel = new Swiper('.carousel__swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 22,
    slideClass: 'carousel__swiper-slide',
    wrapperClass: 'carousel__swiper-wrapper',
    containerModifierClass: 'carousel__swiper-container-',
    speed: 1000,
    loop: true,
    navigation: {
        nextEl: '.carousel__swiper-button-next',
        prevEl: '.carousel__swiper-button-prev',
    },
    pagination: {
        el: '.carousel__swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        bulletClass: 'carousel__swiper-pagination-bullet',
        bulletActiveClass: 'carousel__swiper-pagination-bullet-active',
        modifierClass: 'carousel__swiper-pagination-'
    },
});