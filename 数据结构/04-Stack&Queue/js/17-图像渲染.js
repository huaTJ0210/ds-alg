/*
   输入: 
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
输出: [[2,2,2],[2,2,0],[2,0,1]]
解析: 
在图像的正中间，(坐标(sr,sc)=(1,1)),
在路径上所有符合条件的像素点的颜色都被更改成2。
注意，右下角的像素没有更改为2，
因为它不是在上下左右四个方向上与初始点相连的像素点。
*/
const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
let oldColor = image[sr][sc];
var floodFillDFS = function (image, sr, sc, newColor) {
  if (oldColor != newColor) {
    dfs(image, sr, sc, newColor);
  }
  return image;
};

function dfs(image, x, y, newColor) {
  if (
    x >= 0 &&
    x < image.length &&
    y >= 0 &&
    y < image[0].length &&
    image[x][y] == oldColor
  ) {
    for (let i = 0; i < 4; i++) {
      let x1 = x + dirs[i][0];
      let y1 = y + dirs[i][1];
      dfs(image, x1, y1, newColor);
    }
  }
}

/*
   BFS:
   (1) 创建一个队列，并将要遍历的第一个结点入队
   （2）创建一个visited记录已经遍历过的结点
   （3）当队列的size不为0时，遍历当前队列中的每一个结点，并把符合条件的当前结点的下一个结点（多个子节点）入队
   （4）
*/

var floodFill = function (image, sr, sc, newColor) {
  let oldColor = image[sr][sc];
  if (oldColor != newColor) {
    // (1)
    const queue = [];
    queue.push([sr, sc]);
    image[sr][sc] = newColor;

    // (2)记录已访问结点
    const visited = [];
    const n = image.length;
    const m = image[0].length;
    for (let i = 0; i < n; i++) {
      visited.push(Array(m).fill(false));
    }
    visited[sr][sc] = true;

    // (3)
    while (queue.length > 0) {
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const top = queue.shift();
        const x = top[0];
        const y = top[1];
        if (image[x][y] == oldColor) {
          image[x][y] = newColor;
        }
        // 上
        if (x >= 1 && image[x - 1][y] == oldColor && !visited[x - 1][y]) {
          queue.push([x - 1, y]);
          visited[x - 1][y] = true;
        }
        // 下
        if (
          x +1 < image.length &&
          image[x + 1][y] == oldColor &&
          !visited[x + 1][y]
        ) {
          queue.push([x + 1, y]);
          visited[x + 1][y] = true;
        }
        // 左
        if (y >= 1 && image[x][y - 1] == oldColor && !visited[x][y - 1]) {
          queue.push([x, y - 1]);
          visited[x][y - 1] = true;
        }
        // 右
        if (
          y + 1 < image[0].length &&
          image[x][y + 1] == oldColor &&
          !visited[x][y + 1]
        ) {
          queue.push([x, y + 1]);
          visited[x][y + 1] = true;
        }
      }
    }
  }
  return image;
};
