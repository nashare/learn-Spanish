export async function postUserCall(userEmail, userPassword) {
    const response = await fetch('https://fakeapi-server-847135678534.herokuapp.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: userEmail,
            password: userPassword,
            categories: []
        }),
    });
    
    return await response.json();
}