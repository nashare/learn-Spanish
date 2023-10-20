export async function postUserCall(userEmail, userPassword) {
    const response = await fetch('http://localhost:3000/users', {
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