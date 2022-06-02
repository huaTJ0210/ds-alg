/*
  (1) 
给你无向 连通 图中一个节点的引用，请你返回该图的 深拷贝（克隆）。
图中的每个节点都包含它的值 val（int） 和其邻居的列表（list[Node]）。

  输入：adjList = [[2,4],[1,3],[2,4],[1,3]]
输出：[[2,4],[1,3],[2,4],[1,3]]
解释：
图中有 4 个节点。
节点 1 的值是 1，它有两个邻居：节点 2 和 4 。
节点 2 的值是 2，它有两个邻居：节点 1 和 3 。
节点 3 的值是 3，它有两个邻居：节点 2 和 4 。
节点 4 的值是 4，它有两个邻居：节点 1 和 3 。

*/

var cloneGraph = function (node) {
  return cloneDFS(node, new Map());
};

var cloneDFS = function (node, visited) {
  if (node == null) {
    return null;
  }
  if (visited.get(node.val)) {
    return visited.get(node.val);
  }
  const newNode = { val: node.val, neighbors: [] };
  visited.set(node.val, newNode);
  for (neighbor of node.neighbors) {
    newNode.neighbors.push(cloneDFS(neighbor, visited));
  }
  return newNode;
};

var cloneBFS = function (node) {
  if (node == null) {
    return null;
  }
  const queue = [];
  const visited = new Map();
  queue.push(node);
  const startNode = { val: node.val, neighbors: [] };
  visited.set(node, startNode);
  while (queue.length > 0) {
    const cur = queue.shift();
    for (neighbor of cur.neighbors) {
      if (visited.get(neighbor)) {
        const n = visited.get(neighbor); // 新创建的节点
        // 获取【当前结点】关联的【克隆结点】的相邻结点列表
        visited.get(cur).neighbors.push(n);
      } else {
        const copyNode = { val: neighbor.val, neighbors: [] };
        visited.set(neighbor, copyNode);
        visited.get(cur).neighbors.push(copyNode);
        queue.push(neighbor);
      }
    }
  }
  return startNode;
};
