/*
   （1）调整数组中元素的位置，奇数位于偶数的前面
   [5, 2, 7, 4, 9, 13, 1]
  调整后：[5, 7, 9, 13,1, 4, 2]
*/

/*
  解法（1）：
  两个指针同时从左侧出发，依次遍历，不影响最初的排序位置
*/
function reOrderOddAndEvenArray(array) {
  for (let i = 0, j = i + 1; j < array.length; j++) {
    if (array[i] % 2 === 0) {
      // 坐标i为偶数，坐标j为奇数，则交换两个坐标位置的值，同时坐标右移
      if (array[j] % 2 !== 0) {
        swap(i, j, array);
        i++;
      }
    } else {
      // 坐标i为奇数，则同时坐标右移
      i++;
    }
  }
  return array;
}

/*
  解法（2）：
  使用start和end指针分别从数组的前后两端进行遍历
  此方法会影响数组的最初排序
*/
function reOrderOddAndEvenArrayAnother(array) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    if (array[start] % 2 === 0) {
      if (array[end] % 2 !== 0) {
        swap(start, end, array);
        start++;
      }
      end--;
    } else {
      start++;
    }
  }
  return array;
}

function swap(a, b, array) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

console.log(
  '（1-1）奇数在偶数的前面：',
  reOrderOddAndEvenArray([5, 2, 7, 4, 9, 13, 1])
);
console.log(
  '（1-2）奇数在偶数的前面：',
  reOrderOddAndEvenArrayAnother([5, 2, 7, 4, 9, 13, 1])
);

/*  
    (2-1) 给定 nums = [2, 7, 11, 15], target = 9
    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]
 */

const nums = [2, 7, 11, 15];

function findIndex(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.get(target - arr[i]) !== undefined) {
      return [i, map.get(target - arr[i])];
    }
    map.set(arr[i], i);
  }
}
console.log('(2-1)findIndex', findIndex(nums, 9));

/*
  (2-2)输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，
  如果有多对数字的和等于S，输出两个数的乘积最小的。
*/

function findIndexSum(array, sum) {
  if (array && array.length > 0) {
    let start = 0;
    let end = array.length - 1;
    while (start < end) {
      const sumTemp = array[start] + array[end];
      if (sumTemp > sum) {
        end--;
      } else if (sumTemp < sum) {
        start++;
      } else {
        return [start, end];
      }
    }
  }
  return [];
}
console.log('(2-2)findIndexSum', findIndex([2, 7, 11, 15], 9));

/*
  (4) 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
  输入: [0,1,0,3,12]
  输出: [1,3,12,0,0]
  说明:
  必须在原数组上操作，不能拷贝额外的数组。
  尽量减少操作次数。
*/

var moveZeroes = function (nums) {
  if (nums && nums.length > 0) {
    for (let i = 0, j = i + 1; j < nums.length; j++) {
      if (nums[i] === 0) {
        // 坐标i为0，坐标j不为0，i位置的值 = j位置的值，j位置赋值为0
        if (nums[j] !== 0) {
          nums[i] = nums[j];
          nums[j] = 0;
          i++;
        }
      } else {
        // 坐标i为0，则同时坐标右移
        i++;
      }
    }
  }
  return nums;
};

var moveZeroes1 = function (nums) {
  if (nums && nums.length > 0) {
    let n = nums.length;
    i = -1;
    j = 0;
    while (j < n) {
      if (nums[j] != 0) {
        i += 1;
        nums[i] = nums[j];
      }
      j++;
    }
    for (let j = i + 1; j < n; j++) {
      nums[j] = 0;
    }
  }
  return nums;
};

console.log('(4):moveZeroes', moveZeroes1([0, 1, 0, 3, 12]));

/*
  (5)
  给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
  说明：本题中，我们将空字符串定义为有效的回文串。
  输入: "A man, a plan, a canal: Panama"
  输出: true
  解释："amanaplanacanalpanama" 是回文串
*/
var isPalindrome = function (s) {
  if (s.length == 0) {
    return true;
  }
  // 处理非数字和字母字符
  let temp = '';
  const pattern = /[A-Za-z0-9]/;
  for (let i = 0; i < s.length; i++) {
    if (pattern.test(s[i])) {
      temp += s[i];
    }
  }
  s = temp.toLowerCase();
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
console.log('(5)isPalindrome:', isPalindrome('A man, a plan, a canal: Panama'));

/*
 (6) 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
   输入："hello"
   输出："holle"
   需要注意的是：元音字母有大小写之分
   同时双指针遍历并不是相同位置进行反转
*/
var reverseVowels = function (s) {
  if (s.length > 0) {
    const pattern = /[aeiouAEIOU]/;
    let start = 0;
    let end = s.length - 1;
    const chars = s.split('');
    while (start < end) {
      if (pattern.test(chars[start])) {
        if (pattern.test(chars[end])) {
          let temp = chars[start];
          chars[start] = chars[end];
          chars[end] = temp;
          start++;
        }
        end--;
      } else {
        start++;
      }
    }
    s = chars.join('');
  }
  return s;
};
console.log('(6)reverseVowels:', reverseVowels('aA'));

/*
  (7)盛最多水问题
  输入：[1,8,6,2,5,4,8,3,7]
  输出：49 
  解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

  解题思路：
  盛水量 = min（start，end）* （start-end）；
*/

var maxArea = function (height) {
  let start = 0;
  let end = height.length - 1;
  let max = 0;
  while (start < end) {
    const min = Math.min(height[end], height[start]);
    const tempMax = Math.abs(end - start) * min;
    if (tempMax > max) {
      max = tempMax;
    }
    if (height[end] - height[start] > 0) {
      start++;
    } else {
      end--;
    }
  }
  return max;
};

console.log('(7)maxArea:', maxArea([2, 3, 4, 5, 18, 17, 6]));
