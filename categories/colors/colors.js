import { generateSections } from '../categories.js';

const colors = ["negro", "verde", "azul", 
    "rojo", "amarillo", "blanco", "rosa", "naranja", "púrpura", "marrón"];


document.addEventListener('DOMContentLoaded', function () {
    const sectionsHTML = generateSections("colors", colors);
    document.querySelector('.section-container').innerHTML = sectionsHTML;
});

document.querySelector('.section-container').addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        let audio = document.getElementById(event.target.id + '_audio');
        audio.play();
    }
});

document.querySelector('.categories-practice').addEventListener('click', function (event) {
    const arrForSessionStorage = shuffleArray(animals);
    sessionStorage.setItem("colors", JSON.stringify(arrForSessionStorage));
});
