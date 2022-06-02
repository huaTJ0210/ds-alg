/*
输入：nums = [1,1,1,1,1], target = 3
输出：5
解释：一共有 5 种方法让最终目标和为 3 。
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3
*/
let count = 0;
var findTargetSumWays = function (nums, target) {
  let count = 0;
  dfs(nums, 0, 0, target);
  return count;
};

var dfs = function (nums, index, sum, target) {
  if (index == nums.length && sum == target) {
    count++;
  }
  if (index < nums.length) {
    dfs(nums, index + 1, sum + nums[index], target);
    dfs(nums, index + 1, sum - nums[index], target);
  }
};

/*
  class Solution {
    private int count = 0;
    public int findTargetSumWays(int[] nums, int S) {
        dfs(nums,0,S,0);
        return count;
    }
    public void dfs(int[] nums, int index,int target, int current){
        if (index == nums.length){
            if (target == current){
                count++;
            }
            return;
        }

        dfs(nums, index + 1, target, current + nums[index]);
        dfs(nums, index + 1, target, current - nums[index]);
    }
}

*/
