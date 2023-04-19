// --- CONSTANTS ---

const images = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"];
const alts = ["Spiderman", "Ratchet & Clank", "You are lucky that the image didn't load", "Stray", "Avengers"];

// --- VARIABLES ---

let i;

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

// --- FUNCTIONS ---

function img_source() {
    
}