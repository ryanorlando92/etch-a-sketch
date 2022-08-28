
const canvas = document.querySelector('#canvas');
const slider = document.getElementById('myRange');
const sliderOutput = document.getElementById('sliderOutput');

const defaultColor = '#000000';
let currentColor = defaultColor;

window.addEventListener('load', startup, false);

let paintColor;
function startup() {
    paintColor = document.querySelector('#paintColor');
    paintColor.value = defaultColor;
    paintColor.addEventListener('change', updateColor, false);
    paintColor.select();
    canvasSize(slider.value);
}

function canvasSize (num) {
    const nodes = canvas.childNodes;
    for(let i=0; i<nodes.length; i++) {
        nodes[i].style.background = 'white'; //repaints canvas white when resized
    }
    canvas.style.display = "grid";
    canvas.style["grid-template-columns"] = `repeat(${num}, 1fr)`;
    canvas.style["grid-template-rows"] = `repeat(${num}, 1fr)`;
    
    for (let i = 0; i < (num * num); i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        div.addEventListener('mouseover', painter);
        div.addEventListener('mousedown', painter);
        canvas.appendChild(div); 
    }
}                                   

function updateColor(e) {
    currentColor = e.target.value;
}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function painter(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.background = currentColor;
}

sliderOutput.textContent = `${slider.value} x ${slider.value}`
slider.oninput = () => {
    sliderOutput.textContent = `${slider.value} x ${slider.value}`;
    canvasSize(slider.value);
}

/*
add 'eraser' button
add 'rainbow button
add darken option
add lighten option
*/