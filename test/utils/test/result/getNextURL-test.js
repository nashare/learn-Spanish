import { getNextURL } from "../../../../utils/test/result/setupResultPage.js";

describe('getNextURL', () => {
    it('should return category address for test 2', () => {
        const output = getNextURL('fruits', 2);
        expect(output).toStrictEqual('/categories/fruits/test-2/test-2.html');
    });

    it('should return complete page address for test number 11', () => {
        const output = getNextURL('animals', 11);
        expect(output).toStrictEqual('/categories/animals/test/complete.html');
    });
});
