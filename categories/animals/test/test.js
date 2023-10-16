import { callbackForTest } from "../../../utils/callbackForTest.js";

const loggedIn = sessionStorage.getItem('loggedIn');

if (!loggedIn) {
    sessionStorage.setItem('loggedIn', 'false');
    window.location.href = '../../../logIn.html';
}
if (loggedIn === 'false') {
    window.location.href = '../../../logIn.html';
}

document.addEventListener('DOMContentLoaded', callbackForTest("animals"));

const logOut = document.getElementById("log-out");

logOut.addEventListener('click', function () {
    sessionStorage.setItem('loggedIn', 'false');
    window.location.href = '../../..logIn.html';
});