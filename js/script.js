// --- CONSTANTS ---

const images = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"];

// --- VARIABLES ---

let i;

// --- COMPUTATIONs ---

do {
    i = Math.floor(Math.random() * 10);
} while (i > 4)

document.getElementById("image").src = images[i];

// --- FUNCTIONS ---

function img_source() {
    
}