import { createGuessesArr, createTestHTML } from "../../../utils/testCreate.js"
import { callbackForTest } from "../../../utils/callbackForTest.js"

const wordsForTest = JSON.parse(sessionStorage.colors);
const testNum = parseInt(sessionStorage.colorsTestNum);
const arrayForGuesses = createGuessesArr(wordsForTest, testNum - 1);
let testHTML = createTestHTML("colors", wordsForTest[testNum - 1], arrayForGuesses);

document.addEventListener('DOMContentLoaded', callbackForTest(testNum, testHTML, wordsForTest));