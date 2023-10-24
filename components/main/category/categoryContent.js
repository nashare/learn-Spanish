import { normalizeString } from "../../../utils/test/result/normalizeString.js"

export function categoryContent(categoryName, word) {
    return `
        <section class='word-container' >
            <img src='/content/${categoryName}/${normalizeString(word)}/${normalizeString(word)}.jpg'>
                <p class='word-text'>${word}</p>
                <audio id='${normalizeString(word)}_audio'>
                    <source src='/content/${categoryName}/${normalizeString(word)}/${normalizeString(word)}.mp3' type='audio/mp3'>
                </audio>
                <button id='${normalizeString(word)}' class="button-yellow">Play</button>
        </section>`
}