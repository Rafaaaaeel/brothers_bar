let item = document.querySelector(".items")

window.addEventListener("scroll", reveal)

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

item.addEventListener('wheel', event => {

    if(event.deltaY > 0){
        event.target.scrollBy(300, 0)
    }else{
        event.target.scrollBy(-300, 0)
    }
})

const popupScreen = document.querySelector(".popup-screen")
const closebtn = document.querySelector(".close-popup")

window.addEventListener("load", () =>{
    setTimeout(()=>{
        popupScreen.classList.add("popupActive") 
    }, 500)
})

closebtn.addEventListener("click", ()=>{
    popupScreen.classList.remove("popupActive")
})