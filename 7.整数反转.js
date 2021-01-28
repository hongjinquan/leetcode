/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let max_val = Math.pow(2, 31)
    let min_val = -max_val + 1
    let rev = 0;
    while (x != 0) {
        let pop = x % 10;
        x = (x - pop) / 10;
        if (rev > max_val / 10 || (rev == max_val / 10 && pop > 7)) {
            return 0;
        }
        if (rev < min_val / 10 || (rev == min_val / 10 && pop < -8)) {
            return 0;
        }
        rev = rev * 10 + pop;
    }
    return rev
};
// @lc code=end

