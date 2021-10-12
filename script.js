const drawArea = document.querySelector('.draw-area');
console.log(drawArea);
for (let i = 0; i < 256; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add(`pixel${i}`)
    pixel.textContent = `thisIsPixel${i}`
    drawArea.appendChild(pixel)
}