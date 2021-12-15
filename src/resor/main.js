window.onload = function(){

    const containerClickZone = document.querySelectorAll(".container")
    const table = document.querySelectorAll("table")
    const td = document.querySelectorAll("td")

    td.forEach((e)=>{
        e.style.display = "block"
    })

    table.forEach((e)=>{
        e.style.marginLeft = "2%"
        e.style.display = "none"
    })

    containerClickZone.forEach((e)=>{
        
        e.addEventListener("click", ()=>{
            console.log("clicou")
            e.querySelector("table").style.display = e.querySelector("table").style.display === "none" ? 'table' : 'none'
        })
    })
}

