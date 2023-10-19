import { header } from '../../../components/header/header.js';
import { footer } from '../../../components/footer/footer.js';
import { logInContainer } from '../../../components/main/logIn/logInContainer.js';
import { authForm } from '../../../components/main/authForm/authForm.js';
import { formEmail } from '../../../components/main/authForm/formEmail.js';
import { formPassword } from '../../../components/main/authForm/formPassword.js';
import { formButton } from '../../../components/main/authForm/formButton.js';
import { loggedInCheckForAuth } from '../loggedInCheckForAuth.js';


export function setupLogInPage() {
    
    document.querySelector('header').innerHTML = header();
    document.querySelector('footer').innerHTML = footer();
    document.querySelector('main').innerHTML = logInContainer();
    document.querySelector('.login-container').innerHTML += authForm();
    document.querySelector('.authForm').innerHTML += formEmail();
    document.querySelector('.authForm').innerHTML += formPassword();
    document.querySelector('.authForm').innerHTML += formButton();

    loggedInCheckForAuth();


    document.querySelector(".authForm").addEventListener("submit", async function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

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
                    document.getElementById("serverError").textContent = "Invalid login credentials. Please try again.";
                    document.getElementById("serverError").style.display = "block";
                }
            } catch (error) {
                console.error("There was an error during the login:", error);
            }
        }
    });

}
