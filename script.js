const drawArea = document.querySelector('.draw-area');
console.log(drawArea);
// create 16x16 grid
for (let i = 0; i < 256; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add(`pixel${i}`)
    pixel.textContent = `${i}`
    drawArea.appendChild(pixel)
}