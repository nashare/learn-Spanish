import { createGuessesArr, createTestHTML } from "../../../utils/test.js"

const fruitsForTest = JSON.parse(sessionStorage.fruits)
const arrayForGuesses = createGuessesArr(fruitsForTest, 0);
let currentlySelected = null;

document.addEventListener('DOMContentLoaded', function () {
    const testHTML = createTestHTML("fruits", fruitsForTest[0], arrayForGuesses);
    document.querySelector('.test').innerHTML = testHTML;

    document.querySelectorAll('.image-wrapper').forEach(wrapper => {
        wrapper.addEventListener('click', function () {
            if (currentlySelected) {
                currentlySelected.setAttribute('data-selected', 'false');
            }
            this.setAttribute('data-selected', 'true');
            currentlySelected = this;
        });
    });


    document.querySelector('.test-container').addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            let audio = document.getElementById(event.target.id + '_audio');
            audio.play();
        }
    });
});

