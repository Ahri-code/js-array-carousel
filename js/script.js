// --- CONSTANTS ---

const images = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"];
const alts = ["Spiderman", "Ratchet & Clank", "You are lucky that the image didn't load", "Stray", "Avengers"];

// --- VARIABLES ---

let i;
let button;

// --- COMPUTATIONs ---

do {
    i = Math.floor(Math.random() * 10);
} while (i > 4)

document.getElementById("image").src = images[i];
document.getElementById("image").alt = alts[i];

if (i == 0) {
    document.getElementById("down").style.display = "none";
}
else if (i==4) {
    document.getElementById("up").style.display = "none";
}

// --- BUTTONS ---

button = document.getElementById("up");
button.addEventListener("click", next);

button = document.getElementById("down");
button.addEventListener("click", prev);

// --- FUNCTIONS ---

function next() {
    i++;
    document.getElementById("image").src = images[i];
    document.getElementById("image").alt = alts[i];
    if (i == 1) {
        document.getElementById("down").style.display = "block";
    }
    if (i==4) {
        document.getElementById("up").style.display = "none";
    }
}

function prev() {
    i--;
    document.getElementById("image").src = images[i];
    document.getElementById("image").alt = alts[i];
    if (i==3) {
        document.getElementById("up").style.display = "block";
    }
    if (i == 0) {
        document.getElementById("down").style.display = "none";
    }
}