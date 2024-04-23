import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  return Promise.all([photoPromise, userPromise])
    .then(([photoResponse, userResponse]) => {
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
