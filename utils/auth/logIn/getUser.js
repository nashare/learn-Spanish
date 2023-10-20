import { getUserCall } from './getUserCall.js';
import { handleSuccessfulAuth } from '../handleSuccessfulAuth.js';
import { displayLoginError } from '../displayError.js';

export async function getUser(email, password) {
    try {
        const userData = await getUserCall(email, password);
        if (userData.length !== 0) {
            handleSuccessfulAuth(userData[0].id);
        } else {
            displayLoginError('Invalid login credentials. Please try again.');
        }
    } catch (error) {
        console.error('There was an error during the login:', error);
    }
}

