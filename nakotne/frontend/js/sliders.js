
const swiperReviews = new Swiper(".swiperReviews", {
    slidesPerView: 1.7,
    centeredSlides: true,
    loop: true,
    initialSlide: 0,
    slidesPerGroup: 1,
    speed: 5000,
    allowTouchMove: false,
    autoplay: {
        enabled: true,
        delay: 0,
    },
    breakpoints: {
        768: {
            slidesPerView: 3.7,
        }
    }
});