import { postUserCall } from "../../../../utils/auth/signUp/postUserCall.js";

describe('postUserCall', () => {

    global.fetch = jest.fn();

    afterEach(() => {
        fetch.mockClear();
    });

    it('should send a POST request with given user details', async () => {
        const mockResponse = { id: 1, email: 'test@test.com', categories: [] };
        fetch.mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce(mockResponse)
        });

        const userEmail = 'test@test.com';
        const userPassword = 'password';

        const result = await postUserCall(userEmail, userPassword);

        expect(result).toEqual(mockResponse);

        expect(fetch).toHaveBeenCalledWith(
            'https://fakeapi-server-847135678534.herokuapp.com/users',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: userEmail,
                    password: userPassword,
                    categories: []
                })
            }
        );
    });

    it('should handle errors', async () => {
        fetch.mockRejectedValueOnce(new Error('Network Error'));

        const userEmail = 'test@test.com';
        const userPassword = 'test-password';

        await expect(postUserCall(userEmail, userPassword)).rejects.toThrow('Network Error');
    });
});
