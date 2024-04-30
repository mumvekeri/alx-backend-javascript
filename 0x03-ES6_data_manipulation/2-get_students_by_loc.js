// eslint-disable-next-line no-unused-vars
const getStudentsByLocation = (students, city) => {
    return students.filter((student) => student.location === city);
};

export default getStudentsByLocation;
