import { header } from '../../../components/header/header.js';
import { footer } from '../../../components/footer/footer.js';
import { logInContainer } from '../../../components/main/logIn/logInContainer.js';
import { authForm } from '../../../components/main/authForm/authForm.js';
import { formEmail } from '../../../components/main/authForm/formEmail.js';
import { formPassword } from '../../../components/main/authForm/formPassword.js';
import { formButton } from '../../../components/main/authForm/formButton.js';
import { loggedInCheckForAuth } from '../loggedInCheckForAuth.js';
import { callbackForLogIn } from './callbackForLogIn.js';


export function setupLogInPage() {
    
    document.querySelector('header').innerHTML = header();
    document.querySelector('footer').innerHTML = footer();
    document.querySelector('main').innerHTML = logInContainer();
    document.querySelector('.login-container').innerHTML += authForm();
    document.querySelector('.authForm').innerHTML += formEmail();
    document.querySelector('.authForm').innerHTML += formPassword();
    document.querySelector('.authForm').innerHTML += formButton();

    loggedInCheckForAuth();

    document.querySelector('.authForm').addEventListener('submit', callbackForLogIn);

}
