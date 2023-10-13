import { generateSections } from '../categories.js';

const animals = ["caballo", "cerdo", "conejo", 
                "gato", "oso", "perro", "pez", "pollo", "ratón", "vaca"];

document.addEventListener('DOMContentLoaded', function () {
    const sectionsHTML = generateSections("animals", animals);
    document.querySelector('.section-container').innerHTML = sectionsHTML;
});

document.querySelector('.section-container').addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        let audio = document.getElementById(event.target.id + '_audio');
        audio.play();
    }
});