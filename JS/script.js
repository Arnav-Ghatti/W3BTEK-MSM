const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

var navLinks = document.querySelectorAll(".nav-menu a");

for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
}

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
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
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