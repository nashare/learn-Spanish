import { normalizeString } from "../../../../utils/test/result/normalizeString.js";

export function wordAndImagesResult(word, shuffledGuesses, categoryName) {
    const guess0Path = normalizeString(shuffledGuesses[0]);
    const guess1Path = normalizeString(shuffledGuesses[1]);
    const guess2Path = normalizeString(shuffledGuesses[2]);
    const guess3Path = normalizeString(shuffledGuesses[3]);
    return `
            <section class='test-container flex-column-center type-1'>
                <p class='test-word'>${word}</p>
                <div class='test-guesses test-guesses-images'>
                    <img id=${shuffledGuesses[0]} src='../../../content/${categoryName}/${guess0Path}/${guess0Path}.jpg'>
                    <img id=${shuffledGuesses[1]} src='../../../content/${categoryName}/${guess1Path}/${guess1Path}.jpg'>
                    <img id=${shuffledGuesses[2]} src='../../../content/${categoryName}/${guess2Path}/${guess2Path}.jpg'>
                    <img id=${shuffledGuesses[3]} src='../../../content/${categoryName}/${guess3Path}/${guess3Path}.jpg'>
                </div>
            </section>`
}