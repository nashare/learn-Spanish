import { createGuessesArr, createTestHTML } from "../../../utils/test.js"

const fruitsForTest = JSON.parse(sessionStorage.fruits);
const testNum = parseInt(sessionStorage.fruitTestNum);
const arrayForGuesses = createGuessesArr(fruitsForTest, testNum);
let currentlySelected = null;

document.addEventListener('DOMContentLoaded', function () {

    const testHTML = createTestHTML("fruits", fruitsForTest[testNum - 1], arrayForGuesses);
    sessionStorage.setItem('fruitsTestHTML', testHTML);

    document.querySelector('.test').innerHTML = testHTML;

    const audioElement = document.getElementById(fruitsForTest[testNum - 1] + '_audio');
    const playButton = document.getElementById(fruitsForTest[testNum - 1]);

    if (playButton) {
        playButton.addEventListener('click', function () {
            audioElement.play();
        });
    }

    document.querySelectorAll('.image-wrapper').forEach(wrapper => {
        wrapper.addEventListener('click', function () {
            if (currentlySelected) {
                currentlySelected.setAttribute('data-selected', 'false');
            }
            this.setAttribute('data-selected', 'true');
            currentlySelected = this;
        });
    });

    const radios = document.querySelectorAll('input[type="radio"]');
    const checkButton = document.querySelector('.test-check');

    radios.forEach(radio => {
        radio.addEventListener('change', function () {
            checkButton.disabled = false;
        });
    });

    const inputField = document.querySelector('.test-container input[type="text"]');

    if (inputField) {
        inputField.addEventListener('input', function () {
            if (this.value.trim() !== "") {
                checkButton.disabled = false;
            } else {
                checkButton.disabled = true;
            }
        });
    }

});

