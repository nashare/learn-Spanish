import { loggedInFalseHeaderLinks } from '../../components/header/headerLinks/loggedInFalseHeaderLinks.js';

export function loggedInCheckForAuth() {
    const loggedIn = sessionStorage.getItem('loggedIn');
    const headerLinks = document.querySelector('.header-links');

    if (loggedIn === 'true') {
        window.location.href = '/categories/categories.html';
    } else {
        headerLinks.innerHTML = loggedInFalseHeaderLinks();
        sessionStorage.setItem('loggedIn', 'false');
    }
}