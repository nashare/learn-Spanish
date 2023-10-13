import { generateSections } from '../categories.js';

const fruits = ["manzana", "albaricoque", "banana",
    "cereza", "uva", "fresa", "naranja", "limon", "durazno", "pera"];


document.addEventListener('DOMContentLoaded', function () {
    const sectionsHTML = generateSections("fruits", fruits);
    document.querySelector('.section-container').innerHTML = sectionsHTML;
});

document.querySelector('.section-container').addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        let audio = document.getElementById(event.target.id + '_audio');
        audio.play();
    }
});