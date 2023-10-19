import { header } from './components/header/header.js';
import { footer } from './components/footer/footer.js';
import { loggedInFalseHeaderLinks } from './components/header/headerLinks/loggedInFalseHeaderLinks.js';
import { loggedInTrueHeaderLinks } from './components/header/headerLinks/loggedInTrueHeaderLinks.js';
import { index } from './components/main/index/index.js';

document.querySelector('header').innerHTML = header();
document.querySelector('footer').innerHTML = footer();
document.querySelector('main').innerHTML = index();

const loggedIn = sessionStorage.getItem('loggedIn');
const headerLinks = document.querySelector(".header-links");

if (loggedIn === 'true') {
    headerLinks.innerHTML = loggedInTrueHeaderLinks();
} else {
    headerLinks.innerHTML = loggedInFalseHeaderLinks();
    sessionStorage.setItem('loggedIn', 'false');
}

const logOut = document.getElementById("log-out");
if (logOut) {
    logOut.addEventListener('click', function () {
        sessionStorage.setItem('loggedIn', 'false');
    });
} 
