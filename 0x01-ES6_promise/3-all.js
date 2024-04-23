import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
    Promise.all([uploadPhoto(), createUser()])
        .then(([photoResponse, userResponse]) => {
            console.log(`First Name: ${userResponse.firstName}, Last Name: ${userResponse.lastName}`);
        })
        .catch(error => {
            console.error('Signup system offline');
        });
}
