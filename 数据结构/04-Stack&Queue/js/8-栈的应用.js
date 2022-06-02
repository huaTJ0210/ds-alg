/*
  (1)给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。有效字符串需满足：
 左括号必须用相同类型的右括号闭合。
 左括号必须以正确的顺序闭合。
*/

var isValid = function (s) {
  if (!s) {
    return false;
  }
  const sArray = s.split('');
  const stack = [];
  for (let i = 0; i < sArray.length; i++) {
    const char = sArray[i];
    if (char == '(' || char == '[' || char == '{') {
      stack.push(char);
    }
    if (char == ')') {
      if (stack.length > 0) {
        const top = stack.pop();
        if (top != '(') {
          return false;
        }
      } else {
        return false;
      }
    }

    if (char == ']') {
      if (stack.length > 0) {
        const top = stack.pop();
        if (top != '[') {
          return false;
        }
      } else {
        return false;
      }
    }

    if (char == '}') {
      if (stack.length > 0) {
        const top = stack.pop();
        if (top != '{') {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return stack.length == 0;
};

/*
  (2)请根据每日 气温 列表 temperatures ，请计算在每一天需要等几天才会有更高的温度。
  如果气温在这之后都不会升高，请在该位置用 0 来代替。
  输入: temperatures = [73,74,75,71,69,72,76,73]
  输出: [1,1,4,2,1,1,0,0]
*/
var dailyTemperatures = function (temperatures) {
  let stack = [];
  let res = Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const idx = stack.pop();
      res[idx] = i - idx;
    }
    stack.push(i);
  }
  console.log(stack);
  return res;
};

/*
  (3)输入：tokens = ["2","1","+","3","*"]
     输出：9
     解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9

*/

var evalRPN = function (tokens) {
  const stack = [];
  for (let token of tokens) {
    if (token == '+') {
      let num1 = stack.pop();
      let num2 = stack.pop();
      stack.push(num2 + num1);
    } else if (token == '-') {
      let num1 = stack.pop();
      let num2 = stack.pop();
      stack.push(num2 - num1);
    } else if (token == '*') {
      let num1 = stack.pop();
      let num2 = stack.pop();
      stack.push(num2 * num1);
    } else if (token == '/') {
      let num1 = stack.pop();
      let num2 = stack.pop();
      stack.push(parseInt(num2 / num1));
    } else {
      stack.push(parseInt(token));
    }
  }
  return parseInt(stack.pop());
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));
