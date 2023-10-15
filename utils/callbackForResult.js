import { normalizeString } from "./diacriticRemove.js";

export function callbackForResult(category) {
    const userAnswer = sessionStorage.getItem(`${category}TestUserValue`);
    let testNum = parseInt(sessionStorage.getItem(`${category}TestNum`));
    const categoryForTest = JSON.parse(sessionStorage.getItem(category));
    let storedHtmlContent = sessionStorage.getItem(`${category}TestForResult`);
    if (storedHtmlContent) {
        const resultDiv = document.querySelector('.test-result');
        if (normalizeString(userAnswer) === normalizeString(categoryForTest[testNum - 1])) {
            storedHtmlContent = "<p>Correct!</p>" + storedHtmlContent;
            resultDiv.innerHTML = storedHtmlContent;
            const testContainer = document.querySelector('.test-container');
            const testGuesses = document.querySelector('.test-guesses');
            if (testContainer.classList.contains('type-4')) {
                resultDiv.innerHTML += `<p class='result-p-green'>${categoryForTest[testNum - 1]}</p>`;
            } else if (testContainer.classList.contains('type-1') || testContainer.classList.contains('type-2')) {
                const correctImage = testGuesses.querySelector(`#${categoryForTest[testNum - 1]}`);
                correctImage.classList.add('result-img-green');
            } else {
                const correctRadioInput = testGuesses.querySelector(`#${categoryForTest[testNum - 1]}`);
                correctRadioInput.classList.add('result-p-green');
            }
        } else {
            let wrongAnswersArr = JSON.parse(sessionStorage.getItem(`${category}TestWrongAnsw`)) || [];
            wrongAnswersArr.push(categoryForTest[testNum - 1]);
            sessionStorage.setItem(`${category}TestWrongAnsw`, JSON.stringify(wrongAnswersArr));
            storedHtmlContent = "<p>Wrong answer.</p>" + storedHtmlContent;
            resultDiv.innerHTML = storedHtmlContent;
            const testContainer = document.querySelector('.test-container');
            const testGuesses = document.querySelector('.test-guesses');
            if (testContainer.classList.contains('type-4')) {
                resultDiv.innerHTML += `
                    <p class='result-p-red'>${userAnswer}</p>
                    <p class='result-p-green'>${categoryForTest[testNum - 1]}</p>`;
            } else if (testContainer.classList.contains('type-1') || testContainer.classList.contains('type-2')) {
                const correctImage = testGuesses.querySelector(`#${categoryForTest[testNum - 1]}`);
                const wrongImage = testGuesses.querySelector(`#${userAnswer}`);
                correctImage.classList.add('result-img-green');
                wrongImage.classList.add('result-img-red');
            } else {
                const correctRadioInput = testGuesses.querySelector(`#${categoryForTest[testNum - 1]}`);
                const wrongRadioInput = testGuesses.querySelector(`#${userAnswer}`);
                correctRadioInput.classList.add('result-p-green');
                wrongRadioInput.classList.add('result-p-red');
            }
        }
    }
};

export function callbackForResultButton(category, testNum) {
    testNum++;
    console.log(parseInt(sessionStorage.getItem(`${category}TestNum`)));
    if (testNum === 11) {
        window.location.href = `/categories/${category}/test/complete.html`;
    } else {
        sessionStorage.setItem(`${category}TestNum`, testNum);
        window.location.href = `/categories/${category}/test-${testNum}/test-${testNum}.html`;
    }
}