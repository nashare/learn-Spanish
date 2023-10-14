import { generateSections } from "../../../utils/categories.js";
import { shuffleArray } from "../../../utils/categories.js";
import { colors } from "../../../constants/words.js";

let wrongAnswersArr = JSON.parse(sessionStorage.getItem('colorTestWrongAnsw'))

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
        const reviewSection = generateSections("colors", wrongAnswersArr);
        completeHTML = `<p>Your result is ${wrongAnswNum}/10</p>
                            <p>Please review these words:</p>
                            ${reviewSection}
                            <a href="../test-1/test-1.html">
                                <button class="complete-button-practice">Practice</button>
                            </a>`
    }
    completeEl.innerHTML = completeHTML;
    const practiceButton = document.querySelector(".complete-button-practice");
    if (practiceButton) {
        practiceButton.addEventListener('click', function() {
            const arrForSessionStorage = shuffleArray(colors);
            sessionStorage.setItem('colors', JSON.stringify(arrForSessionStorage));
            sessionStorage.setItem('colorTestNum', '1');
            sessionStorage.setItem('colorTestWrongAnsw', JSON.stringify([]));
        })
    }
});