/*
  (1) 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
  例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，
  超过数组长度的一半，因此输出2。如果不存在则输出undefined。
*/

// (1-1): 使用额外空间保存数组中元素出现的次数，然后找出具体的元素
function moreThanHalfNums(nums) {
  if (nums && nums.length > 0) {
    const counts = {};
    for (let i = 0; i < nums.length; i++) {
      if (counts[nums[i]]) {
        counts[nums[i]]++;
      } else {
        counts[nums[i]] = 1;
      }
      if (counts[nums[i]] > nums.length / 2) {
        return nums[i];
      }
    }
    return undefined;
  } else {
    return undefined;
  }
}

console.log('(1-1):', moreThanHalfNums([1, 2, 3, 2, 2, 2, 5, 4, 2]));

// (1-2): 不使用额外存储空间，先找到数组中出现最多的那个元素，然后再计算出该元素在数组中出现的次数
function moreThanHalfNumsAnother(nums) {
  if (nums && nums.length > 0) {
    let target = nums[0]; // 设置一个基准值
    let count = 1;
    // 1、当前遍历能够得到出现数组中出现次数比其他元素出现次数的和还要多的那个元素
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === target) {
        count++;
      } else {
        count--;
      }
      if (count === 0) {
        target = nums[i];
        count = 1;
      }
    }
    // 2、重新计算target在数组中出现的次数
    count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
        count++;
      }
    }
    return count > nums.length / 2 ? target : undefined;
  }
}

/*
  (2) 输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。
  求所有子数组的和的最大值，要求时间复杂度为O(n)
  例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。
*/
function findGreateSumOfSubArray(nums) {
  if (nums && nums.length > 0) {
    let sum = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
      if (sum < 0) {
        sum = nums[i];
      } else {
        sum += nums[i];
      }
      if (sum > max) {
        max = sum;
      }
    }
    return max;
  }
  return 0;
}
console.log(
  '(2)findGreateSumOfSubArray:',
  findGreateSumOfSubArray([6, -3, -2, 7, -15, 1, 2, 2])
);

/*
 (3) 扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。
   2-10为数字本身，A为1，J为11...大小王可以看成任何数字，可以把它当作0处理。
*/
function isContinuous(nums) {
  if (nums && nums.length > 0) {
    nums.sort();
    let kingNum = 0;
    let spaceNum = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] === 0) {
        kingNum++;
      } else {
        const space = nums[i + 1] - nums[i];
        spaceNum += space - 1;
      }
    }
    return kingNum - spaceNum >= 0;
  }
  return false;
}
console.log('(3)isContinuous:', isContinuous([2, 0, 0, 5, 6]));

/*
  (4) 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
    并返回它的位置, 如果没有则返回-1（需要区分大小写）。
*/

/*
  (4-1):
   遍历字符串使用map存储每一个字符出现的次数，然后遍历出现次数为1的字符 
    时间复杂度： O(n) 
*/
function firstNotRepeatingChar(str) {
  if (!str) {
    return -1;
  }
  let countMap = {};
  const strArray = str.split('');
  for (let i = 0; i < strArray.length; i++) {
    const c = strArray[i];
    if (countMap[c]) {
      countMap[c]++;
    } else {
      countMap[c] = 1;
    }
  }
  for (let i = 0; i < strArray.length; i++) {
    const c = strArray[i];
    if (countMap[c] === 1) {
      return i;
    }
  }
  return -1;
}

console.log('(4-1):firstNotRepeatingChar', firstNotRepeatingChar('abewqabeq'));

/*
  (4-2):
   遍历字符串使用字符串的indexof和lastindexof比较字符出现的位置是否相等
   时间复杂度： O(n^2) 
*/

function firstNotRepeatingCharAnother(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexof(str[i]) === str.lastIndexOf(str[i])) {
      return i;
    }
  }
  return -1;
}
