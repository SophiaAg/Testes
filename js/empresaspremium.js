const slider = document.querySelector('.slides-row');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function() {
    slider.style.transform = 'translate(-20%)';
});