import { excludeByIndex } from "../../../../utils/test/test/callbackForTest.js";

describe('excludeByIndex', () => {
    it('should exclude an element in the middle of the array', () => {
        const inputArr = [1, 2, 3, 4];
        const inputIndex = 2;
        const output = excludeByIndex(inputArr, inputIndex);
        expect(output).toStrictEqual([1, 2, 4]);
    });

    it('should exclude an element at the beginning of the array', () => {
        const inputArr = [1, 2, 3, 4];
        const inputIndex = 0;
        const output = excludeByIndex(inputArr, inputIndex);
        expect(output).toStrictEqual([2, 3, 4]);
    });

    it('should exclude an element at the end of the array', () => {
        const inputArr = [1, 2, 3, 4];
        const inputIndex = 3;
        const output = excludeByIndex(inputArr, inputIndex);
        expect(output).toStrictEqual([1, 2, 3]);
    });

    it('should not change the array of the index is outside the array', () => {
        const inputArr = [1, 2, 3, 4];
        const inputIndex = 5;
        const output = excludeByIndex(inputArr, inputIndex);
        expect(output).toStrictEqual([1, 2, 3, 4]);
    });
});
