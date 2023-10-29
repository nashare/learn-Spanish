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
    
    document.querySelector('header').innerHTML = header;
    document.querySelector('footer').innerHTML = footer;
    document.querySelector('main').innerHTML = logInContainer;
    document.querySelector('.auth-container').innerHTML += authForm;
    const formContent = formEmail + formPassword + formButton;
    document.querySelector('.authForm').innerHTML = formContent;

    loggedInCheckForAuth();

    document.querySelector('.authForm').addEventListener('submit', callbackForLogIn);

}
