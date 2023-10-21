import { wordAndImagesTest } from '../../../components/main/test/test/wordAndImagesTest.js';
import { soundAndImagesTest } from '../../../components/main/test/test/soundAndImagesTest.js';
import { imageAndTextsTest } from '../../../components/main/test/test/imageAndTextsTest.js';
import { imageAndInputTest } from '../../../components/main/test/test/imageAndInputTest.js';
import { wordAndImagesResult } from '../../../components/main/test/result/wordAndImagesResult.js';
import { soundAndImagesResult } from '../../../components/main/test/result/soundAndImagesResult.js';
import { imageAndTextsResult } from '../../../components/main/test/result/imageAndTextsResult.js';
import { imageAndInputResult } from '../../../components/main/test/result/imageAndInputResult.js';

function excludeByIndex(arr, index) {
    return arr.slice(0, index).concat(arr.slice(index + 1));
}

function createGuessesArr(arr, ind) {
    const arrayWithoutTestWord = excludeByIndex(arr, ind);
    return chance.shuffle(arrayWithoutTestWord).slice(0, 3);
}

function wordAndImages(categoryName, word, shuffledGuesses) {
    sessionStorage.setItem(`${categoryName}TestForResult`, wordAndImagesResult(word, shuffledGuesses, categoryName));
    return wordAndImagesTest(word, shuffledGuesses, categoryName);
}

function soundAndImages(categoryName, word, shuffledGuesses) {
    sessionStorage.setItem(`${categoryName}TestForResult`, soundAndImagesResult(word, categoryName, shuffledGuesses));
    return soundAndImagesTest(word, categoryName, shuffledGuesses);
}

function imageAndTexts(categoryName, word, shuffledGuesses) {
    sessionStorage.setItem(`${categoryName}TestForResult`, imageAndTextsResult(categoryName, word, shuffledGuesses));
    return imageAndTextsTest(categoryName, word, shuffledGuesses);
}

function imageAndInput(categoryName, word) {
    sessionStorage.setItem(`${categoryName}TestForResult`, imageAndInputResult(categoryName, word));
    return imageAndInputTest(categoryName, word);
}

function createTestHTML(category, word, arrayForGuesses) {
    const testType = chance.integer({ min: 1, max: 4 });
    const allWords = [...arrayForGuesses];
    allWords.push(word);
    const shuffledGuesses = chance.shuffle(allWords);
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
            break;
    }
}

export {
    createGuessesArr,
    createTestHTML
};