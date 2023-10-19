import { header } from '../../components/header/header.js';
import { footer } from '../../components/footer/footer.js';
import { categoriesContainer } from '../../components/main/categories/categoriesContainer.js';
import { loggedInCheck } from "../loggedInCheck.js";
import { loggedInTrueHeaderLinks } from '../../components/header/headerLinks/loggedInTrueHeaderLinks.js';
import { categoriesCreate } from './categoriesCreate.js';
import { words } from "../../constants/words.js";

export function setupCategoriesPage(categoryName) {
    loggedInCheck();

    document.querySelector('header').innerHTML = header();
    document.querySelector('footer').innerHTML = footer();
    document.querySelector('main').innerHTML = categoriesContainer();
    document.querySelector('.categories-container').innerHTML = categoriesCreate(words);
    document.querySelector('.header-links').innerHTML = loggedInTrueHeaderLinks();

    const logOut = document.getElementById("log-out");

    logOut.addEventListener('click', function () {
        sessionStorage.setItem('loggedIn', 'false');
    });

    document.addEventListener('DOMContentLoaded', function () {
        async function getUserCategories(userId) {
            try {
                let response = await fetch(`http://localhost:3000/users/${userId}`);
                let user = await response.json();
                if (user.categories.length > 0) {
                    user.categories.forEach(category => {
                        let categoryNameElement = document.getElementById(`text-${category}`);
                        categoryNameElement.innerHTML += ' &#10003;';
                        let categoryImageElement = document.getElementById(`image-${category}`);
                        categoryImageElement.classList.add('category-image-filter');
                    })
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
        const userId = sessionStorage.getItem("userID");
        getUserCategories(userId);
    });
}