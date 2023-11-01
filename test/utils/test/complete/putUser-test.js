import { putUser } from "../../../../utils/test/complete/checkAndUpdateUser.js";

global.fetch = jest.fn();

describe('putUser', () => {
    afterEach(() => {
        jest.clearAllMocks(); 
    });

    it('should send a PUT request with the correct data', async () => {
        const mockUser = {
            id: '1',
            categories: ['fruits', 'animals']
        };

        fetch.mockImplementationOnce(() => Promise.resolve());

        await putUser(mockUser, '1');

        expect(fetch).toHaveBeenCalledWith(
            'https://fakeapi-server-847135678534.herokuapp.com/users/1',
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mockUser)
            }
        );
    });

    it('should log an error if the fetch call fails', async () => {
        const mockError = new Error('Network Error');
        fetch.mockImplementationOnce(() => Promise.reject(mockError));

        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

        await putUser({}, '1');

        expect(consoleErrorSpy).toHaveBeenCalledWith('Error:', mockError);

        consoleErrorSpy.mockRestore();
    });
});
