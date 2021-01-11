/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    /**
     * 二叉搜索树；根节点值大于左子树所有节点的值，小于右子树所有节点的值。左子树和右子树也是二叉搜索树。
     */
    if (n == 0) {
        return []
    }
    return generateTree(1, n)
};

const generateTree = function (start, end) {
    let allTrees = []
    if (start > end) {
        allTrees.push(null)
        return allTrees;
    }

    for (let i = start; i <= end; i++) {
        // 获得所有的左子树集合
        const leftTree = generateTree(start, i - 1);
        // 获得所有的右子树集合
        const rightTree = generateTree(i + 1, end)

        // # 从左子树集合中选出一棵左子树，从右子树集合中选出一棵右子树，拼接到根节点上
        for (const l of leftTree) {
            for (const r of rightTree) {
                const currTree = new TreeNode(i)
                currTree.left = l;
                currTree.right = r;
                allTrees.push(currTree)
            }
        }
    }
    return allTrees;
}
// @lc code=end

