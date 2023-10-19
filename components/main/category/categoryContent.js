export function categoryContent(categoryName, word, baseUrl) {
    return `
        <section class="word-container" >
            <img src="${baseUrl}/content/${categoryName}/${word}/${word}.jpg">
                <p class="word-text">${word}</p>
                <audio id="${word}_audio">
                    <source src="${baseUrl}/content/${categoryName}/${word}/${word}.mp3" type="audio/mp3">
                </audio>
                <button id="${word}">Play</button>
        </section>`
}