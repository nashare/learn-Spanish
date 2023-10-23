export function imageAndInputTest(categoryName, word) {
    return `
            <section class='test-container flex-column-center'>
                <img src='../../../content/${categoryName}/${word}/${word}.jpg'>
                <input type='text' class='test-input'>
            </section>`
}