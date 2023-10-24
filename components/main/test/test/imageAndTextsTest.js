import { normalizeString } from "../../../../utils/test/result/normalizeString.js";

export function imageAndTextsTest(categoryName, word, shuffledGuesses) {
    const wordForPath = normalizeString(word);
    return `
        <section class='test-container flex-column-center'>
            <img src='../../../content/${categoryName}/${wordForPath}/${wordForPath}.jpg'>
            <div class='test-guesses'>
                <label class='radio-label'>
                    <input type='radio' name='guess' value='${shuffledGuesses[0]}'>
                    <p class='radio-label-p'>${shuffledGuesses[0]}</p>
                </label>
                <label class='radio-label'>
                    <input type='radio' name='guess' value='${shuffledGuesses[1]}'>
                    <p class='radio-label-p'>${shuffledGuesses[1]}</p>
                </label>
                <label class='radio-label'>
                    <input type='radio' name='guess' value='${shuffledGuesses[2]}'>
                    <p class='radio-label-p'>${shuffledGuesses[2]}</p>
                </label>
                <label class='radio-label'>
                    <input type='radio' name='guess' value='${shuffledGuesses[3]}'>
                    <p class='radio-label-p'>${shuffledGuesses[3]}</p>
                </label>
            </div>
        </section>`
}