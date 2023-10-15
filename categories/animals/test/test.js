import { createGuessesArr, createTestHTML } from "../../../utils/testCreate.js"
import { callbackForTest } from "../../../utils/callbackForTest.js"

const wordsForTest = JSON.parse(sessionStorage.animals);
const testNum = parseInt(sessionStorage.animalTestNum);
const arrayForGuesses = createGuessesArr(wordsForTest, testNum - 1);
let testHTML = createTestHTML("animals", wordsForTest[testNum - 1], arrayForGuesses);

document.addEventListener('DOMContentLoaded', callbackForTest(testNum, testHTML, wordsForTest));