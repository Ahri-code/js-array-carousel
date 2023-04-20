// --- CONSTANTS ---

const images = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"];
const alts = ["Spiderman", "Ratchet & Clank", "You are lucky that the image didn't load", "Stray", "Avengers"];

// --- VARIABLES ---

let i;
let x;
let j = 0;
let k = 0;
let button;
let img_button;
let showner_img = [];

// --- COMPUTATIONs ---

showner_img = document.querySelectorAll(".shwoner_img");

do {
    i = Math.floor(Math.random() * 10);
} while (i > 4)

document.getElementById("image").src = images[i];
document.getElementById("image").alt = alts[i];

while (k < 5) {
    if (k != i) {
        showner_img[j].src = images[k];
        showner_img[j].alt = alts[k];
        j++;
        k++;
    }
    else {
        k++;
    } 
}

// --- BUTTONS ---

button = document.getElementById("up");
button.addEventListener("click", next);

button = document.getElementById("down");
button.addEventListener("click", prev);

showner_img.forEach(function(button) {
    button.addEventListener('click', load_img);
  });

// --- FUNCTIONS ---

function next() {
    if (i == 4){
        i = 0;
        document.getElementById("image").src = images[i];
        document.getElementById("image").alt = alts[i];
        j = 0;
        k = 0;
        while (k < 5) {
            if (k != i) {
                showner_img[j].src = images[k];
                showner_img[j].alt = alts[k];
                j++;
                k++;
            }
            else {
                k++;
            } 
        }
    } else {
        i++;
        document.getElementById("image").src = images[i];
        document.getElementById("image").alt = alts[i];
        j = 0;
        k = 0;
        while (k < 5) {
            if (k != i) {
                showner_img[j].src = images[k];
                showner_img[j].alt = alts[k];
                j++;
                k++;
            }
            else {
                k++;
            } 
        }
    }
}

function prev() {
    if (i == 0) {
        i = 4;
        document.getElementById("image").src = images[i];
        document.getElementById("image").alt = alts[i];
        j = 0;
        k = 0;
        while (k < 5) {
            if (k != i) {
                showner_img[j].src = images[k];
                showner_img[j].alt = alts[k];
                j++;
                k++;
            }
            else {
                k++;
            } 
        }
    }
    else {
        i--;
        document.getElementById("image").src = images[i];
        document.getElementById("image").alt = alts[i];
        j = 0;
        k = 0;
        while (k < 5) {
            if (k != i) {
                showner_img[j].src = images[k];
                showner_img[j].alt = alts[k];
                j++;
                k++;
            }
            else {
                k++;
            } 
        }
    }
}

function load_img() {
    x = this.getAttribute('id');
    if (x == "one") {
        x = this.getAttribute('src');
        document.getElementById("one").src = images [i];
        document.getElementById("one").alt = alts [i];
        document.getElementById("image").src = x;
        x = this.getAttribute('alt');
        document.getElementById("image").alt = x;
    }
    else if (x == "two") {
        x = this.getAttribute('src');
        document.getElementById("two").src = images [i];
        document.getElementById("two").alt = alts [i];
        document.getElementById("image").src = x;
        x = this.getAttribute('alt');
        document.getElementById("image").alt = x;
    }
    else if (x == "three") {
        x = this.getAttribute('src');
        document.getElementById("three").src = images [i];
        document.getElementById("three").alt = alts [i];
        document.getElementById("image").src = x;
        x = this.getAttribute('alt');
        document.getElementById("image").alt = x;
    }
    else if (x == "four") {
        x = this.getAttribute('src');
        document.getElementById("four").src = images [i];
        document.getElementById("four").alt = alts [i];
        document.getElementById("image").src = x;
        x = this.getAttribute('alt');
        document.getElementById("image").alt = x;
        console.log(x);
    }
}