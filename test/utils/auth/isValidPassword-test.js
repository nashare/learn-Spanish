import { isValidPassword } from "../../../utils/auth/passwordValidation.js";

describe('isValidPassword', () => {
    it('should return true for password longer than 8 characters', () => {
        const output = isValidPassword('123456789');
        expect(output).toStrictEqual(true);
    });

    it('should return true for password equal to 8 characters', () => {
        const output = isValidPassword('12345678');
        expect(output).toStrictEqual(true);
    });

    it('should return false for password less than 8 characters', () => {
        const output = isValidPassword('123456');
        expect(output).toStrictEqual(false);
    });

});
