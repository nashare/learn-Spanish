import { callbackForResult } from "../../../utils/callbackForResult.js";

const loggedIn = sessionStorage.getItem('loggedIn');

if (!loggedIn) {
    sessionStorage.setItem('loggedIn', 'false');
    window.location.href = '../../../logIn.html';
}
if (loggedIn === 'false') {
    window.location.href = '../../../logIn.html';
}

document.addEventListener('DOMContentLoaded', callbackForResult("fruits"));

document.querySelector('.test-result-button').addEventListener('click', function () {
    let testNum = parseInt(sessionStorage.fruitsTestNum);
    testNum++;
    if (testNum === 11) {
        window.location.href = `/categories/fruits/test/complete.html`;
    } else {
        sessionStorage.setItem('fruitsTestNum', testNum);
        window.location.href = `/categories/fruits/test-${testNum}/test-${testNum}.html`;
    }
});

const logOut = document.getElementById("log-out");

logOut.addEventListener('click', function () {
    sessionStorage.setItem('loggedIn', 'false');
    window.location.href = '../../..logIn.html';
});