eturns a string of all the set values that start with a specific string.
 * @param {Set} set - The set to clean.
 * @param {String} startString - The string that the set values should start with.
 * @returns {String} A string of set values that start with the specified string, separated by '-'.
 */
export default function cleanSet(set, startString) {
  const filteredValues = Array.from(set).filter(value => value.startsWith(startString));
  return filteredValues.join('-').replace(new RegExp(`^${startString}`), '');
}

