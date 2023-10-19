export function logOut() {
    const logOut = document.getElementById("log-out");
    if (logOut) {
        logOut.addEventListener('click', function () {
            sessionStorage.setItem('loggedIn', 'false');
        });
    }
}