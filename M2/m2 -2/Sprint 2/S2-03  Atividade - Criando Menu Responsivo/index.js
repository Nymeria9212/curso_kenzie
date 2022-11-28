let closeMenu = document.querySelector('.fa-solid')
let sectionButon = document.querySelector('.section__buttons')

closeMenu.addEventListener('click', () => {
    sectionButon.classList.toggle('close-section')

})