export function imageAndInputResult(categoryName, word) {
    return `
            <section class='test-container flex-column-center type-4'>
                <img src='../../../content/${categoryName}/${word}/${word}.jpg'>
            </section>`
}