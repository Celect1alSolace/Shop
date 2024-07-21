let elHeartIcon = document.querySelector(".header__heart")
let elHeroDot = document.querySelector(".hero__dots")
let elHeroBlue = document.querySelector(".hero__dot")
let elModalWrapper = document.querySelector(".modal")

function backgroundColorRed(){
    elHeartIcon.classList.toggle("red")
}

function border(){
    elHeroDot.classList.toggle("border")
    elHeroBlue.classList.toggle("blue")
}

function handleMenuIconOpen(){
    elModalWrapper.classList.toggle("show")
}