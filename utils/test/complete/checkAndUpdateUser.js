import { getUserById } from "../../getUserById.js";

export async function putUser(user, userId) {
    try {
        await fetch(`https://fakeapi-server-847135678534.herokuapp.com/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function checkAndUpdateUser(userId, categoryToAdd) {
    try {
        let user = await getUserById(userId)
        if (!user.categories.includes(categoryToAdd)) {
            user.categories.push(categoryToAdd);
            await putUser(user, userId)
        }
    } catch (error) {
        console.error('Error:', error);
    }
}