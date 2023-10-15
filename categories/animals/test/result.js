import { normalizeString } from "../../../utils/diacriticRemove.js"

const userAnswer = sessionStorage.getItem('testUserValue');
let testNum = parseInt(sessionStorage.animalsTestNum);
const animalsForTest = JSON.parse(sessionStorage.animals);

document.addEventListener('DOMContentLoaded', function () {
    let storedHtmlContent = sessionStorage.getItem('animalsTestHTML');
    if (storedHtmlContent) {
        const resultDiv = document.querySelector('.test-result');
        if (normalizeString(userAnswer) === normalizeString(animalsForTest[testNum-1])) {
            storedHtmlContent += "<p>Correct</p>";
        } else {
            let wrongAnswersArr = JSON.parse(sessionStorage.getItem('animalsTestWrongAnsw')) || [];
            wrongAnswersArr.push(animalsForTest[testNum - 1]);
            sessionStorage.setItem('animalsTestWrongAnsw', JSON.stringify(wrongAnswersArr));
            storedHtmlContent += "<p>Wrong</p>";
        }
        resultDiv.innerHTML = storedHtmlContent;
    }
});

document.querySelector('.test-result-button').addEventListener('click', function () {
    testNum++;
    if (testNum === 11) {
        window.location.href = `/categories/animals/test/complete.html`;
    } else {
        sessionStorage.setItem('animalsTestNum', String(testNum));
        window.location.href = `/categories/animals/test-${testNum}/test-${testNum}.html`;
    }
});