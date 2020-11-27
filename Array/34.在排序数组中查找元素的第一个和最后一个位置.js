/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    /***
     * 复杂度：
     * 1、时间复杂度：o(n)
     * 2、空间复杂度：o(1)
     */
    // 目标索引值
    let one = -1, two = -1;
    // 前后索引值，从数组的前后同时开始
    let i = 0
    let j = nums.length - 1
    while (i <= j) {
        if (one != -1 && two != -1) {
            break
        }
        if (nums[i] == target) {
            if (one == -1) one = i;
        }
        if (nums[j] == target) {
            if (two == -1) two = j;
        }
        if (one == -1) i++;
        if (two == -1) j--;
    }
    return [one, two]
};
// @lc code=end

