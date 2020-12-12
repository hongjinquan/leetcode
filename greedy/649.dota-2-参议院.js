/*
 * @lc app=leetcode.cn id=649 lang=javascript
 *
 * [649] Dota2 参议院
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
// Radiant(天辉)和 Dire(夜魇)
var predictPartyVictory = function (senate) {
    /**
     * 复杂度：
     * 1、时间复杂度：o(n + n) = o(2n) ~ o(n)
     * 2、空间复杂度：o(n)
     */
    let slen = senate.length
    let rque = [], dque = [];
    for (let i = 0; i < slen; i++) {
        if (senate[i] == "R") {
            rque.push(i)
        } else {
            dque.push(i)
        }
    }
    while (rque.length && dque.length) {
        if (rque[0] < dque[0]) {
            // (rque[0] + slen)代表当前rque[0]值重新续接到数组的后边，准备下一轮
            rque.push(rque[0] + slen)
        } else {
            dque.push(dque[0] + slen)
        }
        rque.shift()
        dque.shift()
    }
    return rque.length ? "Radiant" : "`Dire"
};
// @lc code=end

