/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    // 初始化时候，路径应该是[]，选择列表为nums
    let result = []
    backtrack(nums, [], result)
    return result
};

/**
 * 回溯算法
 * @param {*} nums 选择列表
 * @param {*} temp_res 走过的路径记录
 */
const backtrack = (nums, temp_res, result) => {
    // 条件满足判断，当前的路径已经走完也即路径长度跟原来选择的列表一样长度
    if (nums.length == temp_res.length) {
        result.push([...temp_res])
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        /**
         * 做选择：路径.push(选择)
         */
        if (temp_res.includes(nums[i])) {
            continue;
        }
        temp_res.push(nums[i])
        backtrack(nums, temp_res, result)
        /**
         * 撤销选择：路径.pop(选择)
         */
        temp_res.pop(nums[i])
    }
}
// @lc code=end

