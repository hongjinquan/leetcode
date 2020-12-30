/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const temp_map = new Map()
let postright = 0
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if (inorder.length == 0 || postorder.length == 0) {
        return null
    }
    /**
     * 复杂度：
     * 1、时间复杂度：o(n)
     * 2、空间复杂度：o(n)
     */
    for (let i = 0; i < inorder.length; i++) {
        temp_map.set(inorder[i], i)
    }
    postright = postorder.length - 1
    return buildMyTree(inorder, postorder, 0, inorder.length - 1)
};

const buildMyTree = (inorder, postorder, inleft, inright) => {
    if (inleft > inright) {
        return null;
    }
    // 生成root节点
    const root = new TreeNode(postorder[postright])
    // 从map中获取索引值
    const root_index = temp_map.get(postorder[postright])
    /**
     * 中序：
     *      左子树：inleft -> root_index -1
     *      右子树：root_index +1 -> inright
     * 后续：逐次减一，作为子树的根节点
     * 遍历顺序：先构建右子树，然后构建左子树。因为 后序遍历 是 左右根，从根往前走，应该是先右后坐。
     */
    postright--;
    // 构建右子树
    root.right = buildMyTree(inorder, postorder, root_index + 1, inright)
    // 构建左子树
    root.left = buildMyTree(inorder, postorder, inleft, root_index - 1);
    return root
}
// @lc code=end