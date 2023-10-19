import { callbackForComplete } from "./callbackForComplete.js";
import { loggedInCheck } from "../loggedInCheck.js";
import { header } from "../../components/header/header.js";
import { footer } from "../../components/footer/footer.js";
import { loggedInTrueHeaderLinks } from "../../components/header/headerLinks/loggedInTrueHeaderLinks.js";
import { completeContainer } from "../../components/main/test/complete/completeContainer.js";

export function setupCompletePage(category) {
    document.querySelector('header').innerHTML = header();
    document.querySelector('footer').innerHTML = footer();
    document.querySelector('main').innerHTML = completeContainer();
    document.querySelector('.header-links').innerHTML = loggedInTrueHeaderLinks();
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