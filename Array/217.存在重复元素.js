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
     * 方法一：适当
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
     * 方法二：省时间费空间
     */
    // return Array.from(new Set(nums)).length !== nums.length
    /**
     * 方法三：费时间省空间
     */
    for (let i = 0; i < nums.length; i++) {
        if (nums.lastIndexOf(nums[i]) != i) {
            return true
        }
    }
    return false;
};
// @lc code=end

