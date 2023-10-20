export function handleSuccessfulAuth(userId) {
    sessionStorage.setItem('userID', userId);
    sessionStorage.setItem('loggedIn', 'true');
    window.location.href = '/categories/categories.html';
}