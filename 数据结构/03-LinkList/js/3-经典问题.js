/*
 (1)反转单链表
  输入：head = [1,2,3,4,5]
  输出：[5,4,3,2,1]
*/

var reverseList = function (head) {
  var currentNode = null;
  var newHead = head;
  while (head && head.next) {
      //1、要从当前链表中删除的结点
    currentNode = head.next;
    // 2、删除结点
    head.next = currentNode.next;
    // 3、插入结点到新链表的头部
    currentNode.next = newHead;
    // 4、更新新链表的头部
    newHead = currentNode;
  }
  return newHead;
};

/*
  (2)
  给你一个链表的头节点 head 和一个整数 val ，
  请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
*/

var removeElements = function (head, val) {
  if (head === null) {
    return null;
  }
  var p = head;
  // 先略过头结点
  while (p != null && p.next !== null) {
    if (p.next.val === val) {
      // 删除p.next的结点
      p.next = p.next.next;
      continue; // 防止出现连续重复
    }
    p = p.next;
  }
  if (head.val == val) {
    head = head.next;
  }
  return head;
};

/*
(3)
给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。
请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。
输入: 1->2->3->4->5->NULL
 第一次 ： 1->3->2->4->5->NULL
输出: 1->3->5->2->4->NULL
*/

var oddEvenList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  var end = head;
  var front = head.next;
  while (front && front.next) {
    // (1)保存当前奇数结点
    var temp = front.next;
    // (2)删除当前的奇数结点
    front.next = front.next.next;
    // (3)插入奇数结点到end的结点的后面
    temp.next = end.next;
    end.next = temp;
    // (4) 遍历链表
    end = end.next;
    front = front.next;
  }
  return head;
};

/*
  (4) 
  给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
  输入：head = [1,2,2,1]
  输出：true
  采用递归的方式缩小链表规模；
  然后又头结点开始依次遍历同缩小链表的头结点进行对比；
*/
var current;// 表示递归到最后一个结点时，初始链表开始遍历时的当前结点
var res = true;
var isPalindrome = function (head) {
  current = head;
  return recursivelyCheck(head);
};

var recursivelyCheck = function (head) {
  if (head == null) {
    return true;
  }
  // 比较头结点（minLinkListHead）和当前链表的头结点的val是否一样
  res = recursivelyCheck(head.next) && current.val === head.val;
  current = current.next;
  return res;
};
