/*
 (1)
给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
 给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。
 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
 输入：n = 12
 输出：3 
 解释：12 = 4 + 4 + 4
 */

/*
   这题让求的是若干个平方数的和等于n，并且平方数的个数最少。首先我们可以把它想象成为一颗m叉树，
   树的每一个节点的值都是平方数的和，如下图所示。
每一个节点的值都是从根节点到当前节点的累加。
而平方数的个数其实就是遍历到第几层的时候累加和等于target。
我们只需要一层一层的遍历，也就是常说的BFS，当遇到累加的和等于target的时候直接返回当前的层数即可。
 */

var numSquares = function (n) {
  const queue = [];
  // 记录访问过的结点
  const visited = new Map();
  queue.push(0);
  visited.set(0, 1);
  let level = 0;
  while (queue.length > 0) {
    const size = queue.length;
    level++;
    //遍历当层节点的所有结点
    for (let i = 0; i < size; i++) {
      const digit = queue.shift();
      // 访问当前节点的子节点
      for (let j = 1; j <= n; j++) {
        const nodeValue = digit + j * j;
        if (nodeValue == n) {
          return level;
        }
        if (nodeValue > n) {
          break;
        }
        if (visited.get(nodeValue) != 1) {
          queue.push(nodeValue);
          visited.set(nodeValue, 1);
        }
      }
    }
  }
  return level;
};
