import { shuffleArray } from "./categories.js";

function excludeByIndex(arr, index) {
    return arr.slice(0, index).concat(arr.slice(index + 1));
}

function createGuessesArr(arr, ind) {
    const arrayWithoutTestWord = excludeByIndex(arr, ind);
    return shuffleArray(arrayWithoutTestWord).slice(0, 3);

}

function wordAndImages(categoryName, word, arr) {
    const allWords = [...arr];
    allWords.push(word);
    const allColorsImgsShuffled = shuffleArray(allWords);
    const sectionsHTML = `
            <section class="test-container">
                <p class="test-word">${word}</p>
                <div class="test-guesses">
                    <img src="../../../content/${categoryName}/${allColorsImgsShuffled[0]}/${allColorsImgsShuffled[0]}.jpg">
                    <img src="../../../content/${categoryName}/${allColorsImgsShuffled[1]}/${allColorsImgsShuffled[1]}.jpg">
                    <img src="../../../content/${categoryName}/${allColorsImgsShuffled[2]}/${allColorsImgsShuffled[2]}.jpg">
                    <img src="../../../content/${categoryName}/${allColorsImgsShuffled[3]}/${allColorsImgsShuffled[3]}.jpg">
                </div>
            </section>`;
    return sectionsHTML;
}

function soundAndImages(categoryName, word, arr) {
    const allWords = [...arr];
    allWords.push(word);
    const allColorsImgsShuffled = shuffleArray(allWords);
    const sectionsHTML = `
            <section class="test-container">
                <audio id="${word}_audio">
                    <source src="../../../content/${categoryName}/${word}/${word}.mp3" type="audio/mp3">
                </audio>
                <button id="${word}">Play</button>
                <div class="test-guesses">
                    <img src="../../../content/${categoryName}/${allColorsImgsShuffled[0]}/${allColorsImgsShuffled[0]}.jpg">
                    <img src="../../../content/${categoryName}/${allColorsImgsShuffled[1]}/${allColorsImgsShuffled[1]}.jpg">
                    <img src="../../../content/${categoryName}/${allColorsImgsShuffled[2]}/${allColorsImgsShuffled[2]}.jpg">
                    <img src="../../../content/${categoryName}/${allColorsImgsShuffled[3]}/${allColorsImgsShuffled[3]}.jpg">
                </div>
            </section>`;
    return sectionsHTML;
}

function imageAndTexts(categoryName, word, arr) {
    const allWords = [...arr];
    allWords.push(word);
    const allColorsImgsShuffled = shuffleArray(allWords);
    const sectionsHTML = `
            <section class="test-container">
                 <img src="../../../content/${categoryName}/${word}/${word}.jpg">
                <div class="test-guesses">
                    <p>${allColorsImgsShuffled[0]}</p>
                    <p>${allColorsImgsShuffled[1]}</p>
                    <p>${allColorsImgsShuffled[2]}</p>
                    <p>${allColorsImgsShuffled[3]}</p>
                </div>
            </section>`;
    return sectionsHTML;
}

function imageAndInput(categoryName, word) {
    const sectionsHTML = `
            <section class="test-container">
                <img src="../../../content/${categoryName}/${word}/${word}.jpg">
                <input>
            </section>`;
    return sectionsHTML;
}

function randomBetweenOneAndFour() {
    return Math.floor(Math.random() * 4) + 1;
}

function createTestHTML(category, word, arrayForGuesses) {
    const testType = randomBetweenOneAndFour();
    switch (testType) {
        case 1:
            return wordAndImages(category, word, arrayForGuesses);
            break;
        case 2:
            return soundAndImages(category, word, arrayForGuesses);
            break;
        case 3:
            return imageAndTexts(category, word, arrayForGuesses);
            break;
        case 4:
            return imageAndInput(category, word);
            break;
        default:
            console.log("Invalid number!");
            break;
    }
}

export {
    createGuessesArr,
    createTestHTML
};