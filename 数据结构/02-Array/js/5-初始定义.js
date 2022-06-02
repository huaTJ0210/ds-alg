/*
 （1）给你一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，并返回移除后数组的新长度。
  不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
  元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
*/

/*
  (1-1):会改变数组的原来排序
*/
function removeElement(nums, val) {
  if (nums && nums.length > 0) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      if (nums[left] === val) {
        if (nums[right] !== val) {
          nums[left] = nums[right];
        }
        right--;
      } else {
        left++;
      }
    }

    return right + 1;
  }
}
console.log('removeElement:', removeElement([1, 2, 2, 3, 3], 2));

/*
  (1-2):删除后保证原数组的顺序不变
*/
function removeElementOther(nums, value) {
  if (nums && nums.length > 0) {
    let size = 0;
    for (let i = 0, j = 1; j < nums.length; j++) {
      if (nums[i] === value) {
        if (nums[j] !== value) {
          nums[i] = nums[j];
          i++;
          size++;
        }
      } else {
        i++;
        size++;
      }
    }
    return size;
  }
}

console.log('(1-2)removeElementOther:', removeElementOther([1, 2, 2, 3, 3], 2));

/*
 (2)  给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
*/

function removeRepeatElement(nums) {
  if (nums && nums.length > 0) {
    let size = 1;
    for (let i = 0, j = 1; j < nums.length; j++) {
      if (nums[i] !== nums[j]) {
        nums[i + 1] = nums[j];
        i++;
        size++;
      }
    }
    return size;
  }
}
console.log(
  'removeRepeatElement:',
  removeRepeatElement([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
);

/*
 (3)给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。
  不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
*/
function removeDuplicates(nums) {
  if (nums && nums.length > 0) {
    let len = 0;
    let n = 2;
    for (let i = 0; i < nums.length; i++) {
      if (len < n || nums[i] != nums[len - n]) {
        nums[len++] = nums[i];
      }
    }
    return len;
  }
}

console.log(
  'removeDuplicates:',
  removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
);
