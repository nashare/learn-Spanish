import { generateSections, shuffleArray } from '../../utils/categories.js';
import { fruits } from '../../constants/words.js';

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
    sessionStorage.setItem('fruits', JSON.stringify(arrForSessionStorage));
    sessionStorage.setItem('fruitsTestNum', '1');
    sessionStorage.setItem('fruitsTestWrongAnsw', JSON.stringify([]));
});
