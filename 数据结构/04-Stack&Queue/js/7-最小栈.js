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
  this.minData = [];
  this.size = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.size == 0) {
    this.minData.push(val);
  } else {
    const min = this.getMin();
    if (val < min) {
      this.minData.push(val);
    } else {
      this.minData.push(min);
    }
  }
  this.data.push(val);
  this.size++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.size > 0) {
    this.data.pop();
    this.minData.pop();
    this.size--;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.size > 0) {
    return this.data[this.size - 1];
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.size > 0) {
    return this.minData[this.size - 1];
  }
};

