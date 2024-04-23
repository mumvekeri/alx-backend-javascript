export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* eslint-disable no-unused-vars */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }
<<<<<<< HEAD
  /* eslint-disable no-undef */
=======
  /* eslint-enable no-unused-vars */
>>>>>>> 0f63e5dd5cb58f32d7a4cf48c06791c1756ee917

  return [task, task2];
}
