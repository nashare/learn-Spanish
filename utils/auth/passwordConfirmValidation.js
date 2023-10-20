export function passwordConfirmValidation(password, passwordConfirm, isValid) {
    if (password !== passwordConfirm) {
        document.getElementById('passwordConfirmError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('passwordConfirmError').style.display = 'none';
    }
}