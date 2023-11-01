import { getUserCall } from "../../../../utils/auth/logIn/getUserCall.js";

describe('getUserCall', () => {

    global.fetch = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should call fetch with the correct arguments', async () => {
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ id: 1, email: 'test@example.com' })
        });

        const email = 'test@example.com';
        const password = 'test-password';

        await getUserCall(email, password);

        expect(fetch).toHaveBeenCalledWith(`https://fakeapi-server-847135678534.herokuapp.com/users/?email=${email}&password=${password}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    });

    it('should return user data for successful fetch response', async () => {
        const mockUserData = { id: 1, email: 'test@example.com' };

        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockUserData
        });

        const email = 'test@example.com';
        const password = 'test-password';

        const result = await getUserCall(email, password);

        expect(result).toEqual(mockUserData);
    });

    it('should throw error for unsuccessful fetch response', async () => {
        global.fetch.mockResolvedValueOnce({
            ok: false
        });

        const email = 'test@example.com';
        const password = 'test-password';

        await expect(getUserCall(email, password)).rejects.toThrow('Failed to fetch user');
    });

});