/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const zeros = {};
  return matrix.reduce((total, row, rowInd) => row.reduce((sum, it, itInd) => {
    if (it === 0) {
      zeros[rowInd] = {
        ...zeros[rowInd],
        [itInd]: 1,
      };
    }

    if (!zeros[rowInd - 1] || !zeros[rowInd - 1][itInd]) {
      return sum + it;
    }
    return sum;
  }, total), 0);
}

module.exports = getMatrixElementsSum;
