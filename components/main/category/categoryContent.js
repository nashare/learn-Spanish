import { normalizeString } from "../../../utils/test/result/normalizeString.js"

export function categoryContent(categoryName, word) {
    const wordForPath = normalizeString(word);
    return `
        <section class='word-container' >
            <img src='/content/${categoryName}/${wordForPath}/${wordForPath}.jpg'>
                <p class='word-text'>${word}</p>
                <audio id='${wordForPath}_audio'>
                    <source src='/content/${categoryName}/${wordForPath}/${wordForPath}.mp3' type='audio/mp3'>
                </audio>
                <button id='${wordForPath}' class="button-yellow">Play</button>
        </section>`
}