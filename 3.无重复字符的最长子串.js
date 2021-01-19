/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    /**
     * 一、暴利求解
     */
    /* 有问题：需要调试（超时）
    const len = s.length;
    for (let i = len; i > 0; i--) {
        for (let j = 0; j <= len - i; j++) {
            const cur_str = s.substr(j, i)
            const set = new Set(cur_str)
            if (cur_str.length == set.size) {
                return cur_str.length;
            }
        }
    }
    return 0; */
    /**
     * 二、滑动窗口
     */
    let set = new Set()
    let left = 0;
    let max_len = 0;
    let cur_len = 0;
    for (let i = 0; i < s.length; i++) {
        cur_len++;
        while (set.has(s[i])) {
            set.delete(s[left])
            left++;
            cur_len--;
        }
        if (cur_len > max_len) {
            max_len = cur_len;
        }
        set.add(s[i])
    }
    return max_len
};
// @lc code=end
