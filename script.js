
const canvas = document.querySelector('#canvas');
const slider = document.getElementById('myRange');
const sliderOutput = document.getElementById('sliderOutput');

const defaultColor = '#000000';
let currentColor = defaultColor;

window.addEventListener('load', startup, false);

let paintColor;
let mode; // brush, erase, rainbow

function startup() {
    paintColor = document.querySelector('#paintColor');
    paintColor.value = defaultColor;
    paintColor.addEventListener('change', updateColor, false);
    paintColor.select();
    canvasSize(slider.value);
    mode = 'brush'
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
    mode = 'brush';
}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function painter(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.background = currentColor;
    if (mode === 'rainbow') {
        currentColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
}

sliderOutput.textContent = `${slider.value} x ${slider.value}`
slider.oninput = () => {
    sliderOutput.textContent = `${slider.value} x ${slider.value}`;
    canvasSize(slider.value);
}



const eraser = document.getElementById('eraser');
eraser.addEventListener('click', erase);
function erase() {
    currentColor = '#ffffff';
    mode = 'erase';
    paintColor.value = currentColor;
};


const lightenButton = document.getElementById('lighten');
lightenButton.addEventListener('click', lighter);
function lighter() {
    mode = 'brush';
    colorShift(10);
}


const darkenButton = document.getElementById('darken');
darkenButton.addEventListener('click', darker);
function darker() {
    mode = 'brush';
    colorShift(-10);
}

function colorShift(amt) {
    var num = parseInt(currentColor.slice(1), 16);

    var r = (num >> 16) + amt;
        if ( r > 255 ) r = 255;
        else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;
        if ( b > 255 ) b = 255;
        else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;
        if ( g > 255 ) g = 255;
        else if  ( g < 0 ) g = 0;

    currentColor = "#" + (g | (b << 8) | (r << 16)).toString(16);
    paintColor.value = currentColor;
}

const rainbowButton = document.getElementById('rainbow');
rainbowButton.addEventListener('click', paintTheRainbow)
function paintTheRainbow() {
   currentColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
   mode = 'rainbow';
}

