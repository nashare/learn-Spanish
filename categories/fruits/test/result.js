const userAnswer = sessionStorage.getItem('testUserValue');
let testNum = parseInt(sessionStorage.fruitTestNum);
const fruitsForTest = JSON.parse(sessionStorage.fruits);
console.log(userAnswer, fruitsForTest[testNum-1]);

document.addEventListener('DOMContentLoaded', function () {
    let storedHtmlContent = sessionStorage.getItem('fruitsTestHTML');
    if (storedHtmlContent) {
        const resultDiv = document.querySelector('.test-result');
        if (userAnswer == fruitsForTest[testNum-1]) {
            storedHtmlContent += "<p>Correct</p>";
        } else {
            let wrongAnswersArr = JSON.parse(sessionStorage.getItem('fruitTestWrongAnsw')) || [];
            wrongAnswersArr.push(fruitsForTest[testNum - 1]);
            sessionStorage.setItem('fruitTestWrongAnsw', JSON.stringify(wrongAnswersArr));
            storedHtmlContent += "<p>Wrong</p>";
        }
        resultDiv.innerHTML = storedHtmlContent;
    }
});

document.querySelector('.test-result-button').addEventListener('click', function () {
    testNum++;
    if (testNum === 11) {
        window.location.href = `/categories/fruits/test/complete.html`;
    } else {
        sessionStorage.setItem('fruitTestNum', String(testNum));
        window.location.href = `/categories/fruits/test-${testNum}/test-${testNum}.html`;
    }
});