import { generateSections, shuffleArray } from "./categoryCreate.js";

async function checkAndUpdateUser(userId, categoryToAdd) {
    try {
        let response = await fetch(`http://localhost:3000/users/${userId}`);
        let user = await response.json();

        if (!user.categories.includes(categoryToAdd)) {
            user.categories.push(categoryToAdd);

            response = await fetch(`http://localhost:3000/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export function callbackForComplete(category) {
    let wrongAnswersArr = JSON.parse(sessionStorage.getItem(`${category}TestWrongAnsw`))
    const completeEl = document.querySelector('.test-complete');
    let completeHTML = "";
    if (wrongAnswersArr.length === 0) {
        completeHTML = `<p>Your result is 10/10. Great job!</p>
                        <a href="../../categories.html">
                        <button>Keep learning</button>
                        </a>`;
        const userId = sessionStorage.getItem("userID");
        checkAndUpdateUser(userId, category);
    } else {
        const wrongAnswNum = 10 - wrongAnswersArr.length;
        const reviewSection = generateSections(category, wrongAnswersArr);
        const wrongNumbSentencePart = wrongAnswNum === 1 ? "the word" : "these words";
        completeHTML = `<p>Your result is ${wrongAnswNum}/10</p>
                            <p>Please review ${wrongNumbSentencePart}:</p>
                            ${reviewSection}
                            <a href="../test-1/test-1.html">
                                <button class="complete-button-practice">Practice</button>
                            </a>`;
        
    }
    completeEl.innerHTML = completeHTML;
    const practiceButton = document.querySelector(".complete-button-practice");
    if (practiceButton) {
        practiceButton.addEventListener('click', function () {
            const currentArray = JSON.parse(sessionStorage.getItem(category));;
            const shuffledArrayForPractice = shuffleArray(currentArray);
            sessionStorage.setItem(category, JSON.stringify(shuffledArrayForPractice));
            sessionStorage.setItem(`${category}TestNum`, '1');
            sessionStorage.setItem(`${category}TestUserValue`, '');
            sessionStorage.setItem(`${category}TestWrongAnsw`, JSON.stringify([]));
        })
    }
}