let slideIndex = 0;
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;

        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            if (n >= totalSlides) { 
                slideIndex = 0;
            } else if (n < 0) { 
                slideIndex = totalSlides - 1;
            }
            slides.style.transform = `translateX(${-slideIndex * 100}%)`;
        }

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.querySelector(".menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
});


