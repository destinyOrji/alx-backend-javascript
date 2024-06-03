/**
 * Returns an array of students for a specific city with their new grade.
 * @param {Object[]} students - An array of student objects.
 * @param {string} city - The city to filter the students by.
 * @param {Object[]} newGrades - An array of new grades for students in the specified city.
 * @returns {Object[]} An array of student objects with their new grade.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(student => student.location === city)
    .map(student => {
      const newGrade = newGrades.find(grade => grade.studentId === student.id);
      return {
        ...student,
        grade: newGrade ? newGrade.grade : 'N/A'
      };
    });
}
