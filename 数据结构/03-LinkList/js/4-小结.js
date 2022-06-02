/*
  (1)将两个升序链表合并为一个新的 升序 链表并返回。
  新链表是通过拼接给定的两个链表的所有节点组成的。 
   输入：l1 = [1,2,4], l2 = [1,3,4]
   输出：[1,1,2,3,4,4]
*/
/*
  (1-1)
*/
var mergeTwoLists = function (l1, l2) {
  //1、判断l1、l2是否为空链表
  if (l1 == null) {
    return l2;
  }
  if (l2 == null) {
    return l1;
  }
  // 2创建一个虚拟头结点
  var p1 = {
    next: null,
  };
  var newHead = p1; //新链表的虚拟头结点
  while (l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      p1.next = l1;
      l1 = l1.next;
    } else {
      p1.next = l2;
      l2 = l2.next;
    }
    p1 = p1.next;
  }
  if (l1 == null) {
    p1.next = l2;
  }
  if (l2 == null) {
    p1.next = l1;
  }
  return newHead.next;
};

/*
  (1-2):
  采用递归的方式
*/
var mergeTwoListsAnother = function (l1, l2) {
  //1、判断l1、l2是否为空链表
  if (l1 == null) {
    return l2;
  }
  if (l2 == null) {
    return l1;
  }
  while (l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      l1.next = mergeTwoListsAnother(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoListsAnother(l1, l2.next);
      return l2;
    }
  }
};

/*
(2)
  给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
  请你将两个数相加，并以相同形式返回一个表示和的链表。
  你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
  输入：l1 = [2,4,3], l2 = [5,6,4]
  输出：[7,0,8]
  解释：342 + 465 = 807.
*/
var addTwoNumbers = function (l1, l2) {
  var head = { next: null };
  var cur = head;
  var sum = 0;
  while (l1 || l2 || sum) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    cur.next = {
      val: parseInt(sum % 10),
      next: null,
    };
    cur = cur.next;
    sum = parseInt(sum / 10);
  }
  return head.next;
};

/*
  (3)旋转链表
  输入：head = [1,2,3,4,5], k = 2
  输出：[4,5,1,2,3]
*/

var rotateRight = function (head, k) {
  console.log('****');
  console.log(head)
  if (head == null || head.next == null) {
    return head;
  }
  console.log('------');
  var dummyNode = {
    next: head,
  };
  // 1、计算链表的长度
  var len = 0;
  var cur = head;
  while (cur) {
    len++;
    cur = cur.next;
  }
  console.log('len:', len);
  // 2、链表index之后的结点需要搬到头部
  var index = len - parseInt(k % len);
  cur = dummyNode;
  for (var i = 0; i < index; i++) {
    cur = cur.next;
  }
  var pre = dummyNode;
  while (cur && cur.next) {
    var temp = cur.next;
    cur.next = cur.next.next;
    temp.next = pre.next;
    pre.next = temp;
    pre = pre.next;
  }
  return dummyNode.next;
};
