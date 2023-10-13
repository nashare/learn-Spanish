import { createGuessesArr, createTestHTML } from "../../test";

const animalsForTest = JSON.parse(sessionStorage.animals)
const arrayForGuesses = createGuessesArr(animalsForTest, 0);

document.addEventListener('DOMContentLoaded', function () {
    const testHTML = createTestHTML("animals", animalsForTest[0], arrayForGuesses);
    document.querySelector('.test').innerHTML = testHTML;

    document.querySelector('.test-container').addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            let audio = document.getElementById(event.target.id + '_audio');
            audio.play();
        }
    });
});

