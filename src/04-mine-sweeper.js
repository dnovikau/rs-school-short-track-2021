/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = matrix.map((row, rowInd) => row.map((it, itInd) => {
    let count = it ? -1 : 0;
    for (let i = rowInd - 1; i <= rowInd + 1; i++) {
      if (matrix[i]) {
        for (let j = itInd - 1; j <= itInd + 1; j++) {
          if (matrix[i][j]) {
            count++;
          }
        }
      }
    }

    return count;
  }));

  return result;
}

module.exports = minesweeper;
