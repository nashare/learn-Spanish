export function completeWrong(wrongAnswNum, reviewSection) {
    const wrongNumbSentencePart = wrongAnswNum === 1 ? 'the word' : 'these words';
    return `
        <p>Your result is ${wrongAnswNum}/10</p>
        <p>Please review ${wrongNumbSentencePart}:</p>
        ${reviewSection}
        <a href='../test-1/test-1.html'>
            <button class='complete-button-practice'>Practice</button>
        </a>`
}