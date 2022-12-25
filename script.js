const openMenu = document.querySelector(".menu-open");
const closeMenu = document.querySelector(".menu-close");
const addBack = document.querySelector(".overlay");
const addWhite = document.querySelector(".mobile-menu-white")

openMenu.addEventListener('click', () => {
    addBack.classList.add('active')
    addWhite.classList.add('active')
})

closeMenu.addEventListener('click', () => {
    addBack.classList.remove('active')
    addWhite.classList.remove('active')
})