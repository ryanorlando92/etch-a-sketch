
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
        nodes[i].style.background = 'white';
    }
    canvas.style.display = "grid";
    canvas.style["grid-template-columns"] = `repeat(${num}, 1fr)`;
    canvas.style["grid-template-rows"] = `repeat(${num}, 1fr)`;
    
    for (let i = 0; i < (num * num); i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        canvas.appendChild(div); 
    }
    painter();
}                    
                    

function updateColor(e) {
    currentColor = e.target.value;
}

function painter() {
    const boxes = document.querySelectorAll('.grid');
    boxes.forEach( (box) => {
        box.addEventListener('mousemove', (e) => {
            e.target.style.background = currentColor;
            console.log(e.type);
        });
    }); 
}

sliderOutput.textContent = `${slider.value} x ${slider.value}`
slider.oninput = () => {
    sliderOutput.textContent = `${slider.value} x ${slider.value}`;
    canvasSize(slider.value);
}
/* 

think about how to make it mousedown && mousemove
window.addeventlistener('mousedown')
e.type mouseover & mousedown
*/