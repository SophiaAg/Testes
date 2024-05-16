const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')
 
toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
 
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}
 
//modo noturno
 
let darkmode = document.querySelector('#darkmode');
 
darkmode.onclick = () => {
    if(darkmode.classList.contains('fa-moon')){
        darkmode.classList.replace('fa-moon', 'fa-sun');
        document.body.classList.add('color');
    }else{
        darkmode.classList.replace('fa-sun', 'fa-moon');
        document.body.classList.remove('color')
    }
}
