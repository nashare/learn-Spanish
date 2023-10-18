import { callbackForResult } from "../../../utils/callbackForResult.js";
import { loggedInCheck } from "../../../utils/loggedInCheck.js";

loggedInCheck();

document.addEventListener('DOMContentLoaded', callbackForResult("animals"));

document.querySelector('.test-result-button').addEventListener('click', function () {
    let testNum = parseInt(sessionStorage.animalsTestNum);
    testNum++;
    if (testNum === 11) {
        window.location.href = `/categories/animals/test/complete.html`;
    } else {
        sessionStorage.setItem('animalsTestNum', testNum);
        window.location.href = `/categories/animals/test-${testNum}/test-${testNum}.html`;
    }
});

const logOut = document.getElementById("log-out");

logOut.addEventListener('click', function () {
    sessionStorage.setItem('loggedIn', 'false');
});