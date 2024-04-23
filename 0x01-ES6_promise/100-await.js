import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  let photoResponse, userResponse;

  try {
    // Wait for both promises to settle
    [photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);

    return {
      photo: photoResponse,
      user: userResponse
    };
  } catch (error) {
    // Handle any error thrown by uploadPhoto() or createUser()
    console.error('An error occurred:', error);
    return {
      photo: photoResponse || null,
      user: userResponse || null
    };
  }
}

export default asyncUploadUser;

