//swiper js
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    freeMode: true,
    breakpoints: {
        960: {
            slidesPerView: 5,
            spaceBetween: 30
        },
    }
});

// ScrollReveal
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.content', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.about .container', { delay: 500, origin: 'left' });

// FOR SCROLL BUTTON

const showOnPx = 400;
const backToTopButton = document.querySelector(".scroll-btn")

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.add("show")
    } else {

        backToTopButton.classList.remove("show")
    }
})

const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
};

backToTopButton.addEventListener("click", () => {
    return goToTop();
})