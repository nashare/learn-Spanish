import { checkAnswer } from "../../../../utils/test/result/callbackForResult.js";

describe('checkAnswer', () => {
    it('should return true for two equal words', () => {
        const output = checkAnswer('purpura', 'purpura');
        expect(output).toStrictEqual(true);
    });

    it('should return true for characters with diacritics', () => {
        const output = checkAnswer('üñéáíóú', 'uneaiou');
        expect(output).toStrictEqual(true);
    });

    it('should return true for two equal words with different case', () => {
        const output = checkAnswer('PURPURA', 'purpura');
        expect(output).toStrictEqual(true);
    });


    it('should return false for different words', () => {
        const output = checkAnswer('POLLO', 'gato');
        expect(output).toStrictEqual(false);
    });
});
