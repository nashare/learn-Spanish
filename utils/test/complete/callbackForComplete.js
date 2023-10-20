import { categoryCreate } from '../../category/categoryCreate.js';
import { shuffleArray } from '../../shuffleArr.js';
import { completeCorrect } from '../../../components/main/test/complete/completeCorrect.js';
import { completeWrong } from '../../../components/main/test/complete/completeWrong.js';
import { checkAndUpdateUser } from './checkAndUpdateUser.js';
import { words } from '../../../constants/words.js';

export function callbackForComplete(category) {

    let wrongAnswersArr = JSON.parse(sessionStorage.getItem(`${category}TestWrongAnsw`))
    let completeHTML = '';

    if (wrongAnswersArr.length === 0) {
        const userId = sessionStorage.getItem('userID');
        checkAndUpdateUser(userId, category);
        completeHTML = completeCorrect();
    } else {
        const wrongAnswNum = 10 - wrongAnswersArr.length;
        const reviewSection = categoryCreate(category, wrongAnswersArr);
        completeHTML = completeWrong(wrongAnswNum, reviewSection);
    }

    document.querySelector('.test-complete').innerHTML = completeHTML;

    const practiceButton = document.querySelector('.complete-button-practice');
    if (practiceButton) {
        practiceButton.addEventListener('click', function () {
            const shuffledArrayForPractice = shuffleArray(words[category]);
            sessionStorage.setItem(category, JSON.stringify(shuffledArrayForPractice));
            sessionStorage.setItem(`${category}TestNum`, '1');
            sessionStorage.setItem(`${category}TestUserValue`, '');
            sessionStorage.setItem(`${category}TestWrongAnsw`, JSON.stringify([]));
        })
    }
}