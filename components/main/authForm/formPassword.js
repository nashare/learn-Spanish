export const formPassword = 
    `<div class='form-group'>
        <label for='password' class='auth-label'>Password:</label>
        <div class='auth-rules'>
            <p class='auth-rules-p'>Make sure your password includes:</p>
            <ul class='auth-rules-list'>
                <li>minimum 8 characters</li>
                <li>uppercase letter</li>
                <li>lowercase letter</li>
                <li>number</li>
                <li>symbol (e.g., !, @, #, $, %)</li>
            </ul>
        </div>
        <input type='password' id='password' name='password' required class='auth-input'>
        <span class='error-message margin-1-0' id='passwordError'></span>
    </div>`