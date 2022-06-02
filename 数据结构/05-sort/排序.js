const nums = [9, 3, 4, 2];

let bubblingSort = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let flag = false; // 记录当次循环是否发生了元素交换
    // nums.length - 1 - i: 待排列数列的剩余元素个数
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
        flag = true;
      }
    }
    if (!flag) {
      break; // 如果没有发生交换则说明数列此时已经是有序的状态
    }
  }
  return nums;
};

let swap = function (nums, left, right) {
  const temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;
};

let selectionSort = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        swap(nums, i, j);
      }
    }
  }
  return nums;
};

let insertSort = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        let last = i;
        const temp = nums[i];
        while (last > j) {
          nums[last] = nums[last - 1];
          last--;
        }
        nums[j] = temp;
      }
    }
  }
  return nums;
};

let insertSort1 = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    let cur = i;
    // 将目标元素与已排序的数列倒序进行互换
    for (let j = i - 1; j >= 0; j--) {
      if (nums[cur] < nums[j]) {
        swap(nums, cur, j);
        cur = j;
      } else {
        break;
      }
    }
  }
  return nums;
};

//

var quickSort = function (nums) {
  if (nums.length < 2) {
    return nums;
  }
  const target = nums[0];
  const left = [];
  const right = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < target) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return quickSort(left).concat([target], quickSort(right));
};

let quickSort1 = function (nums) {
  return sort(nums, 0, nums.length - 1);
};

let sort = function (nums, start, end) {
  if (end - start < 1) {
    return;
  }
  const target = nums[start];
  let left = start;
  let right = end;
  while (left < right) {
    while (left < right && nums[right] >= target) {
      right--;
    }
    nums[left] = nums[right];
    while (left < right && nums[left] < target) {
      left++;
    }
    nums[right] = nums[left];
  }
  nums[left] = target;

  sort(nums, start, left - 1);
  sort(nums, right + 1, end);

  return nums;
};

console.log(quickSort1(nums));
