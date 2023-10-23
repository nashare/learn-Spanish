export function passwordConfirmValidation(password, passwordConfirm) {
    if (password !== passwordConfirm) {
        document.getElementById('passwordConfirmError').style.display = 'block';
        return false;
    } else {
        document.getElementById('passwordConfirmError').style.display = 'none';
        return true;
    }
}