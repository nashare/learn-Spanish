export async function getUserCall(email, password) {
    const response = await fetch(`https://fakeapi-server-847135678534.herokuapp.com/users/?email=${email}&password=${password}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }

    return await response.json();
}