/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    const max_arr = [];
    for (let i = 0; i < nums.length; i++) {
        const one = nums[i];
        if (!max_arr.length) {
            max_arr.push(one)
            continue;
        }
        if (max_arr.length == 1) {
            if (one > max_arr[0]) {
                max_arr.unshift(one)
                continue;
            }
            if (one < max_arr[0]) {
                max_arr.push(one);
                continue;
            }
        }
        if (max_arr.length == 2) {
            if (one < max_arr[1]) {
                max_arr.push(one)
                continue;
            }
            if (one > max_arr[0]) {
                max_arr.unshift(one)
                continue;
            }
            if (one == max_arr[0] || one == max_arr[1]) {
                continue;
            }
            max_arr.splice(1, 0, one)
        }
        if (max_arr.length == 3) {
            if (one > max_arr[0]) {
                max_arr.unshift(one);
                max_arr.pop();
                continue;
            }
            if (one < max_arr[2]) {
                continue;
            }
            if (one < max_arr[0] && one > max_arr[1]) {
                max_arr.splice(1, 0, one)
                max_arr.pop();
                continue;
            }
            if (one < max_arr[1] && one > max_arr[2]) {
                max_arr.pop();
                max_arr.push(one)
                continue;
            }
        }
    }
    if (!max_arr.length) return undefined;
    if (max_arr.length == 1 || max_arr.length == 2) return max_arr[0]
    return max_arr[2]
};
// @lc code=end

