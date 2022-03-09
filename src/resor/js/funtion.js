let item = document.querySelector(".items")
let nextItem = document.getElementById("#next-item")

item.addEventListener('wheel', event => {
    if(event.deltaY > 0){
        event.target.scrollBy(300, 0)
    }else{
        event.target.scrollBy(-300, 0)
    }
})



