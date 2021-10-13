const drawArea = document.querySelector('.draw-area');

// PichR

// https://www.youtube.com/watch?v=FX1xb1cim7Ehttps://www.youtube.com/watch?v=FX1xb1cim7E

function picker () {}
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'nano', // or 'monolith', or 'nano'

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: false,
            save: false
        }
    }
});

pickr.on('init', instance => {
    console.log('Event: "init"', instance);
}).on('hide', instance => {
    console.log('Event: "hide"', instance);
}).on('show', (color, instance) => {
    console.log('Event: "show"', color, instance);
}).on('save', (color, instance) => {
    console.log('Event: "save"', color, instance);
}).on('clear', instance => {
    console.log('Event: "clear"', instance);
}).on('change', (color, source, instance) => {
    console.log('Event: "change"', color, source, instance);
}).on('changestop', (source, instance) => {
    console.log('Event: "changestop"', source, instance);
}).on('cancel', instance => {
    console.log('Event: "cancel"', instance);
}).on('swatchselect', (color, instance) => {
    console.log('Event: "swatchselect"', color, instance);
});pickr.on('init', instance => {
    console.log('Event: "init"', instance);
}).on('hide', instance => {
    console.log('Event: "hide"', instance);
}).on('show', (color, instance) => {
    console.log('Event: "show"', color, instance);
}).on('save', (color, instance) => {
    console.log('Event: "save"', color, instance);
}).on('clear', instance => {
    console.log('Event: "clear"', instance);
}).on('change', (color, source, instance) => {
    console.log('Event: "change"', color, source, instance);
}).on('changestop', (source, instance) => {
    console.log('Event: "changestop"', source, instance);
}).on('cancel', instance => {
    console.log('Event: "cancel"', instance);
}).on('swatchselect', (color, instance) => {
    console.log('Event: "swatchselect"', color, instance);
});

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
        pixel.style.backgroundColor = '#ddd';
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

        vals = bg.substring(bg.indexOf('(') +1, bg.length -1).split(', ');
        r = vals[0]
        g = vals[1]
        b = vals[2]
        
        rNew = Math.round(r - 1)
        gNew = Math.round(g - 1)
        bNew = Math.round(b - 1)

        event.style.backgroundColor = `rgb(${rNew}, ${gNew}, ${bNew})`
    }   

    // function for drawing rgb
    function drawRgb(event) {
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        event.style.backgroundColor = '#' + randomColor;
    }

    // function for drawing custom color

    function drawCustom(event) {
        event.style.backgroundColor = input.ariaValueMax;
        colorCode.innerHTML = input.ariaValueMax;
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