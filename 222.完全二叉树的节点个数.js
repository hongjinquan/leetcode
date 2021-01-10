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

/**
 * 判断 k 这个节点是否存在
 * @param {*} root 根节点
 * @param {*} level 树的深度
 * @param {*} k 当前比较的节点
 */
const nodeExists = (root, level, k) => {
    // bits = 1 << (level - 1)，这里之所以为level-1，是因为同一个层的节点，只需要比较高位之后的位数即可，因为高位都一样
    let bits = 1 << (level - 1);
    let node = root;
    // 判断结束条件：节点 == null，则说明节点不存在；node存在 && bits等于0时，则说明从次高位到末位截止，节点都存在
    while (node !== null && bits > 0) {
        /**
         * bits & k：这里做位运算，如果为0，则为左子树，否则为右子树
         *  k是目标节点，bits初始值为次高位的二进制数。比如：k为10（1010），bits则为二进制100
         *  bits通过 1 从次高位逐次右移，跟节点k从顶端到最深层，进行路径对比，进行判断节点是左子树还是右子树。
         *  通过当前节点10的 010 和bits 100作位运算，此时比较 左边的第一位 0 和 1，0 & 1 = 0，则说明路径为向左走
         *  这时把孩子节点作为node节点，bits位运算左或右移动1位，逐次进行递归判断，直到最后节点
         */
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

