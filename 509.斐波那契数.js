/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    /**
     * 方法一：递归函数
     * 复杂度：
     * 1、时间复杂度：o(n^2) * o(1) = o(n^2)
     * 2、空间复杂度：o(1)
     */
    /*  if (n == 0) {
         return 0
     }
     if (n == 1 || n == 2) {
         return 1
     }
     return fib(n - 1) + fib(n - 2) */

    /**
     * 方法二：备忘录方式，解决重复计算问题
     * 复杂度：
     * 1、时间复杂度：o(n) * o(1) = o(n)
     * 2、空间复杂度：o(n)
     */
    const res = noted([], n)
    return res;
    /**
     * 方法三：DP table 方式
     */
};

const noted = (temp, n) => {
    if (n == 0) {
        return 0;
    }
    if (n == 1 || n == 2) {
        return 1;
    }
    if (temp[n]) {
        return temp[n]
    }
    temp[n] = noted(temp, n - 1) + noted(temp, n - 2)
    return temp[n]
}
// @lc code=end

