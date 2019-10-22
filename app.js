const pixels = document.getElementById('pixels-text')

const getwidth = ()=>{
    let width = document.documentElement.clientWidth;
    pixels.innerText = `${width}px`;
}
getwidth();
window.addEventListener(`resize`, getwidth) /* llamar al getwidth para que se cambia dependiendo del tamaño de la pagina */