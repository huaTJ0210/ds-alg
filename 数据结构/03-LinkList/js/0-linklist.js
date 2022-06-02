/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.head = null; // 链表的头结点
  this.size = 0; // 链表的长度
};

var LinkNode = function (val, next) {
  this.val = val;
  this.next = next || null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index > this.size - 1) {
    return -1;
  }
  var p = this.head;
  for (var i = 0; i < index; i++) {
    p = p.next;
  }
  if (p) {
    return p.val;
  } else {
    return -1;
  }
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.addAtIndex(0, val);
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  this.addAtIndex(this.size, val);
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) {
    // throw new TypeError('add index is Error');
    return;
  }
  if (this.head === null) {
    this.head = new LinkNode(val);
  } else {
    var p = this.head;
    for (var i = 0; i < index - 1; i++) {
      p = p.next;
    }
    var node = new LinkNode(val);
    node.next = p.next.next;
    p.next = node;
  }
  this.size++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index > this.size - 1) {
    return;
  }
  let p = this.head;
  if (index === 0) {
    this.head = p.next;
  } else {
    for (var i = 0; i < index - 1; i++) {
      p = p.next;
    }
    p.next = p.next.next;
  }
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
