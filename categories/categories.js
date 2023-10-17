import { loggedInCheck } from "../utils/loggedInCheck.js";

loggedInCheck();

const logOut = document.getElementById("log-out");

logOut.addEventListener('click', function () {
    sessionStorage.setItem('loggedIn', 'false');
    window.location.href = '../logIn.html';
});

document.addEventListener('DOMContentLoaded', function () {
    async function getUserCategories(userId) {
        try {
            let response = await fetch(`http://localhost:3000/users/${userId}`);
            let user = await response.json();
            if (user.categories.length > 0) {
                user.categories.forEach(category => {
                    let categoryNameElement = document.getElementById(`text-${category}`);
                    categoryNameElement.innerHTML += ' &#10003;';
                    let categoryImageElement = document.getElementById(`image-${category}`);
                    categoryImageElement.classList.add('category-image-filter');
                })
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    const userId = sessionStorage.getItem("userID");
    const finishCategories = getUserCategories(userId);  
});