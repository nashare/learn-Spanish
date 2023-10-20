import { callbackForComplete } from './callbackForComplete.js';
import { loggedInCheck } from '../../auth/loggedInCheck.js';
import { header } from '../../../components/header/header.js';
import { footer } from '../../../components/footer/footer.js';
import { loggedInTrueHeaderLinks } from '../../../components/header/headerLinks/loggedInTrueHeaderLinks.js';
import { completeContainer } from '../../../components/main/test/complete/completeContainer.js';
import { logOut } from '../../auth/logOut.js';
import { playSound } from '../../playSound.js';

export function setupCompletePage(category) {

    loggedInCheck();

    document.querySelector('header').innerHTML = header;
    document.querySelector('footer').innerHTML = footer;
    document.querySelector('main').innerHTML = completeContainer;
    document.querySelector('.header-links').innerHTML = loggedInTrueHeaderLinks;

    document.addEventListener('DOMContentLoaded', callbackForComplete(category));

    playSound('.test-complete');

    logOut();
}