export function completeWrong(wrongAnswNum, reviewSection) {
    const wrongNumbSentencePart = wrongAnswNum === 1 ? 'the word' : 'these words';
    return `
        <p class="test-complete-result">Your result is ${wrongAnswNum}/10</p>
        <p class="test-complete-result">Please review ${wrongNumbSentencePart}:</p>
        ${reviewSection}
        <a href='../test-1/test-1.html' class='complete-button-container flex-column-center'>
            <button class='complete-button-practice button-yellow margin-2'>Practice</button>
        </a>`
}