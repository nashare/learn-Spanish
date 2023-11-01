import { excludeByIndex } from "../../../../utils/test/test/callbackForTest.js";

describe('excludeByIndex', () => {
    const testCases = [
        {
            inputIndex: 2,
            expected: [1, 2, 4],
            description: 'should exclude an element in the middle of the array'
        },
        {
            inputIndex: 0,
            expected: [2, 3, 4],
            description: 'should exclude an element at the beginning of the array'
        },
        {
            inputIndex: 3,
            expected: [1, 2, 3],
            description: 'should exclude an element at the end of the array'
        },
        {
            inputIndex: 5,
            expected: [1, 2, 3, 4],
            description: 'should not change the array if the index is outside the array'
        }
    ];

    testCases.forEach(({ inputIndex, expected, description }) => {
        it(description, () => {
            const inputArr = [1, 2, 3, 4];
            const output = excludeByIndex(inputArr, inputIndex);
            expect(output).toStrictEqual(expected);
        });
    });
});
