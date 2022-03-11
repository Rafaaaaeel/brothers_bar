
window.addEventListener("scroll", (event)=>{
    const header = document.querySelector(".header_content")
    header.classList.toggle("sticky", window.scrollY > 90)
})



