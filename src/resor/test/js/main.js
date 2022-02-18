window.onload = function()
{
    const containerClickZone = document.querySelectorAll(".container")
    const table = document.querySelectorAll("table")
    const closeArrowAction = document.querySelectorAll(".close_button")

    table.forEach((e)=>
    {
        e.style.display = "none"
    })

    containerClickZone.forEach((e)=>
    {
        e.addEventListener("click", ()=>
        {
            e.querySelector("table").style.display = e.querySelector("table").style.display === "none" ? 'table' : 'none'
            
            if(navigator.userAgent.match("Safari"))
            {
                e.querySelector(".close_button").style.WebkitTransform = e.querySelector(".close_button").style.WebkitTransform === "rotate(0deg)" ? "rotate(180deg)" : "rotate(0)"    
            }
            else
            {
                e.querySelector(".close_button").style.transform = e.querySelector(".close_button").style.transform === "rotate(0deg)" ? "rotate(180deg)" : "rotate(0)"
            }
        })
    })
}

