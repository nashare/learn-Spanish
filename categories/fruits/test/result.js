import { normalizeString } from "../../../utils/diacriticRemove.js"

const userAnswer = sessionStorage.getItem('testUserValue');
let testNum = parseInt(sessionStorage.fruitTestNum);
const fruitsForTest = JSON.parse(sessionStorage.fruits);

document.addEventListener('DOMContentLoaded', function () {
    let storedHtmlContent = sessionStorage.fruitsTestForResult;
    if (storedHtmlContent) {
        const resultDiv = document.querySelector('.test-result');
        if (normalizeString(userAnswer) === normalizeString(fruitsForTest[testNum-1])) {
            storedHtmlContent = "<p>Correct!</p>" + storedHtmlContent;
            resultDiv.innerHTML = storedHtmlContent;
            const testContainer = document.querySelector('.test-container');
            const testGuesses = document.querySelector('.test-guesses');
            if (testContainer.classList.contains('type-4')) {
                resultDiv.innerHTML += `<p class='result-p-green'>${fruitsForTest[testNum-1]}</p>`;
            } else if (testContainer.classList.contains('type-1') || testContainer.classList.contains('type-2')) {
                const correctImage = testGuesses.querySelector(`#${fruitsForTest[testNum - 1]}`);
                correctImage.classList.add('result-img-green');
            } else {
                const correctRadioInput = testGuesses.querySelector(`#${fruitsForTest[testNum - 1]}`);
                correctRadioInput.classList.add('result-p-green');
            }
        } else {
            let wrongAnswersArr = JSON.parse(sessionStorage.getItem('fruitTestWrongAnsw')) || [];
            wrongAnswersArr.push(fruitsForTest[testNum - 1]);
            sessionStorage.setItem('fruitTestWrongAnsw', JSON.stringify(wrongAnswersArr));
            storedHtmlContent = "<p>Wrong answer.</p>" + storedHtmlContent;
            resultDiv.innerHTML = storedHtmlContent;
            const testContainer = document.querySelector('.test-container');
            const testGuesses = document.querySelector('.test-guesses');
            if (testContainer.classList.contains('type-4')) {
                resultDiv.innerHTML += `
                    <p class='result-p-red'>${userAnswer}</p>
                    <p class='result-p-green'>${fruitsForTest[testNum - 1]}</p>`;
            } else if (testContainer.classList.contains('type-1') || testContainer.classList.contains('type-2')) {
                const correctImage = testGuesses.querySelector(`#${fruitsForTest[testNum - 1]}`);
                const wrongImage = testGuesses.querySelector(`#${userAnswer}`);
                correctImage.classList.add('result-img-green');
                wrongImage.classList.add('result-img-red');
            } else {
                const correctRadioInput = testGuesses.querySelector(`#${fruitsForTest[testNum - 1]}`);
                const wrongRadioInput = testGuesses.querySelector(`#${userAnswer}`);
                correctRadioInput.classList.add('result-p-green');
                wrongRadioInput.classList.add('result-p-red');
            }
        }
    }
});

document.querySelector('.test-result-button').addEventListener('click', function () {
    testNum++;
    if (testNum === 11) {
        window.location.href = `/categories/fruits/test/complete.html`;
    } else {
        sessionStorage.setItem('fruitTestNum', String(testNum));
        window.location.href = `/categories/fruits/test-${testNum}/test-${testNum}.html`;
    }
});