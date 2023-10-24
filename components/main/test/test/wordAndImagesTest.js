import { normalizeString } from "../../../../utils/test/result/normalizeString.js"

export function wordAndImagesTest(word, shuffledGuesses, categoryName) {
    return `
            <section class='test-container flex-column-center'>
                <p class='test-word'>${word}</p>
                <div class='test-guesses test-guesses-images'>
                    <label class='image-label'>
                        <input type='radio' name='imageChoice' class='hidden-radio' value='${shuffledGuesses[0]}'>
                        <img src='../../../content/${categoryName}/${normalizeString(shuffledGuesses[0])}/${normalizeString(shuffledGuesses[0])}.jpg'>
                    </label>
                    <label class='image-label'>
                        <input type='radio' name='imageChoice' class='hidden-radio' value='${shuffledGuesses[1]}'>
                        <img src='../../../content/${categoryName}/${normalizeString(shuffledGuesses[1])}/${normalizeString(shuffledGuesses[1])}.jpg'>
                    </label>
                    <label class='image-label'>
                        <input type='radio' name='imageChoice' class='hidden-radio' value='${shuffledGuesses[2]}'>
                        <img src='../../../content/${categoryName}/${normalizeString(shuffledGuesses[2])}/${normalizeString(shuffledGuesses[2])}.jpg'>
                    </label>
                    <label class='image-label'>
                        <input type='radio' name='imageChoice' class='hidden-radio' value='${shuffledGuesses[3]}'>
                        <img src='../../../content/${categoryName}/${normalizeString(shuffledGuesses[3])}/${normalizeString(shuffledGuesses[3])}.jpg'>
                    </label>
                </div>              
            </section>`
}