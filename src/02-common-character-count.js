/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  return Array.from(new Set(s1)).reduce((count, c) => {
    const regexp = new RegExp(`${c}`, 'g');
    const m1 = s1.match(regexp);
    const m2 = s2.match(regexp);

    return count + (m2 ? Math.min(m1.length, m2.length) : 0);
  }, 0);
}

module.exports = getCommonCharacterCount;
