import { categoryCreate } from '../../category/categoryCreate.js';
import { completeCorrect } from '../../../components/main/test/complete/completeCorrect.js';
import { completeWrong } from '../../../components/main/test/complete/completeWrong.js';
import { checkAndUpdateUser } from './checkAndUpdateUser.js';
import { words } from '../../../constants/words.js';

export function callbackForComplete(category) {

    let wrongAnswersArr = JSON.parse(sessionStorage.getItem(`${category}TestWrongAnsw`))

    if (wrongAnswersArr.length === 0) {
        const userId = sessionStorage.getItem('userID');
        checkAndUpdateUser(userId, category);
        document.querySelector('.test-complete').innerHTML = completeCorrect;
    } else {
        const wrongAnswNum = 10 - wrongAnswersArr.length;
        const reviewSection = categoryCreate(category, wrongAnswersArr);
        document.querySelector('.test-complete').innerHTML = completeWrong(wrongAnswNum, reviewSection);
        document.querySelector('.complete-button-practice').addEventListener('click', function () {
            const shuffledArrayForPractice = chance.shuffle(words[category]);
            sessionStorage.setItem(category, JSON.stringify(shuffledArrayForPractice));
            sessionStorage.setItem(`${category}TestNum`, '1');
            sessionStorage.setItem(`${category}TestUserValue`, '');
            sessionStorage.setItem(`${category}TestWrongAnsw`, JSON.stringify([]));
        })
    }
}