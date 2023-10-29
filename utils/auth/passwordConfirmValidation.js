export function doPasswordsMatch(password, passwordConfirm) {
    return password === passwordConfirm;
}

function displayPasswordMismatchError(isMatched) {
    const errorElement = document.getElementById('passwordConfirmError');
    if (isMatched) {
        errorElement.style.display = 'none';
    } else {
        errorElement.style.display = 'block';
    }
}

export function passwordConfirmValidation(password, passwordConfirm) {
    const isMatched = doPasswordsMatch(password, passwordConfirm);
    displayPasswordMismatchError(isMatched);
    return isMatched;
}
