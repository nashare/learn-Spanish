export function wordAndImagesTest(word, shuffledGuesses, categoryName) {
    return `
            <section class='test-container'>
                <p class='test-word'>${word}</p>
                <div class='test-guesses test-guesses-images'>
                    <label class='image-label'>
                        <input type='radio' name='imageChoice' class='hidden-radio' value='${shuffledGuesses[0]}'>
                        <img src='../../../content/${categoryName}/${shuffledGuesses[0]}/${shuffledGuesses[0]}.jpg'>
                    </label>
                    <label class='image-label'>
                        <input type='radio' name='imageChoice' class='hidden-radio' value='${shuffledGuesses[1]}'>
                        <img src='../../../content/${categoryName}/${shuffledGuesses[1]}/${shuffledGuesses[1]}.jpg'>
                    </label>
                    <label class='image-label'>
                        <input type='radio' name='imageChoice' class='hidden-radio' value='${shuffledGuesses[2]}'>
                        <img src='../../../content/${categoryName}/${shuffledGuesses[2]}/${shuffledGuesses[2]}.jpg'>
                    </label>
                    <label class='image-label'>
                        <input type='radio' name='imageChoice' class='hidden-radio' value='${shuffledGuesses[3]}'>
                        <img src='../../../content/${categoryName}/${shuffledGuesses[3]}/${shuffledGuesses[3]}.jpg'>
                    </label>
                </div>              
            </section>`
}