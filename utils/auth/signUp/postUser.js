import { handleSuccessfulAuth } from '../handleSuccessfulAuth.js';
import { displayError } from '../displayError.js';
import { postUserCall } from './postUserCall.js';

export async function postUser(email, password) {
    try {
        const response = await postUserCall(email, password);
        if (response) {
            handleSuccessfulAuth(response.id);
        } else {
            displayError(response.error);
        }
    } catch (error) {
        console.error('There was an error during the registration:', error);
    }
}