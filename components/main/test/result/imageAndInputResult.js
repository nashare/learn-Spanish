import { normalizeString } from "../../../../utils/test/result/normalizeString.js";

export function imageAndInputResult(categoryName, word) {
    return `
            <section class='test-container flex-column-center type-4'>
                <img src='../../../content/${categoryName}/${normalizeString(word)}/${normalizeString(word)}.jpg'>
            </section>`
}