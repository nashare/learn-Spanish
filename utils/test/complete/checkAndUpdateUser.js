import { getUserById } from "../../getUserById.js";

export async function putUser(user, userId) {
                 
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