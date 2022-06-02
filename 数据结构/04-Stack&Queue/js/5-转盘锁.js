/*
你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字：
'0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。
每个拨轮可以自由旋转：例如把 '9' 变为 '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。
锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。
列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。
字符串 target 代表可以解锁的数字，你需要给出解锁需要的最小旋转次数，如果无论如何不能解锁，返回 -1 。

输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
输出：6
解释：
可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，
因为当拨动到 "0102" 时这个锁就会被锁定。

输入: deadends = ["8888"], target = "0009"
输出：1
解释：
把最后一位反向旋转一次即可 "0000" -> "0009"。


*/

var openLock = function (deadends, target) {
  if (target === '0000') {
    return 0;
  }
  const map = new Map();
  for (dead of deadends) {
    if (dead == '0000') {
      return -1;
    } else {
      map.set(dead, 1);
    }
  }
  // 创建队列
  const queue = [];
  // 记录访问过的节点
  const visited = new Map();
  queue.push('0000');
  visited.set('0000', 1);
  // 树的层数
  let level = 0;
  while (queue.length > 0) {
    let size = queue.length;
    while (size-- > 0) {
      // 每个结点的值
      let str = queue.shift();
      // 对每个结点中的4个数字分别进行加1和减1操作，相当于创建了8个结点，
      // 这8个结点可以类比二叉树的左右结点
      for (let i = 0; i < 4; i++) {
        const ch = str.substring(i, 1);
        // strAdd 表示加1的结果 strSub表示减1的结果
        let strAdd =
          str.substring(0, i) +
          (ch == '9' ? 0 : ch - 0 + 1) +
          str.substring(i + 1);
        let strSub =
          str.substring(0, i) +
          (ch == '0' ? 9 : ch - '0' - 1) +
          str.substring(i + 1);
        if (str === target) {
          return level;
        }
        // 不能包含死亡数字也不能包含访问过的字符串
        if (visited.get(strAdd) != 1 && !map.get(strAdd) != 1) {
          queue.push(strAdd);
          visited.set(strAdd, 1);
        }
        if (visited.get(strSub) != 1 && map.get(strSub) != 1) {
          queue.push(strSub);
          visited.set(strSub, 1);
        }
      }
    }
    level++;
  }
  return level;
};
