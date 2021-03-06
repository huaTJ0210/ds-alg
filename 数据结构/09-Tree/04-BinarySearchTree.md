### 二分搜索树（BinarySearchTree）

#### 1、什么是二分搜索树

> 1. 二分搜索树是二叉树的一种；
> 2. 当前结点都大于左子树所有结点的值
> 3. 当前结点都小于右子树所有结点的值
> 4. 每一颗子树也是一个二分搜索树

#### 2、二分搜索树的遍历

> 树的遍历：将树中所有结点都访问一遍；

##### 2.1 树的前序遍历（深度优先遍历）

> 1. 遍历根结点（子树根结点）
> 2. 前序遍历左子树
> 3. 前序遍历右子树

##### 2.2 树的中序遍历（深度优先遍历）

> 1. 前序遍历左子树
> 2. 遍历根结点（子树根结点）
> 3. 前序遍历右子树

##### 2.3 树的后序遍历（深度优先遍历）

> 1. 前序遍历左子树
> 2. 前序遍历右子树
> 3. 遍历根结点（子树根结点）

#####  2.4 二分搜索树的层序遍历（广度优先遍历）

> 1. 将当前访问结点（curNode）入队操作；
> 2. 将curNode的左右子结点入队操作；
> 3. 判断队列是否为空，不为空则循环执行步骤1，2

#### 3、二分搜索树的操作

##### 3.1 获取二分搜索树的最小/大元素，并删除



##### 3.2 删除二分搜索树的任意元素