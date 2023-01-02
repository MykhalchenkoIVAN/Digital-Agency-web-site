'use strict'
const navItem = document.querySelectorAll('.nav_item');
const container = document.querySelector('.container');
const btnCancel = document.querySelectorAll('.btn_cancel');
const logo = document.querySelector('.logo')
for (let i = 0; navItem.length > i; i++) {
    navItem[i].classList.add('nav_item_w')
    console.log("sdafdasf");
}

const removeClassNavItem = function () {
    for (let i = 0; navItem.length > i; i++) {
        navItem[i].classList.add('nav_item_zero')
        navItem[i].classList.remove('nav_item_w')
    }
}

const addClassNavItem = function () {
    for (let i = 0; navItem.length > i; i++) {
        navItem[i].classList.remove('nav_item_zero')
        navItem[i].classList.add('nav_item_w')

    }
}
const backToMenu = function () {


}
for (let i = 0; navItem.length > i; i++) {
    navItem[i].addEventListener('click', function (e) {
        console.log(e.target.className);
        if (navItem[i].className === 'nav_item nav_item_w' && (e.target.className === 'overlay' || e.target.className === 'nav_item_title')) {
            console.log('sdasd3qq4erqw234');
            removeClassNavItem()
            navItem[i].classList.add('nav_item_100vw')
        }
        if (navItem[i].className === 'nav_item nav_item_zero nav_item_100vw' && e.target.className !== 'btn_cancel') {
            btnCancel[i].style.display = 'block'
        }
    })
}
for (let i = 0; i < btnCancel.length; i++) {
    btnCancel[i].addEventListener('click', function (e) {
        btnCancel[i].style.display = 'none';
        navItem[i].classList.remove('nav_item_100vw')
        addClassNavItem();
    })
}
