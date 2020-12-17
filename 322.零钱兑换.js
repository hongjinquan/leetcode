/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const dp = (n) => {
        if (n == 0) return 0;
        if (n < 0) return -1;
        let res = Infinity;
        for (let coin of coins) {
            subproblem = dp(n - coin)
            if (subproblem == -1) continue;
            res = Math.min(res, 1 + subproblem)
        }
        return res != Infinity ? res : -1
    }
    return dp(amount)
};


// @lc code=end

