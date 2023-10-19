import { callbackForResult } from "./callbackForResult.js";
import { loggedInCheck } from "../loggedInCheck.js";
import { header } from "../../components/header/header.js";
import { footer } from "../../components/footer/footer.js";
import { loggedInTrueHeaderLinks } from "../../components/header/headerLinks/loggedInTrueHeaderLinks.js";
import { result } from "../../components/main/test/result/result.js";

export function setupResultPage(category) {
    document.querySelector('header').innerHTML = header();
    document.querySelector('footer').innerHTML = footer();
    document.querySelector('main').innerHTML = result();

    const headerLinks = document.querySelector('.header-links');
    headerLinks.innerHTML = loggedInTrueHeaderLinks();
    loggedInCheck();

    document.addEventListener('DOMContentLoaded', callbackForResult(category));

    document.querySelector('.test-result-button').addEventListener('click', function () {
        let testNum = parseInt(sessionStorage.getItem(`${category}TestNum`));
        testNum++;
        if (testNum === 11) {
            window.location.href = `/categories/${category}/test/complete.html`;
        } else {
            sessionStorage.setItem(`${category}TestNum`, testNum);
            window.location.href = `/categories/${category}/test-${testNum}/test-${testNum}.html`;
        }
    });

    const logOut = document.getElementById("log-out");
    logOut.addEventListener('click', function () {
        sessionStorage.setItem('loggedIn', 'false');
    });
}