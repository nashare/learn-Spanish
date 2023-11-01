import { categoryCreate } from './categoryCreate.js';
import { words } from '../../constants/words.js';
import { header } from '../../components/header/header.js';
import { footer } from '../../components/footer/footer.js';
import { loggedInTrueHeaderLinks } from '../../components/header/headerLinks/loggedInTrueHeaderLinks.js';
import { categoryContainer } from '../../components/main/category/categoryContainer.js';
import { logOut } from '../auth/logOut.js';
import { loggedInCheck } from '../auth/loggedInCheck.js';
import { playSound } from '../playSound.js';

export function setupCategoryPage(categoryName) {

    loggedInCheck();

    document.querySelector('header').innerHTML = header;
    document.querySelector('footer').innerHTML = footer;
    document.querySelector('main').innerHTML = categoryContainer;
    document.querySelector('.header-links').innerHTML = loggedInTrueHeaderLinks;

    logOut();

    document.addEventListener('DOMContentLoaded', function () {
        const sectionsHTML = categoryCreate(categoryName, words[categoryName]);
        document.querySelector('.category-container').innerHTML = sectionsHTML;
    });

    playSound('.category-container');

    document.querySelector('.category-practice').addEventListener('click', function () {
        const arrForSessionStorage = chance.shuffle(words[categoryName]);
        sessionStorage.setItem(categoryName, JSON.stringify(arrForSessionStorage));
        sessionStorage.setItem(`${categoryName}TestNum`, '1');
        sessionStorage.setItem(`${categoryName}TestWrongAnsw`, JSON.stringify([]));
        window.location.href = `/categories/${categoryName}/test-1/test-1.html`;
    });
}