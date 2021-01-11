/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const map_temp = new Map()
var buildTree = function (preorder, inorder) {
    /**
     * 思路：
     * 1、前序遍历，第一个节点为root节点
     * 2、中序遍历，root节点前的为左子树的所有节点，root后边的为右子树的所有节点
     * 3、前序遍历：[root, [左子树节点], [右子树节点]]； 中序遍历：[[左子树节点], root, [右子树节点]]
     * 4、以中序遍历的节点作为索引，从先序遍历的节点中截取子树，进行递归
     * ps：
     * 前序遍历和中序遍历的左子树节点个数相等，右子树节点个数相等
     * 复杂度：
     * 1、时间复杂度：o(n) -> 将数组逐渐拆分为1个，需要拆分n次
     * 2、空间复杂度：o(n) -> 使用了一个hashmap
     */
    // 1、生成索引表
    for (let i = 0; i < inorder.length; i++) {
        map_temp.set(inorder[i], i)
    }
    const n = preorder.length
    return myBuildTree(preorder, inorder, 0, n - 1, 0, n - 1)
};

const myBuildTree = (preorder, inorder, preleft, preright, inleft, inright) => {
    // 结束条件
    if (preleft > preright) {
        return null
    }
    // 根节点
    const root_index = preleft
    // 构建根节点
    const root = new TreeNode(preorder[root_index])
    // 从中序遍历中定位root节点的索引值
    const in_root_index = map_temp.get(preorder[root_index])
    /**
     * 中序：
     *      左子树 inleft -> in_root_index - 1,  length = in_root_index- inleft
     *      右子树：in_root_index + 1, inright, length = inright - in_root_index
     * 先序：
     *      左子树：preleft -> preleft + (in_root_index - inleft)
     *      右子树：preleft + (in_root_index - inleft) + 1 -> preright
     */
    // 得到左子树中的节点数目
    const left_subtree_length = parseInt(in_root_index) - inleft
    // 递归构建左子树，并连接根节点
    root.left = myBuildTree(preorder, inorder, preleft + 1, preleft + left_subtree_length, inleft, in_root_index - 1)
    // 递归构建右子树，并连接根节点
    root.right = myBuildTree(preorder, inorder, preleft + left_subtree_length + 1, preright, in_root_index + 1, inright)
    return root;
}
// @lc code=end

