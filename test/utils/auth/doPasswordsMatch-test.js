import { doPasswordsMatch } from "../../../utils/auth/passwordConfirmValidation.js";

describe('doPasswordsMatch', () => {
    it('should return true for two equal passwords', () => {
        const output = doPasswordsMatch('Test12345', 'Test12345');
        expect(output).toStrictEqual(true);
    });

    it('should return false for two different passwords', () => {
        const output = doPasswordsMatch('Test12345', 'Test123456');
        expect(output).toStrictEqual(false);
    });

});
