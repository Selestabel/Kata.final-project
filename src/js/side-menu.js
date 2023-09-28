// side-menu

const menuBtn = document.querySelector('.header-navigation__btn')
const sideMenu = document.querySelector('.side-menu')

const burger = document.getElementById('burger')

const settingsIcon = document.querySelector(
    '.header-nav__list .header-nav__item:nth-child(5)'
)

const searchIcon = document.getElementById('search-icon')
let shadow = document.querySelector('.shadow')

let menuIsHidden = true

let showMenu = () => {
    sideMenu.classList.remove('hidden')
    menuIsHidden = false
    burger.src = './img/icon.x.svg'
    settingsIcon.style = 'display: none'
    searchIcon.src = './img/icon.search.svg'
}

let hideMenu = () => {
    sideMenu.classList.add('hidden')
    menuIsHidden = true
    burger.src = './img/icon1.svg'
    settingsIcon.style = 'display: flex'
    searchIcon.src = './img/icon2.svg'
}

menuBtn.addEventListener('click', () => {
    if (menuIsHidden) {
        showMenu()
    } else {
        hideMenu()
    }
})