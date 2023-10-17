import { callbackForResult } from "../../../utils/callbackForResult.js";
import { loggedInCheck } from "../../../utils/loggedInCheck.js";

loggedInCheck();

document.addEventListener('DOMContentLoaded', callbackForResult("colors"));

document.querySelector('.test-result-button').addEventListener('click', function () {
    let testNum = parseInt(sessionStorage.colorsTestNum);
    testNum++;
    if (testNum === 11) {
        window.location.href = `/categories/colors/test/complete.html`;
    } else {
        sessionStorage.setItem('colorsTestNum', testNum);
        window.location.href = `/categories/colors/test-${testNum}/test-${testNum}.html`;
    }
});

const logOut = document.getElementById("log-out");

logOut.addEventListener('click', function () {
    sessionStorage.setItem('loggedIn', 'false');
    window.location.href = '../../..logIn.html';
});