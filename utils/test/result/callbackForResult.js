import { resultCorrect } from "../../../components/main/test/result/resultCorrect.js";
import { resultWrong } from "../../../components/main/test/result/resultWrong.js";
import { playSound } from "../../playSound.js";
import { normalizeString } from "./normalizeString.js";

export function callbackForResult(category) {

    const userAnswer = sessionStorage.getItem(`${category}TestUserValue`);
    const testNum = parseInt(sessionStorage.getItem(`${category}TestNum`));
    const wordsArrForTest = JSON.parse(sessionStorage.getItem(category));
    const storedTestContent = sessionStorage.getItem(`${category}TestForResult`);

    if (!storedTestContent) return;

    const testResultDiv = document.querySelector('.test-result');

    const isAnswerCorrect = normalizeString(userAnswer) === normalizeString(wordsArrForTest[testNum - 1]);

    const getElementByIdFromTestGuesses = (id, testGuesses) => testGuesses.querySelector(`#${id}`);
    const addClassToElement = (element, className) => element.classList.add(className);

    if (isAnswerCorrect) {

        testResultDiv.innerHTML += resultCorrect();
        testResultDiv.innerHTML += storedTestContent;
        const testContainer = document.querySelector('.test-container');
        const testGuesses = document.querySelector('.test-guesses');

        if (testContainer.classList.contains('type-4')) {
            testResultDiv.innerHTML += `<p class='result-p-green'>${wordsArrForTest[testNum - 1]}</p>`;
        } else if (testContainer.classList.contains('type-1') || testContainer.classList.contains('type-2')) {
            addClassToElement(getElementByIdFromTestGuesses(wordsArrForTest[testNum - 1], testGuesses), 'result-img-green');
        } else {
            addClassToElement(getElementByIdFromTestGuesses(wordsArrForTest[testNum - 1], testGuesses), 'result-p-green');
        }

    } else {
        let wrongAnswersArr = JSON.parse(sessionStorage.getItem(`${category}TestWrongAnsw`)) || [];
        wrongAnswersArr.push(wordsArrForTest[testNum - 1]);
        sessionStorage.setItem(`${category}TestWrongAnsw`, JSON.stringify(wrongAnswersArr));

        testResultDiv.innerHTML += resultWrong();
        testResultDiv.innerHTML += storedTestContent;
        const testContainer = document.querySelector('.test-container');
        const testGuesses = document.querySelector('.test-guesses');

        if (testContainer.classList.contains('type-4')) {
            testResultDiv.innerHTML += `
                <p class='result-p-red'>${userAnswer}</p>
                <p class='result-p-green'>${wordsArrForTest[testNum - 1]}</p>`;
        } else if (testContainer.classList.contains('type-1') || testContainer.classList.contains('type-2')) {
            addClassToElement(getElementByIdFromTestGuesses(userAnswer, testGuesses), 'result-img-red');
            addClassToElement(getElementByIdFromTestGuesses(wordsArrForTest[testNum - 1], testGuesses), 'result-img-green');
        } else {
            addClassToElement(getElementByIdFromTestGuesses(userAnswer, testGuesses), 'result-p-red');
            addClassToElement(getElementByIdFromTestGuesses(wordsArrForTest[testNum - 1], testGuesses), 'result-p-green');
        }
    }
    playSound('.test-result');
};