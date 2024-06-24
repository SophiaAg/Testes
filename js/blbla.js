const carouselRow = document.querySelector('.slides-row');
const carouselSlides = document.getElementsByClassName('slide-empresaP');
const dots = document.getElementsByClassName('dot');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 1;

width = carouselSlides[0].clientWidth;
carouselRow.style.transform = 'translateX('+ (- width * index) + 'px)';

// go to next slide

nextBtn.addEventListener('click' , nextSlide);
function nextSlide(){
    if(index >= carouselSlides.length - 1){return};
    carouselRow.style.transition = 'transformn 0.4s ease-out';
    index++;
    carouselRow.style.transform = 'translateX('+ (- width * index) + 'px)'; 
}

//go to prev slide

prevBtn.addEventListener('click' , prevSlide);
function prevSlide(){
    if(index <= 0){return};
    carouselRow.style.transition = 'transformn 0.4s ease-out';
    index--;
    carouselRow.style.transform = 'translateX('+ (- width * index) + 'px)'; 
}

// return to the first slide when reaches last slide 

carouselRow.addEventListener('transitionend', function(){
    if(carouselSlides[index].id==='firstImageDuplicate'){
        carouselRow.style.transition = 'none';
        index = carouselSlides.length - index;
        carouselRow.style.transform = 'translateX('+ (- width * index) + 'px)'; 
    }

    if(carouselSlides[index].id==='lastImageDuplicate'){
        carouselRow.style.transition = 'none';
        index = carouselSlides.length - 2;
        carouselRow.style.transform = 'translateX('+ (- width * index) + 'px)'; 
    }

});

