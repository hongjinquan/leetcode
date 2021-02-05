/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    /**
     * 方法一：动态规划一
     * 复杂度：
     * 1、时间复杂度：o(n^2)
     * 2、空间复杂度：o(n^2)
     */
    const len = s.length;
    let dp = []
    let ans = ""
    new Array(len).fill(1).map(item => { dp.push([]) })
    for (let l = 0; l < len; l++) {
        for (let i = 0; i + l < len; i++) {
            let j = i + l;
            if (l == 0) {
                dp[i][j] = true;
            } else if (l == 1) {
                dp[i][j] = s[i] == s[j]
            } else {
                dp[i][j] = (s[i] == s[j] && dp[i + 1][j - 1])
            }
            if (dp[i][j] && l + 1 > ans.length) {
                ans = s.substring(i, i + l + 1)
            }
        }
    }
    return ans;
};
// @lc code=end

