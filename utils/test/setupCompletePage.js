import { callbackForComplete } from "./callbackForComplete.js";
import { loggedInCheck } from "../loggedInCheck.js";
import { header } from "../../components/header/header.js";
import { footer } from "../../components/footer.js";
import { loggedInTrueHeaderLinks } from "../../components/header/headerLinks/loggedInTrueHeaderLinks.js";
import { complete } from "../../components/main/test/complete.js";

export function setupCompletePage(category) {
    document.querySelector('header').innerHTML = header();
    document.querySelector('footer').innerHTML = footer();
    document.querySelector('main').innerHTML = complete();

    const headerLinks = document.querySelector('.header-links');
    headerLinks.innerHTML = loggedInTrueHeaderLinks();
    loggedInCheck();

    document.addEventListener('DOMContentLoaded', callbackForComplete(category));

    document.querySelector('.test-complete').addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            let audio = document.getElementById(event.target.id + '_audio');
            audio.play();
        }
    });

    const logOut = document.getElementById("log-out");
    logOut.addEventListener('click', function () {
        sessionStorage.setItem('loggedIn', 'false');
    });
}