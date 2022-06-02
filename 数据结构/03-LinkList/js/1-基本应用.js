function ListNode(x) {
  this.val = x;
  this.next = null;
}

/*
 *(1) 从尾到头打印链表
 *+ 使用头插法反转链表
 *+ 然后顺序打印链表
 */

/*
  (1-1):
  遍历数组使用数组的头部插入保存遍历的链表数据
 */
function printListFromTailToHead(head) {
  const array = [];
  while (head) {
    array.unshift(head.val);
    head = head.next;
  }
  return array;
}
/*
  (1-2):
  使用头插法创建一个新的链表，然后遍历新链表
 */
function printListFromTailToHeadOther(head) {
  const array = [];
  let newHead;
  while (head) {
    const node = {
      val: head.val,
      next: null,
    };
    if (newHead) {
      node.next = newHead;
      newHead = node;
    } else {
      newHead = node;
    }
    head = head.next;
  }
  while (newHead) {
    array.push(newHead.val);
    newHead = newHead.next;
  }
  return array;
}

/*
  (1-3):
  反转链表后，遍历打印即可
 */

/*
 *(2) 删除链表中的结点 O(1)
 *+  1、头结点的情况 2、中间结点且后面仍有结点 3、尾结点的情况
 */

function deleteNode(head, node) {
  if (node.next) {
    // 使用下一个结点覆盖当前node结点；
    node.value = node.next.val;
    node.next = node.next.next;
  } else if (node == head) {
    node == null;
    head = null;
  } else {
    node = head;
    // 遍历到为节点的前一个结点
    while (node.next.next) {
      node = node.next;
    }
    node.next = null;
    node = null;
  }
  return head;
}

/*
 *(2-1) 删除链表中重复的结点
 *+ 使用map先统计链表中每个结点出现的次数
 *+ 遍历删除结点出现次数大于1的结点
 */
function deleteDuplicationNoSort(pHead) {
  const map = {};
  while (!pHead && !pHead.next) {
    let current = pHead;
    while (current) {
      const value = current.val;
      map[current.val] = value ? value + 1 : 1;
      current = current.next;
    }
    current = pHead;
    while (current) {
      const value = map[current.val];
      if (value > 1) {
        deleteNode(pHead, current);
      }
      current = current.next;
    }
  }
  return pHead;
}

/*
 *(2-2) 删除链表中重复的结点，链表已经排好序
 *可以使用递归删除的方式
 */
function deleteDuplication(pHead) {
  if (!pHead || !pHead.next) {
    return pHead;
  } else if (pHead.val === pHead.next.val) {
    let tempNode = pHead.next;
    while (tempNode && pHead.val === tempNode.val) {
      tempNode = tempNode.next;
    }
    return deleteDuplication(tempNode);
  } else {
    pHead.next = deleteDuplication(pHead.next);
    return pHead;
  }
}


/*
   (3) 复制一个复杂链表
   输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，
    另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。
     + 在当前结点上新增节点 1->2->3->4->null  1->1`->2->2`->3->3`->4->4`->null
*/

function Clone(pHead) {
  if (pHead === null) {
    return null;
  }
  cloneNodes(pHead);
  cloneRandom(pHead);
  return reconnectNodes(pHead);
}

function cloneNodes(pHead) {
  let current = pHead;
  while (current) {
    let cloneNode = {
      val: current.val,
      next: current.next,
    };
    current.next = cloneNode;
    current = cloneNode.next;
  }
}

function cloneRandom(pHead) {
  let current = pHead;
  while (current) {
    let cloneNode = current.next;
    if (cloneNode.random) {
      //注意是current.random.next;
      cloneNode.random = current.random.next;
    } else {
      cloneNode.random = null;
    }
    current = cloneNode.next;
  }
}

function reconnectNodes(pHead) {
  let cloneHead = pHead.next;
  let cloneNode = pHead.next;
  let current = pHead;
  while (current) {
    //  1->1`->2->2`->3->3`->4->4`->null
    current.next = cloneNode.next;
    current = cloneNode.next;
    if (current) {
      cloneNode.next = current.next;
      cloneNode = current.next;
    } else {
      cloneNode.next = null;
    }
  }
  return cloneHead;
}
