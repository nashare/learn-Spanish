export async function getUser(email, password) {
    try {
        const response = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const responseData = await response.json();
        if (responseData.length !== 0) {
            sessionStorage.setItem('userID', responseData[0].id);
            sessionStorage.setItem('loggedIn', 'true');
            window.location.href = '/categories/categories.html';
        } else {
            document.getElementById('serverError').textContent = 'Invalid login credentials. Please try again.';
            document.getElementById('serverError').style.display = 'block';
        }
    } catch (error) {
        console.error('There was an error during the login:', error);
    }
}