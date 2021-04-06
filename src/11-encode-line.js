/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let prev = str[0];
  let count = 1;
  return [...str.slice(1).split(''), '$'].map((c) => {
    let encoded = '';
    if (c === prev) {
      count++;
    } else {
      if (count === 1) {
        encoded = prev;
      } else {
        encoded = `${count}${prev}`;
      }
      prev = c;
      count = 1;
    }
    return encoded;
  }).join('');
}

module.exports = encodeLine;
