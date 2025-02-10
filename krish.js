let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Adjust index if it's out of bounds
    if (index >= totalSlides) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = totalSlides - 1;
    } else {
        currentSlideIndex = index;
    }

    // Move the slider to the appropriate slide
    const newTransformValue = -currentSlideIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${newTransformValue}%)`;
}

function moveSlide(step) {
    showSlide(currentSlideIndex + step);
}

// Automatically move to the next slide every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);

// Initialize the slider
showSlide(currentSlideIndex);
