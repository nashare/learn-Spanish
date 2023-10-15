import { generateSections } from "../../../utils/categories.js";
import { shuffleArray } from "../../../utils/categories.js";
import { fruits } from "../../../constants/words.js";

let wrongAnswersArr = JSON.parse(sessionStorage.getItem('fruitTestWrongAnsw'))

document.addEventListener('DOMContentLoaded', function () { 
    const completeEl = document.querySelector('.test-complete');
    let completeHTML = "";
    if (wrongAnswersArr.length === 0) {
        completeHTML = `<p>Your result is 10/10</p>
                        <a href="../../categories.html">
                        <button>Keep learning</button>
                        </a>`
    } else {
        const wrongAnswNum = 10 - wrongAnswersArr.length;
        const reviewSection = generateSections("fruits", wrongAnswersArr);
        let wrongNumbSentPart;
        if (wrongAnswNum.length === 1) {
            wrongNumbSentPart = "the word"
        } else {
            wrongNumbSentPart = "these words"
        }
        completeHTML = `<p>Your result is ${wrongAnswNum}/10</p>
                            <p>Please review ${wrongNumbSentPart}:</p>
                            ${reviewSection}
                            <a href="../test-1/test-1.html">
                                <button class="complete-button-practice">Practice</button>
                            </a>`
    }
    completeEl.innerHTML = completeHTML;
    const practiceButton = document.querySelector(".complete-button-practice");
    if (practiceButton) {
        practiceButton.addEventListener('click', function() {
            const arrForSessionStorage = shuffleArray(fruits);
            sessionStorage.setItem('fruits', JSON.stringify(arrForSessionStorage));
            sessionStorage.setItem('fruitTestNum', '1');
            sessionStorage.setItem('testUserValue', '');
            sessionStorage.setItem('fruitTestWrongAnsw', JSON.stringify([]));
        })
    }
});