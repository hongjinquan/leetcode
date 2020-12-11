/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let res = []
    temp_doing(root, res)
    return res;
};
var temp_doing = function (root, res) {
    if (root != null) {
        // 先左节点，然后根节点，然后右节点
        temp_doing(root.left, res)
        res.push(root.val)
        temp_doing(root.right, res)
    }
}
// @lc code=end

