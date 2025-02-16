
const allLogo = document.querySelector('.all-logo');
const sidebar = document.querySelector('.sidebar');
const cross = document.querySelector('.fa-xmark');
const black = document.querySelector('.black');

allLogo.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

closeIcon.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

black.addEventListener('click', () => {
    sidebar.classList.remove('active');
  black.classList.remove('active');
});


const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const totalSlides = slides.length;

const showSlide = (index) => {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
};

const nextSlide = () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
};

const prevSlide = () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
};

document.querySelector('.next.arrow').addEventListener('click', nextSlide);
document.querySelector('.prev.arrow').addEventListener('click', prevSlide);


showSlide(currentSlide);
const backtop = document.querySelector('.backtop');
backtop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
       scrollbehavior: 'smooth'
    });
})



