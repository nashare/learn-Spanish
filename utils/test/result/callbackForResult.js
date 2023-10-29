import { playSound } from '../../playSound.js';
import { normalizeString } from './normalizeString.js';
import { createResultContent } from './createResultContent.js';

export function checkAnswer(userAnswer, testAnswer) {
    return normalizeString(userAnswer) === normalizeString(testAnswer);
}

export function callbackForResult(category) {

    const storedTestContent = sessionStorage.getItem(`${category}TestForResult`);
    if (!storedTestContent) return;

    const userAnswer = sessionStorage.getItem(`${category}TestUserValue`);
    const testNum = parseInt(sessionStorage.getItem(`${category}TestNum`));
    const wordsArrForTest = JSON.parse(sessionStorage.getItem(category));

    const isAnswerCorrect = checkAnswer(userAnswer, wordsArrForTest[testNum - 1]);
    createResultContent(isAnswerCorrect, userAnswer, testNum, wordsArrForTest, storedTestContent, category);

    playSound('.test-result');
};