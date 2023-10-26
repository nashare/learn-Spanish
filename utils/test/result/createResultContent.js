import { resultCorrect } from '../../../components/main/test/result/resultCorrect.js';
import { resultWrong } from '../../../components/main/test/result/resultWrong.js';

export function createResultContent(isAnswerCorrect, userAnswer, testNum, wordsArrForTest, storedTestContent, category) {

    const testResultDiv = document.querySelector('.test-result');

    const getElementByIdFromTestGuesses = (id, testGuesses) => testGuesses.querySelector(`#${id}`);
    const addClassToElement = (element, className) => element.classList.add(className);

    let content = isAnswerCorrect ? resultCorrect : resultWrong;
    content += storedTestContent;

    testResultDiv.innerHTML += content;
    const testContainer = document.querySelector('.test-container');
    const testGuesses = document.querySelector('.test-guesses');

    if (isAnswerCorrect) {
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

}