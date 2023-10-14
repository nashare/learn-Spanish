import { createGuessesArr, createTestHTML } from "../../../utils/testGeneration.js"

const animalsForTest = JSON.parse(sessionStorage.animals);
const testNum = parseInt(sessionStorage.animalTestNum);
const arrayForGuesses = createGuessesArr(animalsForTest, testNum-1);
let currentlySelected = null;

document.addEventListener('DOMContentLoaded', function () {

    let testHTML = createTestHTML("animals", animalsForTest[testNum-1], arrayForGuesses);
    sessionStorage.setItem('animalsTestHTML', testHTML);
    testHTML = `<p class="test-number">${testNum} / 10</p>` + testHTML;
    document.querySelector('.test').innerHTML = testHTML;

    const audioElement = document.getElementById(animalsForTest[testNum-1] + '_audio');
    const playButton = document.getElementById(animalsForTest[testNum-1]);

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
    };

    const checkButton = document.querySelector('.test-check');

    checkButton.addEventListener('click', function () {
        const selectedRadio = document.querySelector('input[type="radio"]:checked');
        if (selectedRadio) {
            sessionStorage.setItem('testUserValue', String(selectedRadio.value));
        }
        const inputField = document.querySelector('.test-container input[type="text"]');
        if (inputField) {
            sessionStorage.setItem('testUserValue', String(inputField.value.trim()));
        }

    });
});

