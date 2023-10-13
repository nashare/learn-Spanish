import { createGuessesArr, createTestHTML } from "../../../utils/test.js"

const animalsForTest = JSON.parse(sessionStorage.animals)
const arrayForGuesses = createGuessesArr(animalsForTest, 1);

document.addEventListener('DOMContentLoaded', function () {
    const testHTML = createTestHTML("animals", animalsForTest[1], arrayForGuesses);
    document.querySelector('.test').innerHTML = testHTML;

    document.querySelector('.test-container').addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            let audio = document.getElementById(event.target.id + '_audio');
            audio.play();
        }
    });
});

