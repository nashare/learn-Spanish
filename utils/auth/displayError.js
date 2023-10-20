export function displayLoginError(errorMessage) {
    document.getElementById('serverError').textContent = errorMessage;
    document.getElementById('serverError').style.display = 'block';
}