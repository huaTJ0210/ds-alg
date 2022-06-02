/*
(1) 
  给定一个含有 n 个正整数的数组和一个正整数 target 。
  找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，
  并返回其长度。如果不存在符合条件的子数组，返回 0 。
  输入：target = 7, nums = [2,3,1,2,4,3]
  输出：2
  解释：子数组 [4,3] 是该条件下的长度最小的子数组。
*/

var minSubArrayLen = function (target, nums) {
  //*维护一个滑动窗口nums[left,right], nums[left...right] < s
  let left = 0;
  let right = -1; // 保证right最终的位置落在数组的最后一位
  let sum = 0;
  let minLen = nums.length + 1; // right -> nums的结尾,解决刚好target的等于整个数组的元素和
  while (left < nums.length) {
    if (sum < target && right + 1 < nums.length) {
      sum += nums[++right];
    } else {
      sum -= nums[left++];
    }
    // **满足其和>=target!!!
    if (sum >= target) {
      minLen = Math.min(right - left + 1, minLen);
    }
  }
  if (minLen == nums.length + 1) {
    return 0;
  }
  return minLen;
};

console.log('(1)minSubArrayLen:', minSubArrayLen(11, [1, 2, 3, 4, 5]));


/*
  (2)输入一个正数S，打印出所有和为S的连续正数序列。
  例如：输入15，有序1+2+3+4+5 = 4+5+6 = 7+8 = 15 所以打印出3个连续序列1-5，4-6和7-8。
*/

function FindContinuousSequence(sum) {
  const result = [];
  const child = [1, 2];
  let big = 2;
  let small = 1;
  let currentSum = 3;
  while (big < sum) {
    while (currentSum < sum && big < sum) {
      child.push(++big);
      currentSum += big;
    }
    while (currentSum > sum && small < big) {
      child.shift();
      currentSum -= small++;
    }
    if (currentSum === sum && child.length > 1) {
      result.push(child.slice());
      child.push(++big);
      currentSum += big;
    }
  }
  return result;
}

console.log('(3-1)FindContinuousSequence', FindContinuousSequence(15));