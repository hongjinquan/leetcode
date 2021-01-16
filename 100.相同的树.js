/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function (p, q) {
    return node_compare(p, q)
};
var node_compare = function (node1, node2) {
    if (node1 != null && node2 != null) {
        if (node1.val != node2.val) {
            return false
        } else {
            if (node_compare(node1.left, node2.left)) {
                return node_compare(node1.right, node2.right);
            } else {
                return false
            }
        }
    } else if (node1 == null && node2 == null) {
        return true;
    }
    return false;
}
// @lc code=end

