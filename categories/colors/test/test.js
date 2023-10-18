import { callbackForTest } from "../../../utils/callbackForTest.js";
import { loggedInCheck } from "../../../utils/loggedInCheck.js";

loggedInCheck();

document.addEventListener('DOMContentLoaded', callbackForTest("colors"));

const logOut = document.getElementById("log-out");

logOut.addEventListener('click', function () {
    sessionStorage.setItem('loggedIn', 'false');
});