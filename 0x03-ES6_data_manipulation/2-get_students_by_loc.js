/**
 * Returns an array of student objects who are located in a specific city.
 * @param {Object[]} students - An array of student objects.
 * @param {String} city - The city to filter the students by.
 * @returns {Object[]} An array of student objects located in the specified city.
 */
export default function getStudentsByLocation(students, city) {
  return students.filter(student => student.location === city);
}

