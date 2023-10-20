import { createGuessesArr, createTestHTML } from './testCreate.js'
import { textNumber } from '../../../components/main/test/test/testNumber.js';
import { playSound } from '../../playSound.js';

export function callbackForTest(category) {

    const wordsForTest = JSON.parse(sessionStorage.getItem(category));
    const testNum = parseInt(sessionStorage.getItem(`${category}TestNum`));
    const arrayForGuesses = createGuessesArr(wordsForTest, testNum - 1);

    document.querySelector('.test').innerHTML += textNumber(testNum);
    document.querySelector('.test').innerHTML += createTestHTML(category, wordsForTest[testNum - 1], arrayForGuesses);

    const radios = document.querySelectorAll('input[type='radio']');
    const inputField = document.querySelector('.test-container input[type='text']');
    const checkButton = document.querySelector('.test-check');

    if (radios) {
        radios.forEach(radio => {
            radio.addEventListener('change', function () {
                checkButton.disabled = false;
            });
        });
    }

    if (inputField) {
        inputField.addEventListener('input', function () {
            if (this.value.trim() !== '') {
                checkButton.disabled = false;
            } else {
                checkButton.disabled = true;
            }
        });
    };

    checkButton.addEventListener('click', function () {
        const selectedRadio = document.querySelector('input[type='radio']:checked');
        if (selectedRadio) {
            sessionStorage.setItem(`${category}TestUserValue`, String(selectedRadio.value));
        }
        if (inputField) {
            sessionStorage.setItem(`${category}TestUserValue`, String(inputField.value.trim()));
        }
        window.location.href = `/categories/${category}/test/result.html`;

    });

    playSound('.test-container');
}