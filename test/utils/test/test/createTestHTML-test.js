import { createTestHTML } from "../../../../utils/test/test/testCreate.js";
import { wordAndImages } from "../../../../utils/test/test/testCreate.js";
import { soundAndImages } from "../../../../utils/test/test/testCreate.js";
import { imageAndTexts } from "../../../../utils/test/test/testCreate.js";
import { imageAndInput } from "../../../../utils/test/test/testCreate.js";

beforeAll(() => {
    global.chance = {
        integer: jest.fn(),
        shuffle: jest.fn()
    };

    global.sessionStorage = (() => {
        let store = {};
        return {
            setItem(key, value) {
                store[key] = value.toString();
            }
        };
    })();
});

afterAll(() => {
    delete global.chance;
    delete global.sessionStorage;
});



describe('createTestHTML', () => {
    it('should return word and images test', () => {
        chance.integer.mockReturnValue(1);
        chance.shuffle.mockReturnValue(['uva', 'banana', 'manzana', 'cereza']);

        const result = createTestHTML('fruits', 'manzana', ['uva', 'banana', 'manzana', 'cereza']);
        expect(result).toEqual(wordAndImages('fruits', 'manzana', ['uva', 'banana', 'manzana', 'cereza']));
    });

    it('should return sound and images test', () => {
        chance.integer.mockReturnValue(2);
        chance.shuffle.mockReturnValue(['vaca', 'cerdo', 'gallina', 'gato']);

        const result = createTestHTML('animals', 'gato', ['vaca', 'cerdo', 'gallina', 'gato']);
        expect(result).toEqual(soundAndImages('animals', 'gato', ['vaca', 'cerdo', 'gallina', 'gato']));
    });

    it('should return image and texts test', () => {
        chance.integer.mockReturnValue(3);
        chance.shuffle.mockReturnValue(['vaca', 'cerdo', 'gallina', 'gato']);
        const result = createTestHTML('animals', 'gato', ['vaca', 'cerdo', 'gallina', 'gato']);
        expect(result).toEqual(imageAndTexts('animals', 'gato', ['vaca', 'cerdo', 'gallina', 'gato']));
    });

    it('should return image and input test', () => {
        chance.integer.mockReturnValue(4);
        const result = createTestHTML('animals', 'gato', ['vaca', 'cerdo', 'gallina',]);
        expect(result).toEqual(imageAndInput('animals', 'gato'));
    });

    it('should handle unexpected test type', () => {
        chance.integer.mockReturnValue(5);

        const result = createTestHTML('fruits', 'manzana', ['uva', 'banana', 'manzana', 'cereza']);
        expect(result).toBeUndefined();
    });
});