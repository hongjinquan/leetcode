/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    /**
     * 一、深度优先
     * 复杂度：
     * 1、时间复杂度：o(n)
     * 2、空间复杂度：o(h)，h为树的高度
     */
    /* if (!root) {
        return 0;
    }
    if (root.left == null && root.right == null) {
        return 1;
    }
    let min_num = Infinity;
    if (root.left) {
        min_num = Math.min(min_num, 1 + minDepth(root.left))
    }
    if (root.right) {
        min_num = Math.min(min_num, 1 + minDepth(root.right))
    }
    return min_num; */

    /**
     * 二、广度优先
     * 复杂度：
     * 1、时间复杂度：o(n)
     * 2、空间复杂度：o(n)
     */
    if (!root) {
        return 0
    }
    // 定义队列
    let queue = [{ node: root, depth: 1 }];
    while (queue) {
        let { node, depth } = queue.shift()
        if (node.left) {
            queue.push({ node: node.left, depth: depth + 1 })
        }
        if (node.right) {
            queue.push({ node: node.right, depth: depth + 1 })
        }
        if (!node.left && !node.right) {
            return depth;
        }
    }
};
// @lc code=end

