export function imageAndTextsTest(categoryName, word, shuffledGuesses) {
    return `
        <section class="test-container">
            <img src="../../../content/${categoryName}/${word}/${word}.jpg">
            <div class="test-guesses">
                <label class="radio-label">
                    <input type="radio" name="guess" value="${shuffledGuesses[0]}">
                    ${shuffledGuesses[0]}
                </label>
                <label class="radio-label">
                    <input type="radio" name="guess" value="${shuffledGuesses[1]}">
                    ${shuffledGuesses[1]}
                </label>
                <label class="radio-label">
                    <input type="radio" name="guess" value="${shuffledGuesses[2]}">
                    ${shuffledGuesses[2]}
                </label>
                <label class="radio-label">
                    <input type="radio" name="guess" value="${shuffledGuesses[3]}">
                    ${shuffledGuesses[3]}
                </label>
            </div>
        </section>`
}