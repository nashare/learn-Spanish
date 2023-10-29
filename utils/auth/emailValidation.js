export function testEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

export function emailValidation(email) {
    const errorElement = document.getElementById('emailError');
    if (testEmail(email)) {
        errorElement.style.display = 'none';
        return true;
    } else {
        errorElement.style.display = 'block';
        return false
    }
}