import { checkAnswer } from "../../../../utils/test/result/callbackForResult.js";

describe('checkAnswer', () => {
    const testCases = [
        { input1: 'purpura', input2: 'purpura', expected: true, description: 'two equal words' },
        { input1: 'üñéáíóú', input2: 'uneaiou', expected: true, description: 'characters with diacritics' },
        { input1: 'PURPURA', input2: 'purpura', expected: true, description: 'two equal words with different case' },
        { input1: 'POLLO', input2: 'gato', expected: false, description: 'different words' },
    ];

    test.each(testCases)('should return $expected for $description', ({ input1, input2, expected }) => {
        const output = checkAnswer(input1, input2);
        expect(output).toStrictEqual(expected);
    });
});
