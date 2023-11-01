import { isValidPassword } from "../../../utils/auth/passwordValidation.js";

describe('isValidPassword', () => {
    const testCases = [
        {
            input: 'Password111!',
            expected: [true, null],
            description: 'correct passwords'
        },
        {
            input: 'pass',
            expected: [false, "Less than 8 characters"],
            description: 'passwords with less than 8 characters'
        },
        {
            input: 'password111!',
            expected: [false, "Add an uppercase letter"],
            description: 'passwords without an uppercase letter'
        },
        {
            input: '111!PASSWORD',
            expected: [false, "Add a lowercase letter"],
            description: 'passwords without a lowercase letter'
        },
        {
            input: 'PASSa!PASSWORD',
            expected: [false, "Add a digit"],
            description: 'passwords without a digit'
        },
        {
            input: 'aPASSWORD5',
            expected: [false, "Add a special symbol"],
            description: 'passwords without a special symbol'
        },
    ];

    test.each(testCases)('should return $expected for $description', ({ input, expected }) => {
        const output = isValidPassword(input);
        expect(output).toStrictEqual(expected);
    });
});
