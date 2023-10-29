export function isValidPassword(password) {
    return password.length >= 8;
}

function displayPasswordLengthError(isValid) {
    const errorElement = document.getElementById('passwordError');
    if (isValid) {
        errorElement.style.display = 'none';
    } else {
        errorElement.style.display = 'block';
    }
}

export function passwordValidation(password) {
    const isValid = isValidPassword(password);
    displayPasswordLengthError(isValid);
    return isValid;
}