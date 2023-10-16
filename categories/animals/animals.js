import { generateSections, shuffleArray } from '../../utils/categories.js';
import { animals } from '../../constants/words.js';

const loggedIn = sessionStorage.getItem('loggedIn');

if (!loggedIn) {
    sessionStorage.setItem('loggedIn', 'false');
    window.location.href = '../../logIn.html';
}
if (loggedIn === 'false') {
    window.location.href = '../../logIn.html';
}

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
    sessionStorage.setItem('animalsTestNum', '1');
    sessionStorage.setItem('animalsTestWrongAnsw', JSON.stringify([]));
});
const logOut = document.getElementById("log-out");

logOut.addEventListener('click', function () {
    sessionStorage.setItem('loggedIn', 'false');
    window.location.href = '../../logIn.html';
});