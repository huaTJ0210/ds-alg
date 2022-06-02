/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const dirs = [
  [-1, 0], // 左侧
  [1, 0], // 右侧
  [0, -1], // 上
  [0, 1], // 下
];

var updateMatrix = function (mat) {
  const m = mat.length;
  const n = mat[0].length;

  const res = [];
  for (let i = 0; i < m; i++) {
    res.push([]);
    for (let j = 0; j < n; j++) {
      res[i][j] = 0;
    }
  }

  const visited = [];
  for (let i = 0; i < m; i++) {
    visited.push([]);
    for (let j = 0; j < n; j++) {
      visited[i][j] = false;
    }
  }

  const queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] == 0) {
        queue.push([i, j]);
        visited[i][j] = true;
      }
    }
  }

  while (queue.length > 0) {
    const top = queue.shift();
    let i = top[0];
    let j = top[1];
    for (let k = 0; k < 4; k++) {
      let x = i + dirs[k][0];
      let y = j + dirs[k][1];

      if (x >= 0 && x < m && y >= 0 && y < n && !visited[x][y]) {
        res[x][y] = res[i][j] + 1;
        queue.push([x, y]);
        visited[x][y] = true;
      }
      
    }
  }
  return res;
};

console.log(updateMatrix([[0,0,0],[0,1,0],[1,1,1]]));