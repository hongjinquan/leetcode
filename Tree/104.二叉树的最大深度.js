/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
    /**
     * 方法一：广度优先 （BFS）
     * 思路：从root开始逐层扫描，每次扫描后，层数加1，最后返回总层数既为数的最大深度
     * 复杂度：
     * 1、时间复杂度：o(n)
     * 2、空间复杂度：最好情况为o(1),最坏为o(n), 随着队列的长度变化而变化
     */
    // let res = 0;
    // if (!root) {
    //     return res;
    // }
    // const queue = [root]
    // while (queue.length) {
    //     let q_size = queue.length;
    //     while (q_size > 0) {
    //         const node = queue.shift()
    //         if (node && node.left) queue.push(node.left)
    //         if (node && node.right) queue.push(node.right)
    //         q_size--
    //     }
    //     res++
    // }
    // return res
    /**
     * 方法二：深度优先（DFS）--- 递归
     * 思路：从root开始，先找左孩子，然后找右孩子，节点不存在返回0，存在加1，然后比较取左右孩子取最大值。然后逐层递归。
     * 算法复杂度：
     * 1.时间复杂度：o(n),每个节点都得进行判断
     * 2.空间复杂度：o(height)，height为二叉树的高度。递归函数需要栈空间，栈空间取决于递归的深度。
     */
    if (root) {
        let left_dep = maxDepth(root.left)
        let right_dep = maxDepth(root.right)
        return 1 + Math.max(left_dep, right_dep)
    }
    return 0;
};
// @lc code=end

