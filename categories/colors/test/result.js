import { normalizeString } from "../../../utils/diacriticRemove.js"

const userAnswer = sessionStorage.getItem('testUserValue');
let testNum = parseInt(sessionStorage.colorTestNum);
const colorsForTest = JSON.parse(sessionStorage.colors);

document.addEventListener('DOMContentLoaded', function () {
    let storedHtmlContent = sessionStorage.getItem('colorsTestHTML');
    if (storedHtmlContent) {
        const resultDiv = document.querySelector('.test-result');
        if (normalizeString(userAnswer) === normalizeString(colorsForTest[testNum-1])) {
            storedHtmlContent += "<p>Correct</p>";
        } else {
            let wrongAnswersArr = JSON.parse(sessionStorage.getItem('colorTestWrongAnsw')) || [];
            wrongAnswersArr.push(colorsForTest[testNum - 1]);
            sessionStorage.setItem('colorTestWrongAnsw', JSON.stringify(wrongAnswersArr));
            storedHtmlContent += "<p>Wrong</p>";
        }
        resultDiv.innerHTML = storedHtmlContent;
    }
});

document.querySelector('.test-result-button').addEventListener('click', function () {
    testNum++;
    if (testNum === 11) {
        window.location.href = `/categories/colors/test/complete.html`;
    } else {
        sessionStorage.setItem('colorTestNum', String(testNum));
        window.location.href = `/categories/colors/test-${testNum}/test-${testNum}.html`;
    }
});