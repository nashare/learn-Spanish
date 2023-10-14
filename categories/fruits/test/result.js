document.addEventListener('DOMContentLoaded', function () {
    const storedHtmlContent = sessionStorage.getItem('fruitsTestHTML');
    if (storedHtmlContent) {
        const resultDiv = document.querySelector('.test-result');
        resultDiv.innerHTML = storedHtmlContent;
    }
});

document.querySelector('.test-result-button').addEventListener('click', function () {
    let testNum = parseInt(sessionStorage.fruitTestNum);
    testNum++;
    if (testNum === 11) {
        window.location.href = `/categories/fruits/test/complete.html`;
    } else {
        sessionStorage.setItem('fruitTestNum', String(testNum));
        window.location.href = `/categories/fruits/test-${testNum}/test-${testNum}.html`;
    }
});