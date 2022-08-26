
const palette = document.querySelector('#canvas');

let num;
function paletteSize (num) {
    if (num > 100) {
        console.log("error, palette size too large");
        return;
    }
    if (num < 20) {
        console.log("you have chosen less than the minimum");
        console.log("paletteSize set to 20");
        num = 20;
    }
    
    palette.style.display = "grid";
    palette.style["grid-template-columns"] = `repeat(${num}, 1fr)`;
    palette.style["grid-template-rows"] = `repeat(${num}, 1fr)`;

    for (let i = 0; i < (num * num); i++) {
        const div = document.createElement('div');
        palette.appendChild(div); 
    }
}

