/*
 (1) 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
此外，你可以假设该网格的四条边均被水包围。

输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1

*/

var numIslands = function (grid) {
  if (grid == null || grid.length == 0) {
    return 0;
  }
  var count = 0;
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        // DFS把当前位置的上下左右4个位置为’1‘的都重置为’0‘
        dfs(grid, i, j);
      }
    }
  }
  return count;
};

// DFS就是沿着一条路径一直走下去，当遇到终止条件的时候才会返回
function dfs(grid, i, j) {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] == '0'
  ) {
    return;
  }
  // 把当前格子重置为’0‘
  grid[i][j] = '0';
  dfs(grid, i - 1, j); // 上
  dfs(grid, i + 1, j); // 下
  dfs(grid, i, j - 1); //左侧
  dfs(grid, i, j + 1); //右侧
}

// BFS就是先把当前位置附近的访问一遍，就像下面这样先访问圈内的，然后再把圈放大继续访问，
function bfs(grid, x, y) {
  grid[x][y] = '0';
  let n = grid.length;
  let m = grid[0].length;
  // 使用队列存储格子坐标转化的值
  let queue = [];
  let code = x * m + y;
  queue.push(code);
  while (queue.length > 0) {
    code = queue.shift();
    // 将code转化为坐标（i,j）
    let i = code / m;
    let j = code % m;
    if (i > 0 && grid[i - 1][j] == '1') {
      // 上面的格子是’1‘把他重置为’0‘
      grid[i - 1][j] = '0';
      queue.push((i - 1) * m + j);
    }
    if (i < n - 1 && grid[i + 1][j] == '1') {
      // 下面的格子是’1‘，则重置为’0‘
      grid[i + 1][j] = '0';
      queue.push((i + 1) * m + j);
    }
    if (j > 0 && grid[i][j - 1] == '1') {
      // 左侧的格子是’1‘，则重置为’0‘
      grid[i][j - 1] = '0';
      queue.push(i * m + j - 1);
    }
    if (j < m - 1 && grid[i][j + 1 == '1']) {
      // 右侧的格子是’1‘，则重置为’0‘
      grid[i][j + 1] = '0';
      queue.push(i * m + j + 1);
    }
  }
}

/*
  (2)二叉树的BFS
*/

function bfsTree(tree) {
  const queue = [];
  queue.push(tree);
  while (queue.length > 0) {
    const node = queue.shift();
    if (node.left != null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
}

function bfsTreeLevel(tree) {
  const queue = [];
  queue.push(tree);
  let level = 0;
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      // 把当前层级的node结点都做出列
      const node = queue.shift();
      if (node.left != null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    level++;
  }
  return level;
}
