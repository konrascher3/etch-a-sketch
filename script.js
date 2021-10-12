const drawArea = document.querySelector('.draw-area');
console.log(drawArea);
// create 16x16 grid
for (let i = 0; i < 256; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add(`pixel${i}`)
    pixel.setAttribute('id', 'pixel')
    pixel.textContent = `${i}`
    drawArea.appendChild(pixel)
}

const pixels = document.querySelectorAll('#pixel');
pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', (event) => {
        console.log(event.target.textContent)
        drawBlack(event.target)
    })
})

function drawBlack(event) {
    event.style.backgroundColor = 'black'
}