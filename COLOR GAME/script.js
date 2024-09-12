let numSquares = 6;
let colors = [];
let pickedColor;
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.getElementById("message");
const h1 = document.getElementById("h1");
const resetButton = document.getElementById("reset");
const modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    modeButtons.forEach(button => {
        button.addEventListener("click", function() {
            modeButtons.forEach(btn => btn.classList.remove("selected"));
            this.classList.add("selected");
            this.textContent === "EASY" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    });
}

function setupSquares() {
    squares.forEach(square => {
        square.addEventListener("click", function() {
            const clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "¡Correcto!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Jugar de nuevo";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Inténtalo nuevamente";
            }
        });
    });
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "Nuevos Colores";
    messageDisplay.textContent = "";
    squares.forEach((square, index) => {
        if (colors[index]) {
            square.style.display = "block";
            square.style.backgroundColor = colors[index];
        } else {
            square.style.display = "none";
        }
    });
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", reset);

function changeColors(color) {
    squares.forEach(square => {
        square.style.backgroundColor = color;
    });
}

function pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
