//equipe

//const Equipecarousel = document.querySelector(".Equipecarousel");

//let isDragging = false, startX, startScrollLeft;

//const dragStart = (e) => {
    //isDragging = true;
    //Equipecarousel.classList.add("dragging");
    
    //startX = e.pagex;
    //startScrollLeft = Equipecarousel.scrollLeft

    
//}

//const dragging = (e) => {
  //  console.log(e.pageX)
//}

//const dragStop = () => {
  //  isDragging = false;
    //Equipecarousel.classList.remove("dragging");
//}

//Equipecarousel.addEventListener("mousedown" , dragStart);
//Equipecarousel.addEventListener("mousemove" , dragging);
//Equipecarousel.addEventListener("mouseup" , dragStop);


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    changeSlide(1);
});

document.querySelector('.prev').addEventListener('click', () => {
    changeSlide(-1);
});

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Inicializa o primeiro slide como ativo
slides[currentSlide].classList.add('active');

// Auto slide change every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);
