export function callbackForResult(category) {
    const userAnswer = sessionStorage.getItem(`${category}TestUserValue`);
    let testNum = parseInt(sessionStorage.getItem(`${category}TestNum`));
    const wordsArrForTest = JSON.parse(sessionStorage.getItem(category));
    let storedTestContent = sessionStorage.getItem(`${category}TestForResult`);
    if (storedTestContent) {
        const testResultDiv = document.querySelector('.test-result');
        function normalizeString(str) {
            return str
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase();
        };
        if (normalizeString(userAnswer) === normalizeString(wordsArrForTest[testNum - 1])) {
            storedTestContent = "<p class='result-p-green'>Correct!</p>" + storedTestContent;
            testResultDiv.innerHTML = storedTestContent;
            const testContainer = document.querySelector('.test-container');
            const testGuesses = document.querySelector('.test-guesses');
            if (testContainer.classList.contains('type-4')) {
                testResultDiv.innerHTML += `<p class='result-p-green'>${wordsArrForTest[testNum - 1]}</p>`;
            } else if (testContainer.classList.contains('type-1') || testContainer.classList.contains('type-2')) {
                const correctImage = testGuesses.querySelector(`#${wordsArrForTest[testNum - 1]}`);
                correctImage.classList.add('result-img-green');
            } else {
                const correctRadioInput = testGuesses.querySelector(`#${wordsArrForTest[testNum - 1]}`);
                correctRadioInput.classList.add('result-p-green');
            }
        } else {
            let wrongAnswersArr = JSON.parse(sessionStorage.getItem(`${category}TestWrongAnsw`)) || [];
            wrongAnswersArr.push(wordsArrForTest[testNum - 1]);
            sessionStorage.setItem(`${category}TestWrongAnsw`, JSON.stringify(wrongAnswersArr));
            storedTestContent = "<p class='result-p-wrong'>Oops! That was not correct.</p>" + storedTestContent;
            testResultDiv.innerHTML = storedTestContent;
            const testContainer = document.querySelector('.test-container');
            const testGuesses = document.querySelector('.test-guesses');
            if (testContainer.classList.contains('type-4')) {
                testResultDiv.innerHTML += `
                    <p class='result-p-red'>${userAnswer}</p>
                    <p class='result-p-green'>${wordsArrForTest[testNum - 1]}</p>`;
            } else if (testContainer.classList.contains('type-1') || testContainer.classList.contains('type-2')) {
                const correctImage = testGuesses.querySelector(`#${wordsArrForTest[testNum - 1]}`);
                const wrongImage = testGuesses.querySelector(`#${userAnswer}`);
                correctImage.classList.add('result-img-green');
                wrongImage.classList.add('result-img-red');
            } else {
                const correctRadioInput = testGuesses.querySelector(`#${wordsArrForTest[testNum - 1]}`);
                const wrongRadioInput = testGuesses.querySelector(`#${userAnswer}`);
                correctRadioInput.classList.add('result-p-green');
                wrongRadioInput.classList.add('result-p-red');
            }
        }
        const playButton = document.querySelector(`button#${wordsArrForTest[testNum - 1]}`);
        if (playButton) {
            const audioElement = document.getElementById(wordsArrForTest[testNum - 1] + '_audio');
            playButton.addEventListener('click', function () {
                audioElement.play();
            });
        }
    }
};