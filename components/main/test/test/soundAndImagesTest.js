import { normalizeString } from "../../../../utils/test/result/normalizeString.js"

export function soundAndImagesTest(word, categoryName, shuffledGuesses) {
    const wordForPath = normalizeString(word);
    const guess0Path = normalizeString(shuffledGuesses[0]);
    const guess1Path = normalizeString(shuffledGuesses[1]);
    const guess2Path = normalizeString(shuffledGuesses[2]);
    const guess3Path = normalizeString(shuffledGuesses[3]);
    return `
            <section class='test-container flex-column-center'>
                <audio id='${wordForPath}_audio'>
                    <source src='../../../content/${categoryName}/${wordForPath}/${wordForPath}.mp3' type='audio/mp3'>
                </audio>
                <button id='${wordForPath}' class='button-yellow'>Play</button>
                <div class='test-guesses test-guesses-images'>
                    <label class='image-label'>
                        <input type='radio' name='imageChoice' class='hidden-radio' value='${shuffledGuesses[0]}'>
                        <img src='../../../content/${categoryName}/${guess0Path}/${guess0Path}.jpg'>
                    </label>
                    <label class='image-label'>
                        <input type='radio' name='imageChoice' class='hidden-radio' value='${shuffledGuesses[1]}'>
                        <img src='../../../content/${categoryName}/${guess1Path}/${guess1Path}.jpg'>
                    </label>
                    <label class='image-label'>
                        <input type='radio' name='imageChoice' class='hidden-radio' value='${shuffledGuesses[2]}'>
                        <img src='../../../content/${categoryName}/${guess2Path}/${guess2Path}.jpg'>
                    </label>
                    <label class='image-label'>
                        <input type='radio' name='imageChoice' class='hidden-radio' value='${shuffledGuesses[3]}'>
                        <img src='../../../content/${categoryName}/${guess3Path}/${guess3Path}.jpg'>
                    </label>
                </div>    
            </section>`

}