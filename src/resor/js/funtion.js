let items = document.querySelector(".items")

const popupScreen = document.querySelector(".popup-screen")
const closebtn = document.querySelector(".close-popup")


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


window.addEventListener("load", () =>{
    setTimeout(()=>{
        popupScreen.classList.add("popupActive") 
    }, 1000)
})

closebtn.addEventListener("click", ()=>{
    popupScreen.classList.remove("popupActive")
    document.cookie = "BaileDoAugusto=popUpShow; max-age=" + 24 * 60 * 60
})


const popupCookie = document.cookie.valueOf("popUpShow")


console.log(`Cookie:  ${popupCookie}`)

if(popupCookie == "BaileDoAugusto=popUpShow"){
    popupScreen.style.display = "none"
}else{
    popupScreen.style.display = "flex"
}
