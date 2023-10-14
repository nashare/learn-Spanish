import { generateSections, shuffleArray } from '../../utils/categories.js';
import { colors } from '../../constants/words.js';

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
    const arrForSessionStorage = shuffleArray(colors);
    sessionStorage.setItem('colors', JSON.stringify(arrForSessionStorage));
    sessionStorage.setItem('colorTestNum', '1');
    sessionStorage.setItem('colorTestWrongAnsw', JSON.stringify([]));
});
