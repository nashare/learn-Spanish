export async function checkAndUpdateUser(userId, categoryToAdd) {
    try {
        let response = await fetch(`https://fakeapi-server-847135678534.herokuapp.com/users/${userId}`);
        let user = await response.json();

        if (!user.categories.includes(categoryToAdd)) {
            user.categories.push(categoryToAdd);

            response = await fetch(`https://fakeapi-server-847135678534.herokuapp.com/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
        }
    } catch (error) {
        console.error('Error:', error);
    }
}