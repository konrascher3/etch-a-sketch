const drawArea = document.querySelector('.draw-area');

// grid-size slider
const slider = document.getElementById('grid-size-slider');
const sliderValue = document.getElementById('slider-value');
const sliderValue2 = document.getElementById('slider-value-2');

sliderValue.innerHTML = slider.value;
sliderValue2.innerHTML = slider.value;
slider.oninput = function() {
    sliderValue.innerHTML = this.value;
    sliderValue2.innerHTML = this.value;
}

// Adjust CSS grid with slider value (overwrite .grid-size CSS rule)
function gridSize() {
    const gridSize = document.querySelector('.grid-size');
    gridSize.setAttribute('style', `grid-template-columns: repeat(${slider.value}, 1fr); grid-template-rows: repeat(${slider.value}, 1fr)`, );
    // // gridSize.setAttribute('style', `grid-template-rows: repeat(${slider.value}, 1fr)`); repeat(auto-fit, minmax(100px, 1fr));
}

// When slider changes, create new grid based on slider value
slider.onchange = function() {
    while (drawArea.lastElementChild) {
        drawArea.removeChild(drawArea.lastElementChild);
    };
    grid();
    draw();
}

// Create-grid function
function grid() {
    gridSize();
    for (let i = 0; i < (slider.value*slider.value); i++) {
        const pixel = document.createElement('div');
        pixel.classList.add(`pixel${i}`);
        pixel.setAttribute('id', 'pixel');
        // pixel.textContent = `${i}`;
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

    // color functions 

    const colorMode = document.querySelectorAll('.color-btn');
    console.log(colorMode)
    for (let i = 0; i < colorMode.length; i++) {
    colorMode[i].addEventListener('click', function(event) {
        colorType = event.target.value;
        console.log(colorType);
        })
    }

    // function for drawing black
    function drawBlack(event) {
        event.style.backgroundColor = 'black';
    }

    // function for drawing grayscale
    function drawGray(event) {
        bg = event.style.backgroundColor;
        console.log(bg);
        vals = bg.substring(bg.indexOf('(') +1, bg.length -1).split(', ');
        r = vals[0]
        g = vals[1]
        b = vals[2]
        
        rNew = Math.round((r/255*100) + (225/1000))
        console.log(r)
        console.log(rNew)
        gNew = Math.round((g/255*100) + (10/255*100))
        bNew = Math.round((b/255*100) + (10/255*100))

        // event.style.backgroundColor = `rgb(${rNew}, ${gNew}, ${bNew})`
    }   

    // function for drawing rgb
    function drawRgb(event) {
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        event.style.backgroundColor = '#' + randomColor;
    }

    // function for drawing custom color
    function drawCustom(event) {
        event.style.backgroundColor = 'yellow';
    }
    
    const pixels = addPixelEvent();
    let mouseIsDown = false;
    let colorType = "classic";
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('mousedown', function() {mouseIsDown=true})
        pixels[i].addEventListener('mouseup', function(){mouseIsDown=false})
        pixels[i].addEventListener('mousemove', function(event){
            if(mouseIsDown){
                // TODO: Add different draw-functions (b/w; grayscale; rgb)
                if (colorType === 'classic') {
                    drawBlack(event.target);
                } else if (colorType === 'grayscale') {
                    drawGray(event.target);
                } else if (colorType === 'rgb') {
                    drawRgb(event.target);
                } else if (colorType === 'custom') {
                    drawCustom(event.target);
                }

            }
        });
    }
}

// eventListener for btnClear
const btnClear = document.querySelector('.btn-clear')
btnClear.addEventListener('click', () => {
    clearGrid();
})

// function to reset grid (clear grid)
function clearGrid() {
    addPixelEvent().forEach((pixel) => {
        pixel.style.backgroundColor = '#ddd';
    })
}

grid();
draw();