/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
    /**
     * 一、广度优先
     * 复杂度：
     * 1、时间复杂度：o(n)
     * 2、空间复杂度：o(n)
     */
    if (!root) {
        return 0;
    }
    let container = [root];
    let counter = 0;
    while (container.length) {
        cur_root = container.shift()
        if (cur_root.left) {
            container.push(cur_root.left)
        }
        if (cur_root.right) {
            container.push(cur_root.right)
        }
        counter++
    }
    return counter;
};
// @lc code=end

