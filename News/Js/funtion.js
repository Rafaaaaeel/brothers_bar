let item = document.querySelector(".items")

item.addEventListener('wheel', event => {
    if(event.deltaY > 0){
        console.log('Scroll Up')
        event.target.scrollBy(300, 0)
    }else{
        console.log('Scroll down')
        event.target.scrollBy(-300, 0)
    }
});
