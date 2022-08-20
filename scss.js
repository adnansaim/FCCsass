const menuBtn = document.querySelector('.menu-btn')
hamburger = document.querySelector('.menu-btn_burger')
nav = document.querySelector('.nav')
menuNav = document.querySelector('.menu-nav')
navItems = document.querySelectorAll('.menu-nav_item')

let showMenu = false;

menuBtn.addEventListener('click', togglemenu)

function togglemenu() {
    if (!showMenu) {
        hamburger.classList.add('open')
        showMenu = true;
        nav.classList.add('open')
        menuNav.classList.add('open')
        navItems.forEach(item => {
            item.classList.add('open')
        })

    } else {
        hamburger.classList.remove('open')
        showMenu = false;
        nav.classList.remove('open')
        menuNav.classList.remove('open')

        navItems.forEach(item => {
            item.classList.remove('open')
        })
    }
}