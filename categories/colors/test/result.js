import { callbackForResult, callbackForResultButton } from "../../../utils/callbackForResult.js"

document.addEventListener('DOMContentLoaded', callbackForResult("colors"));

document.querySelector('.test-result-button').addEventListener('click', callbackForResultButton("colors"));