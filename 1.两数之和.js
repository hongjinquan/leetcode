/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 时间复杂度 o(n) : 随着nums的长度增加而增加
// 空间复杂度 o(n) : 因为定义了一个字典，空间随着nums的长度而变化
var twoSum = function (nums, target) {
    // 字典
    const obj = {};
    for (let i = 0, length = nums.length; i < length; i++) {
        const one = nums[i]
        if (one in obj) {
            return [obj[one], i]
        } else {
            // 没有则将 【target - one】的值 存入字典中
            obj[target - one] = i;
        }
    }
};
// @lc code=end

