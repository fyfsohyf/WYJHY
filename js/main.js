document.addEventListener('DOMContentLoaded', function() {
    // 轮播图逻辑
    let currentSlideIndex = 1;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;
    let slideInterval;

    function showSlide(n) {
        if (n > totalSlides) currentSlideIndex = 1;
        if (n < 1) currentSlideIndex = totalSlides;

        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[currentSlideIndex - 1].classList.add('active');
        dots[currentSlideIndex - 1].classList.add('active');
    }

    function nextSlide() {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
    }

    // 全局函数：供HTML onclick调用
    window.changeSlide = function(n) {
        currentSlideIndex += n;
        showSlide(currentSlideIndex);
        resetTimer();
    };

    window.currentSlide = function(n) {
        currentSlideIndex = n;
        showSlide(currentSlideIndex);
        resetTimer();
    };

    function startTimer() {
        slideInterval = setInterval(nextSlide, 4000);
    }

    function resetTimer() {
        clearInterval(slideInterval);
        startTimer();
    }

    // 悬停暂停
    const container = document.querySelector('.carousel-container');
    if(container){
        container.addEventListener('mouseenter', () => clearInterval(slideInterval));
        container.addEventListener('mouseleave', startTimer);
        startTimer();
    }
});