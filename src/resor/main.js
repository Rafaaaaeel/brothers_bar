window.onload = function(){

    const containerClickZone = document.querySelectorAll(".container")


    containerClickZone.forEach((e)=>{
        e.addEventListener("click", ()=>{
            e.querySelector("table").style.display = e.querySelector("table").style.display === "none" ? 'initial' : 'none'
        })
    })
}

