
const canvas = document.querySelector('#canvas');
let num = 16;

let paintColor;
const defaultColor = '#000000';
let currentColor = defaultColor;

window.addEventListener('load', startup, false);

function startup() {
    paintColor = document.querySelector('#paintColor');
    paintColor.value = defaultColor;
    paintColor.addEventListener('change', updateColor, false);
    paintColor.select();
    canvasSize(16);
}

function canvasSize (num) {
    if (num > 100) {
        console.log("error, canvas size too large");
        return;
    }
    
    if (num < 16) {
        console.log("you have chosen less than the minimum");
        console.log("canvasSize set to 16");
        num = 16;
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

/* 

think about how to make it mousedown && mousemove
window.addeventlistener('mousedown')
e.type mouseover & mousedown
*/