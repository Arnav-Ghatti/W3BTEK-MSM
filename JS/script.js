//Save current slide per view
var currentSlidesPerView;

function updateSwiperSlides(windowWidth) {
    var totalSlidesPerView;
    if (windowWidth > 1000) {
        totalSlidesPerView = 3;
    } else if (windowWidth > 800) {
        totalSlidesPerView = 2;
    } else {
        totalSlidesPerView = 1;
    }

    if (currentSlidesPerView === totalSlidesPerView) return;

    currentSlidesPerView = totalSlidesPerView;

    //Initialize Swiper
    new Swiper('.mySwiper', {
        slidesPerView: currentSlidesPerView,
        spaceBetween: 10,
        slidesPerGroup: currentSlidesPerView,
        loop: false,
        loopFillGroupWithBlank: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
}

//OnLoad: (check the screen size when the page loads)
$(document).ready(function () {
    windowWidth = $(window).width();
    updateSwiperSlides(windowWidth);

    //onResize (check the screen size when the page resizes)
    $(window).resize(function () {
        windowWidth = $(window).width();
        updateSwiperSlides(windowWidth);
    });
});