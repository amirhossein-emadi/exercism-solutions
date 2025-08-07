// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  // integer -> [1000, 9999]:
  return `NCC-${Math.round(Math.random() * (9999 - 1000 + 1) + 1000)}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  // floating point -> [41000.0, 42000.0):
  return Math.random() * (42000 - 41000) + 41000;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const planetClasses = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];
  // integer -> [0, planetClasses.length):
  return planetClasses[Math.floor(Math.random() * planetClasses.length)];
}
