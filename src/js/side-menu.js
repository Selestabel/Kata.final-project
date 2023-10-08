// side-menu

const menuBtn = document.querySelector('.header-navigation__btn')
const sideMenu = document.querySelector('.side-menu')

const burger = document.getElementById('burger')

const settingsIcon = document.querySelector(
    '.header-nav__list .header-nav__item:nth-child(5)'
)
const settingsIcon2 = document.querySelector(
    '.header-nav__list .header-nav__item:nth-child(1)'
)
const settingsIcon3 = document.querySelector(
    '.header-nav__list .header-nav__item:nth-child(2)'
)
const settingsIcon4 = document.querySelector(
    '.header-nav__list .header-nav__item:nth-child(3)'
)

const headerBackground = document.querySelector('.header')
const headerMargin = document.querySelector('.header_wrapper')

const searchIcon = document.getElementById('search-icon')
let shadow = document.querySelector('.shadow')

let menuIsHidden = true

let showMenu = () => {
    sideMenu.classList.remove('hidden')
    menuIsHidden = false
    burger.src = './img/icon.x.svg'
    settingsIcon.style = 'display: none'
    settingsIcon2.style = 'display: none'
    settingsIcon3.style = 'display: none'
    settingsIcon4.style = 'display: none'
    searchIcon.src = './img/icon.search.svg'
    headerBackground.style = 'background: white; z-index: 2; position: relative;'
    headerMargin.style = 'max-width: fit-content; margin: 0;'
    shadow.classList.remove('hidden')
}

let hideMenu = () => {
    sideMenu.classList.add('hidden')
    menuIsHidden = true
    burger.src = './img/icon1.svg'
    settingsIcon.style = 'display: flex'
    settingsIcon2.style = 'display: flex'
    settingsIcon3.style = 'display: flex'
    settingsIcon4.style = 'display: flex'
    searchIcon.src = './img/icon2.svg'
    headerBackground.style = 'background: #f8f8f8; z-index: 1;'
    headerMargin.style = 'max-width: none; margin: 0 auto;'
    shadow.classList.add('hidden')
}

menuBtn.addEventListener('click', () => {
    if (menuIsHidden) {
        showMenu()
    } else {
        hideMenu()
    }
})