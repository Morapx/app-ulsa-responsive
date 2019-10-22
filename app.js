const pixels = document.getElementById('pixels-text')

const getwidth = ()=>{
    let width = document.documentElement.clientWidth;
    pixels.innerText = `${width}px`;
}

window.addEventListener(`resize`, getwidth)