import { doPasswordsMatch } from "../../../utils/auth/passwordConfirmValidation.js";

describe('doPasswordsMatch', () => {
    const testCases = [
        { password1: 'Test12345', password2: 'Test12345', expected: true, description: 'two equal passwords' },
        { password1: 'Test12345', password2: 'Test123456', expected: false, description: 'two different passwords' },
    ];

    test.each(testCases)('should return $expected for $description', ({ password1, password2, expected }) => {
        const output = doPasswordsMatch(password1, password2);
        expect(output).toStrictEqual(expected);
    });
});
