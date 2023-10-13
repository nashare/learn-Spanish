import { createGuessesArr, createTestHTML } from "../../../utils/test.js"

const fruitsForTest = JSON.parse(sessionStorage.fruits)
const arrayForGuesses = createGuessesArr(fruitsForTest, 3);

document.addEventListener('DOMContentLoaded', function () {
    const testHTML = createTestHTML("fruits", fruitsForTest[3], arrayForGuesses);
    document.querySelector('.test').innerHTML = testHTML;

    document.querySelector('.test-container').addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            let audio = document.getElementById(event.target.id + '_audio');
            audio.play();
        }
    });
});

