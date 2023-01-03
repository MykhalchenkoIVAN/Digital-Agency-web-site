"use strict"
const navItem = document.querySelectorAll(".nav_item")
const navItemOne = document.querySelector(".nav_item")
const navItemTitle = document.querySelectorAll(".nav_item_title")
const navItenText = document.querySelectorAll(".nav_item_text")
const container = document.querySelector(".container")
const btnCancel = document.querySelectorAll(".btn_cancel")
const overlay = document.querySelectorAll(".overlay")
const overlayBgArticle = document.querySelectorAll(".overlay_bg_article")
const logo = document.querySelector(".logo")

for (let i = 0; navItem.length > i; i++) {
    navItem[i].classList.add("nav_item_w")
}

const removeClassNavItem = function () {
    for (let i = 0; navItem.length > i; i++) {
        navItem[i].classList.add("nav_item_zero")
        navItem[i].classList.remove("nav_item_w")
    }
}

const addClassNavItem = function () {
    for (let i = 0; navItem.length > i; i++) {
        navItem[i].classList.remove("nav_item_zero")
        navItem[i].classList.add("nav_item_w")
    }
}
const backToMenu = function () { }
// Event Hendlers
for (let i = 0; navItem.length > i; i++) {
    navItem[i].addEventListener("click", function (e) {
        if (
            navItem[i].className === "nav_item nav_item_w" &&
            (e.target.className === "overlay" ||
                e.target.className === "nav_item_title" ||
                e.target.className === "nav_item_text")
        ) {
            navItenText[i].classList.add("nav_item_text_pososition")
            removeClassNavItem()
            navItem[i].classList.add("nav_item_100vw")
        }
        if (navItem[i].className === "nav_item nav_item_zero nav_item_100vw") {
            navItemTitle[i].classList.add("nav_item_title_position")
            console.log(navItem[i].clientWidth)
            console.log(container.clientWidth)
            logo.classList.add("logo_hover")
            setTimeout(function () {
                if (
                    navItem[i].clientWidth == container.clientWidth - 20 ||
                    navItem[i].clientWidth == container.clientWidth
                ) {
                    overlayBgArticle[i].classList.add("overlay_bg_article_active")
                    navItenText[i].classList.add("nav_item_text_pososition_active")
                }
            }, 1000)
        }
        if (
            navItem[i].className === "nav_item nav_item_zero nav_item_100vw" &&
            e.target.className !== "btn_cancel"
        ) {
            btnCancel[i].style.display = "block"
        }
    })
}

for (let i = 0; i < btnCancel.length; i++) {
    btnCancel[i].addEventListener("click", function (e) {
        btnCancel[i].style.display = "none"
        navItem[i].classList.remove("nav_item_100vw")
        navItenText[i].classList.remove("nav_item_text_pososition")
        navItemTitle[i].classList.remove("nav_item_title_position")
        overlayBgArticle[i].classList.remove("overlay_bg_article_active")
        navItenText[i].classList.remove("nav_item_text_pososition_active")
        logo.classList.remove("logo_hover")
        addClassNavItem()
    })
}
navItemOne.addEventListener("mouseover", function () {
    logo.classList.add("logo_hover")
})
navItemOne.addEventListener("mouseout", function () {
    logo.classList.remove("logo_hover")
})
