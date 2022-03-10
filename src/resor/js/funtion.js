let items = document.querySelector(".items")

const popupScreen = document.querySelector(".popup-screen")
const closebtn = document.querySelector(".close-popup")
const popupCookie = document.cookie.indexOf("popUpShow=")

let idx = 0

function carousel(){


}

setInterval(carousel,1000)

window.addEventListener("scroll", reveal)
window.addEventListener("scroll", (event)=>{
    const header = document.querySelector(".header_content")
    header.classList.toggle("sticky", window.scrollY > 90)
})

function reveal(){
    var reveals = document.querySelectorAll(".reveal")

    for(var i = 0; i < reveals.length; i++){
        var windowHeigh = window.innerHeight
        var revealTop = reveals[i].getBoundingClientRect().top
        console.log(windowHeigh)
        var revealPoint = 10


        if(revealTop < windowHeigh - revealPoint){
            reveals[i].classList.add(`active`)
        }else{
            reveals[i].classList.remove(`active`)
        }
    }
}

items.addEventListener('wheel', event => {

    if(event.deltaY > 0){
        event.target.scrollBy(300, 0)
    }else{
        event.target.scrollBy(-300, 0)
    }
})


if(popupCookie != -1){
    popupScreen.style.display = "none"
}else{
    popupScreen.style.display = "flex"
}

window.addEventListener("load", () =>{
    setTimeout(()=>{
        popupScreen.classList.add("popupActive") 
    }, 500)
})

closebtn.addEventListener("click", ()=>{
    popupScreen.classList.remove("popupActive")
    document.cookie = "BaileDoAugusto=popUpShow; max-age=" + 24 * 60 * 60
})


console.log(popupCookie)

