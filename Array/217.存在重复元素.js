/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    /**
     * 方法一
     */
    // const set_temp = new Set()
    // for (let i = 0; i < nums.length; i++) {
    //     if (set_temp.has(nums[i])) {
    //         return true;
    //     } else {
    //         set_temp.add(nums[i])
    //     }
    // }
    // return false;
    /**
     * 方法二
     */
    return Array.from(new Set(nums)).length !== nums.length
};
// @lc code=end

