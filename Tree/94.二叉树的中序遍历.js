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
    if (root != null) {
        // 先左节点，然后根节点，然后右节点
        res = res.concat(inorderTraversal(root.left))
        res.push(root.val)
        res = res.concat(inorderTraversal(root.right))
    }
    return res;
};
// @lc code=end

