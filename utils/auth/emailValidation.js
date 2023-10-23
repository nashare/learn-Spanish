import { testEmail } from "./testEmail.js";

export function emailValidation(email) {
    if (testEmail(email)) {
        document.getElementById('emailError').style.display = 'none';
        return true;
    } else {
        document.getElementById('emailError').style.display = 'block';
        return false
    }
}