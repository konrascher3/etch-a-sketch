// create 16x16 grid
const drawArea = document.querySelector('.draw-area');

for (let i = 0; i < 256; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add(`pixel${i}`);
    pixel.setAttribute('id', 'pixel');
    pixel.textContent = `${i}`;
    drawArea.appendChild(pixel);
}

// eventListener for mouse down and moving
let mouseIsDown = false;
const pixels = document.querySelectorAll('#pixel');

for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener('mousedown', function(){mouseIsDown=true})
    pixels[i].addEventListener('mouseup', function(){mouseIsDown=false})
    pixels[i].addEventListener('mousemove', function(event){
        if(mouseIsDown){
            drawBlack(event.target);
        }
    })
}   
// pixels.forEach((pixel) => {
//     pixel.addEventListener('mousedown', (event) => {
//         console.log(event.target.textContent);
//         // drawBlack(event.target);
//     }), {mouseIsDown=true};
//     pixel.addEventListener('mouseup', (event) => {
//         console.log(event.target.textContent), {mouseIsDown=true};
//         // drawBlack(event.target);
//     });
//     pixel.addEventListener('mousemove', (event) => {
//         if(mouseIsDown) {
//             console.log(event.target.textContent);
//             drawBlack(event.target);
//         }

//     });
// })

// eventListener for btnClear
const btnClear = document.querySelector('.btn-clear')
btnClear.addEventListener('click', () => {
    clearGrid();
})

// function for drawing black
function drawBlack(event) {
    event.style.backgroundColor = 'black';
}

// function to reset grid (clear grid)
function clearGrid() {
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = '#ddd';
    })
}