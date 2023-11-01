import { getUserById } from "../../utils/getUserById.js";

global.fetch = jest.fn();

describe('getUserById', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should fetch and return the user data for a given userId', async () => {
        const mockUser = {
            id: '1',
            categories: ['colors']
        };

        fetch.mockImplementationOnce(() => Promise.resolve({
            json: () => Promise.resolve(mockUser)
        }));

        const result = await getUserById('1');

        expect(result).toEqual(mockUser);
        expect(fetch).toHaveBeenCalledWith('https://fakeapi-server-847135678534.herokuapp.com/users/1');
    });

    it('should log an error if fetch fails', async () => {
        const mockError = new Error('Network Error');
        fetch.mockImplementationOnce(() => Promise.reject(mockError));

        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
        await getUserById('1');

        expect(consoleErrorSpy).toHaveBeenCalledWith('Error:', mockError);

        consoleErrorSpy.mockRestore();
    });
});