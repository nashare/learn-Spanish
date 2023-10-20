export function soundAndImagesTest(word, categoryName, shuffledGuesses) {
    return `
            <section class='test-container'>
                <audio id='${word}_audio'>
                    <source src='../../../content/${categoryName}/${word}/${word}.mp3' type='audio/mp3'>
                </audio>
                <button id='${word}'>Play</button>
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