import { shuffleArray } from "./shuffleArr.js";

export function generateSections(categoryName, arr) {
    let sectionsHTML = '';
    let shuffledArr = shuffleArray(arr);
    const baseUrl = window.location.protocol + "//" + window.location.host;

    shuffledArr.forEach(word => {
        sectionsHTML += `
            <section class="word-container">
                <img src="${baseUrl}/content/${categoryName}/${word}/${word}.jpg">
                <p class="word-text">${word}</p>
                <audio id="${word}_audio">
                    <source src="${baseUrl}/content/${categoryName}/${word}/${word}.mp3" type="audio/mp3">
                </audio>
                <button id="${word}">Play</button>
            </section>`;
    });

    return sectionsHTML;
}
