/*
输入：s = "3[a]2[bc]"
输出："aaabcbc"

输入：s = "3[a2[c]]"
输出："accaccacc"
*/

var decodeString = function (s) {
  if (!s) {
    return '';
  }
  const strArray = s.split('');
  const stack = [];
  const str = /[a-zA-Z]/;
  const digit = /[0-9]/;
  for (ch of strArray) {
    if (ch != ']') {
      stack.push(ch);
    } else {
      let c = '';
      // 1 拼接字母
      while (str.test(stack[stack.length - 1])) {
        c = stack.pop() + c;
      }
      // 2 拿到‘[’
      const left = stack.pop();
      // 3 拿到数字，重复字母
      let num = '';
      while (digit.test(stack[stack.length - 1])) {
         num = stack.pop()+num;
      }
      num = parseInt(num);
    
      let repeat = '';
      for (let i = 0; i < num; i++) {
        repeat += c;
      }
      stack.push(repeat);
    }
  }
  let res = '';
  while (stack.length > 0) {
    res = stack.pop() + res;
  }
  return res;
};

console.log(decodeString("10[leetcode]"));
