import { createGuessesArr, createTestHTML } from "./testCreate.js"

export function callbackForTest(category) {
    const wordsForTest = JSON.parse(sessionStorage.getItem(category));
    const testNum = parseInt(sessionStorage.getItem(`${category}TestNum`));
    const arrayForGuesses = createGuessesArr(wordsForTest, testNum - 1);
    let testHTML = createTestHTML(category, wordsForTest[testNum - 1], arrayForGuesses);

    let currentlySelected = null;
    testHTML = `<p class="test-number">${testNum} / 10</p>` + testHTML;
    document.querySelector('.test').innerHTML += testHTML;

    const audioElement = document.getElementById(wordsForTest[testNum - 1] + '_audio');
    const playButton = document.getElementById(wordsForTest[testNum - 1]);

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
            sessionStorage.setItem(`${category}TestUserValue`, String(selectedRadio.value));
        }
        const inputField = document.querySelector('.test-container input[type="text"]');
        if (inputField) {
            sessionStorage.setItem(`${category}TestUserValue`, String(inputField.value.trim()));
        }
        window.location.href = `/categories/${category}/test/result.html`;

    });
}