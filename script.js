// JavaScript
let slideIndex = 0;
const slides = document.querySelectorAll('.slide-track .slide');
const slideTrack = document.querySelector('.slide-track');
const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');
const slideWidth = slides[0].getBoundingClientRect().width;
const totalSlides = slides.length;

// Update slide track width to fit all slides
slideTrack.style.width = `${totalSlides * slideWidth}px`;

// Update slide position
function updateSlidePosition() {
    const offset = -slideIndex * slideWidth;
    slideTrack.style.transform = `translateX(${offset}px)`;
}

// Initially set the first slide
updateSlidePosition();

nextButton.addEventListener('click', () => {
    if (slideIndex < totalSlides - 1) {
        slideIndex++;
    }
    updateSlidePosition();
});

prevButton.addEventListener('click', () => {
    if (slideIndex > 0) {
        slideIndex--;
    }
    updateSlidePosition();
});