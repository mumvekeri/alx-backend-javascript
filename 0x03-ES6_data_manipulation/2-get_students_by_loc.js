// eslint-disable-next-line no-unused-vars
const getStudentsByLocation = (students, city) => {
<<<<<<< HEAD
  const filteredStudents = students.filter((student) => student.location === city);
  return filteredStudents;
=======
    return students.filter((student) => student.location === city);
>>>>>>> 1c9053c1c6f28f6e84996e43ec70eb33c76a2872
};

export default getStudentsByLocation;
