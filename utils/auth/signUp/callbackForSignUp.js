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

    const emailValidResult = emailValidation(email);
    const passValidResult = passwordValidation(password);
    const passConfValidResult = passwordConfirmValidation(password, passwordConfirm);

    if (!emailValidResult || !passValidResult || !passConfValidResult) {
        isValid = false
    }
    
    if (isValid) {
        postUser(email, password);
    }
}