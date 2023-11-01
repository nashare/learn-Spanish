import { testEmail } from "../../../utils/auth/emailValidation.js";

describe('testEmail', () => {
    const testCases = [
        { input: 'test!!!@???.com', expected: false, description: 'should not accept special symbols' },
        { input: 'test@test', expected: false, description: 'should not accept emails without top-level domain names' },
        { input: 'test@test.t', expected: false, description: 'should not accept emails with 1 symbol top-level domain names' },
        { input: 'test.test.com', expected: false, description: 'should not accept emails without @ symbol' },
        { input: 'test1.test1@test-9.com', expected: true, description: 'should accept dots, hyphen and numbers' },
        { input: '', expected: false, description: 'should not accept blank string' },
    ];

    test.each(testCases)('$description', ({ input, expected }) => {
        const output = testEmail(input);
        expect(output).toBe(expected);
    });
});
