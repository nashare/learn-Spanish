import { normalizeString } from "../../../../utils/test/result/normalizeString.js";

describe('normalizeString', () => {
    it('should remove diacritics from a string', () => {
        const input = 'púrpura';
        const output = normalizeString(input);
        expect(output).toStrictEqual('purpura');
    });

    it('should remove all type of diacritics', () => {
        const input = 'üñéáíóú';
        const output = normalizeString(input);
        expect(output).toStrictEqual('uneaiou');
    });

    it('should remove diacritics from a string and convert to lowercase', () => {
        const input = 'Marrón';
        const output = normalizeString(input);
        expect(output).toStrictEqual('marron');
    });


    it('should convert to lowecase', () => {
        const input = 'POLLO';
        const output = normalizeString(input);
        expect(output).toStrictEqual('pollo');
    });
});
