import { handleTextInput } from "../../../../utils/test/test/callbackForTest.js";

describe('handleTextInput', () => {
    it('should return true for blank input', () => {
        const result = handleTextInput('');
        expect(result).toStrictEqual(true);
    });

    it('should return true for input that consists of whitespace ', () => {
        const result = handleTextInput('  ');
        expect(result).toStrictEqual(true);
    });

    it('should return false for text input', () => {
        const result = handleTextInput('test');
        expect(result).toStrictEqual(false);
    });

    it('should return false for text input with whitespace ', () => {
        const result = handleTextInput('  test');
        expect(result).toStrictEqual(false);
    });

});