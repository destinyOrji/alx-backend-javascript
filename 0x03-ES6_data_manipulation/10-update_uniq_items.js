/**
 * Returns an updated map for all items with initial quantity at 1.
 * @param {Map} map - The map to update.
 * @returns {Map} The updated map.
 * @throws {Error} If the argument is not a map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of map.entries()) {
    if (quantity === 1) {
      map.set(item, 100);
    }
  }

  return map;
}

