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
    const allImgsShuffled = shuffleArray(allWords);
    const sectionHTMLforStorage = `
            <section class="test-container type-1">
                <p class="test-word">${word}</p>
                <div class="test-guesses">
                    <img id=${allImgsShuffled[0]} src="../../../content/${categoryName}/${allImgsShuffled[0]}/${allImgsShuffled[0]}.jpg">
                    <img id=${allImgsShuffled[1]} src="../../../content/${categoryName}/${allImgsShuffled[1]}/${allImgsShuffled[1]}.jpg">
                    <img id=${allImgsShuffled[2]} src="../../../content/${categoryName}/${allImgsShuffled[2]}/${allImgsShuffled[2]}.jpg">
                    <img id=${allImgsShuffled[3]} src="../../../content/${categoryName}/${allImgsShuffled[3]}/${allImgsShuffled[3]}.jpg">
                </div>              
            </section>`;
    sessionStorage.setItem(`${categoryName}TestForResult`, sectionHTMLforStorage);
    const sectionsHTML = `
            <section class="test-container">
                <p class="test-word">${word}</p>
                <div class="test-guesses">
                    <label class="image-label">
                        <input type="radio" name="imageChoice" class="hidden-radio" value="${allImgsShuffled[0]}">
                        <img src="../../../content/${categoryName}/${allImgsShuffled[0]}/${allImgsShuffled[0]}.jpg">
                    </label>
                    <label class="image-label">
                        <input type="radio" name="imageChoice" class="hidden-radio" value="${allImgsShuffled[1]}">
                        <img src="../../../content/${categoryName}/${allImgsShuffled[1]}/${allImgsShuffled[1]}.jpg">
                    </label>
                    <label class="image-label">
                        <input type="radio" name="imageChoice" class="hidden-radio" value="${allImgsShuffled[2]}">
                        <img src="../../../content/${categoryName}/${allImgsShuffled[2]}/${allImgsShuffled[2]}.jpg">
                    </label>
                    <label class="image-label">
                        <input type="radio" name="imageChoice" class="hidden-radio" value="${allImgsShuffled[3]}">
                        <img src="../../../content/${categoryName}/${allImgsShuffled[3]}/${allImgsShuffled[3]}.jpg">
                    </label>
                </div>              
            </section>`;
    return sectionsHTML;
}

function soundAndImages(categoryName, word, arr) {
    const allWords = [...arr];
    allWords.push(word);
    const allImgsShuffled = shuffleArray(allWords);
    const sectionHTMLforStorage = `
            <section class="test-container type-2">
                <audio id="${word}_audio">
                    <source src="../../../content/${categoryName}/${word}/${word}.mp3" type="audio/mp3">
                </audio>
                <button id="${word}">Play</button>
                <div class="test-guesses">
                    <img id=${allImgsShuffled[0]} src="../../../content/${categoryName}/${allImgsShuffled[0]}/${allImgsShuffled[0]}.jpg">
                    <img id=${allImgsShuffled[1]} src="../../../content/${categoryName}/${allImgsShuffled[1]}/${allImgsShuffled[1]}.jpg">
                    <img id=${allImgsShuffled[2]} src="../../../content/${categoryName}/${allImgsShuffled[2]}/${allImgsShuffled[2]}.jpg">
                    <img id=${allImgsShuffled[3]} src="../../../content/${categoryName}/${allImgsShuffled[3]}/${allImgsShuffled[3]}.jpg">
                </div>              
            </section>`;
    sessionStorage.setItem(`${categoryName}TestForResult`, sectionHTMLforStorage);
    const sectionsHTML = `
            <section class="test-container">
                <audio id="${word}_audio">
                    <source src="../../../content/${categoryName}/${word}/${word}.mp3" type="audio/mp3">
                </audio>
                <button id="${word}">Play</button>
                <div class="test-guesses">
                    <label class="image-label">
                        <input type="radio" name="imageChoice" class="hidden-radio" value="${allImgsShuffled[0]}">
                        <img src="../../../content/${categoryName}/${allImgsShuffled[0]}/${allImgsShuffled[0]}.jpg">
                    </label>
                    <label class="image-label">
                        <input type="radio" name="imageChoice" class="hidden-radio" value="${allImgsShuffled[1]}">
                        <img src="../../../content/${categoryName}/${allImgsShuffled[1]}/${allImgsShuffled[1]}.jpg">
                    </label>
                    <label class="image-label">
                        <input type="radio" name="imageChoice" class="hidden-radio" value="${allImgsShuffled[2]}">
                        <img src="../../../content/${categoryName}/${allImgsShuffled[2]}/${allImgsShuffled[2]}.jpg">
                    </label>
                    <label class="image-label">
                        <input type="radio" name="imageChoice" class="hidden-radio" value="${allImgsShuffled[3]}">
                        <img src="../../../content/${categoryName}/${allImgsShuffled[3]}/${allImgsShuffled[3]}.jpg">
                    </label>
                </div>    
            </section>`;
    return sectionsHTML;
}

function imageAndTexts(categoryName, word, arr) {
    const allWords = [...arr];
    allWords.push(word);
    const allImgsShuffled = shuffleArray(allWords);
    const sectionHTMLforStorage = `
        <section class="test-container type-3">
            <img src="../../../content/${categoryName}/${word}/${word}.jpg">
            <div class="test-guesses">
                <label>
                    <input type="radio" disabled >
                    <p id="${allImgsShuffled[0]}">${allImgsShuffled[0]}</p>
                </label>
                <label>
                    <input type="radio" disabled>
                    <p id="${allImgsShuffled[1]}">${allImgsShuffled[1]}</p>
                </label>
                <label>
                    <input type="radio" disabled>
                    <p id="${allImgsShuffled[2]}">${allImgsShuffled[2]}</p>
                </label>
                <label>
                    <input type="radio" disabled>
                    <p id="${allImgsShuffled[3]}">${allImgsShuffled[3]}</p>
                </label>
            </div>
        </section>`;
    sessionStorage.setItem(`${categoryName}TestForResult`, sectionHTMLforStorage);
    const sectionsHTML = `
        <section class="test-container">
            <img src="../../../content/${categoryName}/${word}/${word}.jpg">
            <div class="test-guesses">
                <label>
                    <input type="radio" name="guess" value="${allImgsShuffled[0]}">
                    ${allImgsShuffled[0]}
                </label>
                <label>
                    <input type="radio" name="guess" value="${allImgsShuffled[1]}">
                    ${allImgsShuffled[1]}
                </label>
                <label>
                    <input type="radio" name="guess" value="${allImgsShuffled[2]}">
                    ${allImgsShuffled[2]}
                </label>
                <label>
                    <input type="radio" name="guess" value="${allImgsShuffled[3]}">
                    ${allImgsShuffled[3]}
                </label>
            </div>
        </section>`;
    return sectionsHTML;
}

function imageAndInput(categoryName, word) {
    const sectionHTMLforStorage = `
            <section class="test-container type-4">
                <img src="../../../content/${categoryName}/${word}/${word}.jpg">
            </section>`;
    sessionStorage.setItem(`${categoryName}TestForResult`, sectionHTMLforStorage);
    const sectionsHTML = `
            <section class="test-container">
                <img src="../../../content/${categoryName}/${word}/${word}.jpg">
                <input type="text">
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