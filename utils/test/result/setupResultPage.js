import { callbackForResult } from './callbackForResult.js';
import { loggedInCheck } from '../../auth/loggedInCheck.js';
import { header } from '../../../components/header/header.js';
import { footer } from '../../../components/footer/footer.js';
import { loggedInTrueHeaderLinks } from '../../../components/header/headerLinks/loggedInTrueHeaderLinks.js';
import { resultContainer } from '../../../components/main/test/result/resultContainer.js';
import { logOut } from '../../auth/logOut.js';

export function getNextURL(category, testNum) {
    if (testNum === 11) {
        return `/categories/${category}/test/complete.html`;
    } else {
        return `/categories/${category}/test-${testNum}/test-${testNum}.html`;
    }
}

function navigateToNextTest(category, testNum) {
    const nextURL = getNextURL(category, testNum);
    if (testNum !== 11) {
        sessionStorage.setItem(`${category}TestNum`, testNum);
    }

    window.location.href = nextURL;
}

export function setupResultPage(category) {

    loggedInCheck();

    document.querySelector('header').innerHTML = header;
    document.querySelector('footer').innerHTML = footer;
    document.querySelector('main').innerHTML = resultContainer;
    document.querySelector('.header-links').innerHTML = loggedInTrueHeaderLinks;
    
    document.addEventListener('DOMContentLoaded', callbackForResult(category));

    document.querySelector('.test-result-button').addEventListener('click', function () {
        let testNum = parseInt(sessionStorage.getItem(`${category}TestNum`));
        testNum++;
        navigateToNextTest(category, testNum);
    });

    logOut();
}