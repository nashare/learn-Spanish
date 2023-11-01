import { getUserById } from "../getUserById.js";

export async function getUserCategories(userId) {
    try {
        let user = await getUserById(userId);
        if (user.categories.length > 0) {
            user.categories.forEach(category => {
                let categoryNameElement = document.getElementById(`text-${category}`);
                categoryNameElement.innerHTML += ' &#10003;';
                let categoryImageElement = document.getElementById(`content-${category}`);
                categoryImageElement.classList.add('categories-filter');
            })
        }
    } catch (error) {
        console.error('Error:', error);
    }
}