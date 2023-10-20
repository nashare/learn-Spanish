import { postUser } from "./postUser.js";
import { passwordValidation } from "../passwordValidation.js";
import { passwordConfirmValidation } from "../passwordConfirmValidation.js";
import { emailValidation } from "../emailValidation.js";

export function callbackForSignUp(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;

    let isValid = true;

    emailValidation(email, isValid);
    passwordValidation(password, isValid);
    passwordConfirmValidation(password, passwordConfirm, isValid);
    
    if (isValid) {
        postUser(email, password);
    }
}