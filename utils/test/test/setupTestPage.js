import { callbackForTest } from './callbackForTest.js';
import { loggedInCheck } from '../../auth/loggedInCheck.js';
import { header } from '../../../components/header/header.js';
import { footer } from '../../../components/footer/footer.js';
import { loggedInTrueHeaderLinks } from '../../../components/header/headerLinks/loggedInTrueHeaderLinks.js';
import { testContainer } from '../../../components/main/test/test/testContainer.js';
import { logOut } from '../../auth/logOut.js';

export function setupTestPage(category) {
    
    loggedInCheck();

    document.querySelector('header').innerHTML = header;
    document.querySelector('footer').innerHTML = footer;
    document.querySelector('main').innerHTML = testContainer;
    document.querySelector('.header-links').innerHTML = loggedInTrueHeaderLinks;
    
    document.addEventListener('DOMContentLoaded', callbackForTest(category));

    logOut();
}