import { createGuessesArr, createTestHTML } from "../../../utils/test.js"

const colorsForTest = JSON.parse(sessionStorage.colors)
const arrayForGuesses = createGuessesArr(colorsForTest, 2);

document.addEventListener('DOMContentLoaded', function () {
    const testHTML = createTestHTML("colors", colorsForTest[2], arrayForGuesses);
    document.querySelector('.test').innerHTML = testHTML;

    document.querySelector('.test-container').addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            let audio = document.getElementById(event.target.id + '_audio');
            audio.play();
        }
    });
});