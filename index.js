const loggedIn = sessionStorage.getItem('loggedIn');
const headerLinks = document.querySelector(".header-links");

if (loggedIn === 'true') {
    headerLinks.innerHTML = `
        <a href="./login.html" class="header-link" id="log-out">
            <li>Log Out</li>
        </a>
    `;
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

const logOut = document.getElementById("log-out");
if (logOut) {
    logOut.addEventListener('click', function () {
        sessionStorage.setItem('loggedIn', 'false');
    });
} 
