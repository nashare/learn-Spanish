export const formPassword = 
    `<div class='form-group'>
        <label for='password' class='auth-label'>Password:</label>
        <input type='password' id='password' name='password' required minlength='8' class='auth-input'>
        <span class='error-message' id='passwordError'>Password must be at least 8 characters long.</span>
    </div>`