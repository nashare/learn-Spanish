import { generateSections, shuffleArray } from '../../utils/categories.js';
import { animals } from '../../constants/words.js';

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

document.querySelector('.categories-practice').addEventListener('click', function (event) {
    const arrForSessionStorage = shuffleArray(animals);
    sessionStorage.setItem('animals', JSON.stringify(arrForSessionStorage));
    sessionStorage.setItem('animalTestNum', '1');
    sessionStorage.setItem('animalTestWrongAnsw', JSON.stringify([]));
});
