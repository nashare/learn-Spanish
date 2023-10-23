export function imageAndTextsTest(categoryName, word, shuffledGuesses) {
    return `
        <section class='test-container flex-column-center'>
            <img src='../../../content/${categoryName}/${word}/${word}.jpg'>
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