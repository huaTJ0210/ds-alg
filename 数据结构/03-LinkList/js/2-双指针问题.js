/*
  (1) 环形链表，
  + 如何判断链表中有环
  + 采用快慢指针的方式，快指针速度为2，慢指针速度为1，当连个指针相等时必定链表中存在环

  输入：head = [3,2,0,-4], pos = 1
  输出：true
  解释：链表中有一个环，其尾部连接到第二个节点。
*/

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || !head.next) {
    return false;
  } else {
    var slow = head;
    var fast = head;
    while (slow && fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next; // fast是否为null，fast.next是否为null；
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }
};

/*
  (2)链表中环的入口点
  + 当快慢指针相等时，慢指针回到head，快指针速度改为1，再次遍历链表，
  + 快慢指针相遇则遍历相等的则为入口点的指针；

  输入：head = [3,2,0,-4], pos = 1
  输出：返回索引为 1 的链表节点
  解释：链表中有一个环，其尾部连接到第二个节点。
*/

var detectCycle = function (head) {
  if (!head || !head.next) {
    return null;
  } else {
    var slow = head;
    var fast = head;
    while (slow && fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        slow = head;
        while (slow && fast) {
          // 先判断是否相等，在进行指针的移动
          if (slow === fast) {
            return slow;
          }
          slow = slow.next;
          fast = fast.next;
        }
      }
    }
    return null;
  }
};

/*
  (3)相交链表
  给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。
*/
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  var len_a = 0;
  var len_b = 0;
  var pa = headA;
  var pb = headB;
  while (pa) {
    len_a++;
    pa = pa.next;
  }
  while (pb) {
    len_b++;
    pb = pb.next;
  }
  pa = headA;
  pb = headB;
  if (len_a > len_b) {
    var i = 0;
    while (i < len_a - len_b) {
      pa = pa.next;
      i++;
    }
  } else if (len_a < len_b) {
    var j = 0;
    while (j < len_b - len_a) {
      pb = pb.next;
      j++;
    }
  }
  while (pa && pb) {
    if (pa === pb) {
      return pa;
    }
    pa = pa.next;
    pb = pb.next;
  }
  return null;
};

/*
  (4) 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
  快慢指针
*/
var removeNthFromEnd = function (head, n) {
  // 构造一个虚拟头结点
  var node = {
    next: head,
  };
  var slow = node;
  var fast = head;
  for (var i = 0; i < n; i++) {
    fast = fast.next;
  }
  while (fast != null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return node.next;
};

