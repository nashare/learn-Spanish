import { generateSections, shuffleArray } from '../../utils/categoryCreate.js';
import { fruits } from '../../constants/words.js';
import { header } from '../../components/header/header.js';
import { footer } from '../../components/footer.js';
import { loggedInTrueHeaderLinks } from '../../components/header/headerLinks/loggedInTrueHeaderLinks.js';

document.querySelector('header').innerHTML = header();
document.querySelector('footer').innerHTML = footer();

const headerLinks = document.querySelector('.header-links');
headerLinks.innerHTML = loggedInTrueHeaderLinks();

const loggedIn = sessionStorage.getItem('loggedIn');

if (!loggedIn) {
    sessionStorage.setItem('loggedIn', 'false');
    window.location.href = '../../logIn.html';
}
if (loggedIn === 'false') {
    window.location.href = '../../logIn.html';
}

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

const logOut = document.getElementById("log-out");

logOut.addEventListener('click', function () {
    sessionStorage.setItem('loggedIn', 'false');
});