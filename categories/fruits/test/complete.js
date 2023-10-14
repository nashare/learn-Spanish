import { generateSections } from "../../../utils/categories.js"

let wrongAnswersArr = JSON.parse(sessionStorage.getItem('fruitTestWrongAnsw'))

document.addEventListener('DOMContentLoaded', function () { 
    const completeEl = document.querySelector('.test-complete');
    let completeHTML = "";
    if (wrongAnswersArr.length === 0) {
        completeHTML = "<p>Your result is 10/10</p><button>Keep learning</button>"
    } else {
        const wrongAnswNum = 10 - wrongAnswersArr.length;
        const reviewSection = generateSections("fruits", wrongAnswersArr);
        completeHTML = `<p>Your result is ${wrongAnswNum}/10</p>
                            <p>Please review these words:</p>
                            ${reviewSection}
                            <button class="complete-button-practice">Practice</button>`
    }
    completeEl.innerHTML = completeHTML;
});