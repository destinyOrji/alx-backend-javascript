/**
 * Returns an array of ids from a list of student objects.
 * @param {Object[]} students - An array of student objects.
 * @returns {Number[]} An array of student ids.
 */
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map(student => student.id);
}

