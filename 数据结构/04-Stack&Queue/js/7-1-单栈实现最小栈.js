/*
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
push(x) —— 将元素 x 推入栈中。
pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。

*/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.data = [];
  this.min;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.data.length == 0) {
    this.data.push(0);
    this.min = val;
  } else {
    this.data.push(val - this.min);
    if (val < this.mim) {
      this.min = val;
    }
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.data.length == 0) {
    return;
  }
  const top = this.data.pop();
  if (top < 0) {
    // 更新栈的最小值
    this.min -= top;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  let top = this.data.pop();
  if (top > 0) {
    return top + this.min;
  } else {
    return this.min;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};
