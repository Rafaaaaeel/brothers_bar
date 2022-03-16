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

const popupCookie = document.cookie.valueOf("popUpShow")

let date = new Date()
let hour = date.getHours()



/*
console.log(hour)
if(hour < 12){
    popupScreen.style.display = "flex"
}else{
    popupScreen.style.display = "none"
    document.cookie = "BaileDoAugusto=popUpShow; max-age=" + 1 * 30 * 1000
}


if(popupCookie == "BaileDoAugusto=popUpShow"){
    popupScreen.style.display = "none"
}

*/
