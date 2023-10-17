import { callbackForComplete } from "../../../utils/callbackForComplete.js";
import { loggedInCheck } from "../../../utils/loggedInCheck.js";

loggedInCheck();

document.addEventListener('DOMContentLoaded', callbackForComplete("colors"));

const logOut = document.getElementById("log-out");

logOut.addEventListener('click', function () {
    sessionStorage.setItem('loggedIn', 'false');
    window.location.href = '../../..logIn.html';
});