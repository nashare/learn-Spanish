export function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    const isValid = passwordRegex.test(password);
    let errorText = null;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    const digitsRegex = /\d/;
    const specialSymbRegex = /[^A-Za-z\d]/;
    if (!isValid) {
        if (password.length < 8) {
            errorText = "Less than 8 characters"
        } else if (!upperCaseRegex.test(password)) {
            errorText = "Add an uppercase letter"
        } else if (!lowerCaseRegex.test(password)) {
            errorText = "Add a lowercase letter"
        } else if (!digitsRegex.test(password)) {
            errorText = "Add a digit"
        } else if (!specialSymbRegex.test(password)) {
            errorText = "Add a special symbol"
        }
    }
    return [isValid, errorText];
}

function displayPasswordLengthError(isValid, errorText) {
    const errorElement = document.getElementById('passwordError');
    if (isValid) {
        errorElement.style.display = 'none';
    } else {
        errorElement.innerText = errorText;
        errorElement.style.display = 'block';
    }
}

export function passwordValidation(password) {
    const [isValid, errorText] = isValidPassword(password);
    displayPasswordLengthError(isValid, errorText);
    return isValid;
}