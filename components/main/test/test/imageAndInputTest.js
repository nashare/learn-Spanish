import { normalizeString } from "../../../../utils/test/result/normalizeString.js";

export function imageAndInputTest(categoryName, word) {
    const wordForPath = normalizeString(word);
    return `
            <section class='test-container flex-column-center'>
                <img src='../../../content/${categoryName}/${wordForPath}/${wordForPath}.jpg'>
                <input type='text' class='test-input'>
            </section>`
}