/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.queue1 = [];
  this.queue2 = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  if (this.queue1.length == 0) {
    this.queue1.push(x);
    while (this.queue2.length > 0) {
      this.queue1.push(this.queue2.shift());
    }
  } else {
    this.queue2.push(x);
    while (this.queue1.length > 0) {
      this.queue2.push(this.queue1.shift());
    }
  }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.queue1.length > 0) {
    return this.queue1.shift();
  }
  if (this.queue2.length > 0) {
    return this.queue2.shift();
  }
  return null;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  if (this.queue1.length > 0) {
    return this.queue1[0];
  }
  if (this.queue2.length > 0) {
    return this.queue2[0];
  }
  return null;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  const len1 = this.queue1.length;
  const len2 = this.queue2.length;
  return len1 + len2 === 0 ? true : false;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
