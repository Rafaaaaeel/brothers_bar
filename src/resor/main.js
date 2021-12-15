window.onload = function(){

    const containerClickZone = document.querySelectorAll(".container")


    containerClickZone.forEach((e)=>{
        e.addEventListener("click", ()=>{
            e.querySelector("table").style.visibility = e.querySelector("table").style.visibility === "visible" ? 'collapse' : 'visible'
        })
    })
}

