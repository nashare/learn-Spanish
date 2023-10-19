export function loggedInCheck() {
    const loggedIn = sessionStorage.getItem('loggedIn');

    if (!loggedIn) {
        sessionStorage.setItem('loggedIn', 'false');
        window.location.href = '/logIn.html';
    } else if (loggedIn === 'false') {
        window.location.href = '/logIn.html';
    }
}