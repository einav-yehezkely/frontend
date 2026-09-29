const colorBoxes = document.querySelectorAll(".color-box");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.querySelectorAll(".copy-btn");

generateBtn.addEventListener("click", generateColors);

copyBtn.forEach(button => {
    button.addEventListener("click", copyColor);
});

function generateColors(){
    colorBoxes.forEach(box => {
        const newColor = getRandomColor();
        const colorDiv = box.querySelector(".color");
        const hexSpan = box.querySelector(".hex-value");
        colorDiv.style.backgroundColor = newColor;
        hexSpan.textContent = newColor;
    });
    
}

function getRandomColor(){
    const characters = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0 ; i < 6 ; i++){
        const randomIndex = Math.floor(Math.random() * 16);
        color += characters[randomIndex];
    }

    return color;
}

function copyColor(event) {
    const button = event.target;

    const box = button.closest(".color-box");
    const hexSpan = box.querySelector(".hex-value");

    const color = hexSpan.textContent;

    navigator.clipboard.writeText(color);

    button.textContent = "Copied! ✓"
    setTimeout(() => {
        button.textContent = "Copy to clipboard";
    }, 1000);
}

