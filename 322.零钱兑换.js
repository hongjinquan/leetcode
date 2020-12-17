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
    /**
     * 第一种方法
     * @param {*} n 
     */
    /* const dp = (n) => {
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
    */

    /**
     * 第二种
     */
    /* let temp = []
    const dp = (n) => {
        if (n == 0) return 0;
        if (n < 0) return -1;
        let res = Infinity;
        for (let coin of coins) {
            subproblem = dp(n - coin)
            if (subproblem == -1) continue;
            res = Math.min(res, 1 + subproblem)
        }
        temp[n] = res != Infinity ? res : -1
        return temp[n]
    } 
    return dp(amount)
    */

    // 数组大小为 amount + 1，初始值也为 amount + 1
    let dp = Array(amount + 1).fill(amount + 1);
    // base case
    dp[0] = 0
    // 外层 for 循环在遍历所有状态的所有取值
    for (let i = 0; i < dp.length; i++) {
        // 内层 for 循环在求所有选择的最小值
        for (let coin of coins) {
            // 子问题无解，跳过
            if (i - coin < 0) continue;
            dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
        }
    }
    return (dp[amount] == amount + 1) ? -1 : dp[amount];
};


// @lc code=end

