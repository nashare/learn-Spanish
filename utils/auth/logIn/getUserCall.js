export async function getUserCall(email, password) {
    const response = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`, {
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