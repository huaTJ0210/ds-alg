/*
  (1) 两数之和：
  给定 nums = [2, 7, 11, 15], target = 9
  因为 nums[0] + nums[1] = 2 + 7 = 9 
   所以返回 [0, 1]
*/

const twoSum = function (array, target) {
  const _len = array.length;
  const map = new Map();
  for (let i = 0; i < _len; i++) {
    const index = map.get(target - array[i]);
    if (index == undefined) {
      map.set(array[i], i);
    } else {
      return [index, i];
    }
  }
  return [];
};
console.log('(1)twoSum:', twoSum([2, 7, 11, 15], 9));

/*
  (2)三数之和：
  给定一个包含 n 个整数的数组nums，判断 nums 中是否存在三个元素a，b，c ，
  使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

  例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

  满足要求的三元组集合为：
  [
    [-1, 0, 1],
    [-1, -1, 2]
  ]
*/

const threeSum = function (array) {
  const _len = array.length;
  const result = [];
  array.sort((a, b) => a - b);
  for (let i = 0; i < _len; i++) {
    // 重复数字跳过
    if (i && array[i] === array[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = _len - 1;
    while (left < right) {
      const sum = array[i] + array[left] + array[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        result.push([array[i], array[left++], array[right--]]);
        while (array[left] === array[left - 1]) {
          left++;
        }
        while (array[right] === array[right + 1]) {
          right--;
        }
      }
    }
  }
  return result;
};
console.log('(2)threeSum:', threeSum([-1, 0, 1, 2, -1, -4]));
