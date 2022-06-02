/**
 * @param {number} k : 队列的长度
 */
var MyCircularQueue = function (k) {
  this.data = new Array(k + 1);
  this.head = 0;
  this.tail = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (!this.isFull()) {
    this.data[this.tail] = value;
    this.tail = parseInt((this.tail + 1) % this.data.length);
    return true;
  } else {
    return false;
  }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (!this.isEmpty()) {
    this.head = parseInt((this.head + 1) % this.data.length);
    return true;
  } else {
    return false;
  }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (!this.isEmpty()) {
    return this.data[this.head];
  } else {
    return -1;
  }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (!this.isEmpty()) {
    //??? 队列的最后一个元素位于数组的倒数第二个位置
    return this.data[(this.tail - 1 + this.data.length) % this.data.length];
  } else {
    return -1;
  }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.head === this.tail ? true : false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return (this.tail + 1) % this.data.length === this.head ? true : false;
};

var obj = new MyCircularQueue(4);
var param_1 = obj.enQueue(1);
obj.enQueue(2);
obj.enQueue(3);
obj.enQueue(4);

var param_2 = obj.deQueue();
var param_3 = obj.Front();
var param_4 = obj.Rear();
var param_5 = obj.isEmpty();
var param_6 = obj.isFull();
