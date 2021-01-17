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
    // return node_compare(p, q)
    return node_compare_bfs(p, q)
};
var node_compare = function (node1, node2) {
    /**
     * 方法一：深度优先（DFS）
     */
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

const node_compare_bfs = function (node1, node2) {
    /**
     * 方法二：广度优先（BFS）
     */
    if (node1 == null && node2 == null) {
        return true;
    }
    if (node1 == null || node2 == null) {
        return false
    }
    const node1_arr = [node1]
    const node2_arr = [node2]
    while (node1_arr.length && node2_arr.length) {
        const one = node1_arr.pop()
        const two = node2_arr.pop()
        if (one.val != two.val) {
            return false
        }
        let left1 = one.left, right1 = one.right, left2 = two.left, right2 = two.right;
        if ((left1 == null && left2 != null) || (left1 != null && left2 == null)) {
            return false
        }
        if ((right1 == null && right2 != null) || (right1 != null && right2 == null)) {
            return false
        }
        if ((left1 == null && left2 == null) && (right1 == null && right2 == null)) {
            continue
        } else if (right1 == null && right2 == null) {
            node1_arr.push(left1)
            node2_arr.push(left2)
        } else if (left1 == null && left2 == null) {
            node1_arr.push(right1)
            node2_arr.push(right2)
        } else {
            node1_arr.push(left1, right1)
            node2_arr.push(left2, right2)
        }
    }
    return true;
}
// @lc code=end

