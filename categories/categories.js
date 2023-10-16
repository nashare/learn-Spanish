const loggedIn = sessionStorage.getItem('loggedIn');

if (!loggedIn) {
    sessionStorage.setItem('loggedIn', 'false');
    window.location.href = '../logIn.html';
}
if (loggedIn === 'false') {
    window.location.href = '../logIn.html';
}

const logOut = document.getElementById("log-out");

logOut.addEventListener('click', function () {
    sessionStorage.setItem('loggedIn', 'false');
    window.location.href = '../logIn.html';
});
