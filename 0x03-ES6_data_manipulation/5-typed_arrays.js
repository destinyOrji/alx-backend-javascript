/**
 * Returns a new ArrayBuffer with an Int8 value at a specific position.
 * @param {Number} length - The length of the ArrayBuffer.
 * @param {Number} position - The position to insert the Int8 value.
 * @param {Number} value - The Int8 value to insert.
 * @returns {DataView} A DataView representing the new ArrayBuffer.
 * @throws {Error} If the position is outside the range of the ArrayBuffer.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);

  return view;
}

