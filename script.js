
const palette = document.querySelector('#canvas');
const paintColor = document.getElementById('paintColor')

let num = 20;
paletteSize(16);

function paletteSize (num) {
    if (num > 100) {
        console.log("error, palette size too large");
        return;
    }
    
    if (num < 16) {
        console.log("you have chosen less than the minimum");
        console.log("paletteSize set to 20");
        num = 16;
    }
    
    palette.style.display = "grid";
    palette.style["grid-template-columns"] = `repeat(${num}, 1fr)`;
    palette.style["grid-template-rows"] = `repeat(${num}, 1fr)`;
    
    for (let i = 0; i < (num * num); i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        palette.appendChild(div); 
    }       

    painter();
                    // e.target.style.background = paintColor;
}                    


function painter() {
    const boxes = document.querySelectorAll('.grid');
    boxes.forEach( (box) => {
        box.addEventListener('click', (e) => {
            console.log(e)
        });
    });
}