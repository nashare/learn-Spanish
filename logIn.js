const loggedIn = sessionStorage.getItem('loggedIn');
const headerLinks = document.querySelector('.header-links');
if (loggedIn === 'true') {
    window.location.href = "/categories/categories.html";
} else {
    headerLinks.innerHTML = `
        <a href="./signup.html" class="header-link">
            <li>Sign Up</li>
        </a>
        <a href="./login.html" class="header-link">
            <li>Log In</li>
        </a>
    `;
    sessionStorage.setItem('loggedIn', 'false');
}

document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    let isValid = true;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    if (password.length < 8) {
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("passwordError").style.display = "none";
    }
    
    if (isValid) {
        try {
            const response = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const responseData = await response.json();

            if (Object.keys(responseData).length !== 0) {
                sessionStorage.setItem('userID', responseData[0].id);
                sessionStorage.setItem('loggedIn', 'true');
                window.location.href = "/categories/categories.html";
            } else {
                document.getElementById("loginServerError").textContent = "Invalid login credentials. Please try again.";
                document.getElementById("loginServerError").style.display = "block";
            }
        } catch (error) {
            console.error("There was an error during the login:", error);
        }
    }
});
