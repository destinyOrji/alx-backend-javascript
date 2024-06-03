/**
 * Returns the sum of all student ids.
 * @param {Object[]} students - An array of student objects.
 * @returns {Number} The sum of all student ids.
 */
export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}

