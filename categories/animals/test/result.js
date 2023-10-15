import { callbackForResult, callbackForResultButton } from "../../../utils/callbackForResult.js"

document.addEventListener('DOMContentLoaded', callbackForResult("animals"));

document.querySelector('.test-result-button').addEventListener('click', callbackForResultButton("animals"));