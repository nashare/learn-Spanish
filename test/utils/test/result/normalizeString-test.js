import { normalizeString } from "../../../../utils/test/result/normalizeString.js";

describe('normalizeString', () => {
    it('should remove diacritics from a string', () => {
        const input = 'púrpura';
        const output = normalizeString(input);
        expect(output).toBe('purpura');
    });

    it('should remove all type of diacritics', () => {
        const input = 'üñéáíóú';
        const output = normalizeString(input);
        expect(output).toBe('uneaiou');
    });

    it('should remove diacritics from a string and convert to lowercase', () => {
        const input = 'Marrón';
        const output = normalizeString(input);
        expect(output).toBe('marron');
    });


    it('should convert to lowecase', () => {
        const input = 'POLLO';
        const output = normalizeString(input);
        expect(output).toBe('pollo');
    });
});
