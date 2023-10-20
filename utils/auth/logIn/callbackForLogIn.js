import { getUser } from "./getUser.js";
import { passwordValidation } from "../passwordValidation.js";
import { emailValidation } from "../emailValidation.js";

export function callbackForLogIn(event) {
    
    event.preventDefault();

    let isValid = true;

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    emailValidation(email, isValid);
    passwordValidation(password, isValid);

    if (isValid) {
        getUser(email, password);
    }
}