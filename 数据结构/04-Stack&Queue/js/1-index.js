/*
 (1) 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
*/

const stack1 = [];
const stack2 = [];

// 入队
function enqueue(val) {
  stack1.push(val);
}
// 出队操作
function dequeuep() {
  if (stack2.length === 0) {
    while (stack1.length > 0) {
      stack2.push(stack1.pop());
    }
  }
  return stack2.pop();
}

/*
 (2) 用两个队列来实现一个栈，完成栈的Push和Pop操作。 栈中的元素为int类型。
  + shift 出队操作
  + push 入队操作
*/

const queue1 = [];
const queue2 = [];

function push(x) {
  if (queue1.length === 0) {
    queue1.push(x);
    while (queue2.length) {
      queue1.push(queue2.shift());
    }
  } else if (queue2.length === 0) {
    queue2.push(x);
    while (queue1.length) {
      queue2.push(queue1.shift());
    }
  }
}
function pop() {
  if (queue1.length !== 0) {
    return queue1.shift();
  } else {
    return queue2.shift();
  }
}

/*
 (3)包含min函数的栈：
 定义栈的数据结构，
 请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
*/
const dataStack = [];
const minStack = [];

function pushData(x) {
  dataStack.push(x);
  if (minStack.length === 0 || x < min()) {
    minStack.push(x);
  } else {
    minStack.push(min());
  }
}

function popData() {
  minStack.pop();
  return dataStack.pop();
}

function top() {
  const len = dataStack.length;
  return len > 0 && dataStack[len - 1];
}

function min() {
  const len = minStack.length;
  return len > 0 && len[len - 1];
}
