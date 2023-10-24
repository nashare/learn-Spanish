import { normalizeString } from "../../../../utils/test/result/normalizeString.js";

export function imageAndTextsResult(categoryName, word, shuffledGuesses) {
    return `
        <section class='test-container flex-column-center type-3'>
            <img src='../../../content/${categoryName}/${normalizeString(word)}/${normalizeString(word)}.jpg'>
            <div class='test-guesses'>
                <label class='radio-label'>
                    <input type='radio' disabled class='margin-0'>
                    <p id='${shuffledGuesses[0]}' class='radio-label-p'>${shuffledGuesses[0]}</p>
                </label>
                <label class='radio-label'>
                    <input type='radio' disabled class='margin-0'>
                    <p id='${shuffledGuesses[1]}' class='radio-label-p'>${shuffledGuesses[1]}</p>
                </label>
                <label class='radio-label'>
                    <input type='radio' disabled class='margin-0'>
                    <p id='${shuffledGuesses[2]}' class='radio-label-p'>${shuffledGuesses[2]}</p>
                </label>
                <label class='radio-label'>
                    <input type='radio' disabled class='margin-0'>
                    <p id='${shuffledGuesses[3]}' class='radio-label-p'>${shuffledGuesses[3]}</p>
                </label>
            </div>
        </section>`
}