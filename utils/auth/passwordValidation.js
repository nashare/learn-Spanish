export function passwordValidation(password) {
    if (password.length < 8) {
        document.getElementById('passwordError').style.display = 'block';
        return false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
        return true
    }
}