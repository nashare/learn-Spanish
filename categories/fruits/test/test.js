import { createGuessesArr, createTestHTML } from "../../../utils/testCreate.js"
import { callbackForTest } from "../../../utils/callbackForTest.js"

const wordsForTest = JSON.parse(sessionStorage.fruits);
const testNum = parseInt(sessionStorage.fruitsTestNum);
const arrayForGuesses = createGuessesArr(wordsForTest, testNum-1);
let testHTML = createTestHTML("fruits", wordsForTest[testNum - 1], arrayForGuesses);

document.addEventListener('DOMContentLoaded', callbackForTest(testNum, testHTML, wordsForTest));

