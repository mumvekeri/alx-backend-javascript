const updateStudentGradeByCity = (students, city, newGrades) => students
  .filter((student) => student.location === city)
  .map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
    const gradeValue = matchingGrade ? matchingGrade.grade : 'N/A';
    return { ...student, grade: gradeValue };
  });

export default updateStudentGradeByCity;
