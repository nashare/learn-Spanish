export function soundAndImagesResult(word, categoryName, shuffledGuesses) {
    return `
            <section class='test-container type-2'>
                <audio id='${word}_audio'>
                    <source src='../../../content/${categoryName}/${word}/${word}.mp3' type='audio/mp3'>
                </audio>
                <button id='${word}'>Play</button>
                <div class='test-guesses test-guesses-images'>
                    <img id=${shuffledGuesses[0]} src='../../../content/${categoryName}/${shuffledGuesses[0]}/${shuffledGuesses[0]}.jpg'>
                    <img id=${shuffledGuesses[1]} src='../../../content/${categoryName}/${shuffledGuesses[1]}/${shuffledGuesses[1]}.jpg'>
                    <img id=${shuffledGuesses[2]} src='../../../content/${categoryName}/${shuffledGuesses[2]}/${shuffledGuesses[2]}.jpg'>
                    <img id=${shuffledGuesses[3]} src='../../../content/${categoryName}/${shuffledGuesses[3]}/${shuffledGuesses[3]}.jpg'>
                </div>              
            </section>`

}