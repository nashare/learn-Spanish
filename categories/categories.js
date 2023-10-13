function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function generateSections(categoryName, arr) {
    let sectionsHTML = '';
    let shuffledArr = shuffleArray(arr);
    sessionStorage.setItem(categoryName, JSON.stringify(shuffledArr));

    shuffledArr.forEach(word => {
        sectionsHTML += `
            <section class="word-container">
                <img src="../../content/${categoryName}/${word}/${word}.jpg">
                <p class="word-text">${word}</p>
                <audio id="${word}_audio">
                    <source src="../../content/${categoryName}/${word}/${word}.mp3" type="audio/mp3">
                </audio>
                <button id="${word}">Play</button>
            </section>`;
    });

    return sectionsHTML;
}
