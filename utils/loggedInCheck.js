export function loggedInCheck() {
    const loggedIn = sessionStorage.getItem('loggedIn');

    if (!loggedIn || loggedIn === 'false') {
        const baseUrl = window.location.protocol + "//" + window.location.host;
        sessionStorage.setItem('loggedIn', 'false');
        window.location.href = baseUrl + '/logIn.html';
    }
}