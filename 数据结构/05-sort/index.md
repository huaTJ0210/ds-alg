### 排序

#### 1、冒泡排序

#####   1.1 冒泡基本思想

> 冒泡排序[从小到大排序]：
>
> + 第1次遍历：第1位与第2位比较，小的放在前面；第2位与第3位比较，小的放在前面；依次类推，一趟排序能把最大数沉底；
> + 第2次遍历：重复第一次遍历的算法，再次将最大数沉到倒数第二位；
> + ... n次后数列排序完成；

#####   1.2 复杂度

> + 时间复杂度：O(n^2)
> + 空间复杂度：O(1)
> + 稳定性：稳定 （不会改变原有的排列顺序）

##### 1.3 冒泡排序优化

> + 每次遍历后待排列的数列元素会减少1，因为最大值已经沉底，不需要再次比较；
> + 如果当前遍历出现元素没有交换的情况，说明此时队列已经排好序，可以结束了；

##### 1.4 代码实现

```javascript
const nums = [9, 3, 4, 2, 5, 7, 8, 6, 1];

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

```

#### 2、选择排序

#####  2.1 基本思想

> 每次遍历选择头部元素为最小基准，比头部元素小的就和头部元素交换；
>
> 第1次遍历头部元素是位置为：0的元素；
>
> 第2次遍历头部元素是位置为：1的元素；
>
> 第n-2次遍历头部元素时位置为：n-2的元素

#####   2.2 复杂度

> + 时间复杂度：O(n^2)
> + 空间复杂度：O(1)
> + 稳定性：不稳定 （不会改变原有的排列顺序）

#####   2.3 代码实现

```javascript
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
```

#### 3、插入排序

#####  3.1 基本思想

> 假定数列的第一个元素为已经排序的数列，则其他数列依次根据大小插入到这个有序数列中去

#####   3.2 复杂度

> + 时间复杂度：O(n^2)
> + 空间复杂度：O(1)
> + 稳定性：稳定 （不会改变原有的排列顺序）

#####   3.3 代码实现1

```javascript
let insertSort = function (nums) {
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
```

##### 3.4 代码实现2

> 使用插入的方式，需要移动已排序好的数列
>
> 时间复杂度：O(n^3) 

```javascript
let insertSort = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        let last = i;// 当前数列的最后一位
        const temp = nums[i];// 保存当前待插入的元素
        // 为待插入的元素腾出位置
        while (last > j) {
          nums[last] = nums[last - 1];
          last--;
        }
        // 执行插入操作
        nums[j] = temp;
      }
    }
  }
  return nums;
};
```



#### 4、快速排序

#####  4.1 基本思想

> 选择数列的基准数（假设选择为第一个A），遍历数列将小于A的放在左侧，将大于A的放在右侧；
>
> 然后对左侧和右侧分别进行递归快速排序；

#####   4.2 复杂度

> + 时间复杂度：O(nlogn)
> + 空间复杂度：O(logn)
> + 稳定性：不稳定 

#####   4.3 代码实现1

> 需要使用额外的内存空间

```javascript
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
```

##### 4.4 代码实现2

> 不使用额外的空间

```javascript
let quickSort1 = function (nums) {
  return sort(nums, 0, nums.length - 1);
};

let sort = function (nums, start, end) {
  if (end - start < 1) {
    return;
  }
  // 数列首位为目标元素
  const target = nums[start];
  let left = start;
  let right = end;
  while (left < right) {
    // 数列尾部开始如果元素大于target，right指针就左侧移动一位
    while (left < right && nums[right] >= target) {
      right--;
    }
    nums[left] = nums[right];
    // 数列头部开始如果元素小于target，left指针就右侧移动一位
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
```

