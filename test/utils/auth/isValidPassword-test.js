import { isValidPassword } from "../../../utils/auth/passwordValidation.js";

describe('isValidPassword', () => {
    it('should return true and null for error text for correct passwords', () => {
        const output = isValidPassword('Password111!');
        expect(output).toStrictEqual([true, null]);
    });

    it('should return false and "Less than 8 characters" for error text for incorrect passwords', () => {
        const output = isValidPassword('pass');
        expect(output).toStrictEqual([false, "Less than 8 characters"]);
    });

    it('should return false and "Add an uppercase letter" for error text for incorrect passwords', () => {
        const output = isValidPassword('password111!');
        expect(output).toStrictEqual([false, "Add an uppercase letter"]);
    });

    it('should return false and "Add a lowercase letter" for error text for incorrect passwords', () => {
        const output = isValidPassword('111!PASSWORD');
        expect(output).toStrictEqual([false, "Add a lowercase letter"]);
    });

    it('should return false and "Add a digit" for error text for incorrect passwords', () => {
        const output = isValidPassword('PASSa!PASSWORD');
        expect(output).toStrictEqual([false, "Add a digit"]);
    });

    it('should return false and "Add a special symbol" for error text for incorrect passwords', () => {
        const output = isValidPassword('aPASSWORD5');
        expect(output).toStrictEqual([false, "Add a special symbol"]);
    });

});
