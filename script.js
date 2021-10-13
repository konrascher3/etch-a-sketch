// grid-size slider
const slider = document.getElementById('grid-size-slider');
const sliderValue = document.getElementById('slider-value');
sliderValue.innerHTML = slider.value;
slider.oninput = function() {
    sliderValue.innerHTML = this.value;
}

// create grid based on slider
// TODO: Adjust CSS grid with slider value

const drawArea = document.querySelector('.draw-area');
slider.onchange = function() {
    while (drawArea.lastElementChild) {
        drawArea.removeChild(drawArea.lastElementChild);
    };
    grid();
    draw();
}

// Create-grid function
function grid() {
    for (let i = 0; i < (slider.value*slider.value); i++) {
        const pixel = document.createElement('div');
        pixel.classList.add(`pixel${i}`);
        pixel.setAttribute('id', 'pixel');
        pixel.textContent = `${i}`;
        drawArea.appendChild(pixel);
    };
}

// Add event-listener to created grid
function addPixelEvent() {
    const pixels = document.querySelectorAll('#pixel');
    // console.log(pixels.length);
    return pixels
}

// only draws if mouse is held down and moving
function draw() {
    const pixels = addPixelEvent();
    let mouseIsDown = false;
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('mousedown', function() {mouseIsDown=true})
        pixels[i].addEventListener('mouseup', function(){mouseIsDown=false})
        pixels[i].addEventListener('mousemove', function(event){
            if(mouseIsDown){
                // TODO: Add different draw-functions (b/w; grey-scale; rgb)
                drawBlack(event.target);
            }
        });
    }
}

// function to reset grid (clear grid)
function clearGrid() {
    addPixelEvent().forEach((pixel) => {
        pixel.style.backgroundColor = '#ddd';
    })
}

// function for drawing black
function drawBlack(event) {
    event.style.backgroundColor = 'black';
}

// eventListener for btnClear
const btnClear = document.querySelector('.btn-clear')
btnClear.addEventListener('click', () => {
    clearGrid();
})

grid();
draw();