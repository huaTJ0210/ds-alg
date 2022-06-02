### 二叉堆

#### 1、分发饼干[455]

> 输入: g = [1,2,3], s = [1,1]
> 输出: 1
> 解释: 
> 你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
> 虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
> 所以你应该输出1。

```javascript
 var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    const numOfChildren = g.length,
      numOfCookies = s.length;
    let count = 0;
    for (
      let i = 0, j = 0;
      i < numOfChildren && j < numOfCookies;
      i++, j++
    ) {
      // 满足当前孩子的最小饼干
      while (j < numOfCookies && g[i] > s[j]) {
        j++;
      }
      if (j < numOfCookies) {
        count++;
      }
    }
    return count;
  };
```

#### 2、柠檬水找零钱[860]

> 输入：bills = [5,5,5,10,20]
> 输出：true
> 解释：
> 前 3 位顾客那里，我们按顺序收取 3 张 5 美元的钞票。
> 第 4 位顾客那里，我们收取一张 10 美元的钞票，并返还 5 美元。
> 第 5 位顾客那里，我们找还一张 10 美元的钞票和一张 5 美元的钞票。
> 由于所有客户都得到了正确的找零，所以我们输出 true。

```javascript
 var lemonadeChange = function (bills) {
  let five = 0,
    ten = 0;
  for (const bill of bills) {
    if (bill === 5) {
      five += 1;
    } else if (bill === 10) {
      if (five === 0) {
        return false;
      }
      five -= 1;
      ten += 1;
    } else {
      if (five > 0 && ten > 0) {
        five -= 1;
        ten -= 1;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
```

