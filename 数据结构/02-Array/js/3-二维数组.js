/*
  (1)输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
    1 2 3 4 
    5 6 7 8
    9 10 11 12 
    13 14 15 16 
*/

// 顺时针打印
function printMatrix(matrix) {
  var start = 0;
  var rows = matrix.length;
  var coloums = matrix[0].length;
  var result = [];
  if (!rows || !coloums) {
    return false;
  }
  // 打印的圈数：
  while (coloums > start * 2 && rows > start * 2) {
    printCircle(matrix, start, coloums, rows, result);
    start++;
  }
  return result;
}

// 打印一圈
function printCircle(matrix, start, coloums, rows, result) {
  var entX = coloums - start - 1;
  var endY = rows - start - 1;
  for (var i = start; i <= entX; i++) {
    result.push(matrix[start][i]);
  }
  if (endY > start) {
    for (var i = start + 1; i <= endY; i++) {
      result.push(matrix[i][entX]);
    }
    if (entX > start) {
      for (var i = entX - 1; i >= start; i--) {
        result.push(matrix[endY][i]);
      }
      if (endY > start + 1) {
        for (var i = endY - 1; i > start; i--) {
          result.push(matrix[i][start]);
        }
      }
    }
  }
}

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log('printMatrix:', printMatrix(matrix));
