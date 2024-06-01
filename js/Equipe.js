//equipe

const Equipecarousel = document.querySelector(".Equipecarousel");

let isDragging = false, startX, startScrollLeft;

const dragStart = (e) => {
    isDragging = true;
    Equipecarousel.classList.add("dragging");
    
    startX = e.pagex;
    startScrollLeft = Equipecarousel.scrollLeft

    
}

const dragging = (e) => {
    console.log(e.pageX)
}

const dragStop = () => {
    isDragging = false;
    Equipecarousel.classList.remove("dragging");
}

Equipecarousel.addEventListener("mousedown" , dragStart);
Equipecarousel.addEventListener("mousemove" , dragging);
Equipecarousel.addEventListener("mouseup" , dragStop);