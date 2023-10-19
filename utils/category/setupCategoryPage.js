import { categoryCreate } from './categoryCreate.js';
import { shuffleArray } from '../shuffleArr.js';
import { words } from '../../constants/words.js';
import { header } from '../../components/header/header.js';
import { footer } from '../../components/footer/footer.js';
import { loggedInTrueHeaderLinks } from '../../components/header/headerLinks/loggedInTrueHeaderLinks.js';
import { categoryContainer } from '../../components/main/category/categoryContainer.js';

export function setupCategoryPage(categoryName) {
    document.querySelector('header').innerHTML = header();
    document.querySelector('footer').innerHTML = footer();
    document.querySelector('main').innerHTML = categoryContainer();

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
        const sectionsHTML = categoryCreate(categoryName, words[categoryName]);
        document.querySelector('.section-container').innerHTML = sectionsHTML;
    });

    document.querySelector('.section-container').addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            let audio = document.getElementById(event.target.id + '_audio');
            audio.play();
        }
    });

    document.querySelector('.categories-practice').addEventListener('click', function (event) {
        const arrForSessionStorage = shuffleArray(words[categoryName]);
        sessionStorage.setItem(categoryName, JSON.stringify(arrForSessionStorage));
        sessionStorage.setItem(`${categoryName}TestNum`, '1');
        sessionStorage.setItem(`${categoryName}TestWrongAnsw`, JSON.stringify([]));
        window.location.href = `/categories/${categoryName}/test-1/test-1.html`;
    });

    const logOut = document.getElementById("log-out");

    logOut.addEventListener('click', function () {
        sessionStorage.setItem('loggedIn', 'false');
    });
}