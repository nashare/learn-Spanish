import { handleTextInput } from "../../../../utils/test/test/callbackForTest.js";

describe('handleTextInput', () => {
    const testCases = [
        {
            input: '',
            expected: true,
            description: 'should return true for blank input'
        },
        {
            input: '  ',
            expected: true,
            description: 'should return true for input that consists of whitespace'
        },
        {
            input: 'test',
            expected: false,
            description: 'should return false for text input'
        },
        {
            input: '  test',
            expected: false,
            description: 'should return false for text input with whitespace'
        }
    ];

    testCases.forEach(({ input, expected, description }) => {
        it(description, () => {
            const result = handleTextInput(input);
            expect(result).toStrictEqual(expected);
        });
    });
});
