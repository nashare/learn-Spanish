import { createTestHTML, wordAndImages, soundAndImages, imageAndTexts, imageAndInput } from "../../../../utils/test/test/testCreate.js";

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
    const testCases = [
        {
            mockValue: 1,
            shuffledValues: ['uva', 'banana', 'manzana', 'cereza'],
            category: 'fruits',
            name: 'manzana',
            expected: wordAndImages('fruits', 'manzana', ['uva', 'banana', 'manzana', 'cereza']),
            description: 'should return word and images test'
        },
        {
            mockValue: 2,
            shuffledValues: ['vaca', 'cerdo', 'gallina', 'gato'],
            category: 'animals',
            name: 'gato',
            expected: soundAndImages('animals', 'gato', ['vaca', 'cerdo', 'gallina', 'gato']),
            description: 'should return sound and images test'
        },
        {
            mockValue: 3,
            shuffledValues: ['vaca', 'cerdo', 'gallina', 'gato'],
            category: 'animals',
            name: 'gato',
            expected: imageAndTexts('animals', 'gato', ['vaca', 'cerdo', 'gallina', 'gato']),
            description: 'should return image and texts test'
        },
        {
            mockValue: 4,
            shuffledValues: ['vaca', 'cerdo', 'gallina', 'gato'],
            category: 'animals',
            name: 'gato',
            expected: imageAndInput('animals', 'gato'),
            description: 'should return image and input test'
        },
    ];

    testCases.forEach(({ mockValue, shuffledValues, category, name, expected, description }) => {
        it(description, () => {
            chance.integer.mockReturnValue(mockValue);
            chance.shuffle.mockReturnValue(shuffledValues);

            const result = createTestHTML(category, name, shuffledValues);
            expect(result).toStrictEqual(expected);
        });
    });

    it('should handle unexpected test type', () => {
        chance.integer.mockReturnValue(5);

        const result = createTestHTML('fruits', 'manzana', ['uva', 'banana', 'manzana', 'cereza']);
        expect(result).toBeUndefined();
    });
});