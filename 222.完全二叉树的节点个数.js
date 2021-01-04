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
     * 一、广度优先(或者深度优先) 遍历节点，暴利解决
     * 复杂度：
     * 1、时间复杂度：o(n)
     * 2、空间复杂度：o(n)
     */
    /* if (!root) {
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
    return counter; */
    /**
     * 二、二分查找 + 位运算
     */
    if (root == null) {
        return 0
    }
    // 先获取树的深度
    let level = 0;
    let node = root
    while (node.left != null) {
        level += 1;
        node = node.left
    }
    // 计算最下一层节点的最大数，使用二分法进行查找
    let low = 1 << level, high = (1 << (level + 1)) - 1;
    while (low < high) {
        const mid = Math.floor((high - low + 1) / 2) + low
        if (nodeExists(root, level, mid)) {
            low = mid;
        } else {
            high = mid - 1
        }
    }
    return low;

};

const nodeExists = (root, level, k) => {
    let bits = 1 << (level - 1);
    let node = root;
    while (node !== null && bits > 0) {
        if (!(bits & k)) {
            node = node.left;
        } else {
            node = node.right;
        }
        bits >>= 1;
    }
    return node !== null;
}
// @lc code=end

