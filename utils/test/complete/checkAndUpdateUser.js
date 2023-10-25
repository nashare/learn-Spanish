import { putUser } from "./putUser.js";

export async function checkAndUpdateUser(userId, categoryToAdd) {
    try {
        let response = await fetch(`https://fakeapi-server-847135678534.herokuapp.com/users/${userId}`);
        let user = await response.json();

        if (!user.categories.includes(categoryToAdd)) {
            user.categories.push(categoryToAdd);
            putUser(user, userId)
        }
    } catch (error) {
        console.error('Error:', error);
    }
}