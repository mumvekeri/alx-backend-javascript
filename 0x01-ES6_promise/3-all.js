import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  return Promise.all([photoPromise, userPromise])
    .then(([photoResponse, userResponse]) => {
      if (photoResponse && userResponse) {
        console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
      } else {
        console.error('Invalid response received');
      }
    })
    .catch(error => {
      console.error('Error occurred:', error.message);
      console.error('Signup system offline');
    });
}
