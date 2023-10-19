export function formPassword() {
    return `<div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required minlength="8">
                <span class="error-message" id="passwordError">Password must be at least 8 characters long.</span>
            </div>`
}