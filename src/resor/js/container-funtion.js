
const containerClickZone = document.querySelectorAll(".container")
const table = document.querySelectorAll("table")

table.forEach((e)=>
{
    e.style.display = "none"
})

containerClickZone.forEach((e)=> {
    e.addEventListener("click", ()=>
    {
        e.querySelector("table").style.display = e.querySelector("table").style.display === "none" ? 'table' : 'none'
        
        if(navigator.userAgent.match("Safari"))
        {
            e.querySelector(".arrow-btn").style.WebkitTransform = e.querySelector(".arrow-btn").style.WebkitTransform === "rotate(0deg)" ? "rotate(180deg)" : "rotate(0)"    
        }
        else
        {
            e.querySelector(".arrow-btn").style.transform = e.querySelector(".arrow-btn").style.transform === "rotate(0deg)" ? "rotate(180deg)" : "rotate(0)"
        }
    })
})


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