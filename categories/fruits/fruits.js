import { generateSections, shuffleArray } from '../../utils/categories.js';

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

document.querySelector('.categories-practice').addEventListener('click', function (event) {
    const arrForSessionStorage = shuffleArray(fruits);
    sessionStorage.setItem("fruits", JSON.stringify(arrForSessionStorage));
});

document.querySelector('.categories-practice').addEventListener('click', function () {
    sessionStorage.setItem('fruitTestNum', '1');
});