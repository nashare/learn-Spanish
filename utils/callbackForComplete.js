import { generateSections, shuffleArray } from "./categories.js";

export function callbackForComplete(category) {
    let wrongAnswersArr = JSON.parse(sessionStorage.getItem(`${category}TestWrongAnsw`))
    const completeEl = document.querySelector('.test-complete');
    let completeHTML = "";
    if (wrongAnswersArr.length === 0) {
        completeHTML = `<p>Your result is 10/10</p>
                        <a href="../../categories.html">
                        <button>Keep learning</button>
                        </a>`
    } else {
        const wrongAnswNum = 10 - wrongAnswersArr.length;
        const reviewSection = generateSections(category, wrongAnswersArr);
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
        practiceButton.addEventListener('click', function () {
            const currentArray = JSON.parse(sessionStorage.getItem(category));;
            console.log(currentArray, "here");
            const arrForSessionStorage = shuffleArray(currentArray);
            sessionStorage.setItem(category, JSON.stringify(arrForSessionStorage));
            sessionStorage.setItem(`${category}TestNum`, '1');
            sessionStorage.setItem('testUserValue', '');
            sessionStorage.setItem(`${category}TestWrongAnsw`, JSON.stringify([]));
        })
    }
}