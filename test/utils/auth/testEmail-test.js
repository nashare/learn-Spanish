import { testEmail } from "../../../utils/auth/testEmail.js";

describe('normalizeString', () => {
    it('should not accept special symbols', () => {
        const input = 'test!!!@???.com';
        const output = testEmail(input);
        expect(output).toBe(false);
    });

    it('should not accept emails without top-level domain names', () => {
        const input = 'test@test';
        const output = testEmail(input);
        expect(output).toBe(false);
    });

    it('should not accept emails with 1 symbol top-level domain names', () => {
        const input = 'test@test.t';
        const output = testEmail(input);
        expect(output).toBe(false);
    });

    it('should not accept emails without @ symbol', () => {
        const input = 'test.test.com';
        const output = testEmail(input);
        expect(output).toBe(false);
    });

    it('should accept dots, hyphen and numbers', () => {
        const input = 'test1.test1@test-9.com';
        const output = testEmail(input);
        expect(output).toBe(true);
    });

    it('should not accept blank string', () => {
        const input = '';
        const output = testEmail(input);
        expect(output).toBe(false);
    });


});