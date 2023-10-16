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


document.getElementById("registrationForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("passwordConfirm").value;

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

    if (password !== passwordConfirm) {
        document.getElementById("passwordConfirmError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("passwordConfirmError").style.display = "none";
    }

    if (isValid) {
        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            });

            const responseData = await response.json();

            if (response.ok) {
                sessionStorage.setItem('userID', responseData.id);
                sessionStorage.setItem('loggedIn', 'true');
                window.location.href = "/categories/categories.html";
            } else {
                document.getElementById("serverError").textContent = responseData.error;
                document.getElementById("serverError").style.display = "block";
            }
        } catch (error) {
            console.error("There was an error during the registration:", error);
        }
    }
});
