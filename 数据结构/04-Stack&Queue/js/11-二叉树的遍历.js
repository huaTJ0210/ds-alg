/*
  https://www.cnblogs.com/du001011/p/11229170.html
*/

/*
  (0)
  使用数组创建一颗二叉树
*/

var TreeNode = function (data) {
  this.data = data;
  this.leftChild = null;
  this.rightChild = null;
};

var createBinaryTree = function (list) {
  let node;
  if (list == null || list.length == 0) {
    return null;
  }
  const data = list.shift();
  if (data != null) {
    node = new TreeNode(data);
    node.leftChild = createBinaryTree(list);
    node.rightChild = createBinaryTree(list);
  }
  return node;
};

/*
 (1) 前序遍历二叉树：
  + 先访问头结点
  + 前序遍历左子树
  + 前序遍历右子树
*/

var preOrder = function (root) {
  if (root == null) {
    return;
  }
  // 先访问头结点
  console.log(root);
  // 再前序访问左子树
  preOrder(root.left);
  // 最后前序访问右子树
  preOrder(root.right);
};

var preOrderStack = function (root) {
  const res = [];
  const stack = [];
  let treeNode = root;
  while (treeNode != null || stack.length > 0) {
    //迭代访问节点的左孩子，并入栈
    while (treeNode != null) {
      res.push(treeNode.data);
      stack.push(treeNode);
      treeNode = treeNode.leftChild;
    }
    // 当前结点没有左孩子
    treeNode = stack.pop();
    treeNode = treeNode.right;
  }
  return res;
};

/*
 (2) 中序遍历二叉树：
  + 先访问左子树
  + 中序遍历左子树
  + 中序遍历右子树
*/

var inOrder = function (treeNode) {
  if (treeNode == null) {
    return;
  }
  inOrder(treeNode.left);
  console.log(treeNode.val);
  inOrder(treeNode.right);
};

var inorderTraversal = function (root) {
  const res = [];
  const stack = [];
  let cur = root;
  while (cur != null || stack.length > 0) {
    while (cur != null) {
      stack.push(cur);
      cur = cur.left;
    }
    const top = stack.pop();
    res.push(top.val);
    cur = top.right;
  }
  return res;
};

/*
 (3) 后序遍历二叉树：
  + 先后序遍历左子树
  + 再后序遍历右子树
  + 最后遍历根节点
*/
var lastOrder = function (treeNode) {
  if (treeNode == null) {
    return;
  }
  lastOrder(treeNode.left);
  lastOrder(treeNode.right);
  console.log(treeNode);
};

var lastOrderStack = function (root) {
  const res = [];
  const stack = [];
  let treeNode = root;
  // 每次遍历最后一次访问的结点
  let lastVisit = null;

  while (treeNode != null || stack.length > 0) {
    while (treeNode != null) {
      stack.push(treeNode);
      treeNode = treeNode.leftChild;
    }
    treeNode = stack.pop();
    // 解决根结点右子树递归回退的问题：treeNode.rightChild == lastVisit
    if (treeNode.rightChild == null || treeNode.rightChild == lastVisit) {
      res.push(treeNode.data);
      lastVisit = treeNode;
      treeNode = null;
    } else {
      stack.push(treeNode);
      treeNode = treeNode.rightChild;
    }
  }
  return res;
};

