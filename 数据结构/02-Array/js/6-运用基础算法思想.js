/*
 (1) 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，
 并按照红色、白色、蓝色顺序排列。此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 输入：nums = [2,0,2,1,1,0]
 输出：[0,0,1,1,2,2]
*/

function orderColors(nums) {
  if (nums && nums.length > 0) {
    let start = 0;
    let end = nums.length - 1;
    for (let i = 0; i <= end; i++) {
      // 处理头部的0
      if (nums[i] === 0) {
        swap(i, start, nums);
        start++;
      }
      //处理尾部的2
      if (nums[i] === 2) {
        swap(i, end, nums);
        end--;
        // 避免遗漏转换之后的数据
        i--; // 需要检验交换后i位置的数字
      }
    }
  }
  return nums;
}
function swap(a, b, array) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}
console.log('orderColors:', orderColors([2, 1]));

/*
  (2)给定整数数组nums和整数 k，请返回数组中第 k 个最大的元素。
  请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
  1-堆排序
  2-快速排序
*/

/*
(3)给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
*/

/*
  (3-1):
  设置nums1：[1,2,3]的尾部指针p1，设置nums2：[2,5,6]尾部指针p2；
  选择p1与p2中较大的数字插入到nums1的尾端，
*/
var merge1 = function (nums1, m, nums2, n) {
  let end = nums1.length - 1;
  let p1 = m - 1;
  let p2 = n - 1;
  while (end >= 0) {
    if (nums1[p1] >= nums2[p2] && p1 >= 0) {
      nums1[end] = nums1[p1];
      p1--;
    } else if (nums1[p1] < nums2[p2] && p2 >= 0) {
      nums1[end] = nums2[p2];
      p2--;
    } else {
      if (p1 >= 0) {
        nums1[end] = nums1[p1];
        p1--;
      }
      if (p2 >= 0) {
        nums1[end] = nums2[p2];
        p2--;
      }
    }
    end--;
  }
  return nums1;
};
console.log('(3-1)merge1:', merge1([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

/*
  (3-2)创建一个新数组：
  使用双指针的方式分别遍历两个数组；
  取较小的插入到新数组中，然后移动指针
*/
var merge = function (nums1, m, nums2, n) {
  let res = [];
  let i = 0;
  let p1 = 0;
  let p2 = 0;
  while (i < n + m) {
    if (nums1[p1] >= nums2[p2] && p2 < n) {
      res.push(nums2[p2]);
      p2++;
    } else if (nums1[p1] < nums2[p2] && p1 < m) {
      res.push(nums1[p1]);
      p1++;
    } else {
      if (p1 < m) {
        res.push(nums1[p1]);
        p1++;
      }
      if (p2 < n) {
        res.push(nums2[p2]);
        p2++;
      }
    }
    i++;
  }
  let j = 0;
  while (j < nums1.length) {
    nums1[j] = res[j];
    j++;
  }
  return nums1;
};

console.log('(3-2)merge:', merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));


