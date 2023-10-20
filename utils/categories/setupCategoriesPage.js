import { header } from '../../components/header/header.js';
import { footer } from '../../components/footer/footer.js';
import { categoriesContainer } from '../../components/main/categories/categoriesContainer.js';
import { loggedInCheck } from '../auth/loggedInCheck.js';
import { loggedInTrueHeaderLinks } from '../../components/header/headerLinks/loggedInTrueHeaderLinks.js';
import { categoriesCreate } from './categoriesCreate.js';
import { words } from '../../constants/words.js';
import { logOut } from '../auth/logOut.js';
import { getUserCategories } from './getUserCategories.js';

export function setupCategoriesPage() {
    
    loggedInCheck();

    document.querySelector('header').innerHTML = header();
    document.querySelector('footer').innerHTML = footer();
    document.querySelector('main').innerHTML = categoriesContainer();
    document.querySelector('.categories-container').innerHTML = categoriesCreate(words);
    document.querySelector('.header-links').innerHTML = loggedInTrueHeaderLinks();

    const userId = sessionStorage.getItem('userID');

    document.addEventListener('DOMContentLoaded', getUserCategories(userId));

    logOut();
}