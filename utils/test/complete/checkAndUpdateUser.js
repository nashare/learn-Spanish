export async function checkAndUpdateUser(userId, categoryToAdd) {
    try {
        let response = await fetch(`http://localhost:3000/users/${userId}`);
        let user = await response.json();

        if (!user.categories.includes(categoryToAdd)) {
            user.categories.push(categoryToAdd);

            response = await fetch(`http://localhost:3000/users/${userId}`, {
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