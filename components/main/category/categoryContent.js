export function categoryContent(categoryName, word) {
    return `
        <section class='word-container' >
            <img src='/content/${categoryName}/${word}/${word}.jpg'>
                <p class='word-text'>${word}</p>
                <audio id='${word}_audio'>
                    <source src='/content/${categoryName}/${word}/${word}.mp3' type='audio/mp3'>
                </audio>
                <button id='${word}' class="button-yellow">Play</button>
        </section>`
}