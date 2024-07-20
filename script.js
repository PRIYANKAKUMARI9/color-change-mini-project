//change color random here

const randomColor=function(){
    const hax="0123456789ABCDEF";
    let color='#'
    for (let i = 0; i <6; i++) {
        color +=hax[Math.floor(Math.random()*16+2)]  
    }
    return color;
}

let changeID;
const startChangingcolor = function(){
    changeID= setInterval(bgcolor,1000)
    
    function bgcolor(){
        document.body.style.backgroundColor = randomColor()
    }
}
const stopChangingcolor = function(){
    clearInterval(changeID)
}

document.querySelector('.start').addEventListener('click',startChangingcolor);
document.querySelector('.stop').addEventListener('click',stopChangingcolor);