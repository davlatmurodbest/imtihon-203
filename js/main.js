var elButton = document.querySelector(".header__button") 
var elButtonenter = document.querySelector(".header__menu") 
var elButtonexit = document.querySelector(".header__exit") 
var elButtonbox = document.querySelector(".header__menu__bar") 

elButton.addEventListener ("click", () =>  {
    elButtonenter.classList.toggle ("btn__enter__class")
    elButtonexit.classList.toggle ("btn__exit__class")
    elButtonbox.classList.toggle ("header__block")
} )