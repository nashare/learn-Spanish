import { callbackForResult, callbackForResultButton } from "../../../utils/callbackForResult.js"

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