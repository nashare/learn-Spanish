import { shuffleArray } from "../shuffleArr.js";

function excludeByIndex(arr, index) {
    return arr.slice(0, index).concat(arr.slice(index + 1));
}

function createGuessesArr(arr, ind) {
    const arrayWithoutTestWord = excludeByIndex(arr, ind);
    return shuffleArray(arrayWithoutTestWord).slice(0, 3);

}

function wordAndImages(categoryName, word, shuffledGuesses) {
    const sectionHTMLforStorage = `
            <section class="test-container type-1">
                <p class="test-word">${word}</p>
                <div class="test-guesses test-guesses-images">
                    <img id=${shuffledGuesses[0]} src="../../../content/${categoryName}/${shuffledGuesses[0]}/${shuffledGuesses[0]}.jpg">
                    <img id=${shuffledGuesses[1]} src="../../../content/${categoryName}/${shuffledGuesses[1]}/${shuffledGuesses[1]}.jpg">
                    <img id=${shuffledGuesses[2]} src="../../../content/${categoryName}/${shuffledGuesses[2]}/${shuffledGuesses[2]}.jpg">
                    <img id=${shuffledGuesses[3]} src="../../../content/${categoryName}/${shuffledGuesses[3]}/${shuffledGuesses[3]}.jpg">
                </div>              
            </section>`;
    sessionStorage.setItem(`${categoryName}TestForResult`, sectionHTMLforStorage);
    const sectionsHTML = `
            <section class="test-container">
                <p class="test-word">${word}</p>
                <div class="test-guesses test-guesses-images">
                    <label class="image-label">
                        <input type="radio" name="imageChoice" class="hidden-radio" value="${shuffledGuesses[0]}">
                        <img src="../../../content/${categoryName}/${shuffledGuesses[0]}/${shuffledGuesses[0]}.jpg">
                    </label>
                    <label class="image-label">
                        <input type="radio" name="imageChoice" class="hidden-radio" value="${shuffledGuesses[1]}">
                        <img src="../../../content/${categoryName}/${shuffledGuesses[1]}/${shuffledGuesses[1]}.jpg">
                    </label>
                    <label class="image-label">
                        <input type="radio" name="imageChoice" class="hidden-radio" value="${shuffledGuesses[2]}">
                        <img src="../../../content/${categoryName}/${shuffledGuesses[2]}/${shuffledGuesses[2]}.jpg">
                    </label>
                    <label class="image-label">
                        <input type="radio" name="imageChoice" class="hidden-radio" value="${shuffledGuesses[3]}">
                        <img src="../../../content/${categoryName}/${shuffledGuesses[3]}/${shuffledGuesses[3]}.jpg">
                    </label>
                </div>              
            </section>`;
    return sectionsHTML;
}

function soundAndImages(categoryName, word, shuffledGuesses) {
    const sectionHTMLforStorage = `
            <section class="test-container type-2">
                <audio id="${word}_audio">
                    <source src="../../../content/${categoryName}/${word}/${word}.mp3" type="audio/mp3">
                </audio>
                <button id="${word}">Play</button>
                <div class="test-guesses test-guesses-images">
                    <img id=${shuffledGuesses[0]} src="../../../content/${categoryName}/${shuffledGuesses[0]}/${shuffledGuesses[0]}.jpg">
                    <img id=${shuffledGuesses[1]} src="../../../content/${categoryName}/${shuffledGuesses[1]}/${shuffledGuesses[1]}.jpg">
                    <img id=${shuffledGuesses[2]} src="../../../content/${categoryName}/${shuffledGuesses[2]}/${shuffledGuesses[2]}.jpg">
                    <img id=${shuffledGuesses[3]} src="../../../content/${categoryName}/${shuffledGuesses[3]}/${shuffledGuesses[3]}.jpg">
                </div>              
            </section>`;
    sessionStorage.setItem(`${categoryName}TestForResult`, sectionHTMLforStorage);
    const sectionsHTML = `
            <section class="test-container">
                <audio id="${word}_audio">
                    <source src="../../../content/${categoryName}/${word}/${word}.mp3" type="audio/mp3">
                </audio>
                <button id="${word}">Play</button>
                <div class="test-guesses test-guesses-images">
                    <label class="image-label">
                        <input type="radio" name="imageChoice" class="hidden-radio" value="${shuffledGuesses[0]}">
                        <img src="../../../content/${categoryName}/${shuffledGuesses[0]}/${shuffledGuesses[0]}.jpg">
                    </label>
                    <label class="image-label">
                        <input type="radio" name="imageChoice" class="hidden-radio" value="${shuffledGuesses[1]}">
                        <img src="../../../content/${categoryName}/${shuffledGuesses[1]}/${shuffledGuesses[1]}.jpg">
                    </label>
                    <label class="image-label">
                        <input type="radio" name="imageChoice" class="hidden-radio" value="${shuffledGuesses[2]}">
                        <img src="../../../content/${categoryName}/${shuffledGuesses[2]}/${shuffledGuesses[2]}.jpg">
                    </label>
                    <label class="image-label">
                        <input type="radio" name="imageChoice" class="hidden-radio" value="${shuffledGuesses[3]}">
                        <img src="../../../content/${categoryName}/${shuffledGuesses[3]}/${shuffledGuesses[3]}.jpg">
                    </label>
                </div>    
            </section>`;
    return sectionsHTML;
}

function imageAndTexts(categoryName, word, shuffledGuesses) {
    const sectionHTMLforStorage = `
        <section class="test-container type-3">
            <img src="../../../content/${categoryName}/${word}/${word}.jpg">
            <div class="test-guesses">
                <label class="radio-label">
                    <input type="radio" disabled >
                    <p id="${shuffledGuesses[0]}" class="radio-label-p">${shuffledGuesses[0]}</p>
                </label>
                <label class="radio-label">
                    <input type="radio" disabled>
                    <p id="${shuffledGuesses[1]}" class="radio-label-p">${shuffledGuesses[1]}</p>
                </label>
                <label class="radio-label">
                    <input type="radio" disabled>
                    <p id="${shuffledGuesses[2]}" class="radio-label-p">${shuffledGuesses[2]}</p>
                </label>
                <label class="radio-label">
                    <input type="radio" disabled>
                    <p id="${shuffledGuesses[3]}" class="radio-label-p">${shuffledGuesses[3]}</p>
                </label>
            </div>
        </section>`;
    sessionStorage.setItem(`${categoryName}TestForResult`, sectionHTMLforStorage);
    const sectionsHTML = `
        <section class="test-container">
            <img src="../../../content/${categoryName}/${word}/${word}.jpg">
            <div class="test-guesses">
                <label class="radio-label">
                    <input type="radio" name="guess" value="${shuffledGuesses[0]}">
                    ${shuffledGuesses[0]}
                </label>
                <label class="radio-label">
                    <input type="radio" name="guess" value="${shuffledGuesses[1]}">
                    ${shuffledGuesses[1]}
                </label>
                <label class="radio-label">
                    <input type="radio" name="guess" value="${shuffledGuesses[2]}">
                    ${shuffledGuesses[2]}
                </label>
                <label class="radio-label">
                    <input type="radio" name="guess" value="${shuffledGuesses[3]}">
                    ${shuffledGuesses[3]}
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
    const allWords = [...arrayForGuesses];
    allWords.push(word);
    const shuffledGuesses = shuffleArray(allWords);
    switch (testType) {
        case 1:
            return wordAndImages(category, word, shuffledGuesses);
            break;
        case 2:
            return soundAndImages(category, word, shuffledGuesses);
            break;
        case 3:
            return imageAndTexts(category, word, shuffledGuesses);
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