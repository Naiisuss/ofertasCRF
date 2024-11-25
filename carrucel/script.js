let currentSlide = 0;
const slides = document.querySelectorAll(".carousel img");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Cambiar automáticamente cada 10 segundos
setInterval(nextSlide, 10000);

// Mostrar el primer slide al cargar
showSlide(currentSlide);
