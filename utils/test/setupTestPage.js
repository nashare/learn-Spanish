import { callbackForTest } from "./callbackForTest.js";
import { loggedInCheck } from "../loggedInCheck.js";
import { header } from "../../components/header/header.js";
import { footer } from "../../components/footer/footer.js";
import { loggedInTrueHeaderLinks } from "../../components/header/headerLinks/loggedInTrueHeaderLinks.js";
import { testContainer } from "../../components/main/test/test/testContainer.js";

export function setupTestPage(category) {
    document.querySelector('header').innerHTML = header();
    document.querySelector('footer').innerHTML = footer();
    document.querySelector('main').innerHTML = testContainer();

    const headerLinks = document.querySelector('.header-links');
    headerLinks.innerHTML = loggedInTrueHeaderLinks();
    loggedInCheck();

    document.addEventListener('DOMContentLoaded', callbackForTest(category));

    const logOut = document.getElementById("log-out");
    logOut.addEventListener('click', function () {
        sessionStorage.setItem('loggedIn', 'false');
    });
}