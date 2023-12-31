import { header } from '../../../components/header/header.js';
import { footer } from '../../../components/footer/footer.js';
import { signUpContainer } from '../../../components/main/signUp/signUpContainer.js';
import { authForm } from '../../../components/main/authForm/authForm.js';
import { formEmail } from '../../../components/main/authForm/formEmail.js';
import { formPassword } from '../../../components/main/authForm/formPassword.js';
import { formPasswordConfirm } from '../../../components/main/authForm/formPasswordConfirm.js';
import { formButton } from '../../../components/main/authForm/formButton.js';
import { loggedInCheckForAuth } from '../loggedInCheckForAuth.js';
import { callbackForSignUp } from './callbackForSignUp.js';

export function setupSignUpPage() {
    
    document.querySelector('header').innerHTML = header;
    document.querySelector('footer').innerHTML = footer;
    document.querySelector('main').innerHTML = signUpContainer;
    document.querySelector('.auth-container').innerHTML += authForm;
    const formContent = formEmail + formPassword + formPasswordConfirm + formButton;
    document.querySelector('.authForm').innerHTML = formContent;
    document.querySelector('.auth-rules').style.display = 'block';

    loggedInCheckForAuth();

    document.querySelector('.authForm').addEventListener('submit', callbackForSignUp);
        
}